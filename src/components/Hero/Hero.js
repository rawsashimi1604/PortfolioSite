import React from "react";
import "./style.css"
import "../../colors/colors.css"

import skillData from "../Skills/skillData";

export default function Hero() {

    return (
        <section className="hero">
            <h2>Hi, my name is</h2>
            
            <h1>Gavin Loo.</h1>
            <h1>I build things for the web.</h1>

            <p>
                I'm Gavin, a first-year student in Singapore Institute of Technology currently pursuing a degree in Software Engineering. My specialties include quickly learning new skills and programming languages, problem-solving, and writing clean code.
                <br/>
                <br/>
                In my free time, you might find me: Jamming along to music, following Leicester City Football Club, scrolling through Reddit, binge eating Japanese food or playing video games with my friends!
            </p>

        
        </section>
    )
}