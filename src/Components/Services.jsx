import React, { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import SeoIllustration from "../assets/tokyo-magnifier-web-search-with-elements 2.png"
import PpcIllustration from "../assets/tokyo-selecting-a-value-in-the-browser-window 1.png"
import SocialIllustration from "../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
import EmailIllustration from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png"
import ContentIllustration from "../assets/tokyo-many-browser-windows-with-different-information 1.png"
import AnalyticsIllustration from "../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"

const services = [
  {
    id: "seo",
    card: {
      background: "#F3F3F3",
      border: "#000000",
      text: "#000000",
    },
    titleBlock: {
      width: 221,
      height: 210,
      segments: [
        { text: "Search engine", background: "#000000", color: "#FFFFFF", width: 221 },
        { text: "optimization", background: "#000000", color: "#FFFFFF", width: 197 },
      ],
    },
    link: {
      color: "#000000",
      circleBackground: "#000000",
      iconColor: "#FFFFFF",
    },
    illustration: {
      src: SeoIllustration,
      alt: "Search engine optimization illustration",
      width: 210,
      height: 170,
    },
  },
  {
    id: "ppc",
    card: {
      background: "#D81F26",
      border: "#000000",
      text: "#000000",
    },
    titleBlock: {
      width: 209,
      height: 210,
      segments: [
        { text: "Pay-per-click", background: "#000000", color: "#FFFFFF", width: 209 },
        { text: "advertising", background: "#000000", color: "#FFFFFF", width: 195 },
      ],
    },
    link: {
      color: "#000000",
      circleBackground: "#000000",
      iconColor: "#FFFFFF",
    },
    illustration: {
      src: PpcIllustration,
      alt: "Pay-per-click advertising illustration",
      width: 210,
      height: 148,
    },
  },
  {
    id: "social",
    card: {
      background: "#000000",
      border: "#000000",
      text: "#FFFFFF",
    },
    titleBlock: {
      width: 197,
      height: 210,
      segments: [
        { text: "Social Media", background: "#FFFFFF", color: "#000000", width: 197 },
        { text: "Marketing", background: "#FFFFFF", color: "#000000", width: 183 },
      ],
    },
    link: {
      color: "#FFFFFF",
      circleBackground: "#FFFFFF",
      iconColor: "#000000",
    },
    illustration: {
      src: SocialIllustration,
      alt: "Social media marketing illustration",
      width: 210,
      height: 210,
    },
  },
  {
    id: "email",
    card: {
      background: "#F3F3F3",
      border: "#000000",
      text: "#000000",
    },
    titleBlock: {
      width: 164,
      height: 210,
      segments: [
        { text: "Email", background: "#000000", color: "#FFFFFF", width: 133 },
        { text: "Marketing", background: "#000000", color: "#FFFFFF", width: 137 },
      ],
    },
    link: {
      color: "#000000",
      circleBackground: "#000000",
      iconColor: "#FFFFFF",
    },
    illustration: {
      src: EmailIllustration,
      alt: "Email marketing illustration",
      width: 210,
      height: 193,
      flipHorizontal: true,
    },
  },
  {
    id: "content",
    card: {
      background: "#D81F26",
      border: "#000000",
      text: "#000000",
    },
    titleBlock: {
      width: 164,
      height: 210,
      segments: [
        { text: "Content", background: "#000000", color: "#FFFFFF", width: 133 },
        { text: "Creation", background: "#000000", color: "#FFFFFF", width: 137 },
      ],
    },
    link: {
      color: "#000000",
      circleBackground: "#000000",
      iconColor: "#FFFFFF",
    },
    illustration: {
      src: ContentIllustration,
      alt: "Content creation illustration",
      width: 210,
      height: 196,
    },
  },
  {
    id: "analytics",
    card: {
      background: "#000000",
      border: "#000000",
      text: "#FFFFFF",
    },
    titleBlock: {
      width: 213,
      height: 210,
      segments: [
        { text: "Analytics", background: "#F3F3F3", color: "#000000", width: 213 },
        { text: "and Tracking", background: "#F3F3F3", color: "#000000", width: 138 },
      ],
    },
    link: {
      color: "#FFFFFF",
      circleBackground: "#FFFFFF",
      iconColor: "#000000",
    },
    illustration: {
      src: AnalyticsIllustration,
      alt: "Analytics and tracking illustration",
      width: 210,
      height: 170,
    },
  },
]

const Services = () => {
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(() => services.map(() => false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = Number(entry.target.dataset.index)
          if (Number.isNaN(index)) return

          setVisibleCards((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-black text-white">
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
          {services.map((service, index) => (
            <article
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-index={index}
              className={`box-border flex w-full max-w-[600px] flex-col gap-8 rounded-[45px] border px-6 py-8 shadow-[0px_5px_0px_#191A23] transition-all duration-700 ease-out sm:px-8 sm:py-10 md:h-[310px] md:flex-row md:items-center md:justify-between md:gap-[77px] md:px-[50px] md:py-[50px] ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                backgroundColor: service.card.background,
                borderColor: service.card.border,
                color: service.card.text,
              }}
            >
              <div
                className="flex w-full flex-col justify-between gap-[60px] md:w-auto"
                style={{
                  maxWidth: `${service.titleBlock.width}px`,
                  height: `${service.titleBlock.height}px`,
                }}
              >
                <div className="flex flex-col gap-[10px]">
                  {service.titleBlock.segments.map((segment) => (
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

                <a
                  href="#"
                  className="group inline-flex items-center gap-[15px] font-space-grotesk text-[18px] font-medium leading-[28px] sm:text-[20px]"
                  style={{ color: service.link.color }}
                >
                  <span
                    className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: service.link.circleBackground }}
                  >
                    <ArrowUpRight className="h-5 w-5" strokeWidth={3} style={{ color: service.link.iconColor }} />
                  </span>
                  Learn more
                </a>
              </div>

              <div className="flex w-full justify-center md:w-auto">
                <img
                  src={service.illustration.src}
                  alt={service.illustration.alt}
                  className="h-[150px] w-full max-w-[210px] object-contain md:h-[170px]"
                  style={{
                    height: `${service.illustration.height}px`,
                    width: `${service.illustration.width}px`,
                    transform: service.illustration.flipHorizontal ? "scaleX(-1)" : undefined,
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
