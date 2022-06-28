const createTagsTimelinePage = (
    template, 
    createPageAction,
    fetchTimelinesResult) => {
        createPageAction({
            path: `/tags/timeline`,
            component: template,
            context: {
                edges: fetchTimelinesResult.data.allFile.edges
            }
        })
}

module.exports = createTagsTimelinePage;