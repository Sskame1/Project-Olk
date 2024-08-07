import React from 'react'
import Tablo from '../../components/Home/Tablo'
import { Card } from '../../components/Home/Card'

function AfishaPage() {
  return (
    <div className='Afisha'>
      <div className="Main">
        <div className="Main__main">
          <Tablo>
            <Card img={'https://i.pinimg.com/736x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'} title={'Error'} desc={'Error desc'} />
          </Tablo>
        </div>
        <div className="Main_sidebord">
          sidebord
        </div>  
      </div>
    </div>
  )
}

export default AfishaPage