import React from 'react'
import "./Header.scss"
import Link from 'next/link'

export default function Header() {
  return (
    <div className='header'>
      <div className="header__container">
        <div className="header--logo"><Link href={"/"}>Олёкминск</Link></div>
        <div className="header--nav">
          <Link href={"/Doska"}>Доска</Link>
          <Link href={"/Afisha"}>Афиша</Link>
        </div>
        <div className="header--auth"></div>
      </div>
    </div>
  )
}
