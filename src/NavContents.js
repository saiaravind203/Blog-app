import React from "react";
import './NavContents.css'
import {Avatar}  from '@material-ui/core';

function NavContents({Icon, title, avatar}){
    return <div>
        <div className="navContents_Container">
          <div className="icons">{Icon && <Icon/>}
          {avatar && <Avatar className="Navcontent_avatar"/>}
          </div>
          <h3>{title}</h3>  
        </div>
    </div>
}

export default NavContents;