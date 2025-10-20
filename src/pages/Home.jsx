import React from "react"
import Hero from "../Components/Hero"
import Services from "../Components/Services"
import Testimonials from "../Components/Testimonials"
import Contact from "../Components/Contact"
import SEO from "../Components/SEO"

const Home = () => {
  return (
    <>
      <SEO
        title="Nex Digital Agency | AI-Powered Digital Marketing Agency"
        description="Nex Digital Agency builds AI-driven marketing systems that blend SEO, paid media, automation, and smart websites to convert around the clock."
        canonical="https://nexdigital.name.ng/"
        openGraph={{
          title: "Nex Digital Agency | AI-Powered Digital Marketing Agency",
          description:
            "Build a growth engine with AI websites, SEO, paid media, and automation. Nex Digital Agency keeps your pipeline full with measurable ROI.",
          url: "https://nexdigital.name.ng/",
          image: "https://nexdigital.name.ng/nex.jpg",
          siteName: "Nex Digital Agency",
          locale: "en",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Nex Digital Agency | AI-Powered Digital Marketing Agency",
          description: "AI websites, SEO, paid media, and automation workflows engineered for predictable growth.",
          image: "https://nexdigital.name.ng/nex.jpg",
        }}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nex Digital Agency",
          url: "https://nexdigital.name.ng/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://nexdigital.name.ng/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Hero id="hero" />
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
    </>
  )
}

export default Home

