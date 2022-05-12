import * as React from "react"
import Navbar from "../components/blog-components/Navbar"
import ZzzLogoAnimation from "../components/artworks/logo-design/zzz-logo/svg-components/zzz_logo_animation"
import zzzTextLogo from "../images/zzz.svg"
import "@components/css/index.css"


const IndexPage = () => {
    return (
        <>
            <Navbar />
            <div className="index-body">
                <ZzzLogoAnimation />
                <div className="title-container">
                    <div className="zzz-container">
                        <img src={ zzzTextLogo } alt="zzz"/>
                        cubic z
                    </div>
                    <div className="slogan-container">
                        <div className="slogan">sort from backwards</div>
                    </div>
                </div>
                <div style={{height: "1000px"}}></div>
            </div>
        </>
    )
}

export default IndexPage
