import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import '../style/Main.css'

function Layout() {
  return (
    <div>
      <Header />
      <div className="Main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout