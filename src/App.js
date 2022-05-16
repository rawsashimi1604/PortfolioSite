import React from "react"
import Navbar from "./components/Navbar/Navbar"
import colors from "./colors/colors"

export default function App() {

    const bodyStyle = {
        backgroundColor: colors["color-700"],
        color: colors["color-100"]
    } 

    return (
        <main style={bodyStyle}>
            <div>
                <Navbar/>
                <h1>My Application!</h1>
            </div>
        </main>
    )
}