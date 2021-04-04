import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {

    return (
        <div className={`sidebarOption ${active && "sidebarOption__active"} `} >
            <Icon />
            <h3>{text}</h3>
        </div>
    );
}

export default SidebarOption;