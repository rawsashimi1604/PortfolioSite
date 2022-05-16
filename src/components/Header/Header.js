import React from "react";
import "./style.css"

import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"

import video from "../../assets/videos/landing.mp4"

import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin, BsGithub } from "react-icons/bs"

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

            <div className="main-wrapper">
                <Hero/>
                <ul>
                    <li>
                        <a href="#"><BsGithub/></a>
                    </li>
                    <li>
                        <a href="#"><BsLinkedin/></a>
                    </li>
                    <li>
                        <a href="#"><MdOutlineEmail/></a>
                    </li>
                </ul>
            </div>
            

            
        </header>
    )
}