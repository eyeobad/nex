import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const packages = [
  {
    name: "Nex Foundation",
    headline: "Establishing Your Core Online Presence",
    intro: "Designed for businesses launching their first professional lead engine, building a robust foundation.",
    features: [
      "High-converting landing page focused on visitor conversion",
      "Foundational on-page SEO for key search terms",
      "Advanced lead capture with click-to-call & smart forms",
      "Performance monitoring with bi-monthly updates",
    ],
    price: "Setup $1,000 · $100/mo",
  },
  {
    name: "Nex Accelerator",
    headline: "Accelerate Growth with AI & Automation",
    intro: "Expand digital presence, automate workflows, and leverage AI to maximise lead conversion and efficiency.",
    features: [
      "Multi-page smart website with advanced features",
      "AI website chatbot & voice agent for 24/7 engagement",
      "Comprehensive automation suite (CRM, campaigns, booking)",
      "Unified communication hub for email, SMS, and social DMs",
    ],
    price: "Setup $2,000 · $200/mo",
  },
  {
    name: "Nex Transformation",
    headline: "Everything You Need to Dominate Your Market",
    intro: "Our most extensive programme covering every facet of digital growth and proactive lead capture.",
    features: [
      "Full foundational branding package",
      "Advanced multi-platform ad management",
      "Proactive lead scraping and nurturing",
      "Unlimited strategic support and consulting",
    ],
    price: "Setup $5,000 · $400/mo",
  },
]

const Packages = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".package-card"), {
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-4">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">Packages</span>
          </div>
          <div className="max-w-3xl space-y-3">
            <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
              Choose the growth system that meets you where you are
            </h3>
            <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
              From foundational launch pads to full-scale automation, every package is engineered to drive revenue and a measurable ROI.
            </p>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="package-card flex h-full flex-col gap-6 rounded-[28px] border border-white/10 bg-[#101013] px-6 py-8 shadow-[0px_24px_70px_rgba(0,0,0,0.4)] transition hover:border-[#D81F26] sm:px-8">
              <div className="flex flex-col gap-3">
                <h4 className="font-space-grotesk text-[22px] font-semibold text-white">{pkg.name}</h4>
                <p className="text-[15px] font-medium text-white/70 sm:text-base">{pkg.headline}</p>
                <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">{pkg.intro}</p>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-white/70 sm:text-base">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D81F26]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                {pkg.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
