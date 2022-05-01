import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Logoanimation from "../../images/Logo-1-animation.svg"

// markup
const ApertureLaboratries = () => {
  return (

    <>
      <div>Hello World!</div>
      <StaticImage src="../../images/Logo-1.svg" alt="log-1"/>
      <img src={Logoanimation} alt="logo-1-animation" />
    </>
  )
}

export default ApertureLaboratries
