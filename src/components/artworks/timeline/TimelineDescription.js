import * as React from "react";
import { Timeline, DataSet } from "vis-timeline/standalone";
import "@components/css/main.css"

const TimelineDescription = (props) => {

    const timeline = JSON.parse(props.node.internal.content);

    const timelineRef = React.useRef(null);

    React.useEffect(() => {

        const tl_groups = timeline.groups.map(el => { return { id: el.id, content: el.content } });

        const tl_events = timeline.events.map((el, i) => {
            return {
                id: i,
                content: el.title,
                start: el.start,
                end: el.end ? el.end : null,
                group: el.group,
                className: "item-" + el.color
            }
        });

        var container = document.getElementById(`visualization-${props.node.name}`);

        var items = new DataSet(tl_events);
        var groups = new DataSet(tl_groups);


        const start = new Date();
        const end = new Date();

        var options = {
            maxHeight: "400px",
            start: start.setDate(start.getDate() - 20),
            end: end.setDate(end.getDate()),
            zoomable: false,
            moveable: false
        };

        timelineRef.current = new Timeline(container, items, groups, options);

        return () => {
            timelineRef.current.destroy();
        }
    });

    return (
        <>               
        <a href={`/timeline/${props.node.name}`}>
            <div className="article-tile-container">
                <div className="article-tile-top-wrapper">
                    <div className="article-tile-category">
                        Timeline
                    </div>
                    <div className="article-tile-date">
                        Updated: { props.node.modifiedTime.split("T")[0] }
                    </div>
                </div>

                <div className="article-tile-title">
                    {timeline.title}
                </div>

                <div id={`visualization-${props.node.name}`}></div>
            </div>
        </a>
        </>
    )
}

export default TimelineDescription;