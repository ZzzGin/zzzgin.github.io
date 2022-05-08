import React, { useEffect, useState } from "react"
import "../svg-css/less_blurred_ring.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler } from "../../../../../../components/scalers/scale"
import { useSize } from "../../../../../../components/hooks/useSize"
import { document } from "browser-monads"
import BlurredRingSVG from '../images/blurred-ring.svg'

const BlurredRing = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [blurredRing_opa, setBlurredRing_opa] = useState(0);

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setBlurredRing_opa(scale([64, 66, 68, 70], [0, 1, 1, 0], percentage, linearScaler));
    }, [scrollInfo, pageHeight, size]);

    return (
        <>
        <img className="blurredRing" style={{
            width: "50%",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: blurredRing_opa }}
            src={ BlurredRingSVG } 
            alt="Blurred Ring Logo"/>
        </>
    )
}

export default BlurredRing;