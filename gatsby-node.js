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

    // Create markdown posts
    const blogPostTemplate = path.resolve(`src/templates/mdTemplate.js`)
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

}