import React from "react"
import MainLogo from "./assets/svg-components/main_logo"
import DesignLogo from "./assets/svg-components/design_logo"
import OutlineLogo from "./assets/svg-components/outline_logo"
import RingLogo from "./assets/svg-components/ring_logo"
import DesignWithALogo from "./assets/svg-components/design_with_a"
import CharDesign from "./assets/svg-components/char_design"
import StillHorizontalLogo from "./assets/svg-components/still_horizontal_logo"
import StillVerticalLogo from "./assets/svg-components/still_vertical_logo"
import StillCharLogo from "./assets/svg-components/still_character_logo"
import LessBlurredRing from "./assets/svg-components/less_blurred_ring"
import SmallRingLogo from "./assets/svg-components/small_ring"
import RotatingRingLogo from "./assets/svg-components/rotating_ring"

const ApertureLaboratries = () => {

  return (
    <>
      <MainLogo />
      <DesignLogo />
      <OutlineLogo />
      <RingLogo />
      <DesignWithALogo />
      <CharDesign />
      <StillHorizontalLogo />
      <StillVerticalLogo />
      <StillCharLogo />
      <LessBlurredRing />
      <SmallRingLogo />
      <RotatingRingLogo />
      <div className="timeline" style={{"height": "10000px"}}></div>
      
    </>
  )
}

export default ApertureLaboratries
