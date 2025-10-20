import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import image2 from "../assets/Graident Ai Robot.jpg"
import image from "../assets/ai agent.jpg"




if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const AIConversion = ({ id }) => {
  const sectionRef = useRef(null)
  const [chatbotLoaded, setChatbotLoaded] = useState(false)
  const [voiceAgentLoaded, setVoiceAgentLoaded] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".ai-card"), {
        autoAlpha: 0,
        y: 20,
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
        <header className="space-y-4">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#D81F26]">AI Conversion & Qualification</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <h3 className="font-space-grotesk text-[30px] font-medium leading-[38px] sm:text-[36px] sm:leading-[44px]">
              AI-powered engagement that works while you sleep
            </h3>
            <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
              Intelligent chat, forms, and voice agents join every engagement we launch, safely qualifying leads, booking meetings, and feeding
              your CRM without adding extra headcount.
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="ai-card flex h-full flex-col gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#111014] shadow-[0px_24px_70px_rgba(0,0,0,0.4)]">
            <div className="relative h-64 w-full overflow-hidden">
              {!chatbotLoaded && <div className="image-skeleton absolute inset-0" aria-hidden="true" />}
              <img
                src={image}
                alt="Operator monitoring an AI chatbot dashboard on a laptop"
                className={`h-64 w-full object-cover transition-opacity duration-500 ${chatbotLoaded ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setChatbotLoaded(true)}
              />
            </div>
            <div className="flex flex-col gap-3 px-6 pb-8 sm:px-8">
              <h4 className="font-space-grotesk text-[22px] font-semibold text-white">AI Website Chatbot</h4>
              <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">
                Trained on your business data, this bot provides instant support, reduces bounce rates, and books appointments straight into your sales calendar.
              </p>
            </div>
          </article>

          <article className="ai-card flex h-full flex-col gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#111014] shadow-[0px_24px_70px_rgba(0,0,0,0.4)]">
            <div className="relative h-64 w-full overflow-hidden">
              {!voiceAgentLoaded && <div className="image-skeleton absolute inset-0" aria-hidden="true" />}
              <img
                src={image2}
                alt="Specialist wearing a headset while supervising automated voice calls"
                className={`h-64 w-full object-cover transition-opacity duration-500 ${voiceAgentLoaded ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setVoiceAgentLoaded(true)}
              />
            </div>
            <div className="flex flex-col gap-3 px-6 pb-8 sm:px-8">
              <h4 className="font-space-grotesk text-[22px] font-semibold text-white">AI Voice Agent</h4>
              <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">
                Handles inbound calls, pre-qualifies leads, and ensures your human team only engages with high-potential opportunities.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AIConversion

