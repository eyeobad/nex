import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

export const packagesData = [
  { name: "Nex Foundation",
    headline: "Establishing Your Core Online Presence",
    intro: "Designed for businesses launching their first professional lead engine, building a robust foundation.",
    features: [
      "High-converting landing page focused on visitor conversion",
      "Foundational on-page SEO for key search terms",
      "Advanced lead capture with click-to-call and smart forms",
      "Performance monitoring with bi-monthly updates",
    ],
    pricing: { setup: "$1,000", monthly: "$100/mo" },
  },
  { name: "Nex Accelerator", // featured
    headline: "Accelerate Growth with AI and Automation",
    intro: "Expand digital presence, automate workflows, and leverage AI to maximise lead conversion and efficiency.",
    features: [
      "Multi-page smart website with advanced features",
      "AI website chatbot and voice agent for 24/7 engagement",
      "Comprehensive automation suite (CRM, campaigns, booking)",
      "Unified communication hub for email, SMS, and social DMs",
    ],
    pricing: { setup: "$2,000", monthly: "$200/mo" },
  },
  { name: "Nex Transformation",
    headline: "Everything You Need to Dominate Your Market",
    intro: "Our most extensive programme covering every facet of digital growth and proactive lead capture.",
    features: [
      "Full foundational branding package",
      "Advanced multi-platform ad management",
      "Proactive lead scraping and nurturing",
      "Unlimited strategic support and consulting",
    ],
    pricing: { setup: "$5,000", monthly: "$400/mo" },
  },
]

/** @param {{ id?: string, onPackageSelect?: (pkg:any)=>void, showClose?: boolean, onClose?: ()=>void }} props */
const Packages = ({ id, onPackageSelect = () => {}, showClose = false, onClose = () => {} }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".package-card")
      const featured = sectionRef.current.querySelector(".package-card.is-featured")
      const ctas = sectionRef.current.querySelectorAll(".get-offer, [data-cta='offer']")

      gsap.set(sectionRef.current, { overflowX: "clip" }) // belt-and-suspenders

      if (!prefersReduced) {
        // Scroll-in stagger
        gsap.from(cards, {
          autoAlpha: 0, y: 24, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        })

        // Hover tilt ONLY for pointer devices (never on touch)
        const mm = gsap.matchMedia()
        mm.add("(hover: hover) and (pointer: fine)", () => {
          cards.forEach((card) => {
            const tl = gsap.timeline({ paused: true })
            tl.to(card, {
              y: -3, rotateX: 0.6,
              duration: 0.22, ease: "power2.out",
              transformPerspective: 800, transformOrigin: "center",
            })
            card.addEventListener("mouseenter", () => tl.play())
            card.addEventListener("mouseleave", () => tl.reverse())
          })
        })

        // Pulse existing GET OFFER buttons
        ctas.forEach((btn) => {
          gsap.to(btn, {
            scale: 1.06,
            filter: "drop-shadow(0 0 8px rgba(216,31,38,0.35))",
            repeat: -1, yoyo: true, ease: "sine.inOut", duration: 1.15,
          })
        })

        // Spotlight middle card
        if (featured) {
          gsap.set(featured, { zIndex: 1 })
          gsap.timeline({ repeat: -1, yoyo: true }).to(featured, {
            boxShadow: "0px 0px 0px 1px rgba(216,31,38,0.28), 0px 24px 70px rgba(216,31,38,0.18)",
            duration: 1.6, ease: "sine.inOut",
          })
          gsap.to(featured, {
            scale: 1.02, duration: 0.45, ease: "power2.out",
            scrollTrigger: { trigger: featured, start: "top 85%", once: true },
          })
        }

        requestAnimationFrame(() => ScrollTrigger.refresh())
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const isFeatured = (name) => name === packagesData[1].name
  const handleSelect = (pkg) => onPackageSelect(pkg)

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative bg-black py-16 text-white sm:py-20 md:py-24 overflow-x-clip"
      style={{ contain: "paint" }}
    >
      {/* fixed Close button; never moves */}
      {showClose && (
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="fixed right-3 top-12 z-50 h-9 w-9 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white/80 hover:text-white hover:border-white/30 transition"
        >
          ✕
        </button>
      )}

      <style>{`
        .focus-ring{outline:none}
        .focus-ring:focus-visible{box-shadow:0 0 0 3px rgba(216,31,38,0.5)}
        /* FORCE TRUE CENTER ON MOBILE */
        @media (max-width: 767px){
          .packages-grid{ place-items: center; }        /* centers both axes */
          .package-card{ width: min(560px, 100%); }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-3 sm:gap-4">
          <div className="inline-flex w-fit rounded-[7px] bg-black px-[10px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <span className="font-space-grotesk text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D81F26]">Packages</span>
          </div>
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <h3 className="font-space-grotesk text-[24px] leading-[30px] sm:text-[30px] sm:leading-[38px] md:text-[36px] md:leading-[44px] font-medium">
              Choose the growth system that meets you where you are
            </h3>
            <p className="text-[14px] leading-relaxed text-white/70 sm:text-[15px] md:text-[18px] md:leading-[26px]">
              From foundational launch pads to full-scale automation, every package is engineered to drive revenue and measurable ROI.
            </p>
          </div>
        </header>

        {/* Mobile: 1-up centered. Desktop: 2/3 columns */}
        <div className="packages-grid mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {packagesData.map((pkg) => (
            <article
              key={pkg.name}
              className={[
                "package-card group relative flex flex-col gap-5 md:gap-6 rounded-[24px] md:rounded-[28px] border border-white/10 bg-[#101013] p-6 md:px-7 md:py-8 shadow-[0px_24px_70px_rgba(0,0,0,0.4)] transition-[border,transform,box-shadow] duration-300 ease-out hover:border-[#D81F26] focus-ring",
                isFeatured(pkg.name) ? "is-featured" : "",
              ].join(" ")}
              tabIndex={0}
              role="button"
              aria-label={`Select ${pkg.name}`}
              onKeyDown={(e) => (e.key === "Enter" ? handleSelect(pkg) : null)}
              style={{ willChange: "transform" }}
            >
              {/* Your existing CTA – leave className for pulse */}
              <button
                type="button"
                aria-label={`Get offer for ${pkg.name}`}
                onClick={() => handleSelect(pkg)}
                className="get-offer focus-ring absolute right-3 top-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80 hover:text-white hover:border-[#D81F26] hover:bg-[#D81F26]/20 transition"
              >
                GET OFFER
              </button>

              <div className="flex flex-col gap-2 md:gap-3">
                <h4 className="font-space-grotesk text-[20px] md:text-[22px] font-semibold text-white">{pkg.name}</h4>
                <p className="text-[13px] md:text-[15px] font-medium text-white/70">{pkg.headline}</p>
                <p className="text-[13px] md:text-[15px] leading-relaxed text-white/60">{pkg.intro}</p>
              </div>

              <ul className="flex flex-col gap-2.5 md:gap-3 text-[13px] md:text-[15px] leading-relaxed text-white/70">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D81F26]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
