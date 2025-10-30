import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import SEO from "../Components/SEO"

const BookingPage = () => {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js"
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script")
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !glowRef.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-booking-anim]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      })

      gsap.to(glowRef.current, {
        rotate: 360,
        duration: 22,
        ease: "none",
        repeat: -1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Book a Strategy Session | Nex Digital Agency"
        description="Reserve time with Nex Digital Agency to map your growth roadmap, review your funnel, and get a tailored action plan powered by AI and automation."
        canonical="https://nexdigitals.agency/booking"
        openGraph={{
          title: "Book a Strategy Session | Nex Digital Agency",
          description:
            "Choose a time that works for you. Our strategists will audit your current growth engine and prepare a tailored next-step plan for your team.",
          url: "https://nexdigitals.agency/booking",
          image: "https://nexdigitals.agency/nex.jpg",
          siteName: "Nex Digital Agency",
          locale: "en",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Book a Strategy Session | Nex Digital Agency",
          description: "Schedule a call to see how Nex Digital engineers always-on growth systems with AI, automation, and performance marketing.",
          image: "https://nexdigitals.agency/nex.jpg",
        }}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#040406] py-20 text-white sm:py-24"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-[-14%] h-64 w-64 rounded-full bg-[#D81F26]/28 blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-18%] h-80 w-80 rounded-full bg-[#5A189A]/32 blur-[170px]" />
          <div
            ref={glowRef}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-white/[0.02] blur-[220px]"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1140px] flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-10 xl:px-[100px]">
          <div className="flex max-w-[460px] flex-col gap-6 lg:sticky lg:top-28 lg:h-fit" data-booking-anim>
            <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#D81F26]/80">
              Book a session
            </span>
            <h1 className="font-space-grotesk text-[32px] font-semibold leading-[40px] sm:text-[38px] sm:leading-[46px]">
              Choose a time to review your growth engine
            </h1>
            <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[17px]">
              Pick a slot that fits your schedule. We’ll audit your current funnel, surface quick wins, and map how Nex Digital can engineer
              an AI-augmented system that compounds revenue.
            </p>
            <ul className="space-y-3 text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <span>Strategy call with senior growth specialist (no sales pressure).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <span>Receive a tailored roadmap covering brand, web, SEO, automation, and analytics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <span>Expect a follow-up deck and project outline inside 48 hours.</span>
              </li>
            </ul>
          </div>

          <div
            className="flex w-full flex-1 flex-col gap-4 rounded-[28px] border border-white/12 bg-black/70 p-4 shadow-[0_28px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
            data-booking-anim
          >
            <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xs">
              Secure your slot below – calendar automatically adjusts to your timezone
            </div>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/HarhKYTGPGECsb5jGWL8"
              title="Schedule with Nex Digital"
              loading="lazy"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "760px" }}
              scrolling="no"
              id="HarhKYTGPGECsb5jGWL8_1761813501662"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingPage
