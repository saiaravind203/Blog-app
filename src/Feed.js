import React, { useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import './Feed.css';
import InputItems from './InputItems';
import CreatIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventnNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import db from './firebase';

function Feed() {
   const[input,setInput] =useState('')
   const[posts,setPosts]=useState([])
   useEffect(() => {
     db.collection('posts').onSnapshot((snapshot)=>{
       setPosts(snapshot.docs.map(doc => (
         {
           id:doc.id,
           data:doc.data()
         }
       )))
     })
   }, [])
   const sendPost= (e) =>{
     e.preventDefault()
     //database
     db.collection('posts').add({
       name:'Sai Aravind',
       description:'saiaravind2032001@gmail.com',
       message:input,
       photoUrl:'',
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
     })
     setInput('')
   }

  return (
    <div className='feed_container'> 
        <div className='container'>
            <div className='inner_container'>
                 <CreatIcon/>
                  <form>
                      <input 
                        type='text' 
                        value={input} 
                        onChange={( e => setInput(e.target.value) )}
                        required
                      />
                      <button onClick={sendPost} type='submit' >Submit</button>
                  </form>
            </div>
            <div className='inputItem'>
              <InputItems Icon={ImageIcon}title='Photo' color='#45bd62'/>
              <InputItems Icon={SubscriptionsIcon}title='Video' color='#f3425f'/>
              <InputItems Icon={EventnNoteIcon}title='Event' color='#70B5F9'/>
              <InputItems Icon={CalendarViewDayIcon}title='Write Articals' color='#f7b929'/>
            </div>
        </div>

        {posts.map(({id,data:{name,description,message,photoUrl}}) => ( 
            <Posts 
              id={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            /> 
        ))}
    </div>
  
  );      
}

export default Feed;


//Redux
//global store
//user is logging our app

//app => login => feed => 100s of compoments
// parent to child components
//user slice 