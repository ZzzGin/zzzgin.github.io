import React, { useEffect  } from "react"
import anime from 'animejs'
import "../svg-css/zzzgin_logo_animation.css"

const ZzzLogoAnimation = () => {

    const animationRef = React.useRef(null);
    useEffect(() => {
        animationRef.current = anime.timeline(
            {
                targets: '.logo-parts',
                loop: true,
                // delay: (el, i) => i*50+anime.random(-300, 300),
                delay: (el, i) => i*10+anime.random(0, 300),
                easing: 'spring(1, 100, 10, 20)', // Can be inherited
                duration: 1000,
                direction: 'reverse',
            }
        ).add({
            scale: [0, 1],
            endDelay: 3000
        }).add({
            scale: 0.8,
        }).add({
            scale: 1,
            translateX: (el, i) => 5+anime.random(-10, 10),
            translateY: (el, i) => 5+anime.random(-10, 10),
        }).add({
            scale: 0.8,
            translateX: (el, i) => 5+anime.random(-30, 30),
            translateY: (el, i) => 5+anime.random(-30, 30),
        }).add({
            scale: 1,
            translateX: (el, i) => 5+anime.random(-75, 75),
            translateY: (el, i) => 5+anime.random(-75, 75),
        }).add({
            scale: 0.8,
            translateX: (el, i) => 5+anime.random(-150, 150),
            translateY: (el, i) => 5+anime.random(-150, 150),
        }).add({
            scale: 1,
            translateX: (el, i) => 5+anime.random(-300, 300),
            translateY: (el, i) => 5+anime.random(-300, 300),
        }).add({
            scale: 0.8,
            translateX: (el, i) => 5+anime.random(-600, 600),
            translateY: (el, i) => 5+anime.random(-600, 600),
        }).add({
            scale: 0,
            translateX: (el, i) => 5+anime.random(-1200, 1200),
            translateY: (el, i) => 5+anime.random(-1200, 1200),
        })
    }, []);

    return (
        <>
        <div className="zzginLogoAnimation">
            <div className="circle-container">
                <div className="circle void" style={{ width: "100.0%", height: "100.0%", left: "50.0%", top: "50.0%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle redgreenblue logo-parts" style={{ width: "11.358473%", height: "11.358473%", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "10.79054975%", height: "10.79054975%", left: "59.83643798%", top: "44.32076329%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "10.790549750%", height: "10.790549750%", left: "40.163562017%", top: "44.320763289%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "10.790549750%", height: "10.790549750%", left: "50.0%", top: "61.358473421%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "10.222626079%", height: "10.222626079%", left: "69.672875965%", top: "38.641526578%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "10.222626079%", height: "10.222626079%", left: "30.327124034%", top: "38.641526578%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "10.222626079%", height: "10.222626079%", left: "50.0%", top: "72.716946842%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "9.6547024079%", height: "9.6547024079%", left: "79.509313948%", top: "32.962289868%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "9.6547024079%", height: "9.6547024079%", left: "20.490686051%", top: "32.962289868%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "9.6547024079%", height: "9.6547024079%", left: "50.0%", top: "84.075420263%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle redgreen logo-parts" style={{ width: "9.1322126306%", height: "9.1322126306%", left: "89.345751930%", top: "27.283053157%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle greenblue logo-parts" style={{ width: "9.1322126306%", height: "9.1322126306%", left: "10.654248069%", top: "27.283053157%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle redblue logo-parts" style={{ width: "9.1322126306%", height: "9.1322126306%", left: "50.0%", top: "95.433893684%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "79.509313948%", top: "21.603816447%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "89.345751930%", top: "38.641526578%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "10.654248069%", top: "38.641526578%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "20.467969104%", top: "21.603816447%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "59.836437982%", top: "89.754656974%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "8.5188550658%", height: "8.5188550658%", left: "40.163562017%", top: "89.754656974%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "69.672875965%", top: "15.924579736%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "89.345751930%", top: "50.0%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "10.654248069%", top: "50.0%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "30.304407087%", top: "15.924579736%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "69.672875965%", top: "84.075420263%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "7.9509313948%", height: "7.9509313948%", left: "30.327124034%", top: "84.075420263%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "59.836437982%", top: "10.245343025%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "89.345751930%", top: "61.358473421%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "10.654248069%", top: "61.358473421%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "40.140845070%", top: "10.245343025%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "79.509313948%", top: "78.396183552%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "7.3830077237%", height: "7.3830077237%", left: "20.490686051%", top: "78.396183552%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle redblue logo-parts" style={{ width: "6.8150840527%", height: "6.8150840527%", left: "50.0%", top: "4.5661063153%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle greenblue logo-parts" style={{ width: "6.8150840527%", height: "6.8150840527%", left: "89.345751930%", top: "72.716946842%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle redgreen logo-parts" style={{ width: "6.8150840527%", height: "6.8150840527%", left: "10.654248069%", top: "72.716946842%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "6.2471603816%", height: "6.2471603816%", left: "50.0%", top: "15.924579736%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "6.2471603816%", height: "6.2471603816%", left: "79.509313948%", top: "67.037710131%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "6.2471603816%", height: "6.2471603816%", left: "20.490686051%", top: "67.037710131%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "5.6792367105%", height: "5.6792367105%", left: "50.0%", top: "27.283053157%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "5.1113130395%", height: "5.1113130395%", left: "69.672875965%", top: "61.358473421%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "5.1113130395%", height: "5.1113130395%", left: "30.327124034%", top: "61.358473421%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle blue logo-parts" style={{ width: "5.1113130395%", height: "5.1113130395%", left: "50.0%", top: "38.641526578%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle green logo-parts" style={{ width: "4.5433893684%", height: "4.5433893684%", left: "59.836437982%", top: "55.679236710%", transform: "translate(-50%, -50%)"}}></div>
                <div className="circle red logo-parts" style={{ width: "4.5433893684%", height: "4.5433893684%", left: "40.163562017%", top: "55.679236710%", transform: "translate(-50%, -50%)"}}></div>
            </div>
            
        </div>
        </>
    )
}

export default ZzzLogoAnimation;