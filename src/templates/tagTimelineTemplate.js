import * as React from "react"
import Navbar from "@components/blog-components/Navbar";
import TimelineDescription from "@components/artworks/timeline/TimelineDescription";
import { Helmet } from "react-helmet"
import "@components/css/main.css"

const TagsTimeline = (props) => {

    const nodes = props.pageContext.edges;

    return (
        <>
            <Helmet title="zzz - Tags: timeline" />
            <Navbar />
            <div className="tagged-blogs-template-body">
                <a href="/tags">
                    <div className="back-to-tags">
                        &lt; back to all tags
                    </div>
                </a>
                <div className="tagged-blogs-template-tag-name">
                    { "Tag - timeline" }
                </div>
                {
                    nodes.map(node => <TimelineDescription node={node.node}/>)
                }
            </div>
        </>
    )
}

export default TagsTimeline;
