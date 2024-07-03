import React from 'react'

import SidePanel from '../../components/SidePanel/SidePanel'
import Map from '../../components/Map/Map'

import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style. container} style={{ display: 'flex' }}>
        <SidePanel />
        <Map/>
    </div>
  )
}

export default HomePage