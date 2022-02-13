import React from 'react';
import './Login.css';
import {useState} from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';
 
function Login(){
    
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [profilepic, setProfilepic]= useState('');
    const dispatch = useDispatch();

    const loginToApp=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((userAuth)=> {
            dispatch(login(
                {
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName: userAuth.displayName
                }
            )).catch((error)=> alert(error.message))
        })

    }
    const register=()=>{
        if(!name){
            return alert('please enter your full name ')
        }

        auth .createUserWithEmailAndPassword(email,password).then((userAuth) => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName
            }))
        }).catch((error)=> alert(error.message))

    }


    return (
        <div className='login_container'>
            <img src='https://i.imgur.com/ugJDoxl.png'/>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name'></input>
                <input value={profilepic} type='text'  onChange={(e) => setProfilepic(e.target.value)} placeholder='Profile Pic Url'></input>
                <input value={email} type='email'  onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
                <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
                <button onClick={loginToApp} type='submit' className='Sign_btn'>Sign In</button>
            </form>
            <p>Not a member ?<span onClick={register} className='register'> Register Now.</span></p>
        </div>
    )
}

export default Login