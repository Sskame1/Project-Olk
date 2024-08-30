import React from 'react'
import Ad from '../../components/Ad/Ad'
import AfishaTablo from '../../components/AfishaComp/AfishaTablo'
import DateinTablo from '../../components/AfishaComp/DateinTablo'

import '../../style/AfishaPage.css'
import Kino_Card from '../../components/AfishaComp/Kino-Card'
function AfishaPage() {
  return (
    <div className='Afisha'>
      <div className="Main">
        <div className="Main__main">
          <AfishaTablo>
          <div className="conteiner__Main">
            <div className="button-nav">
              <DateinTablo date={'Вт, 27 авг.'}/>
              <DateinTablo date={'Вт, 27 авг.'}/>
            </div>
            <h1>Кино</h1>
            <div className="kino">
              <Kino_Card 
              urlKino="https://youtu.be/o6wtDPVkKqI?si=74OIFyixuUYL_hEY" 
              poster={'https://i.pinimg.com/736x/47/fc/f2/47fcf21bdc163aca0f4b4be1199fa6c6.jpg'} 
              title="Evangelion neon genesis" 
              tags="da" 
              chrono="50 мин"
              inTime="09:30 10:50" />
              
            </div>
          </div>
          </AfishaTablo>
        </div>
        <div className="Main_sidebord">
          <Ad />
        </div>  
      </div>
    </div>
  )
}

export default AfishaPage