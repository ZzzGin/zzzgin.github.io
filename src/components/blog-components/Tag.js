import React from "react";
import "@components/css/main.css";
import { tagColorMap } from "./TagsColor";

const Tag = ({ text, href, count, className }) => {

    return (
        <a href={ href }>
            <div className={className + ` tag ${text in tagColorMap ? "tag-"+tagColorMap[text]:""}`}
            >
                { text + (count?` (${count})`:"") }
            </div>
        </a>
    )
}

export default Tag;