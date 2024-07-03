import React from 'react'

import st from './SidePanel.module.css'
import SidePanelUser from '../Auth/User/SidePanelUser/SidePanelUser'

function SidePanel() {
  return (
    <div>
        <div
        className={st.SidePanel}
      >
        <SidePanelUser />
        Боковая панель
      </div>
    </div>
  )
}

export default SidePanel