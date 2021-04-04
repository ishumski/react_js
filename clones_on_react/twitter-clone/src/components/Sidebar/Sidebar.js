import React from "react";
import SidebarOption from "./SidebarOption/SidebarOption.js"
import s from "./Sidebar.module.css";

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
/*можно столкнуться с багом неотрисовки иконок и выдаёт ошибку, что мы должны проверить наши импорты:
In your Sidebar.js, make sure you don't have any <SidebarOption /> tags without its attributes of 'Icon'. 
That is, all your <SidebarOption /> tags should be <SidebarOption Icon={SOMEIcon} text="SOMETEXT" />. 
You can't render without passing the attributes of 'Icon'.*/

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <TwitterIcon className={s.sidebare__twitteIcon} />
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            <Button variant="outlined" className={s.sidebar__tweet}>Tweet</Button>
        </div>
    );
}

export default Sidebar;


