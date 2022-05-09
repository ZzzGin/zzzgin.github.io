import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { BiChevronLeft } from '@react-icons/all-files/bi/BiChevronLeft'
import { BiChevronRight } from '@react-icons/all-files/bi/BiChevronright'
import Link from "../components/blog-components/Link"
import '../components/blog-components/css/blog-post.css'
import '../components/blog-components/css/github-markdown.css'
import "@fontsource/noto-serif"
import "@fontsource/noto-sans"
require(`katex/dist/katex.min.css`)
require("prismjs/themes/prism-solarizedlight.css")



export default function Template(props) {

  const { data, pageContext } = props;
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <>
    <div className="blog-post-container markdown-body">
      <Helmet title={`${post.frontmatter.title}`} />
      <article className="blog-post">

        <div className="title">{post.frontmatter.title}</div>

        <div className="date">{post.frontmatter.date}</div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* <Tags list={post.frontmatter.tags || []} /> */}

        <div className="navigation">
            {prev &&
              <Link className="link prev" to={prev.frontmatter.path}>
                <BiChevronLeft /> {prev.frontmatter.title}
              </Link>}
            {next &&
              <Link className="link next" to={next.frontmatter.path}>
                {next.frontmatter.title} <BiChevronRight />
              </Link>}
          </div>

      </article>
    </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;