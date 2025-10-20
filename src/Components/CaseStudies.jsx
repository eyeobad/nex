import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

import { ArrowUpRight } from "lucide-react"

const studies = [
  {
    headline: "Fintech lender triples SQLs with automation-ready website",
    summary:
      "Rebuilt the digital experience with AI qualifying flows, automated documentation, and segment-specific messaging-driving 312% more sales-qualified leads in 90 days.",
    metric: "312% lift in SQL volume",
    href: "#fintech-growth",
  },
  {
    headline: "Healthcare group cuts lead response time from 2 days to 12 minutes",
    summary:
      "Implemented RevOps automations, multi-channel nurturing, and experiment-led creative testing that doubled consultation bookings while reducing cost per acquisition by 41%.",
    metric: "41% lower CPA",
    href: "#healthcare-automation",
  },
  {
    headline: "B2B SaaS brand secures 5x content ROI with topical authority programme",
    summary:
      "Delivered a research-backed SEO and content engine, blending executive insights with product education, resulting in a 5x increase in pipeline attributed to organic search.",
    metric: "5x organic pipeline",
    href: "#saas-seo",
  },
]

const CaseStudies = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".case-card", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
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
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[9px] border border-white/12 bg-black/85 px-[12px] py-[12px] shadow-[0px_6px_0px_#191A23]">
            <h2 className="font-space-grotesk text-[26px] font-medium leading-[34px] text-white sm:text-[32px] sm:leading-[42px] lg:text-[38px] lg:leading-[48px]">
              Case Studies
            </h2>
          </div>
          <p className="max-w-2xl text-[13px] leading-relaxed text-white/65 sm:text-[15px]">
            Explore real-world stories of how Nex Digital Agency pairs strategy, performance media, and storytelling to unlock measurable growth across industries.
          </p>
        </header>

        <div className="relative overflow-hidden rounded-[45px] border border-white/12 bg-gradient-to-br from-[#0a0a0d] via-[#09090c] to-[#050506] shadow-[0px_24px_60px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col divide-y divide-white/10 sm:flex-row sm:gap-16 sm:divide-y-0 sm:divide-x sm:divide-white/10">
            {studies.map((study, index) => (
              <article
                key={study.headline}
                className="case-card flex flex-1 flex-col gap-6 px-6 py-10 sm:px-10 lg:px-12"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D81F26]/80">{`Case ${index + 1}`}</span>
                <h3 className="font-space-grotesk text-[20px] font-semibold text-white sm:text-[24px] lg:text-[26px]">{study.headline}</h3>
                <p className="text-sm leading-relaxed text-white/85 sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
                  {study.summary}
                </p>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  {study.metric}
                </div>
                <a
                  href={study.href}
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-[#D81F26] sm:text-base lg:text-[20px] lg:leading-[28px]"
                >
                  Learn more
                  <span className="relative flex h-5 w-5 items-center justify-center text-[#D81F26] sm:h-6 sm:w-6">
                    <ArrowUpRight
                      className="h-5 w-5 -rotate-12 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      strokeWidth={2.4}
                    />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


