import React from 'react';
import "@components/css/main.css"
import ZzzHomeIcon from "../../images/zzz-icon.svg"
import ZzzEngineerIcon from "../../images/zzz-engineer-icon.svg"
import ZzzIoIcon from "../../images/zzz-io-icon.svg"
import ZzzDesignIcon from "../../images/zzz-design-icon.svg"

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-body'>
                <a href="/">
                    <div className='navbar-home-icon left' >
                        <img src={ ZzzHomeIcon } alt="home" style={{height: "2em"}}/>
                    </div>
                </a>
                
                <div style={{flex: "auto"}}></div>
                <div className='navbar-engineer-icon right'>
                    <img src={ ZzzEngineerIcon } alt="engineer" style={{height: "2em"}} />
                </div>
                <div className='navbar-design-icon right' >
                    <img src={ ZzzDesignIcon } alt="design" style={{height: "2em"}} />
                </div>
                <div className='navbar-io-icon right' >
                    <img src={ ZzzIoIcon } alt="io" style={{height: "2em"}} />
                </div>
            </div>
        </div>
    </>
  );
};

export default Navbar;