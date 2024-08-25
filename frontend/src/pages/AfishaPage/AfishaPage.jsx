import React from 'react'
import Ad from '../../components/Ad/Ad'
import AfishaTablo from '../../components/AfishaComp/AfishaTablo'
function AfishaPage() {
  return (
    <div className='Afisha'>
      <div className="Main">
        <div className="Main__main">
          <AfishaTablo />
        </div>
        <div className="Main_sidebord">
          <Ad />
        </div>  
      </div>
    </div>
  )
}

export default AfishaPage