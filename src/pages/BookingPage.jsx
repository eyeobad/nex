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

        <div className="relative mx-auto flex w-full max-w-[820px] flex-col gap-10 px-4 sm:px-6 lg:px-10 xl:px-[100px]">
          <div className="flex flex-col items-center gap-4 text-center" data-booking-anim>
            <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#D81F26]/80">
              Book an appointment
            </span>
            <h1 className="font-space-grotesk text-[32px] font-semibold leading-[40px] sm:text-[38px] sm:leading-[46px]">
              Pick a time that works best for you
            </h1>
          </div>

          <div
            className="flex w-full flex-col gap-4"
            data-booking-anim
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/HarhKYTGPGECsb5jGWL8?transparent=1"
              title="Schedule with Nex Digital"
              loading="lazy"
              style={{ width: "100%", border: "none",backgroundColor:"black", overflow: "hidden", minHeight: "760px" }}
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
