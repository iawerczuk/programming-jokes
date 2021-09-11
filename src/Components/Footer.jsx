import React from "react";
import logo from "../../src/Components/ia.png"

export default function Footer() {

    return(
        <>
            <div className="footer">
                <div className="copyright">
                    <img src={logo} alt="logo"/>    
                    <h2>©iawerczuk 2021</h2>
                </div>
            </div>
        </>
    )
};