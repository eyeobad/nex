import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import CTA from "./Components/CTA"
import CaseStudies from "./Components/CaseStudies"
import WorkProcess from "./Components/WorkProcess"
import Team from "./Components/Team"

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
        <WorkProcess />
        <Team />
        <CaseStudies />
      </main>
    </div>
  )
}

export default App
