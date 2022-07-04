import React from "react"
import { Helmet } from "react-helmet"
import Navbar from '../components/blog-components/Navbar'
import Description from "../components/blog-components/Description"
import Footer from "@components/blog-components/Footer"
import "@components/css/main.css"
require(`katex/dist/katex.min.css`)
require("prismjs/themes/prism-okaidia.css")



export default function Template(props) {

  const { pageContext } = props;

  return (
    <>
    <Navbar />
    <div className="blog-post-container markdown-body">
      <Helmet title={ `zzz - ${pageContext.title}`} />
      <article className="blog-post">

        <div className="title">{pageContext.title}</div>

        <div className="date">{pageContext.date}</div>

        <Description description={pageContext.description} tags={pageContext.tags || []}/>
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: pageContext.html }}
        />

      </article>
    </div>
    <Footer />
    </>
  )
}
