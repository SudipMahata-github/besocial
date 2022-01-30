import React from 'react';
import "./allpost.css"
import {MoreHoriz, ThumbUp, Favorite,ChatBubble} from "@mui/icons-material"

function Allpost() {
  return <div className='allpost'>
      <div className="allpost-top">
          <div className="allpost-profile">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="alt" />
              <span>Lorem Ipsum</span>
          </div>
              <MoreHoriz className='allpost-icon'/>
      </div>
      <div className="allpost-center">
          <span>Good morning..</span>
          <img  className='allpost-center-img' src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="allpost-botom">
         <ThumbUp className='like'/>
          <Favorite className='like'/>
          <ChatBubble className='like'/>
      </div>
  </div>;
}

export default Allpost;
