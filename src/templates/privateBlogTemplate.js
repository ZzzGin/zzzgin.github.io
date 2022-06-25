import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import EncryptedMarkdown from "@components/blog-components/EncryptedMarkdown";
import Navbar from '../components/blog-components/Navbar'
import Description from "../components/blog-components/Description"
import "@components/css/main.css"

export default function PrivateBlogTemplate(props) {

    

    const { data, pageContext } = props;
    const { markdownRemark: post } = data;
    
    const encrypted = pageContext.content;
    const date = post.frontmatter.date;
    const title = post.frontmatter.title;
    const description = post.frontmatter.description;
    const tags = post.frontmatter.tags;

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

export const pageQuery = graphql`
  query PrivateBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        description
      }
    }
  }
`;