import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    category: "Website Type",
    foundation: "Smart Landing Page",
    accelerator: "Multi-Page Smart Site",
    transformation: "Multi-Page Smart Site",
  },
  {
    category: "AI Conversion Tools",
    foundation: "Form Capture",
    accelerator: "Form Capture + AI Chatbot & Voice Agent",
    transformation: "Form Capture + AI Chatbot & Voice Agent",
  },
  {
    category: "Search Engine Optimization",
    foundation: "Basic",
    accelerator: "Advanced",
    transformation: "Advanced",
  },
  {
    category: "Business Automation Suite",
    foundation: "–",
    accelerator: "CRM, Email, Booking",
    transformation: "CRM, Email, Booking",
  },
  {
    category: "Foundational Branding",
    foundation: "–",
    accelerator: "–",
    transformation: "Full Package",
  },
  {
    category: "Ad Campaign Management",
    foundation: "–",
    accelerator: "–",
    transformation: "Yes · Google, Meta, X",
  },
  {
    category: "Proactive Lead Scraping",
    foundation: "–",
    accelerator: "–",
    transformation: "Yes",
  },
]

const FeatureComparison = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".comparison-row"), {
        autoAlpha: 0,
        y: 18,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="space-y-4 text-left">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">Comparison</span>
          </div>
          <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
            Comprehensive feature comparison across packages
          </h3>
          <p className="max-w-3xl text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
            Understand the distinct advantages of each package—from foundational website solutions to advanced growth and market domination strategies.
          </p>
        </header>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101013] shadow-[0px_24px_70px_rgba(0,0,0,0.4)]">
          <table className="w-full table-fixed text-left text-sm text-white/80 sm:text-base">
            <thead className="bg-[#0B0B0E]/80 text-xs uppercase tracking-[0.28em] text-white/60 sm:text-sm">
              <tr>
                <th className="px-6 py-4 sm:px-8">Feature Category</th>
                <th className="px-6 py-4 sm:px-8">Nex Foundation</th>
                <th className="px-6 py-4 sm:px-8">Nex Accelerator</th>
                <th className="px-6 py-4 sm:px-8">Nex Transformation</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.category} className="comparison-row border-t border-white/10">
                  <th className="px-6 py-4 font-space-grotesk text-white sm:px-8">{row.category}</th>
                  <td className="px-6 py-4 sm:px-8">{row.foundation}</td>
                  <td className="px-6 py-4 sm:px-8">{row.accelerator}</td>
                  <td className="px-6 py-4 sm:px-8">{row.transformation}</td>
                </tr>
              ))}
              <tr className="comparison-row border-t border-white/10 bg-[#0B0B0E] font-space-grotesk text-sm uppercase tracking-[0.22em] text-white">
                <th className="px-6 py-4 sm:px-8">Pricing</th>
                <td className="px-6 py-4 sm:px-8">Setup $1,000 · $100/mo</td>
                <td className="px-6 py-4 sm:px-8">Setup $2,000 · $200/mo</td>
                <td className="px-6 py-4 sm:px-8">Setup $5,000 · $400/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default FeatureComparison
