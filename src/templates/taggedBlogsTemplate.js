import * as React from "react"
import Navbar from "@components/blog-components/Navbar"
import { Helmet } from "react-helmet"
import ArticleListView from "@components/blog-components/ArticleListView"
import { graphql } from "gatsby"
import "@components/css/tagged-blogs-termplate.css"


const TaggedBlogsTemplate = (props) => {

    return (
        <>
            <Helmet title={"tag: "+ props.pageContext.tag}/>
            <Navbar />
            <div className="tagged-blogs-template-body">
                <a href="/tags">
                    <div className="back-to-tags">
                        &lt; back to all tags
                    </div>
                </a>
                
                <div className="tagged-blogs-template-tag-name">
                    { "Tag: " + props.pageContext.tag }
                </div>
                <ArticleListView edges={ props.data.allMarkdownRemark.edges }/>
            </div>
         </>
    )
}

export default TaggedBlogsTemplate;

export const query = graphql`
    query FetchBlogsByTags($tag: String!) {
        allMarkdownRemark(
            filter: {frontmatter: {tags: {in: [$tag] }}}
            sort: {fields: frontmatter___date, order: DESC}
        )  {
        edges {
            node {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
                }
                description
                featuredimageAlt
                path
                tags
                title
            }
            }
        }
    }
}
`