import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className="Header__container">
            <Link className="logo" to='/' >
            Олёкминск
            </Link>
            <ul className="nav">
                <Link to='/Afisha' >Афиша</Link>
                <Link title='не работает'>Доска</Link>
                {/* <Link title='не работает'>Работа</Link> */}
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