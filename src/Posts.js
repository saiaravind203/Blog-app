import  {Avatar}  from '@material-ui/core';
import React from 'react';
import InputItems from './InputItems';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import './Post.css'

function Posts({name,description,message}){
    return(
        <div className='posts_container'>
         <div className='post_header'>
             <Avatar className='sidebar_avatar'/>
             <div className='post_info'>
                 <p className='post_name'>{name}</p>
                 <p className='post_des'>{description} </p>
             </div>
         </div>
         <div className='post_body'>
             <p>{message}</p>
         </div>
         <div className='post_options'>
            <InputItems Icon={ThumbUpOutlinedIcon} title='Like' />
            <InputItems Icon={MessageOutlinedIcon} title='Comment' />
            <InputItems Icon={ShareOutlinedIcon} title='Send' />
            <InputItems Icon={SendOutlinedIcon} title='Share' />
         </div>
    </div>
    )
}
export default Posts;