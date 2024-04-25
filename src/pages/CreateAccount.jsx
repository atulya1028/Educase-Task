import React from 'react';
import '../styles/CreateAccount.css';
import { Link } from 'react-router-dom';

export const CreateAccount = () => {


  return (
    <>
    <div className='parentDiv'>
      <p className='p1'>Create your PopX account</p>
      {/* Full Name */}
      <div className='group-form'>
      <input type='text' required/>
      <label>Full Name <span style={{color:'red'}}>*</span></label>
      </div>
      {/* Phone Number */}
      <div className='group-form'>
      <input type='number' required/>
      <label>Phone Number <span style={{color:'red'}}>*</span></label>
      </div>
      {/* Email address */}
      <div className='group-form'>
      <input type='email' required/>
      <label>Email address <span style={{color:'red'}}>*</span></label>
      </div>
      {/* Password */}
      <div className='group-form'>
      <input type='password' required/>
      <label>Password <span style={{color:'red'}}>*</span></label>
      </div>
      {/* Company Name */}
      <div className='group-form'>
      <input type='text' required/>
      <label>Company Name <span style={{color:'red'}}>*</span></label>
      </div>
      <p className='p2'>Are you an Agency? <span style={{color:'red'}}>*</span></p>
      <div style={{width:'340px'}}>
        <input type='radio' name='agency' value='Yes' id='yesRadio' />
        <label htmlFor='yesRadio'>Yes</label>
        {"  "}
        <input type='radio' name='agency' value='No' id='noRadio' />
        <label htmlFor='noRadio'>No</label>
      </div>
      <Link to='/account-settings'><button className='btn'>Create Account</button></Link>
    </div>
    </>
  )
}
