import React from "react"
import MainLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/main_logo"
import DesignLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/design_logo"
import OutlineLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/outline_logo"
import RingLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/ring_logo"
import DesignWithALogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/design_with_a"
import CharDesign from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/char_design"
import StillHorizontalLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/still_horizontal_logo"
import StillVerticalLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/still_vertical_logo"
import StillCharLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/still_character_logo"
import LessBlurredRing from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/less_blurred_ring"
import SmallRingLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/small_ring"
import RotatingRingLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/rotating_ring"
import ColorPalette from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/color_palette"
import WheatleyLogo from "../../../../components/artworks/logo-design/aperture-laboratries/assets/svg-components/wheatley_logo"

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
      <ColorPalette />
      <WheatleyLogo />
      <div className="timeline" style={{"height": "10000px"}}></div>
      
    </>
  )
}

export default ApertureLaboratries
