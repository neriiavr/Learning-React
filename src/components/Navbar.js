import React from "react"
import ReactLogo from "../images/react-icon-small.png"
export default function Navbar () {
    return (
        <nav>
            <img 
                src={ReactLogo} 
                style={{
                    width: '50px',
                    height: '50px'
                }}
                alt="React Logo"
                className="nav--icon"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Project 1</h4>
        </nav>
    )
}
