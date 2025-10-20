import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const differentiators = [
  {
    title: "Comprehensive Growth Ecosystem",
    description:
      "A single partner for integrated strategy, from brand development to automated lead nurturing, ensuring cohesive execution.",
  },
  {
    title: "Unyielding ROI Commitment",
    description:
      "Every initiative is engineered for tangible bottom-line impact, prioritising measurable outcomes over vanity metrics.",
  },
  {
    title: "Advanced AI-Driven Solutions",
    description:
      "Harness cutting-edge automation for superior conversion and operational efficiency, securing a durable competitive edge.",
  },
  {
    title: "Versatile Industry Expertise",
    description:
      "Our adaptive frameworks consistently deliver results across diverse industries and business models.",
  },
]

const WhyChoose = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".why-card"), {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="space-y-4 text-left">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">Why Choose Us</span>
          </div>
          <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
            Nex Digital Agency is your growth partner
          </h3>
          <p className="max-w-3xl text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
            Choosing a growth partner is a major decision. We combine strategy, automation, and relentless ROI focus to help you win faster.
          </p>
        </header>

      
      </div>
    </section>
  )
}

export default WhyChoose


