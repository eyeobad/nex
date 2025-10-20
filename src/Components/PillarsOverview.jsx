import React from "react"
import { Link } from "react-router-dom"

const pillars = [
  {
    id: "branding",
    title: "Foundational Branding & Identity",
    description: "Establish a powerful, memorable brand that resonates deeply with your target audience.",
    href: "/services/branding",
  },
  {
    id: "web",
    title: "Intelligent Web Development",
    description: "Build high-performing, AI-powered websites optimized for lead capture and conversion.",
    href: "/services/web",
  },
  {
    id: "seo",
    title: "Enhanced Digital Visibility & SEO",
    description: "Implement strategic SEO to ensure optimal discoverability by customers seeking your solutions.",
    href: "/services/seo",
  },
  {
    id: "lead",
    title: "Strategic Lead Generation & Acquisition",
    description: "Proactively expand your sales pipeline through targeted, multi-channel strategies and advanced intelligence.",
    href: "/services/lead",
  },
  {
    id: "automation",
    title: "Advanced Business Process Automation",
    description: "Engineer custom workflows to automate repetitive tasks, boosting efficiency and minimizing errors.",
    href: "/services/automation",
  },
]

const PillarsOverview = ({ id }) => (
  <section id={id} className="relative bg-black py-24 text-white">
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
          <h2 className="font-space-grotesk text-[28px] font-medium leading-[36px] text-white sm:text-[34px] sm:leading-[42px] lg:text-[38px] lg:leading-[46px]">
            The Five Pillars of Digital Growth
          </h2>
        </div>
        <p className="max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
          Our integrated strategy orchestrates five essential pillars that combine brand, technology, visibility, acquisition, and automation into one cohesive growth engine.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.id}
            className="group flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/10 bg-[#0E0E10] px-6 py-8 text-left shadow-[0px_20px_60px_rgba(0,0,0,0.35)] transition hover:border-[#D81F26] hover:shadow-[0px_28px_80px_rgba(0,0,0,0.45)] sm:px-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D81F26]/80">Pillar</span>
              <h3 className="font-space-grotesk text-[22px] font-medium leading-[30px] sm:text-[24px]">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{pillar.description}</p>
            </div>
            <Link
              to={pillar.href}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D81F26] transition hover:translate-x-1"
            >
              Explore pillar
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M10.75 3.5a.75.75 0 0 0-1.5 0v8.69L6.3 9.24a.75.75 0 0 0-1.06 1.06l4.242 4.244a.75.75 0 0 0 1.06 0l4.244-4.244a.75.75 0 0 0-1.06-1.06l-2.95 2.95z" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default PillarsOverview


