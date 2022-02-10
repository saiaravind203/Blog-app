import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import TextsmsIcon from '@material-ui/icons/Textsms';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import NavContents from "./NavContents";

 function Nav(){
     return(
         <div className="nav_container">
             <div className="nav_left">
                 <img src="https://i.imgur.com/Q4dXvrT.png" alt=""></img>
                 <div className="searchbox">
                    <input type='text' placeholder="search"></input>
                    <div className="searchicon"><SearchIcon/></div>
                 </div>
             </div>

             <div className="nav_right">
                <NavContents Icon={HomeRoundedIcon} title ="Home"/>
                <NavContents Icon={PeopleIcon} title ="My Network"/>
                <NavContents Icon={BusinessCenterIcon} title ="Jobs"/>
                <NavContents Icon={TextsmsIcon} title ="Messaging"/>
                <NavContents Icon={NotificationsActiveIcon} title ="Notifications"/>
                <NavContents avatar title ="Sai Aravind"/>
             </div>
         </div>
     );
 }

export default Nav;
