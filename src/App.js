import React from "react"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"

import SidebarLeft from "./components/SidebarLeft/SidebarLeft"

import colors from "./colors/colors.css"




export default function App() {
    return (
        <div className="container">
            <Header/>
            <SidebarLeft/>
            <main>
                <Skills/>
            </main>
        </div>
    )
}