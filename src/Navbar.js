import React from "react";
import reactLogo from './reactLogo.png'
import springLogo from './springLogo.png'
import wafaLogo from './wafaLogo.png'



export default function Navbar(){
    return(
        <div className="nav">
            <img className="logoReact" src={reactLogo} alt="logoReact" />
            <img className="wafaLogo" src={wafaLogo} alt="wafaLogo" />
            <img className="springLogo" src={springLogo} alt="springLogo" />
        </div>
        )}