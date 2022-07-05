import * as React from "react"
import Navbar from "../components/blog-components/Navbar"
import ZzzLogoAnimation from "../components/artworks/logo-design/zzz-logo/svg-components/zzz_logo_animation"
import zzzTextLogo from "../images/zzz.svg"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";
import ArticleListView from "@components/blog-components/ArticleListView"
import TimelineDescription from "@components/artworks/timeline/TimelineDescription";
import "@components/css/main.css";
import Tag from "@components/blog-components/Tag"
import Footer from "@components/blog-components/Footer"

const IndexPage = (props) => {

    return (
        <>
            <Helmet title="zzz" />
            <Navbar />
            <div className="index-body">
                <div className="zzz-logo-animation-container">
                    <ZzzLogoAnimation />
                </div>
                <div className="title-container shift-up-fifty-pixels">
                    <div className="zzz-container">
                        <img src={ zzzTextLogo } alt="zzz"/>
                        cubic z
                    </div>
                    <div className="slogan-container">
                        <div className="slogan">Sorting Backwards</div>
                    </div>
                </div>
                <div className="self-introduction shift-up-fifty-pixels">
                    <div className="selfie">
                        <StaticImage
                            src="../images/selfie.jpeg"
                            alt="selfie"
                            imgStyle={{ 
                                borderRadius: '100%'
                            }}
                            placeholder="none"
                        />
                    </div>
                    <div className="jing">
                        qí<span style={{display: "inline-block", width: "min(6vw, 60px)"}}/>jìng
                    </div>
                    <div className="hello">
                        Hi, I'm 齐靖
                    </div>
                    <div className="occupation">
                        A <span style={{color: "var(--red)", fontWeight: "bold"}}>Software Developer</span> &#8226; <span style={{color: "var(--green)", fontWeight: "bold"}}>Engineer</span> &#8226; <span style={{color: "var(--blue)", fontWeight: "bold"}}>Designer</span>
                    </div>
                    <div className="living">
                        Born in Wuxi, now based in Seattle
                    </div>
                    <div className="call">
                        Call me Jing, pronounced like <span style={{fontStyle: "italic"}}>Gin</span>
                    </div>
                </div>
                
                <div className="feed-section-title">
                    <span className="feed-section-title-text" style={{color: "var(--red)"}}>●</span>
                    <span className="feed-section-title-text">Articles</span>
                    <span className="feed-section-tag-container">
                        <Tag text="blog" href="/tags/blog" className="feed-section-tag"/>
                        <Tag text="readings" href="/tags/readings" className="feed-section-tag"/>
                    </span>
                </div>
                <ArticleListView edges={ props.data.allMarkdownRemark.edges }/>

                <div className="feed-section-title">
                    <span className="feed-section-title-text" style={{color: "var(--green)"}}>●</span>
                    <span className="feed-section-title-text">Timelines</span>
                    <span className="feed-section-tag-container">
                        <Tag text="timeline" href="/tags/timeline" className="feed-section-tag"/>
                    </span>
                </div>
                {
                    props.data.allFile.edges.map(node => <TimelineDescription node={node.node}/>)
                }

                
            </div>
            <Footer/>
        </>
    )
}

export default IndexPage;


export const query = graphql`
query indexQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
    ) {
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
    allFile(
        filter: {sourceInstanceName: {eq: "timelines"}}
        sort: {fields: modifiedTime, order: DESC}
        limit: 3
    ) {
      edges {
        node {
          absolutePath
          name
          ext
          internal {
            content
          }
          modifiedTime
        }
      }
    }
}
`