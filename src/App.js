import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"

import SidebarLeft from "./components/SidebarLeft/SidebarLeft"

import colors from "./colors/colors.css"

export default function App() {
    return (
        <div>
            <Navbar/>
            <div className="wrapper">
                <SidebarLeft/>
                <main>
                    <Hero/>
                    <Skills/>
                </main>
            </div>
            
        </div>
    )
}