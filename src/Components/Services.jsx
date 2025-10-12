import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"
import SeoIllustration from "../assets/tokyo-magnifier-web-search-with-elements 2.png"
import PpcIllustration from "../assets/tokyo-selecting-a-value-in-the-browser-window 1.png"
import SocialIllustration from "../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
import EmailIllustration from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png"
import ContentIllustration from "../assets/tokyo-many-browser-windows-with-different-information 1.png"
import AnalyticsIllustration from "../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: "branding",
    titleSegments: [
      { text: "Foundational", background: "#000000", color: "#FFFFFF", width: 200 },
      { text: "Branding", background: "#000000", color: "#FFFFFF", width: 170 },
    ],
    card: { background: "#F3F3F3", border: "#000000", text: "#000000" },
    description: "Create a cohesive brand identity that becomes the blueprint for every growth initiative.",
    illustration: { src: ContentIllustration, alt: "Brand strategy illustration", width: 210, height: 180 },
  },
  {
    id: "web",
    titleSegments: [
      { text: "Smart", background: "#000000", color: "#FFFFFF", width: 140 },
      { text: "Websites", background: "#000000", color: "#FFFFFF", width: 180 },
    ],
    card: { background: "#D81F26", border: "#000000", text: "#000000" },
    description: "Build AI-powered, high-converting digital experiences that capture leads 24/7.",
    illustration: { src: SeoIllustration, alt: "Website performance illustration", width: 210, height: 170 },
  },
  {
    id: "seo",
    titleSegments: [
      { text: "Digital", background: "#FFFFFF", color: "#000000", width: 160 },
      { text: "Visibility", background: "#FFFFFF", color: "#000000", width: 190 },
    ],
    card: { background: "#000000", border: "#000000", text: "#FFFFFF" },
    description: "Dominate strategic search terms with ongoing SEO programmes that scale authority.",
    illustration: { src: AnalyticsIllustration, alt: "SEO analytics illustration", width: 210, height: 170 },
  },
  {
    id: "lead",
    titleSegments: [
      { text: "Lead", background: "#000000", color: "#FFFFFF", width: 140 },
      { text: "Acquisition", background: "#000000", color: "#FFFFFF", width: 220 },
    ],
    card: { background: "#F3F3F3", border: "#000000", text: "#000000" },
    description: "Fill your pipeline fast with precision multi-channel campaigns and advanced scraping.",
    illustration: { src: PpcIllustration, alt: "Lead generation illustration", width: 210, height: 170 },
  },
  {
    id: "automation",
    titleSegments: [
      { text: "Process", background: "#000000", color: "#FFFFFF", width: 170 },
      { text: "Automation", background: "#000000", color: "#FFFFFF", width: 220 },
    ],
    card: { background: "#D81F26", border: "#000000", text: "#000000" },
    description: "Design custom workflows that automate operations, nurture leads, and centralise communication.",
    illustration: { src: EmailIllustration, alt: "Automation workflow illustration", width: 210, height: 190, flip: true },
  },
]

const Services = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
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
    <section id={id} ref={sectionRef} className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pb-20 pt-12 sm:px-10 md:px-16 xl:px-[100px]">
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-1 shadow-[0px_3px_0px_#191A23]">
            <h2 className="text-[26px] font-space-grotesk font-medium leading-[34px] text-white sm:text-[32px] md:text-[40px] md:leading-[51px]">
              Services
            </h2>
          </div>
          <p className="max-w-xl text-[14px] leading-relaxed text-white/75 sm:text-sm md:text-[18px] md:leading-[23px]">
            We offer a range of services to help businesses grow and succeed online. These include:
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-card box-border flex w-full max-w-[600px] flex-col gap-8 rounded-[45px] border px-6 py-8 shadow-[0px_5px_0px_#191A23] sm:px-8 sm:py-10 md:h-[310px] md:flex-row md:items-center md:justify-between md:gap-[77px] md:px-[50px] md:py-[50px]"
              style={{
                backgroundColor: service.card.background,
                borderColor: service.card.border,
                color: service.card.text,
              }}
            >
              <div className="flex w-full flex-col justify-between gap-[60px] md:w-auto" style={{ maxWidth: "221px", height: "210px" }}>
                <div className="flex flex-col gap-[10px]">
                  {service.titleSegments.map((segment) => (
                    <span
                      key={`${service.id}-${segment.text}`}
                      className="inline-flex items-center rounded-[7px] px-[7px] py-[6px] font-space-grotesk text-[24px] font-medium leading-[32px] sm:text-[28px] sm:leading-[34px] md:text-[30px] md:leading-[38px]"
                      style={{
                        backgroundColor: segment.background,
                        color: segment.color,
                        minWidth: `${segment.width}px`,
                        height: "38px",
                      }}
                    >
                      {segment.text}
                    </span>
                  ))}
                </div>

                <p
                  className="text-[15px] leading-relaxed sm:text-base"
                  style={{ color: service.card.text === "#FFFFFF" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)" }}
                >
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="group inline-flex items-center gap-[15px] font-space-grotesk text-[18px] font-medium leading-[28px] sm:text-[20px]"
                  style={{ color: service.card.text === "#FFFFFF" ? "#FFFFFF" : "#000000" }}
                >
                  <span
                    className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: service.card.text === "#FFFFFF" ? "#FFFFFF" : "#000000" }}
                  >
                    <ArrowUpRight
                      className="h-5 w-5"
                      strokeWidth={3}
                      style={{ color: service.card.text === "#FFFFFF" ? "#000000" : "#FFFFFF" }}
                    />
                  </span>
                  Learn more
                </Link>
              </div>

              <div className="flex w-full justify-center md:w-auto">
                <img
                  src={service.illustration.src}
                  alt={service.illustration.alt}
                  className="h-[150px] w-full max-w-[210px] object-contain md:h-[170px]"
                  style={{
                    height: `${service.illustration.height}px`,
                    width: `${service.illustration.width}px`,
                    transform: service.illustration.flip ? "scaleX(-1)" : undefined,
                  }}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
