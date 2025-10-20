
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const PillarDetail = ({ id, eyebrow, title, description, items }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".pillar-card"), {
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
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
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">{eyebrow}</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
              {title}
            </h3>
            <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
              {description}
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ heading, copy }) => (
            <article
              key={heading}
              className="pillar-card flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-[#101013] px-6 py-8 shadow-[0px_20px_60px_rgba(0,0,0,0.35)] transition hover:border-[#D81F26] sm:px-8"
            >
              <h4 className="font-space-grotesk text-[20px] font-semibold text-white">{heading}</h4>
              <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PillarDetail


