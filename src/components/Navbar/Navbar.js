import React from "react"
import "./style.css"
import "../../colors/colors.css"


export default function Navbar() {
    return (
        <nav>
            <section className="nav-logo hoverable">
                <span>.gavin</span>
            </section>

            <section className="nav-menu">
                <ul>
                    <li><span>01. </span>About</li>
                    <li><span>02. </span>Experience</li>
                    <li><span>03. </span>Work</li>
                    <li><span>04. </span>Contact</li>
                    <li className="nav-resume hoverable">Resume</li>
                </ul>
            </section>
        </nav>
    )
}