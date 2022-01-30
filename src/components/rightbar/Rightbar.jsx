import React from 'react';
import './rightbar.css'
import {Users} from "../../alldata"
import {Link} from "react-router-dom"

function Rightbar() {
  return <div className='rightbar'>
    <div className="rightbar-item">
      <div className="rightbar-heading">
        <span>Contacts</span>
      </div>
      {
        Users.map((data, index)=>{
          return  <div className="rightbar-contacts" key={index}>
          <div className="contact-img">
            <img src={data.profilePicture} alt="" className="rightbar-img" />
          </div>
          <Link to="/profile" className='links'><span>{data.username}</span></Link>
        </div>
        })
      }
     
      {/* <div className="rightbar-contacts">
        <div className="contact-img">
        <img
         src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span> Veritatis Minima</span>
      </div>
      <div className="rightbar-contacts">
        <div className="contact-img">
        <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span>Emir Gergia</span>
      </div>
      <div className="rightbar-contacts">
        <div className="contact-img">
        <img src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span>Zara Clark</span>
      </div>
      <div className="rightbar-contacts">
        <div className="contact-img">
        <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span> Sitinda Ring</span>
      </div>
      <div className="rightbar-contacts">
        <div className="contact-img">
        <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span>Marry Geriam</span>
      </div>
      <div className="rightbar-contacts">
        <div className="contact-img">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rightbar-img" />
        </div>
        <span> Dolor Amet</span>
      </div> */}
    </div>
  </div>;
}

export default Rightbar;
