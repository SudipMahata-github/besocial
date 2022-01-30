import React from 'react';
import "./home.css"
import Nav from '../nav/Nav';
import Leftbar from "../leftbar/Leftbar"
import Rightbar from "../rightbar/Rightbar"
import Feed from "../feed/Feed"


function Home() {
  return <div>
     <Nav/>
     <div className="home">
       <Leftbar/>
       <Feed/>
       <Rightbar/>
       
     </div>
  </div>;
}

export default Home;
