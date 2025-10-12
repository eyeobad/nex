import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer id="footer" />
    </div>
  )
}

export default RootLayout
