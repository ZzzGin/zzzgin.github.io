import React, { useEffect, useState } from "react"
import "../svg-css/ring_logo.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler } from "../../../../../../components/scalers/scale"
import { useSize } from "../../../../../../components/hooks/useSize"
import { document } from "browser-monads"

const RingLogo = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [ringLogo_opa, setRingLogo_opa] = useState(0);

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setRingLogo_opa(scale([12, 16], [0, 1], percentage, linearScaler))
    }, [scrollInfo, pageHeight, size]);

    return (
        <>
        <div className="ringLogo" style={{
            width: "50%",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: ringLogo_opa,
            
        }}>
           <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.42 246.42">
                <g>
                    <path class="ring-c" d="M58.16,91.39c-.62,.15-1.14-.49-.86-1.06,4.88-9.78,11.92-18.41,20.64-25.2,4.44-3.45,9.24-6.38,14.29-8.72,.23-.11,.5-.09,.71,.04l29.46,17.81c.57,.35,.44,1.21-.21,1.37l-29.18,7.18-34.85,8.58Z"/>
                    <path class="ring-c" d="M54.71,146.69c-.33,.55-1.16,.46-1.36-.14-3.47-10.37-4.58-21.46-3.22-32.41,.69-5.57,2.01-11.02,3.92-16.24,.09-.24,.29-.42,.53-.48l33.43-8.24c.65-.16,1.17,.55,.82,1.12l-14.32,23.67-1.22,2.01-18.58,30.72Z"/>
                    <path class="ring-c" d="M91.4,188.27c.15,.62-.49,1.14-1.06,.86-9.81-4.89-18.44-11.95-25.23-20.68-3.44-4.41-6.36-9.19-8.7-14.25-.11-.23-.09-.5,.04-.71l17.82-29.46c.35-.57,1.21-.44,1.37,.21l15.77,64.03Z"/>
                    <path class="ring-c" d="M114.13,196.29c-5.55-.69-11-2-16.22-3.91-.24-.09-.42-.29-.48-.53l-8.23-33.44c-.16-.65,.55-1.17,1.12-.82l23.69,14.34,1.99,1.21,30.69,18.57c.55,.33,.46,1.16-.14,1.36-10.36,3.46-21.43,4.57-32.39,3.22h-.03Z"/>
                    <path class="ring-c" d="M124.07,172.18c-.57-.35-.44-1.21,.21-1.37l26.87-6.61h.01l37.09-9.13c.62-.15,1.14,.49,.86,1.06-4.88,9.77-11.93,18.4-20.65,25.19-4.4,3.43-9.19,6.35-14.26,8.71-.23,.11-.5,.09-.71-.04l-29.42-17.81Z"/>
                    <path class="ring-c" d="M155.09,58.19c-.15-.62,.49-1.14,1.06-.86,9.76,4.88,18.37,11.92,25.14,20.61,3.44,4.41,6.37,9.2,8.72,14.25,.11,.23,.09,.5-.04,.71l-17.79,29.44c-.35,.57-1.21,.44-1.37-.21l-15.72-63.95Z"/>
                    <path class="ring-c" d="M171.68,132.84l1.45-2.39,18.57-30.74c.33-.55,1.16-.46,1.36,.14,3.47,10.38,4.59,21.47,3.23,32.44-.69,5.58-2.01,11.04-3.92,16.27-.09,.24-.29,.42-.53,.48l-33.41,8.22c-.65,.16-1.17-.55-.82-1.12l14.07-23.29Z"/>
                    <path class="ring-c" d="M132.92,74.77l-2.45-1.49-30.73-18.58c-.55-.33-.46-1.16,.14-1.36,10.36-3.46,21.44-4.58,32.4-3.22,5.58,.69,11.05,2.01,16.29,3.93,.24,.09,.42,.29,.48,.53l8.21,33.4c.16,.65-.55,1.17-1.12,.82l-23.23-14.04Z"/>
                </g>
                <circle class="ring-b" cx="123.21" cy="123.21" r="123.2"/>
            </svg> 
        </div>
        </>
    )
}

export default RingLogo;