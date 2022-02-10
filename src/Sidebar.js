import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) =>(
        <div className='sidebar_recentItems'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return(
        <div  className='sidebar'>
            <div className="sidebar_top">
                <img src='https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=' alt='error'></img>
                <Avatar className='sidbar_avatar'/>
                <h3>Sai Aravind</h3>
                <h4>saiaravind2032001@gmail.com</h4>
            </div>  

            <div className='sidebar_stats'>
                 <div className='sidbar_inner'>
                        <p> Who Viewed You</p>
                        <p className='sidebar_statsnumber'>2234</p>
                 </div>
                 <div className='sidbar_inner'>
                        <p>  Views on  post</p>
                        <p className='sidebar_statsnumber'>3454</p>
                 </div>
            </div>
            
            <div className='sidebar_bottom'>
                  <h2>Recent</h2>
                   {recentItem("react js")}
                   {recentItem("Java script")}
                   {recentItem("HTML")}
                   {recentItem("CSS")}
                   {recentItem("Web developer")}
                   <h3>see more</h3>
            </div>
        </div>

    );
    
}
export default Sidebar;