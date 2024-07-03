import React, { useEffect, useState } from 'react'

import style from './SidePanelUser.module.css'
import { Link } from 'react-router-dom'

function SidePanelUser() {
    const [NicknameB, setNicknameB] = useState(false)
    const [Color, setColor] = useState('red')
    const [Nickname, setNickname] = useState('')
    useEffect(() => {
    const nickname = localStorage.getItem("Nickname")
    setNickname(localStorage.getItem("Nickname"))
    if (nickname) {
        setColor('green');
        setNicknameB(true);
    } else {
        setColor('red');
        setNicknameB(false);
    }
    }, [])

    const Leave = () => {
        localStorage.removeItem("Nickname")
        localStorage.removeItem("Email")
        localStorage.removeItem("Password")
        window.location.reload(false)
    }
  return (
    <div>
        <div style={{backgroundColor: `${Color}`}} className={style.ava}></div>
        {NicknameB ? <div>{Nickname}</div>: <Link to='/auth'>Login</Link>}
        <button type='submit' onClick={Leave}>Leave</button>

    </div>
  )
}

export default SidePanelUser