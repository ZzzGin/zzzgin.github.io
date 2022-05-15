import * as React from "react"
import "@components/css/article-list-view.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Tag from "./Tag";


const ArticleListView = ({ edges }) => {
    
    return (
        <>
            <div className="article-list-view">
                {
                    edges.map((edge, i) => 
                        <div className="article-tile-container" key={i.toString()}>
                            <a href={ edge.node.frontmatter.path }>
                            <div className="article-tile-title">
                                { edge.node.frontmatter.title }
                            </div>
                            </a>
                            <div className="article-tile-date">
                                { edge.node.frontmatter.date }
                            </div>
                            <div className="article-tile-image-description-wrapper">
                                {
                                    edge.node.frontmatter.featuredimage && 
                                        <GatsbyImage 
                                            image={ edge.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData } 
                                            alt={ edge.node.frontmatter.featuredimageAlt }
                                        />
                                }
                                <div className="article-description-wrapper">
                                    <div className="article-description-text">
                                        {
                                            edge.node.frontmatter.description && 
                                                <p>{ edge.node.frontmatter.description }</p>
                                        }
                                    </div>
                                    <div className="article-description-tags">
                                        {
                                            edge.node.frontmatter.tags && 
                                            edge.node.frontmatter.tags.map((t) => <Tag content={t} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }                
            </div>
        </>
    )
}

export default ArticleListView;