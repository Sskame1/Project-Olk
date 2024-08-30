import React from 'react'
import {Link} from 'react-router-dom'

import '../../style/Kino_Card.css'

export default function Kino_Card({title, tags, chrono, urlKino, urlBuyTicket, poster, inTime}) {
  return (
    <div className="kino__card">
        <Link to={urlKino}><img src={poster}/></Link>
        <div className="content">
          <div className="title">{title}</div>
          <div className="tags_time">{tags}, {chrono}</div>
          <div className="urlBuyTicketsDiv"><Link className='urlBuyTicket' to={urlBuyTicket}>Купить билет</Link></div>
        </div>
    </div>
  )
}
