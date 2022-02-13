import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import TextsmsIcon from '@material-ui/icons/Textsms';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PeopleIcon from '@material-ui/icons/People';
import NavContents from "./NavContents";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";


 function Nav(){
     const dispatch = useDispatch()
     const logOutOfApp = () =>{
         dispatch(logout())
         auth.signOut()
     }
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
                <NavContents Icon={PeopleIcon} title ="Groups"/>
                <NavContents Icon={StarRoundedIcon} title ="Favorites"/>
                <NavContents Icon={TextsmsIcon} title ="Messages"/>
                <NavContents Icon={NotificationsActiveIcon} title ="Notifications"/>
                <NavContents avatar onClick={logOutOfApp} title ="Sai Aravind"/>
             </div>
         </div>
     );
 }

export default Nav;
