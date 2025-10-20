import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const GrowthPartner = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".growth-text"), {
        autoAlpha: 0,
        y: 28,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 sm:px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="growth-text space-y-4 rounded-[32px] border border-white/10 bg-[#101014] px-6 py-8 shadow-[0px_24px_70px_rgba(0,0,0,0.4)] sm:px-8">
          <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">Accelerating Digital Presence</span>
          <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
            Your growth partner, whatever your industry
          </h3>
          <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
            Nex Digital Agency transforms quiet online presences into powerful, automated growth engines. Our systems find new customers 24/7, streamline operations, and deliver a measurable financial return on every initiative.
          </p>
          <div className="flex items-start gap-3 rounded-[18px] border border-[#D81F26]/40 bg-[#D81F26]/10 px-5 py-4 text-left text-[15px] text-white/80 sm:text-base">
            <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#D81F26]" />
            Our focus is on delivering scalable, automated, and highly efficient growth-so your team can stay focused on high-value strategic initiatives.
          </div>
        </div>
        <div className="growth-text h-full overflow-hidden rounded-[32px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
            alt="Growth strategy session"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default GrowthPartner


