import React from "react"
import WorkProcess from "../Components/WorkProcess"
import CaseStudies from "../Components/CaseStudies"
import Quote from "../Components/Quote"
import SEO from "../Components/SEO"

const ProcessPage = () => (
  <>
    <SEO
      title="Our Growth Process | Nex Digital Agency"
      description="Discover the collaborative process Nex Digital Agency uses to diagnose, build, and optimise revenue programmes for fast-growing brands."
      canonical="https://nexdigitals.agency/process"
      openGraph={{
        title: "Our Growth Process | Nex Digital Agency",
        description:
          "See how Nex maps diagnostics to sprints, ships improvements quickly, and measures impact across every stage of the growth engine.",
        url: "https://nexdigitals.agency/process",
        image: "https://nexdigitals.agency/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
      twitter={{
        card: "summary_large_image",
        title: "How Nex Digital Agency Delivers Growth",
        description:
          "From discovery to optimisation, our process keeps teams aligned on pipeline, retention, and efficiency outcomes.",
        image: "https://nexdigitals.agency/nex.jpg",
      }}
    />
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-8 px-4 sm:px-6 lg:px-10">
        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Process
        </span>
        <h1 className="font-space-grotesk text-[34px] font-semibold leading-[42px] sm:text-[42px] sm:leading-[50px]">
          A transparent workflow that turns strategy into repeatable growth
        </h1>
        <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
          Every engagement follows a structured rhythm: diagnose the bottleneck, co-create the roadmap, launch improvements fast, and close
          the loop with reporting that investors and leadership can trust.
        </p>
      </div>
    </section>

    <WorkProcess id="process" />
    <CaseStudies id="case-studies" />
    <Quote id="quote" />
  </>
)

export default ProcessPage
