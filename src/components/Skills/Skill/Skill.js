import React from "react";
import "../../../colors/colors.css"
import "./style.css"

export default function Skill(props) {

    const skillArray = props.data
    const skillOutputArray = skillArray.map(skill => {
        return <li>{skill}</li>
    })

    return (
        <div className="skill">
            <ul>
                {skillOutputArray}
            </ul>
        </div>
    )
}