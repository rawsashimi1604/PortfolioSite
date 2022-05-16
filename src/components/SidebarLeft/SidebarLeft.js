import React from "react";

import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin, BsGithub } from "react-icons/bs"

export default function SidebarLeft() {
    return (
        <div>
            <ul>
                <li><BsGithub/></li>
                <li><BsLinkedin/></li>
                <li><MdOutlineEmail/></li>
            </ul>
        </div>
    )
}