import React from "react"
import { useParams } from "react-router-dom"
import Quote from "../Components/Quote"
import Contact from "../Components/Contact"

const serviceContent = {
  branding: {
    title: "Foundational Branding & Identity",
    description:
      "Establish a cohesive brand system—logo, colour palette, typography, and messaging—that amplifies every touchpoint.",
  },
  web: {
    title: "Smart Website Development",
    description:
      "Launch AI-powered experiences engineered for speed, conversion, and automated lead capture across every page.",
  },
  seo: {
    title: "Digital Visibility & SEO",
    description:
      "Win strategic search positions with technical optimisation, authoritative content, and ongoing expansion.",
  },
  lead: {
    title: "Lead Generation & Acquisition",
    description:
      "Deploy multi-channel campaigns, precision paid media, and advanced scraping to continuously fill your pipeline.",
  },
  automation: {
    title: "Business Process Automation",
    description:
      "Engineer bespoke workflows, nurture sequences, and centralised communications that keep operations running 24/7.",
  },
}
const ServiceDetail = () => {
  const { slug } = useParams()
  const content = serviceContent[slug] || {
    title: "Services",
    description: "We design growth programs that blend performance media, lifecycle automation, and brand storytelling.",
  }

  return (
    <>
      <section className="relative bg-black py-24 text-white">
        <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6 px-4 text-center sm:px-6">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            {slug ? slug.replace('-', ' ') : 'services'}
          </span>
          <h1 className="font-space-grotesk text-[32px] font-medium leading-[38px] sm:text-[40px] sm:leading-[46px]">
            {content.title}
          </h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">{content.description}</p>
        </div>
      </section>
      <Quote id="quote" />
      <Contact id="contact" />
    </>
  )
}

export default ServiceDetail
