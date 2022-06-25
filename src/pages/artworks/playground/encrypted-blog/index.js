import * as React from "react"
import EncryptedMarkdown from "@components/blog-components/EncryptedMarkdown";
import Navbar from '@components/blog-components/Navbar';
import Description from "@components/blog-components/Description"
import { Helmet } from "react-helmet"
import "@components/css/main.css"

const EncryptedBlogDemo = () => {

    const encrypted = "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";
    const date = "June 20, 2022";
    const title = "A Blog Protected By Password";
    const description = "Password is \"secret\"";
    const tags = ["private"];

    return (
      <>
        <Navbar />
        <Helmet title={ `zzz - Private: ${title}`} />
        
        <div className="blog-post-container markdown-body">
        <article className="blog-post">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
          <Description description={description} tags={tags || []}/>
          <EncryptedMarkdown encrypted={encrypted}/>
        </article>
        </div>
        
      </>
    )
  }
  
  export default EncryptedBlogDemo;
  