import React from 'react';
import "./feed.css"
import Post from '../post/Post';
import Allpost from '../allposts/Allpost';
import {Posts} from "../../alldata"
function Feed() {
  return <div className='feed'>
      <Post/>
     {
       Posts.map((data, index)=>{
         return <Allpost postdata={data} key={index}/>
       })
     }
    
  </div>;
}

export default Feed;
