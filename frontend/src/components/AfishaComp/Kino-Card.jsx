import React from 'react'

import '../../style/Kino_Card.css'

export default function Kino_Card({title, tags, chrono, urlKino, urlBuyTicket, poster, inTime}) {
  return (
    <div className="kino__card">
        <img src={poster}/>
        <div className="title">{title}</div>
        <div className="tags_time">{tags}, {chrono}</div>
    </div>
  )
}
