import React from 'react';
import "./leftbar.css";
import {People, Bookmark, Flag, Groups, Store, KeyboardArrowDown} from "@mui/icons-material"

function Leftbar() {
  return <div className='leftbar'>
     <div className="leftbar-main">
       <div className="left-profile">
       <div className="leftprofile-square">
         <img className='left-profile-img' src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
       </div>
         <span>Lorem Ipsum </span>
       </div>
       <ul className="leftbar-list">
         <li className="leftbar-item">
        <People className='leftbar-icon'/>
        <span>Friends</span>
         </li>

         <li className="leftbar-item">
        <Bookmark className='leftbar-icon'/>
        <span>Saved</span>
         </li>
         <li className="leftbar-item">
        <Flag className='leftbar-icon'/>
        <span>Pages</span>
         </li>
         <li className="leftbar-item">
        <Groups className='leftbar-icon'/>
        <span>Groupes</span>
         </li>
         <li className="leftbar-item">
        <Store className='leftbar-icon'/>
        <span>Market Places</span>
         </li>
         <li className="leftbar-item">
        <KeyboardArrowDown className='leftbar-icon' style={{cursor:"pointer"}}/>
        <span>See More</span>
         </li>
       </ul>
     </div>


     <div className="leftbar-down">
     <ul className="leftbar-list">
         <li className="leftbar-item">
        <div className="leftbar-square">
          <img className='leftbar-img' src="https://images.unsplash.com/photo-1621112904887-419379ce6824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdyb3Vwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <span>Friends</span>
         </li>

         <li className="leftbar-item">
         <div className="leftbar-square">
         <img className='leftbar-img' src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
         </div>
        <span>Saved</span>
         </li>
         <li className="leftbar-item">
         <div className="leftbar-square">
         <img className='leftbar-img' src="https://images.unsplash.com/photo-1623521602452-1a7cd695feca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
         </div>
        <span>Pages</span>
         </li>
         <li className="leftbar-item">
         <div className="leftbar-square">
         <img className='leftbar-img' src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
         </div>
        <span>Groupes</span>
         </li>
       </ul>
     </div>
  </div>;
}

export default Leftbar;
