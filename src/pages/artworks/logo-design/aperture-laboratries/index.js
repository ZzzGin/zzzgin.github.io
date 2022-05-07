import React from "react"
import MainLogo from "./assets/svg-components/main_logo"
import DesignLogo from "./assets/svg-components/design_logo"
import OutlineLogo from "./assets/svg-components/outline_logo"
import RingLogo from "./assets/svg-components/ring_logo"

// markup
const ApertureLaboratries = () => {
  return (
    <>
      <MainLogo />
      <DesignLogo />
      <OutlineLogo />
      <RingLogo />
      <div className="timeline" style={{"height": "10000px"}}></div>
      
    </>
  )
}

export default ApertureLaboratries
