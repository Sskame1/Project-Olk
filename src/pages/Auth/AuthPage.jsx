import React, { useState } from 'react'

import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [AuthBool, setAuthBool] = useState(true);
    const AuthChange = () => {
        setAuthBool(!AuthBool)
    }
  return (
    <div>
        {AuthBool ? <Login AuthBoolChange={AuthChange} /> : <Register AuthBoolChange={AuthChange} />}
    </div>
  )
}

export default AuthPage