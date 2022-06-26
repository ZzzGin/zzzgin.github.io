const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
            }
        }
    });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    var CryptoJS = require("crypto-js");

    // Create markdown posts
    const blogPostTemplate = path.resolve(`src/templates/mdTemplate.js`);
    const encryptedBlogTemplate = path.resolve(`src/templates/privateBlogTemplate.js`);
    const result = await graphql(`
        {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        tags
                        password
                    }
                    internal {
                        content
                    }
                }
            }
        }
        }
    `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
        if (node.frontmatter.tags && node.frontmatter.tags.includes("private")){
            createPage({
                path: node.frontmatter.path,
                component: encryptedBlogTemplate,
                context: {
                    content: CryptoJS.AES.encrypt(node.internal.content, node.frontmatter.password).toString()
                }
            })
        }
        else {
            const prev = index === 0 ? null : posts[index - 1].node;
            const next = index === posts.length - 1 ? null : posts[index + 1].node;
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    prev,
                    next
                }
            })
        }
    });

    // create tag specific pages
    const taggedBlogsTemplate = path.resolve(`src/templates/taggedBlogsTemplate.js`);
    const getTagsQueryResult = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `);
    if (getTagsQueryResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const tagEdges = result.data.allMarkdownRemark.edges;

    let tags = new Set();
    tagEdges.forEach(edge => {
        edge.node.frontmatter.tags.forEach(tag => {
            tags.add(tag)
        });
    });

    tags.forEach(tag => {
        createPage({
            path: `/tags/${tag.trim().replaceAll(" ", "-")}`,
            component: taggedBlogsTemplate,
            context: {
                tag: tag
            }
        })
    });


    // create storytellers
    const storytellerTemplate = path.resolve(`src/templates/storytellerTemplate.js`);
    const fetchStorytellersResult = await graphql(`
    query FetchStorytellers {
        allFile(filter: {sourceInstanceName: {eq: "timelines"}}) {
          edges {
            node {
              absolutePath
              name
              ext
              internal {
                content
              }
            }
          }
        }
      }
      
    `);
    if (fetchStorytellersResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const storytellerJsonFiles = fetchStorytellersResult.data.allFile.edges;

    storytellerJsonFiles.forEach(edge => {
        createPage({
            path: `/timeline/${edge.node.name}`,
            component: storytellerTemplate,
            context: {
                content: edge.node.internal.content
            }
        })
    })
}

exports.onCreateNode = async ({ node, loadNodeContent, actions }) => {
    if (node.ext !== ".json") return;

    // Ensure Gatsby loads the item into memory so that its
    // content becomes available in the GraphQL File node
    try {
        const nodeContent = await loadNodeContent(node);
        actions.createNodeField({ node, name: `contentLoaded`, value: nodeContent });
    } catch (error) {
        console.error(error);
    }
};