import React, { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Linkedin } from "lucide-react"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const teamMembers = [
  {
    id: 1,
    name: "Oguda Victor",
    role: "Co-Founder",
    bio: "Architects the growth vision, aligning acquisition and retention motions around business outcomes.",
    initials: "OG",
    accent: "#D81F26",
  },
  {
    id: 2,
    name: "Samuel Oladokun",
    role: "Co-Founder",
    bio: "Keeps multidisciplinary squads sprinting in sync with razor-sharp communication and delivery rituals.",
    initials: "SO",
    accent: "#FD853A",
  },
  {
    id: 3,
    name: "VINCENT MAYOWA",
    role: "Senior SEO Strategist",
    bio: "Transforms search intent into scalable content engines that win rankings, traffic, and conversions.",
    initials: "VM",
    accent: "#F83F62",
  },
  
]

const TeamCard = forwardRef(({ member }, ref) => (
  <article
    ref={ref}
    className="group relative flex h-full flex-col gap-7 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#12131a] via-[#0d0e13] to-[#06070c] p-7 shadow-[0px_20px_55px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-2 sm:p-8 lg:gap-8"
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      style={{ background: `radial-gradient(70% 50% at 50% 8%, ${member.accent}2b 0%, transparent 70%)` }}
    />
    <div className="relative flex items-start justify-between gap-5 sm:gap-6">
      <div className="flex items-end gap-4 sm:gap-5">
        <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[24px] bg-[#0b0c12] sm:h-[88px] sm:w-[88px]">
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#FD853A] via-[#F83F62] to-[#D81F26] opacity-90 blur-md transition duration-500 group-hover:opacity-100" />
          <span className="relative font-space-grotesk text-[22px] font-semibold text-black sm:text-[26px]">{member.initials}</span>
        </div>
        <div>
          <h3 className="font-space-grotesk text-[18px] font-semibold text-white sm:text-[21px] lg:text-[24px]">{member.name}</h3>
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-white/55 sm:text-[13px]">{member.role}</p>
        </div>
      </div>
      <a
        href="#"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-white/60 hover:text-white sm:h-11 sm:w-11"
        aria-label={`Visit ${member.name}'s LinkedIn profile`}
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    <p className="relative text-sm leading-relaxed text-white/70 sm:text-[15px] lg:text-[16px]">{member.bio}</p>
  </article>
))

TeamCard.displayName = "TeamCard"

const Team = ({ id }) => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    gsap.set(cards, { autoAlpha: 0, y: 50 })

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        })
        .to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.12,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[9px] border border-white/15 bg-black/85 px-[12px] py-[12px] shadow-[0px_6px_0px_#191A23]">
            <h2 className="font-space-grotesk text-[26px] font-medium leading-[34px] text-white sm:text-[32px] sm:leading-[42px] lg:text-[38px] lg:leading-[48px]">
              The experts
            </h2>
          </div>
          <p className="max-w-xl text-[13px] leading-relaxed text-white/65 sm:text-[15px]">
            A multidisciplinary crew blending strategy, performance, and storytelling so your brand grows with momentum.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team


