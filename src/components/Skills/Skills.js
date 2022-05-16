import React from "react";
import Skill from "./Skill/Skill"

import "./style.css"
import skillData from "./skillData"

export default function Skills() {

    const availableSkillTypes = Object.keys(skillData)
    const [selectedSkill, setSelectedSkill] = React.useState(0)

    function mapSkills() {
        return availableSkillTypes.map((skillType, index) => {
            return <li 
                className={selectedSkill == index ? "selected" : ""}
                index={index} 
                onClick={handleClick} 
            >
                {skillType}
            </li>
        })
    }

    const [skillButtons, setSkillButtons] = React.useState(
        mapSkills()
    )
    
    function handleClick(e) {
        const clickedIndex = e.target.getAttribute("index")
        setSelectedSkill(clickedIndex)
        console.log(`Set selected skill of index:${clickedIndex}`)
    }

    React.useEffect(() => {
        setSkillButtons(mapSkills())
    }, [selectedSkill])

    return (
        <section className="skills">
            <h1>01. Skills</h1>
            <ul className="skill-buttons">
                {skillButtons}
            </ul>
            
            <div>
                <Skill 
                    data={skillData[availableSkillTypes[selectedSkill]]}
                    key={availableSkillTypes[selectedSkill]}
                />    
            </div>

            <br/>
            <br/>
            <br/>
            
        </section>
    )
}