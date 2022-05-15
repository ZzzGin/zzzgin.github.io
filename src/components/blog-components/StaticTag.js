import React from "react";
import "@components/css/tag.css";

const StaticTag = ({ text, href }) => {
    return (
        <a href={ href }>
            <div className="tag">
                { text }
            </div>
        </a>
        
    )
}

export default StaticTag;