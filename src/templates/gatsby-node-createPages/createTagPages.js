const createTagPages = (
    taggedBlogsTemplate, 
    createPageAction,
    getTagsQueryResult) => {
        const tagEdges = getTagsQueryResult.data.allMarkdownRemark.edges;

        let tags = new Set();
        tagEdges.forEach(edge => {
            edge.node.frontmatter.tags.forEach(tag => {
                tags.add(tag)
            });
        });

        tags.forEach(tag => {
            createPageAction({
                path: `/tags/${tag.trim().replaceAll(" ", "-")}`,
                component: taggedBlogsTemplate,
                context: {
                    tag: tag
                }
            })
        });


}

module.exports = createTagPages;