import React, { useEffect } from 'react';
import '../styles/Login.css'
import { Link } from 'react-router-dom';


export const Login = () => {

  useEffect((event)=>{
    event.preventDefault();
  },[]);


  return (
    <>
    <div className='parentDiv'>
        <p className='p1'>Signin to your PopX account</p>
        <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        {/* Email Address */}
      <div className='group-form'>
      <input type='text' required/>
      <label>Email Address </label>
      </div>
        {/* Password */}
      <div className='group-form'>
      <input type='text' required/>
      <label>Password </label>
      </div>
      <Link to='/account-settings'><button className='btn'>Login</button></Link>
    </div>
    </>
  )
}
