
import React from "react"
import Hero from "../Components/Hero"
import Services from "../Components/Services"
import PillarsOverview from "../Components/PillarsOverview"
import Quote from "../Components/Quote"
import Testimonials from "../Components/Testimonials"
import Contact from "../Components/Contact"
import WhyChoose from "../Components/WhyChoose"

const Home = () => (
  <>
    <Hero id="hero" />
    <Services id="services" />
    <PillarsOverview id="pillars" />
    <WhyChoose id="why" />
    <Quote id="quote" />
    <Testimonials id="testimonials" />
    <Contact id="contact" />
  </>
)

export default Home
