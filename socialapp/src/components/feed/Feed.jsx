import React from 'react';
import "./feed.css"
import Post from '../post/Post';
import Allpost from '../allposts/Allpost';

function Feed() {
  return <div className='feed'>
      <Post/>
      <Allpost/>
      <Allpost/>
      <Allpost/>
      <Allpost/>
      <Allpost/>
      <Allpost/>
  </div>;
}

export default Feed;
