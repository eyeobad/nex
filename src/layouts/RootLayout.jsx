import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import PackagesLauncher from "../Components/PackagesLauncher"
import TopMarquee from "../Components/TopMarquee"

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TopMarquee />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PackagesLauncher />
      <Footer id="footer" />
    </div>
  )
}

export default RootLayout
