import React from 'react'
import "./NewsV.scss"
import Link from 'next/link'
// import Image from 'next/image'
export default function NewsV() {
  return (
    <div className='NewsV'>
        <Link href={"/news"}>
            <img className='NewsV--image' src="https://i.pinimg.com/originals/d6/8f/66/d68f66bb2169beec8771346bd623b1a5.jpg" alt="" />
            <p className='NewsV--text'>Новости сайта</p>
        </Link>
    </div>
  )
}
