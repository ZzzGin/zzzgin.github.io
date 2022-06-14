import * as React from "react"
import "@components/css/main.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Tag from "./Tag";


const ArticleListView = ({ edges }) => {
    
    return (
        <>
            <div className="article-list-view">
                {
                    edges.map((edge, i) => 
                        <div className="article-tile-container" key={i.toString()}>
                            <div className="article-tile-top-wrapper">
                                <div className="article-tile-category">
                                    { edge.node.frontmatter.path.split("/")[1].charAt(0).toUpperCase()
                                        +edge.node.frontmatter.path.split("/")[1].slice(1)}
                                </div>
                                <div className="article-tile-date">
                                    { edge.node.frontmatter.date }
                                </div>
                                
                            </div>
                            <a href={ edge.node.frontmatter.path }>
                            <div className="article-tile-title">
                                { edge.node.frontmatter.title }
                            </div>
                            </a>
                            
                            <div className="article-tile-image-description-wrapper">
                                {
                                    edge.node.frontmatter.featuredimage && 
                                        <a href={ edge.node.frontmatter.path }>
                                        <GatsbyImage 
                                            image={ edge.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData } 
                                            alt={ edge.node.frontmatter.featuredimageAlt }
                                        />
                                        </a>
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
                                            edge.node.frontmatter.tags.map((t) => 
                                                <Tag 
                                                    text={t.trim().toLowerCase()} 
                                                    href={"/tags/"+t.trim().toLowerCase().replaceAll(' ', '-')}
                                                />)
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