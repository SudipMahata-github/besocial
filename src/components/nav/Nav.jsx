import React from 'react';
import "./nav.css"
import {Search, Home,OndemandVideo, HolidayVillage, Groups, ViewCompact, Apps, ChatBubble,NotificationAdd,ArrowDropDown} from "@mui/icons-material"

function Nav() {
  return <div className='nav'>
<div className="nav-left">
    <div className="logo">beSocial</div>
   <div className="input-nav">
   <input type="text"  className='nav-input'/>
    <Search className='search'/>
   </div>
</div>
<div className="nav-center">
<Home className='center-icon'/> <OndemandVideo className='center-icon'/> <HolidayVillage className='center-icon'/> <Groups className='center-icon'/> <ViewCompact className='center-icon'/>
</div>
<div className="nav-right">
    <div className="nav-profile"> </div>
    <Apps className='right-icon'/> <ChatBubble  className='right-icon'/> <NotificationAdd  className='right-icon'/> <ArrowDropDown  className='right-icon'/>

</div>
  </div>;
}

export default Nav;
