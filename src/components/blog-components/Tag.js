import React from "react";
import "@components/css/tag.css";

const Tag = ({ content }) => {
    return (
        <a href={"/tags/"+content.trim().toLowerCase().replaceAll(' ', '-')}>
            <div className="tag">
                { content.trim().toLowerCase() }
            </div>
        </a>
        
    )
}


export default Tag;