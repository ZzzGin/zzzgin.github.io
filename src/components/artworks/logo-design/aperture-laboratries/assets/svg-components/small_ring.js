import React, { useEffect, useState } from "react"
import "../svg-css/small_ring.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler } from "../../../../../scalers/scale"
import { useSize } from "../../../../../hooks/useSize"
import { document } from "browser-monads"

const SmallRingLogo = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [smallRingLogo_opa, setSmallRingLogo_opa] = useState(0);

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setSmallRingLogo_opa(scale([72, 74, 76, 78], [0, 1, 1, 0], percentage, linearScaler));
    }, [scrollInfo, pageHeight, size]);

    return (
        <>
        <div className="smallRingLogo" style={{
            width: "20%",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: smallRingLogo_opa   
        }}>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.42 246.42">
                <g>
                    <path class="small-ring-c" d="M104.66,112.65c1.37-2.41,3.22-4.55,5.43-6.28,1.21-.94,2.52-1.75,3.89-2.41l7.51,4.54-7.52,1.85-9.32,2.29Z"/>
                    <path class="small-ring-c" d="M102.63,128.86c-.74-2.68-.94-5.5-.6-8.28,.19-1.52,.54-3.01,1.04-4.45l8.53-2.1-3.72,6.15-.28,.47-4.97,8.21Z"/>
                    <path class="small-ring-c" d="M112.66,141.77c-2.42-1.38-4.56-3.23-6.29-5.45-.94-1.2-1.75-2.51-2.4-3.88l4.55-7.52,4.15,16.84Z"/>
                    <path class="small-ring-c" d="M120.58,144.39c-1.52-.19-3.01-.54-4.44-1.04l-2.1-8.53,14.82,8.97c-2.68,.73-5.49,.94-8.27,.6h0Z"/>
                    <path class="small-ring-c" d="M124.94,137.91l6.94-1.71h0l9.88-2.43c-1.37,2.41-3.22,4.55-5.44,6.28-1.2,.94-2.51,1.74-3.88,2.4l-7.5-4.54Z"/>
                    <path class="small-ring-c" d="M133.78,104.66c2.41,1.37,4.54,3.21,6.26,5.43,.94,1.21,1.75,2.51,2.41,3.88l-4.54,7.51-4.13-16.81Z"/>
                    <path class="small-ring-c" d="M138.39,126.49l.44-.72,4.97-8.22c.74,2.68,.94,5.5,.6,8.29-.19,1.52-.54,3.02-1.04,4.45l-8.52,2.1,3.57-5.9Z"/>
                    <path class="small-ring-c" d="M126.51,108.04l-.73-.45-8.22-4.97c2.68-.73,5.49-.94,8.28-.59,1.53,.19,3.02,.54,4.46,1.05l2.09,8.52-5.89-3.56Z"/>
                </g>
                <circle class="small-ring-b" cx="123.21" cy="123.21" r="123.2"/>
            </svg>
        </div>
        </>
    )
}

export default SmallRingLogo;