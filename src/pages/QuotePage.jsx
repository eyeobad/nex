import React from "react"
import Quote from "../Components/Quote"
import Contact from "../Components/Contact"
import SEO from "../Components/SEO"

const QuotePage = () => (
  <>
    <SEO
      title="Request a Quote | Nex Digital Agency"
      description="Share your goals and receive a tailored proposal from Nex Digital Agency including timelines, investment ranges, and quick-win recommendations."
      canonical="https://nexdigitals.agency/quote"
      openGraph={{
        title: "Request a Quote | Nex Digital Agency",
        description: "Get a bespoke roadmap covering branding, websites, SEO, paid media, automation, and analytics support.",
        url: "https://nexdigitals.agency/quote",
        image: "https://nexdigitals.agency/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Start Your Project with Nex Digital Agency",
        description: "Tell us about your objectives and we will outline the growth sprints, team, and investment required.",
        image: "https://nexdigitals.agency/nex.jpg",
      }}
    />
    <section className="bg-black py-20 text-white">
      <div className="mx-auto flex w-full max-w-[940px] flex-col gap-6 px-4 text-center sm:px-6">
        <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Request a proposal
        </span>
        <h1 className="font-space-grotesk text-[32px] font-semibold leading-[38px] sm:text-[40px] sm:leading-[46px]">
          Tell us about the growth challenges you want solved
        </h1>
        <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
          We will review your objectives, audit your current marketing engine, and send back a proposal outlining timelines, deliverables, and
          quick wins we can activate immediately.
        </p>
      </div>
    </section>
    <Quote id="quote" />
    <Contact id="contact" />
  </>
)

export default QuotePage

