import React from "react"
import { Helmet } from "react-helmet"
import EncryptedMarkdown from "@components/blog-components/EncryptedMarkdown";
import Navbar from '../components/blog-components/Navbar'
import Description from "../components/blog-components/Description"
import "@components/css/main.css"

export default function PrivateBlogTemplate(props) {

    const { pageContext } = props;
    
    const encrypted = pageContext.content;
    const date = pageContext.date;
    const title = pageContext.title;
    const description = pageContext.description;
    const tags = pageContext.tags;

    return (
        <>
            <Navbar />
            <Helmet title={`zzz - Private: ${title}`} />

            <div className="blog-post-container markdown-body">
                <article className="blog-post">
                    <div className="title">{title}</div>
                    <div className="date">{date}</div>
                    <Description description={description} tags={tags || []} />
                    <EncryptedMarkdown encrypted={encrypted} />
                </article>
            </div>
        </>
    )
}
