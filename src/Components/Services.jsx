import React from "react"
import { ArrowUpRight } from "lucide-react"
import SeoIllustration from "../assets/tokyo-magnifier-web-search-with-elements 2.png"
import PpcIllustration from "../assets/tokyo-selecting-a-value-in-the-browser-window 1.png"
import SocialIllustration from "../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
import EmailIllustration from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png"
import ContentIllustration from "../assets/tokyo-many-browser-windows-with-different-information 1.png"
import AnalyticsIllustration from "../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"

const services = [
  {
    title: "Search engine optimization",
    background: "#F3F3F3",
    text: "#000000",
    illustration: SeoIllustration,
  },
  {
    title: "Pay-per-click advertising",
    background: "#D81F26",
    text: "#000000",
    illustration: PpcIllustration,
  },
  {
    title: "Social Media Marketing",
    background: "#000000",
    text: "#FFFFFF",
    illustration: SocialIllustration,
  },
  {
    title: "Email Marketing",
    background: "#F3F3F3",
    text: "#000000",
    illustration: EmailIllustration,
  },
  {
    title: "Content Creation",
    background: "#D81F26",
    text: "#000000",
    illustration: ContentIllustration,
  },
  {
    title: "Analytics and Tracking",
    background: "#F3F3F3",
    text: "#000000",
    illustration: AnalyticsIllustration,
  },
]

const Services = () => {
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
            We partner with marketing leaders to design campaigns that ship fast, measure clearly, and scale sustainably.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-6 rounded-[30px] border border-white/15 px-6 py-8 shadow-[0px_6px_0px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_18px_50px_rgba(216,31,38,0.25)] sm:px-8 sm:py-10"
              style={{ background: service.background, color: service.text }}
            >
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit rounded-[6px] bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white">
                  Service
                </span>
                <h3 className="text-lg font-space-grotesk font-semibold sm:text-xl md:text-[24px]">
                  {service.title}
                </h3>
              </div>
              <img
                src={service.illustration}
                alt={`${service.title} illustration`}
                className="h-[130px] w-full object-contain"
                loading="lazy"
              />
              <a
                href="#"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-black sm:text-base"
                style={{ color: service.text === "#FFFFFF" ? "#FFFFFF" : "#000000" }}
              >
                Learn more
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  style={{ color: service.text === "#FFFFFF" ? "#FFFFFF" : "#000000" }}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
