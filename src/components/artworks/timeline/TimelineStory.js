import * as React from "react"
import "@components/css/main.css"
import { Timeline, DataSet } from "vis-timeline/standalone";
import { GrPowerReset } from "@react-icons/all-files/gr/GrPowerReset";
import { GrZoomIn } from "@react-icons/all-files/gr/GrZoomIn";
import { GrZoomOut } from "@react-icons/all-files/gr/GrZoomOut";

const TimelineStory = (props) => {

    const group_map = new Map(
        props.groups.map(el => {
            return [el.id, el.tag];
        })
    );

    const timeline = React.useRef(null);

    React.useEffect(() => {

        const tl_groups = props.groups.map(el => { return { id: el.id, content: el.content } });

        const tl_events = props.events.map((el, i) => {
            return {
                id: i,
                content: el.title,
                start: el.start,
                end: el.end ? el.end : null,
                group: el.group,
                className: "item-"+el.color
            }
        });

        var container = document.getElementById('visualization');

        var items = new DataSet(tl_events);
        var groups = new DataSet(tl_groups);


        const start = new Date();
        const end = new Date();

        var options = {
            horizontalScroll: true,
            zoomKey: "ctrlKey",
            zoomMax: 1000*60*60*24*365*5,
            zoomMin: 1000*60*60*24*7,
            maxHeight: "40vh",
            start: start.setDate(start.getDate()-45),
            end: end.setDate(end.getDate()+15)
        };

        timeline.current = new Timeline(container, items, groups, options);
        
        timeline.current.on('select', (prop) => {
            if (prop.items && prop.items.length===1) {
                var top = document.getElementById(`s-${prop.items}`).offsetTop-document.getElementById("timeline-container").offsetHeight;
                window.scrollTo(0, top);
            }
        });

        return () => {
            timeline.current.destroy();
        }
    }, [props]);

    const timeline_reset = () => {
        const start = new Date();
        const end = new Date();
        timeline.current.setWindow(start.setDate(start.getDate()-60), end.setDate(end.getDate()+1));
    }

    const timeline_zoomin = () => {
        timeline.current.zoomIn(0.7);
    }

    const timeline_zoomout = () => {
        timeline.current.zoomOut(0.7);
    }

    return (
        <>
        <div id="timeline-container" style={{position: "sticky", top: "0px", backgroundColor: "rgb(243, 243, 243)", zIndex: "20"}}>
            <div id="visualization"></div>
            <div className="timeline-tools-container">
                <button className="timeline-reset-button" onClick={ timeline_reset } aria-label="reset"><GrPowerReset/></button>
                <button className="timeline-zoomin-button" onClick={ timeline_zoomin } aria-label="zoom in"><GrZoomIn/></button>
                <button className="timeline-zoomout-button" onClick={ timeline_zoomout } aria-label="zoom out"><GrZoomOut/></button>
            </div>
        </div>
        
        {
            props.events.map((el, i) => 
                <div id={"s-"+i} className="timeline-story-element" key={i}>
                    <div style={{borderTop: `2px solid var(--${el.color})`, width: "3rem"}}/>
                    <div className="timeline-story-element-title">
                        <span style={{color: `var(--${el.color})`}}>●</span> <span>{el.title}</span>
                    </div>
                    <div className="timeline-story-element-group">
                        <span>{group_map.get(el.group)}</span>
                    </div>
                    <div className="timeline-story-element-timestamp">
                        {el.start} {el.end ? (" · " + el.end) : null}
                    </div>
                    <div className="timeline-story-element-description">
                        {el.desription}
                    </div>
                    <div className="timeline-story-element-link-list">
                        Links:
                        <div style={{width: "1rem"}} />
                        {
                            el.links.map((lk, i) => <div className="timeline-story-element-link" key={i}><a href={lk} target="_blank" rel="noreferrer">{(new URL(lk)).hostname}</a></div>)
                        }
                    </div>
                </div>
            )
        } 
        </>
    );
}

export default TimelineStory;