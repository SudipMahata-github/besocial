import React, {useState} from 'react';
import "./allpost.css"
import {MoreHoriz, ThumbUp, Favorite,ChatBubble} from "@mui/icons-material"
import {Users} from "../../alldata"


function Allpost({postdata}) {
    const data  = Users.filter(u => u.id === postdata.userId)
    const user = data[0].username
    const userImg = data[0].profilePicture
    const[like, setLike] = useState(postdata.like)
    const [love, setLove] = useState(postdata.love)
    const [click, setClick] = useState(false)
    const increaseLike = ()=>{
        setLike(click ? like-1:like+1)
        setClick(!click);
    }
    const increaseLove = ()=>{
        setLove(click ? love-1 : love+1)
        setClick(!click)
    }

  return <div className='allpost'>
      <div className="allpost-top">
          <div className="allpost-profile">
              <img src={userImg} alt="alt" />
              <span>{user}</span> <h4 className='date'>{postdata.date}</h4>
          </div>
              <MoreHoriz className='allpost-icon'/>
      </div>
      <div className="allpost-center">
          <span>{postdata?.desc}</span>
          <img  className='allpost-center-img' src={postdata.photo} alt="" />
      </div>
      <div className="allpost-botom">
         <div className="add-like" onClick={increaseLike}><ThumbUp className='like'/><h5>{like}</h5></div>
         <div className="add-love" onClick={increaseLove}> <Favorite className='like'/><h5>{love}</h5></div>
         <div className="add-comment"> <ChatBubble className='like'/><h5>{postdata.comment}</h5></div>
      </div>
  </div>;
}

export default Allpost;
