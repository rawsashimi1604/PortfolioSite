import React from "react";
import "./style.css"

import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"

import video from "../../assets/videos/landing.mp4"

export default function Header() {
    return (
        <header className="video-wrapper">
            {/* Video */}
            <video 
                autoPlay={true} 
                muted={true}
                loop={true}
                id="hero-video" 
            >
                <source src={video}></source>
            </video>

            <Navbar/>
            <Hero/>
        </header>
    )
}