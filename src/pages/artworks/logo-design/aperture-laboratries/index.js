import React, { useEffect } from "react"
import lax from "lax.js"
import MainLogo from "./assets/svg-components/main_logo"

// markup
const ApertureLaboratries = () => {

  useEffect(() => {
    window.scroll(0, 0);
    
    lax.init();

    lax.addDriver(
      "scrollY",
      () => {
        return document.documentElement.scrollTop;
      }
    );

    lax.addElements(".mainlogo", {
      scrollY: {
        translateY: [[-400, 0, "screenHeight"], [300, 0, "screenHeight"]],
        scale: [[0, "screenHeight/2", "screenHeight"], [1, 1, 10]],
      }
    });
    lax.addElements(".mainlogo-text", {
      scrollY: {
        opacity: [[0, "screenHeight/2"], [1, 0]]
      }
    });
  });

  return (
    <>
      <MainLogo />
      <div style={{"height": "10000px"}}></div>
    </>
  )
}

export default ApertureLaboratries
