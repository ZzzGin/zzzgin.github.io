import React from 'react';
import "@components/css/main.css"
import ZzzHomeIcon from "../../images/zzz-icon.svg"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-body'>
                    <div className='footer-body-centered' >
                        <a href="/">
                            <img src={ZzzHomeIcon} alt="home" style={{ height: "2em" }} />
                        </a>
                        <div className='footer-copyright'>© 2022 zzz</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;