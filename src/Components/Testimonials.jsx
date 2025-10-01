import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    id: 1,
    quote:
      "We have been working with .nex for the past year and have seen a significant rise in qualified pipeline. The team is proactive, transparent, and fully aligned with our revenue goals.",
    name: "John Smith",
    title: "Marketing Director · XYZ Corp",
  },
  {
    id: 2,
    quote:
      "Their sprint model helped us launch multi-channel campaigns twice as fast. Reporting is crisp, experimentation is disciplined, and the creative keeps compounding.",
    name: "Laura Chen",
    title: "VP Growth · Brightwave",
  },
  {
    id: 3,
    quote:
      "From lifecycle automation to paid media, every lever improved within a quarter. .nex feels like the growth crew we wished we had in-house.",
    name: "Ahmed Hassan",
    title: "Founder · Seedloop",
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const total = testimonials.length

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    gsap.set(cards, { autoAlpha: 0, y: 40 })

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
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const goPrev = () => setActive((prev) => (prev - 1 + total) % total)
  const goNext = () => setActive((prev) => (prev + 1) % total)

  return (
    <section ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[9px] border border-white/15 bg-black/85 px-[12px] py-[12px] shadow-[0px_6px_0px_#191A23]">
            <h2 className="font-space-grotesk text-[26px] font-medium leading-[34px] text-white sm:text-[32px] sm:leading-[42px] lg:text-[38px] lg:leading-[48px]">
              Testimonials
            </h2>
          </div>
          <p className="max-w-xl text-[13px] leading-relaxed text-white/65 sm:text-[15px]">
            Hear how marketing leaders partner with .nex to launch smarter, scale faster, and prove impact sooner.
          </p>
        </header>

        <div className="relative overflow-hidden rounded-[45px] border border-white/12 bg-gradient-to-br from-[#09090f] via-[#08080d] to-[#050509] px-4 py-14 sm:px-8 md:px-12 lg:px-16">
          <div className="relative mx-auto w-full max-w-[920px]">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === active

                return (
                  <article
                    key={testimonial.id}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className="w-full shrink-0 px-2 sm:px-4 lg:px-6"
                  >
                    <div
                      className={`relative mx-auto max-w-[680px] rounded-[38px] border ${
                        isActive ? "border-[#D81F26]" : "border-white/15"
                      } bg-gradient-to-br from-[#16171d] via-[#0f1014] to-[#0a0b11] px-6 py-10 text-left shadow-[0px_25px_60px_rgba(0,0,0,0.5)] sm:px-10 sm:py-12 lg:px-14`}
                    >
                      <p className="text-[15px] leading-relaxed text-white/85 sm:text-[18px] sm:leading-[28px]">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="mt-6 space-y-1">
                        <p className="font-space-grotesk text-[18px] font-semibold text-[#D81F26] sm:text-[20px]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-white/60 sm:text-[15px]">{testimonial.title}</p>
                      </div>

                      <span
                        aria-hidden
                        className={`pointer-events-none absolute -bottom-[44px] left-14 h-12 w-12 rotate-45 ${
                          isActive ? "border border-[#D81F26]" : "border border-white/18"
                        } bg-transparent`}
                      />
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute -bottom-[36px] left-[4.5rem] h-[42px] w-[42px] rotate-45 border-b-2 border-r-2 ${
                          isActive ? "border-white bg-[#16171d]" : "border-white/20 bg-[#14151a]"
                        }`}
                      />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            <div className="flex items-center gap-5 sm:gap-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white/60 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                {testimonials.map((testimonial, index) => (
                  <Star
                    key={testimonial.id}
                    className="h-4 w-4 transition-all"
                    strokeWidth={index === active ? 0 : 1.5}
                    color={index === active ? "#D81F26" : "rgba(255,255,255,0.35)"}
                    fill={index === active ? "#D81F26" : "none"}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white/60 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
