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
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li className="nav-resume hoverable">Resume</li>
                </ul>
            </section>
        </nav>
    )
}