import React, { useEffect, useState } from "react"
import "../svg-css/design_logo.css"
import { useWindowScroll } from "react-use"
import { scale, linearScaler } from "../../../../../../components/scalers/scale"
import { useSize } from "../../../../../../components/hooks/useSize"
import { document } from "browser-monads"
import anime from 'animejs'

const DesignLogo = () => {
    const scrollInfo = useWindowScroll();
    const size = useSize();
    const pageHeight = document.documentElement.offsetHeight;

    const [designLogo_opa, setDesignLogo_opa] = useState(0);

    useEffect(() => {
        let percentage = scrollInfo.y/(pageHeight-size.height)*100;
        setDesignLogo_opa(scale([2, 5, 7, 10], [0, 1, 1, 0], percentage, linearScaler))
    }, [scrollInfo, pageHeight, size]);

    const animationRef = React.useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: 'path.stroke',
            easing: 'easeInOutSine',
            delay: anime.stagger(250),
            loop: true,
            direction: "alternate",
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 2000,
        });
    }, []);

    return (
        <>
        <div className="designLogo" style={{
            width: "50%",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: designLogo_opa
        }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.07 313.07">
                <g id="a"/>
                    <g id="b">
                        <g id="d">
                            <g>
                                <g>
                                    <path className="stroke" d="M156.52,95.43v1.4h-.01l-39.86,15.23-3.42,1.3-50.43,19.28c4.34-17.08,13.23-32.33,25.3-44.41,5.71-5.7,12.12-10.7,19.1-14.83l49.32,22.04Z"/>
                                    <path className="stroke" d="M114.24,114.36l-17.39,38.86h0l-1.51,3.36-22.04,49.3c-8.58-14.44-13.5-31.29-13.5-49.3,0-8.27,1.04-16.29,3-23.95l50.43-19.28,1,1Z"/>
                                    <path className="stroke" d="M132.56,250.28c-17.1-4.35-32.37-13.25-44.46-25.35-5.7-5.69-10.68-12.09-14.79-19.05l22.04-49.3h1.41l15.23,39.84,1.28,3.35,19.3,50.5Z"/>
                                    <path className="stroke" d="M205.78,239.77c-14.42,8.57-31.27,13.48-49.26,13.49h-.04c-8.26,0-16.28-1.04-23.93-2.99l-19.3-50.5,.97-.97,38.96,17.44h.01l3.32,1.49,49.26,22.04Z"/>
                                    <path className="stroke" d="M250.17,180.57c-4.35,17.07-13.25,32.31-25.32,44.4-5.69,5.69-12.09,10.67-19.06,14.81l-49.26-22.04v-1.4l39.77-15.19h.01l3.41-1.31,50.46-19.26Z"/>
                                    <path className="stroke" d="M239.65,107.25l-22.03,49.33h-1.36l-15.2-39.81-1.33-3.48-19.23-50.38c17.04,4.35,32.27,13.23,44.32,25.29,5.69,5.69,10.68,12.09,14.82,19.05Z"/>
                                    <path className="stroke" d="M253.17,156.58c0,8.28-1.04,16.31-3,23.98l-50.46,19.26-.97-.98h0v-.02l17.42-38.99,1.46-3.25,22.03-49.33c8.59,14.45,13.52,31.31,13.52,49.33Z"/>
                                    <path className="stroke" d="M199.74,113.3l-1,1-38.89-17.38-3.32-1.49-49.32-22.04c14.44-8.58,31.29-13.49,49.28-13.49h.04c8.28,0,16.31,1.05,23.98,3.01l19.23,50.38Z"/>
                                </g>
                            <g>
                            <path className="n" d="M216.2,156.58c0,33-26.75,59.75-59.75,59.75-79.26-3.15-79.24-116.37,0-119.51,33,0,59.75,26.75,59.75,59.75h0Z"/>
                            <path className="t" d="M253.11,156.58c0,53.4-43.29,96.68-96.68,96.68-128.24-5.09-128.21-188.29,0-193.36,53.39,0,96.68,43.29,96.68,96.68h0Z"/>
                            <path className="o" d="M312.92,156.58c0,86.4-70.04,156.43-156.43,156.43-207.51-8.24-207.45-304.66,0-312.87,86.39,0,156.43,70.04,156.43,156.43h0Z"/>
                            <g>
                                <line className="p" x1=".05" y1="156.58" x2="1.05" y2="156.58"/>
                                <line className="g" x1="3.06" y1="156.58" x2="310.69" y2="156.58"/>
                                <line className="p" x1="311.69" y1="156.58" x2="312.69" y2="156.58"/>
                            </g>
                            <g>
                                <line className="p" x1="156.47" y1=".15" x2="156.47" y2="1.15"/>
                                <line className="m" x1="156.47" y1="3.16" x2="156.47" y2="311.02"/>
                                <line className="p" x1="156.47" y1="312.02" x2="156.47" y2="313.02"/>
                            </g>
                            <g>
                                <line className="p" x1="45.86" y1="267.12" x2="46.56" y2="266.41"/>
                                <line className="g" x1="47.98" y1="264.99" x2="265.51" y2="47.47"/>
                                <line className="p" x1="266.22" y1="46.76" x2="266.93" y2="46.05"/>
                            </g>
                            <g>
                                <line className="p" x1="45.8" y1="45.97" x2="46.5" y2="46.68"/>
                                <line className="m" x1="47.92" y1="48.09" x2="265.61" y2="265.78"/>
                                <line className="p" x1="266.32" y1="266.49" x2="267.03" y2="267.2"/>
                            </g>
                            <g>
                                <line className="p" x1="156.49" y1=".15" x2="156.84" y2="1.08"/>
                                <line className="s" x1="157.55" y1="2.95" x2="215.49" y2="154.72"/>
                                <line className="p" x1="215.85" y1="155.65" x2="216.2" y2="156.58"/>
                            </g>
                            <g>
                                <line className="p" x1="266.93" y1="46.05" x2="266.52" y2="46.96"/>
                                <line className="i" x1="265.71" y1="48.78" x2="199.5" y2="197.03"/>
                                <line className="p" x1="199.09" y1="197.94" x2="198.68" y2="198.85"/>
                            </g>
                            <g>
                                <line className="p" x1="312.92" y1="156.58" x2="311.99" y2="156.94"/>
                                <line className="e1" x1="310.12" y1="157.65" x2="158.31" y2="215.62"/>
                                <line className="p" x1="157.38" y1="215.98" x2="156.45" y2="216.34"/>
                            </g>
                            <g>
                                <line className="p" x1="267.03" y1="267.2" x2="266.11" y2="266.79"/>
                                <line className="j" x1="264.29" y1="265.98" x2="115.99" y2="199.62"/>
                                <line className="p" x1="115.08" y1="199.21" x2="114.17" y2="198.81"/>
                            </g>
                            <g>
                                <line className="p" x1="156.49" y1="313.02" x2="156.13" y2="312.08"/>
                                <line className="q" x1="155.42" y1="310.22" x2="97.41" y2="158.45"/>
                                <line className="p" x1="97.05" y1="157.52" x2="96.7" y2="156.58"/>
                            </g>
                            <g>
                                <line className="p" x1="45.86" y1="267.12" x2="46.27" y2="266.21"/>
                                <line className="l" x1="47.08" y1="264.39" x2="113.37" y2="116.18"/>
                                <line className="p" x1="113.77" y1="115.27" x2="114.18" y2="114.35"/>
                            </g>
                            <g>
                                <line className="p" x1=".05" y1="156.58" x2=".99" y2="156.23"/>
                                <line className="r" x1="2.85" y1="155.52" x2="154.58" y2="97.54"/>
                                <line className="p" x1="155.51" y1="97.19" x2="156.45" y2="96.83"/>
                            </g>
                            <g>
                                <line className="p" x1="45.8" y1="45.97" x2="46.71" y2="46.38"/>
                                <line className="f" x1="48.53" y1="47.19" x2="196.85" y2="113.49"/>
                                <line className="p" x1="197.76" y1="113.9" x2="198.67" y2="114.3"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
                </svg>
        </div>
        </>
    )
}

export default DesignLogo;