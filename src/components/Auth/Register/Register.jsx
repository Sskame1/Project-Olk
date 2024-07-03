import React, { useState } from 'react'

import '../Auth.css'
import { Navigate, redirect, useNavigate } from 'react-router-dom';

function Register({ AuthBoolChange }) {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [GoToHome, setGoToHome] = useState(false);
  
    const nicknameChange = (e) => {
      setNickname(e.target.value);
    };
  
    const emailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const passwordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const FormSubmit = (e) => {
      e.preventDefault();
      console.log('Nickname:', nickname);
      console.log('Email:', email);
      console.log('Password:', password);

      localStorage.setItem("Nickname", nickname)
      localStorage.setItem("Email", email)
      localStorage.setItem("Password", password)
      
    };
    
    if (GoToHome) {
      return <Navigate to="/" />
    }
return (
    <div className='container'>
      <div className='container_bg'>
        <h1>Register</h1>
        <form onSubmit={FormSubmit}>
          <input type="text" placeholder='Nickname' value={nickname} onChange={nicknameChange} />
          <input type="email" placeholder='Email' value={email} onChange={emailChange} />
          <input type="password" placeholder='Password' value={password} onChange={passwordChange} />
          <button type="submit" className='Auth_button' onClick={() => {setTimeout(() => {setGoToHome(true)}, 2000);}} >Auth</button>
        </form>
        <button onClick={AuthBoolChange} className='AuthBoolChange'>login</button>
      </div>
    </div>
  )
}

export default Register