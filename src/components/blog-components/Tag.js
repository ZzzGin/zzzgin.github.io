import React from "react";
import "@components/css/tag.css";

const Tag = ({ text }) => {
    return (
        <div className="tag">
            { text }
        </div>
    )
}

export default Tag;