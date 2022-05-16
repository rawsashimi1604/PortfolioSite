import React from "react";
import Skill from "./Skill/Skill"

import "./style.css"
import skillData from "./skillData"

export default function Skills() {

    const availableSkillTypes = Object.keys(skillData)
    const [selectedSkill, setSelectedSkill] = React.useState(0)

    const skillButtons = availableSkillTypes.map((skillType, index) => {
        return <li index={index} onClick={handleClick} >{skillType}</li>
    })

    function handleClick(e) {
        const clickedIndex = e.target.getAttribute("index")
        setSelectedSkill(clickedIndex)

        console.log(`Set selected skill of index:${clickedIndex}`)
    }

    return (
        <section className="skills">
            <h1>01. Skills</h1>
            <ul className="skill-buttons">
                {skillButtons}
            </ul>
            
            <div>
                <Skill data={skillData[availableSkillTypes[selectedSkill]]}/>    
            </div>


            <br/>
            <br/>
            <br/>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </section>
    )
}