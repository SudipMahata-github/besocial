import React from 'react';
import "./post.css"
import {Videocam, PhotoSizeSelectActual,SentimentVerySatisfied,ArrowForwardIos} from "@mui/icons-material"

function Post() {

  return <div className='post'>
      <div className="main-post">
         <div className="upper-post">
         <div className="post-profile">
        <img className="profile-img" src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
         </div>
          <input type="text" className='post-input' placeholder='write something...'/>
         </div>
         <div className="lower-post">
        <div className="post-item">
          <Videocam className='post-icon'/>
          <span>Live Video</span>
        </div>
        <div className="post-item">
          <PhotoSizeSelectActual className='post-icon'/>
          <span>Photos</span>
        </div>
        <div className="post-item">
         <SentimentVerySatisfied className='post-icon'/>
          <span>Activity</span>
        </div>
         </div>
      </div>

      <div className="create-room">
      <button className='c-btn'><span><Videocam/></span>Create Room</button>
      <div className="c-main-profile">
      <div className="createroom-profile">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <div className="createroom-profile">
      <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <div className="createroom-profile">
      <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <div className="createroom-profile">
      <img src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <div className="createroom-profile">
      <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <div className="createroom-profile">
      <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="createroom-img" />
      </div>
      <ArrowForwardIos className='create-room-arrow' />
      </div>
      </div>
  </div>;
}

export default Post;
