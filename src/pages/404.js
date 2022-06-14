import * as React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/blog-components/Navbar"
import ZzzLogoAnimation404 from "../components/artworks/logo-design/zzz-logo/svg-components/zzz_logo_animation_404"

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="zzz - 404" />
      <Navbar />
      <div className="index-body">
        <div className="zzz-logo-animation-container">
          <ZzzLogoAnimation404 />
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
