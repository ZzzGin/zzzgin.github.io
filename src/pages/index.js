import * as React from "react"
import Navbar from "../components/blog-components/Navbar"
import ZzzLogoAnimation from "../components/artworks/logo-design/zzz-logo/svg-components/zzz_logo_animation"
import zzzTextLogo from "../images/zzz.svg"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useWindowScroll } from 'react-use';
import "@components/css/main.css"

const IndexPage = () => {

    const { x, y } = useWindowScroll();
    
    const [backward, setBackward] = React.useState("Backwards");

    const createRandomString = (l) => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < l; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    React.useEffect(() => {
        if (y <= 0) {
            setBackward("Backwards");
            return;
        }
        const l = Math.floor(y/33);
        if (l === 0) {
            setBackward(createRandomString(9));
            return;
        }
        setBackward(createRandomString(9-l)+"Backwards".slice(-l));
    }, [x, y])

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
                        <div className="slogan">Sorting {backward}</div>
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
                <div style={{height: "1000px"}}></div>
            </div>
        </>
    )
}

export default IndexPage
