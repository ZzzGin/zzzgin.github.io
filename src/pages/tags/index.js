import * as React from "react"
import Navbar from "@components/blog-components/Navbar"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Tag from "@components/blog-components/Tag"
import "@components/css/main.css"


const TagsManager = (props) => {

    const edges = props.data.allMarkdownRemark.edges;

    let tags = {
        "timeline": props.data.allFile.edges.length
    };
    edges.forEach(edge => {
        edge.node.frontmatter.tags.forEach(tag => {
            tag = tag.trim().toLowerCase();
            if (tag in tags) {
                tags[tag] ++;
            }
            else {
                tags[tag] = 1;
            }
        });
    });
    let groupedTags = {};
    for (let tag in tags) {
        if (tag[0] in groupedTags) {
            groupedTags[tag[0]].push(tag);
        }
        else {
            groupedTags[tag[0]] = [tag];
        }
    }
    for (let leadingChar in groupedTags) {
        groupedTags[leadingChar].sort();
    }
    let sortedTags = [];
    Object.keys(groupedTags).sort().forEach(initiate => {
        sortedTags.push({
            ch: initiate,
            tags: groupedTags[initiate]
        });
    })
        
    return (
        <>
            <Helmet title="zzz - Tags" />
            <Navbar />
            <div className="tags-manager-body">
                <div className="tags-manager-title">
                    Tags
                </div>
                {
                    sortedTags.map((el, i) => 
                        <div className="tags-initiate-wrapper">
                            <div className="tags-initiate">
                                {el.ch}
                            </div>
                            <div className="tags-wrapper">
                            {
                                sortedTags[i].tags.map(t => 
                                    <Tag text={t} href={"/tags/"+t.replaceAll(" ", "-")} count={tags[t]} />
                                )
                            }
                            </div>
                        </div>
                    )
                }
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
                    tags
                }
            }
        }
    }
    allFile(
        filter: {sourceInstanceName: {eq: "timelines"}}) {
      edges {
        node {
          name
        }
      }
    }
}
`