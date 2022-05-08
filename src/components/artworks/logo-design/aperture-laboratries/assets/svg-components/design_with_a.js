import React, { useEffect, useState } from "react"
import "../svg-css/design_with_a.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler, sinScaler} from "../../../../../scalers/scale"
import { useSize } from "../../../../../hooks/useSize"
import { document } from "browser-monads"

const DesignWithALogo = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [designWithALogo_opa, setDesignWithALogo_opa] = useState(0);
    const [designWithALogo_width, setDesignWithALogo_width] = useState("0%");
    const [designWithALogo_top, setDesignWithALogo_top] = useState("50%");

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setDesignWithALogo_opa(scale([21, 25, 35, 37], [0, 1, 1, 0], percentage, linearScaler));
        setDesignWithALogo_width(scale([21, 25, 27, 30], [0, 120, 120, 80], percentage, sinScaler)+"%");
        setDesignWithALogo_top(scale([27, 30], [50, 40], percentage, sinScaler)+"%")
    }, [scrollInfo, pageHeight, size]);

    return (
        <>
        <div className="ringLogo" style={{
            width: designWithALogo_width,
            position: "fixed",
            left: "50%",
            top: designWithALogo_top,
            transform: "translate(-75.23%, -74.41%)",
            opacity: designWithALogo_opa
        }}>
            <svg id="design-a-a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 845.28 833.55">
                <line class="design-a-c" x1="680.3" y1="785.9" x2="401.88" y2="555.85"/>
                <line class="design-a-c" x1="800.2" y1="448.38" x2="497.64" y2="563.78"/>
                <line class="design-a-c" x1="800.03" y1="423.64" x2="497.48" y2="539.04"/>
                <line class="design-a-c" x1="815.56" y1="430.71" x2="612.43" y2="777.2"/>
                <g>
                    <g>
                        <path class="design-a-d" d="M29.08,259.44c17.32-53.6,47.3-102.64,87.52-142.9,19.93-19.88,42.02-37.33,65.74-51.92l164.4,73.46-146.18,55.83L29.08,259.44Z"/>
                        <path class="design-a-d" d="M50.85,532.83c-25.66-50.2-39.14-106.08-39.14-162.94,0-28.09,3.26-55.99,9.71-83.05l168.21-64.29-59.09,132.09-4.75,10.56-74.94,167.63Z"/>
                        <path class="design-a-d" d="M259.67,710.87c-53.73-17.37-102.84-47.41-143.08-87.69-19.81-19.77-37.21-41.8-51.8-65.56l73.49-164.4,121.38,317.65Z"/>
                        <path class="design-a-d" d="M370.02,728.2c-28.02,0-55.9-3.25-82.96-9.67l-64.29-168.23,132.23,59.16,10.47,4.71,167.49,74.93c-50.12,25.6-105.95,39.06-162.81,39.1h-.13Z"/>
                        <path class="design-a-d" d="M480.73,29.01c53.52,17.36,102.45,47.31,142.58,87.44,19.8,19.8,37.23,41.84,51.88,65.58l-73.34,164.27L480.73,29.01Z"/>
                        <path class="design-a-d" d="M608.7,386.98l5.57-12.42,74.89-167.75c25.69,50.22,39.18,106.14,39.18,163.07,0,28.13-3.26,56.08-9.71,83.19l-168.1,64.18,58.17-130.28Z"/>
                        <path class="design-a-d" d="M387.53,131.31l-12.68-5.7L207.13,50.67c50.15-25.63,106.02-39.09,162.89-39.09,28.16,0,56.12,3.28,83.32,9.75l64.13,168.04-129.95-58.07Z"/>
                    </g>
                    <g>
                        <path class="design-a-c" d="M370.02,136.02v5.35h-.05l-152.42,58.23-13.07,4.98L11.62,278.3c16.59-65.31,50.59-123.63,96.75-169.83,21.85-21.8,46.34-40.9,73.03-56.72l188.62,84.28Z"/>
                        <path class="design-a-c" d="M208.33,208.42l-66.5,148.63v.05l-5.76,12.8-84.28,188.52C18.98,503.2,.15,438.76,.15,369.89c0-31.63,3.98-62.29,11.47-91.59l192.87-73.72,3.84,3.84Z"/>
                        <path class="design-a-c" d="M278.39,728.2c-65.4-16.64-123.81-50.68-170.01-96.94-21.8-21.75-40.86-46.25-56.58-72.85l84.28-188.52h5.39l58.23,152.37,4.89,12.8,73.81,193.14Z"/>
                        <path class="design-a-c" d="M558.41,688.02c-55.16,32.77-119.6,51.55-188.39,51.6h-.14c-31.58,0-62.25-3.98-91.5-11.43l-73.81-193.14,3.7-3.7,148.99,66.68h.05l12.71,5.71,188.39,84.28Z"/>
                        <path class="design-a-c" d="M687.93,181.22l-84.23,188.66h-5.21l-58.13-152.24-5.07-13.3L461.75,11.67c65.17,16.64,123.4,50.59,169.51,96.71,21.75,21.75,40.86,46.25,56.67,72.85Z"/>
                        <path class="design-a-c" d="M739.62,369.89c0,31.67-3.98,62.38-11.47,91.73l-192.96,73.67-3.7-3.75h0l.05-.09,66.59-149.13,5.58-12.43,84.23-188.66c32.86,55.25,51.69,119.74,51.69,188.66Z"/>
                        <path class="design-a-c" d="M535.28,204.35l-3.84,3.84-148.72-66.45-12.71-5.71L181.41,51.75C236.62,18.93,301.06,.15,369.89,.15h.14c31.67,0,62.38,4.02,91.73,11.52l73.54,192.68Z"/>
                    </g>
                </g>
                <path class="design-a-b" d="M546.18,597.02l-64.46,24.66-42.89-35.46,269.48-102.71,51.44,42.54-128.65,219.15-41.11-33.99,30.97-52.35-74.78-61.83Zm98.69,25.75c28.14-46,46.61-75.83,58.71-92.7l-.28-.23c-22.46,10.64-62.36,27.33-113.06,47.76l54.63,45.17Z"/>
            </svg>
        </div>
        </>
    )
}

export default DesignWithALogo;