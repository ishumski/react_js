import React from 'react';
import s from "./SidebarOption.module.css";

export default function SidebarOption({ text, Icon }) {

    return (
        <div className={s.sidebarOption}>
            <Icon />
            <h3>{text}</h3>
        </div>
    );
}