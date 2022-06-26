import * as React from "react"
import "@components/css/main.css"
import Navbar from "@components/blog-components/Navbar"
import TimelineStory from "@components/artworks/timeline/TimelineStory";
import Description from "../components/blog-components/Description"
import { Helmet } from "react-helmet"

const StorytellerTemplate = (props) => {

    const content = JSON.parse(props.pageContext.content);
    const sorterEvents = content.events.sort((a, b) => (new Date(b.start)) - (new Date(a.start)))

    return (
        <>
            <Helmet title={`zzz - ${content.title}`}/>
            <Navbar />
            <div className="timeline-story-container" style={{zIndex: 10}}>
                <div className="timeline-story-title">{content.title}</div>
                <Description description={content.description} tags={["timeline"]}/>
                <TimelineStory
                    groups={ content.groups }
                    events={ sorterEvents }
                />
            </div>
        </>
    );
}

export default StorytellerTemplate;