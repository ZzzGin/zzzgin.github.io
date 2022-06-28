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
                    html
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        tags
                        title
                        description
                        password
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
    const createMarkdownPosts = require("./src/templates/gatsby-node-createPages/createMarkDownPages");
    createMarkdownPosts(blogPostTemplate, encryptedBlogTemplate, createPage, result);

    // create tag pages
    const taggedBlogsTemplate = path.resolve(`src/templates/taggedBlogsTemplate.js`);
    const createTagPages = require("./src/templates/gatsby-node-createPages/createTagPages");
    createTagPages(taggedBlogsTemplate, createPage, result);


    // create timelines
    const timelineTemplate = path.resolve(`src/templates/timelineTemplate.js`);
    const fetchTimelinesResult = await graphql(`
    query FetchStorytellers {
        allFile(
            filter: {sourceInstanceName: {eq: "timelines"}}
            sort: {fields: modifiedTime, order: DESC}) {
          edges {
            node {
              absolutePath
              name
              ext
              internal {
                content
              }
              modifiedTime
            }
          }
        }
      }
      
    `);
    if (fetchTimelinesResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const createTimelinePages = require("./src/templates/gatsby-node-createPages/createTimelinePages");
    createTimelinePages(timelineTemplate, createPage, fetchTimelinesResult);

    // Create "tags/timeline" page
    const tagsTimelineTemplate = path.resolve("src/templates/tagTimelineTemplate.js");
    const createTagsTimelinePage = require("./src/templates/gatsby-node-createPages/createTagsTimelinePage");
    createTagsTimelinePage(tagsTimelineTemplate, createPage, fetchTimelinesResult);

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