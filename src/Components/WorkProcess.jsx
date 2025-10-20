import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

import { Minus, Plus } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    theme: "dark",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    description:
      "We audit your presence, analyse competitors, and craft a full-funnel strategy that prioritises the quickest wins while building long-term momentum.",
    theme: "light",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Our specialists roll out campaigns, landing pages, and automation flows with tight QA to ensure every touchpoint feels on-brand and optimised.",
    theme: "light",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "We monitor performance daily, iterate on creative and targeting, and run structured experiments to unlock incremental growth.",
    theme: "light",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "You receive transparent dashboards and narrative updates that connect marketing impact to business outcomes.",
    theme: "light",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "Insights from every campaign cycle flow back into the roadmap so your growth engine compounds over time.",
    theme: "light",
  },
]


const WorkProcess = ({ id }) => {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = itemRefs.current.filter(Boolean)
    if (!cards.length) return

    const ctx = gsap.context(() => {
      gsap.from(cards, {
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


  const [activeStep, setActiveStep] = useState(1)

  const toggleStep = (id) => {
    setActiveStep((prev) => (prev === id ? null : id))
  }

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 sm:px-8 lg:px-12 xl:px-[100px]">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex max-w-xl rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <h2 className="font-space-grotesk text-[32px] font-medium leading-[42px] text-white sm:text-[40px] sm:leading-[51px]">
              Step-by-step guide to achieving your goals
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            A simple, collaborative process that keeps you informed and accelerates time-to-impact.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id
            const isDark = step.theme === "dark"

            return (
              <article
                key={step.id}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`process-card relative overflow-hidden rounded-[45px] border px-6 py-8 shadow-[0px_5px_0px_#191A23] transition-colors duration-300 sm:px-10 sm:py-10 lg:px-[60px] lg:py-[41px] ${
                  isDark ? "bg-black border-black" : "bg-[#F3F3F3] border-black text-black"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleStep(step.id)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <div className="flex flex-1 items-center gap-6 sm:gap-10">
                    <span
                      className={`font-space-grotesk text-[34px] font-medium leading-[42px] sm:text-[48px] sm:leading-[56px] ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-space-grotesk text-[24px] font-medium leading-[32px] sm:text-[30px] sm:leading-[38px] ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black transition-colors ${
                      isDark ? "bg-[#F3F3F3]" : "bg-black"
                    }`}
                  >
                    {isActive ? (
                      <Minus className={`h-6 w-6 ${isDark ? "text-black" : "text-white"}`} strokeWidth={3} />
                    ) : (
                      <Plus className={`h-6 w-6 ${isDark ? "text-black" : "text-white"}`} strokeWidth={3} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div
                      className={`mt-6 border-t pt-6 text-sm leading-relaxed sm:text-base ${
                        isDark ? "border-white/20 text-white/80" : "border-black/10 text-black/70"
                      }`}
                    >
                      {step.description}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess


