import React, { useEffect, useState } from "react"
import "../svg-css/outline_logo.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler, sinScaler } from "../../../../../../components/scalers/scale"
import { useSize } from "../../../../../../components/hooks/useSize"
import { document } from "browser-monads"

const OutlineLogo = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [outlineLogo_opa, setOutlineLogo_opa] = useState(0);
    const [outlineLogo_rotate, setOutlineLogo_rotate] = useState('0deg');

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setOutlineLogo_opa(scale([6, 8, 12, 16], [0, 1, 1, 0], percentage, linearScaler))
        setOutlineLogo_rotate(scale([8, 12], [0, 7.08], percentage, sinScaler)+'deg')
    }, [scrollInfo, pageHeight, size]);

    return (
        <>
        <div className="outlineLogo" style={{
            width: "50%",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(" + outlineLogo_rotate + ")",
            opacity: outlineLogo_opa,
            
        }}>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.39 246.39">
                <g>
                    <path class="outline-c" d="M53.22,100.21c3.57-10.9,9.7-20.88,17.89-29.08,4.08-4.07,8.6-7.64,13.45-10.63l33.46,14.95-29.77,11.37-35.03,13.39Z"/>
                    <path class="outline-c" d="M57.46,156.41c-5.18-10.25-7.9-21.63-7.9-33.21,0-5.75,.66-11.46,1.98-16.99l34.24-13.09-12.04,26.91-.97,2.15-15.31,34.24Z"/>
                    <path class="outline-c" d="M100.23,193.18c-10.93-3.58-20.92-9.72-29.11-17.93-4.05-4.04-7.62-8.55-10.6-13.41l14.96-33.46,24.76,64.79Z"/>
                    <path class="outline-c" d="M123.2,196.84c-5.73,0-11.44-.66-16.97-1.97l-13.08-34.24,26.94,12.05,2.13,.96,34.21,15.3c-10.23,5.17-21.6,7.89-33.19,7.9h-.03Z"/>
                    <path class="outline-c" d="M128.43,170.94l27.54-10.52h0l37.19-14.21c-3.58,10.89-9.71,20.87-17.91,29.07-4.04,4.04-8.55,7.61-13.42,10.61l-33.42-14.95Z"/>
                    <path class="outline-c" d="M146.24,53.24c10.89,3.58,20.84,9.7,29.01,17.88,4.05,4.05,7.62,8.56,10.62,13.41l-14.93,33.43-24.71-64.72Z"/>
                    <path class="outline-c" d="M172.48,126.78l1.15-2.56,15.3-34.26c5.19,10.25,7.91,21.64,7.91,33.24,0,5.76-.66,11.47-1.98,17.02l-34.21,13.06,11.83-26.5Z"/>
                    <path class="outline-c" d="M126.86,73.93l-2.61-1.17-34.26-15.31c10.24-5.18,21.62-7.89,33.2-7.89,5.76,0,11.48,.67,17.05,1.99l13.05,34.2-26.44-11.81Z"/>
                </g>
                <circle class="outline-b" cx="123.2" cy="123.2" r="123.2"/>
            </svg>
        </div>
        </>
    )
}

export default OutlineLogo;