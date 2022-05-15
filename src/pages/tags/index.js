import * as React from "react"
import Navbar from "@components/blog-components/Navbar"
import { Helmet } from "react-helmet"
import ArticleListView from "../../components/blog-components/ArticleListView"
import { graphql } from "gatsby"
import "@components/css/tags-manager.css"


const TagsManager = (props) => {

    return (
        <>
            <Helmet title="Tags Manager" />
            <Navbar />
            <div className="tags-manager-body">
                <ArticleListView edges={ props.data.allMarkdownRemark.edges }/>
            </div>
        </>
    )
}

export default TagsManager;

export const query = graphql`
    query MyQuery {
        allMarkdownRemark {
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