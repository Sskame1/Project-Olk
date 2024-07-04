import React from 'react'

import st from './SidePanel.module.css'
import SidePanelUser from '../Auth/User/SidePanelUser/SidePanelUser'
import Search from './components/Search/Search'

function SidePanel() {
  return (
    <div>
        <div
        className={st.SidePanel}
      >
        <Search />
        Боковая панель
      </div>
    </div>
  )
}

export default SidePanel