import React from "react";
import './NavContents.css'
import {Avatar}  from '@material-ui/core';

function NavContents({Icon, title, avatar , onClick}){
    return <div>
        <div className="navContents_Container">
          <div className="icons">{Icon && <Icon/>}
          {avatar && <Avatar onClick={onClick} className="Navcontent_avatar"/>}
          </div>
          <h3>{title}</h3>  
        </div>
    </div>
}

export default NavContents;