const createTimelinePages = (
    timelineTemplate, 
    createPageAction,
    fetchTimelinesResult) => {

        const storytellerJsonFiles = fetchTimelinesResult.data.allFile.edges;

        storytellerJsonFiles.forEach(edge => {
            createPageAction({
                path: `/timeline/${edge.node.name}`,
                component: timelineTemplate,
                context: {
                    content: edge.node.internal.content
                }
            })
        })
}

module.exports = createTimelinePages;