import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className="Header__container">
            <div className="logo">
                Олёкминск
            </div>
            <ul className="nav">
                <Link>Афиша</Link>
                <Link>Доска</Link>
                <Link>Работа</Link>
            </ul>
        </div>
        <div className="Header__container__auth">
            <Link>Регистрация</Link>
            <Link>Войти</Link>
        </div>
    </div>
  )
}

export default Header