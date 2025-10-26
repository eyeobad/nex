import React from "react"
import Team from "../Components/Team"
import Quote from "../Components/Quote"
import PillarsOverview from "../Components/PillarsOverview"
import WhyChoose from "../Components/WhyChoose"
import SEO from "../Components/SEO"

const About = () => (
  <>
    <SEO
      title="About Nex Digital Agency | Integrated Growth Partner"
      description="Meet Nex Digital Agency, the growth team blending brand strategy, AI-powered marketing, and automation to deliver compounding revenue results for ambitious companies."
      canonical="https://nexdigitals.agency/about"
      openGraph={{
        title: "About Nex Digital Agency | Integrated Growth Partner",
        description:
          "Discover the strategists, technologists, and storytellers helping modern brands convert intent into revenue through automation-first marketing.",
        url: "https://nexdigitals.agency/about",
        image: "https://nexdigitals.agency/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
      twitter={{
        card: "summary_large_image",
        title: "About Nex Digital Agency",
        description:
          "We combine brand, performance, automation, and analytics into one growth engine built for scale.",
        image: "https://nexdigitals.agency/nex.jpg",
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Nex Digital Agency",
        url: "https://nexdigitals.agency",
        logo: "https://nexdigitals.agency/nex.jpg",
        sameAs: ["https://www.tiktok.com/@nexxtdigitalagency"],
      }}
    />
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-10 px-4 sm:px-6 lg:px-10">
        <div className="space-y-5 text-center sm:text-left">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:self-start">
            About Nex
          </span>
          <h1 className="font-space-grotesk text-[34px] font-semibold leading-[40px] sm:text-[42px] sm:leading-[50px]">
            We build full-funnel growth systems for trailblazers
          </h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Nex Digital Agency is a collective of strategists, creatives, and technologists. We partner with founders and marketing leaders
            to architect brands, experiences, and automation that make every dollar invested in growth measurable, predictable, and
            defensible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-white/12 bg-[#101014] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-8">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white sm:text-[24px]">What drives our work</h2>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-white/70 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                Every engagement starts with rigorous diagnostics so we tackle the constraint slowing revenue, not the loudest request.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                We blend brand storytelling with performance media and RevOps automation to keep acquisition and retention in sync.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                Reporting loops are built in from day one so stakeholders see pipeline, ARR, and efficiency improvements, not vanity metrics.
              </li>
            </ul>
          </article>
          <article className="rounded-[28px] border border-white/12 bg-[#101014] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-8">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white sm:text-[24px]">How clients describe us</h2>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-white/70 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <strong className="text-white">Embedded partner:</strong> We operate as an extension of marketing, sales, and product teams to keep cross-functional alignment.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <strong className="text-white">Experiment-first:</strong> Each sprint ships tests, tracks the outcome, and feeds learnings into the next roadmap.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                <strong className="text-white">Automation-minded:</strong> We design automations that unlock time for deep work instead of adding tools people ignore.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <WhyChoose id="why" />
    <PillarsOverview id="pillars" />
    <Team id="team" />
    <Quote id="quote" />
  </>
)

export default About


