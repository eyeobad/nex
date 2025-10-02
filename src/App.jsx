import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Quote from "./Components/Quote"
import CTA from "./Components/CTA"
import CaseStudies from "./Components/CaseStudies"
import WorkProcess from "./Components/WorkProcess"
import Team from "./Components/Team"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero id="hero" />
        <Services id="services" />
        <CTA id="cta" />
        <CaseStudies id="case-studies" />
        <WorkProcess id="process" />
        <Team id="team" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
        <Footer id="footer" />
      </main>
    </div>
  )
}

export default App
