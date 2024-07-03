import React, { useState } from 'react'

import '../Auth.css'

function Login({ AuthBoolChange }) {
  const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
  
    const nicknameChange = (e) => {
      setNickname(e.target.value);
    };
  
    const passwordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const FormSubmit = (e) => {
      e.preventDefault();
      console.log('Nickname:', nickname);
      console.log('Password:', password);
    };

  return (
    <div className='container'>
        <div className='container_bg'>
            <h1>Login</h1>
            <form onSubmit={FormSubmit}>
              <input type="text" placeholder='Nickname' value={nickname} onChange={nicknameChange} />
              <input type="password" placeholder='Password' value={password} onChange={passwordChange} />
              <button className='Auth_button'>Auth</button>
            </form>
            <button onClick={AuthBoolChange} className='AuthBoolChange'>register</button>
        </div>
    </div>
  )
}

export default Login