import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import colors from "./colors/colors.css"

export default function App() {
    return (
        <div>
            <Navbar/>
            <main>
                <Hero/>
            </main>
        </div>
    )
}