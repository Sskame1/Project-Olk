import React from 'react'
import {Link} from 'react-router-dom'

import '../../style/Kino_Card.css'

export default function Kino_Card({title, tags, chrono, urlKino, urlBuyTicket, poster, inTime}) {
  return (
    <div className="kino__card">
        <div className="container_info">
          <Link className='link_urlKino' to={urlKino}><img src={poster}/></Link>
          <div className="content">
            <div className="title">{title}</div>
            <div className="tags_time">{tags}, {chrono}</div>
            <div className="urlBuyTicketsDiv"><Link className='urlBuyTicket' to={urlBuyTicket}>Купить билеты</Link></div>
          </div>
        </div>
        <div className="container_desc">
          <div className="inTive">{inTime}</div>
        </div>
    </div>
  )
}
