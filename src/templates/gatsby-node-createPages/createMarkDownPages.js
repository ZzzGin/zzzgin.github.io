const createMarkdownPosts = (
    blogTemplate, 
    encryptedBlogTemplate, 
    createPageAction,
    graphqlResult) => {

        var CryptoJS = require("crypto-js");

        const posts = graphqlResult.data.allMarkdownRemark.edges;
        posts.forEach(({ node }) => {
            if (node.frontmatter.tags && node.frontmatter.tags.includes("private")){
                createPageAction({
                    path: node.frontmatter.path,
                    component: encryptedBlogTemplate,
                    context: {
                        content: CryptoJS.AES.encrypt(node.html, node.frontmatter.password).toString(),
                        date: node.frontmatter.date,
                        tags: node.frontmatter.tags,
                        title: node.frontmatter.title,
                        description: node.frontmatter.description
                    }
                })
            }
            else {
                createPageAction({
                    path: node.frontmatter.path,
                    component: blogTemplate,
                    context: {
                        html: node.html,
                        date: node.frontmatter.date,
                        tags: node.frontmatter.tags,
                        title: node.frontmatter.title,
                        description: node.frontmatter.description
                    }
                })
            }
        });
}

module.exports = createMarkdownPosts;