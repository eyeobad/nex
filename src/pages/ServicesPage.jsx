import React from "react"
import Services from "../Components/Services"
import Quote from "../Components/Quote"
import Testimonials from "../Components/Testimonials"
import AIConversion from "../Components/AIConversion"
import GrowthPartner from "../Components/GrowthPartner"
import SEO from "../Components/SEO"

const heroHighlights = [
  {
    title: "Integrated growth systems",
    copy: "Brand, demand, and revenue operations under one roof so every initiative advances the same KPIs.",
  },
  {
    title: "Automation-first execution",
    copy: "AI, experimentation, and workflow design transform your marketing engine into an always-on programme that scales without headcount.",
  },
  {
    title: "Commercial accountability",
    copy: "We obsess over pipeline, ARR, and efficiency gains so every investment is defensible.",
  },
]

const offerPillars = [
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "Define a category position, craft an unmistakable voice, and launch cohesive visual systems that customers remember and prefer.",
    bullets: [
      "Voice-of-customer interviews and competitor benchmarking to surface distinctive positioning opportunities",
      "Messaging architecture, storytelling pillars, and value propositions mapped to your highest value segments",
      "Visual identity systems covering logo suites, typography, colour, motion, and usage governance",
      "Launch kits with sales enablement assets, social templates, and adoption playbooks for internal teams",
    ],
  },
  {
    id: "web",
    title: "Smart Website Development",
    description:
      "Design high-performing websites that merge conversion strategy, AI assistants, and automation to capture qualified demand 24/7.",
    bullets: [
      "Experience architecture that maps content, CTAs, and proof to every buying committee role",
      "AI chat, booking, and voice flows that steward visitors into qualification without human intervention",
      "Headless and CMS-driven builds engineered for speed, accessibility, and SEO excellence",
      "Conversion testing roadmap with analytics dashboards benchmarking every release",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Visibility",
    description:
      "Own strategic search terms, expand discoverability, and connect intent-driven traffic with offers that convert into revenue.",
    bullets: [
      "Revenue-linked keyword intelligence, SERP gap analysis, and topical authority roadmaps",
      "Technical fixes spanning site architecture, structured data, and core web vitals performance",
      "Content engines producing product-led articles, resources, and enablement assets each sprint",
      "Authority programmes blending digital PR, partnerships, and internal linking for compounding gains",
    ],
  },
  {
    id: "lead",
    title: "Lead Generation & Acquisition",
    description:
      "Launch paid, outbound, and nurture campaigns that predictably fill the pipeline with qualified buyers ready for sales.",
    bullets: [
      "CAC-optimised media mix modelling across Google, Meta, LinkedIn, and programmatic placements",
      "Intent data mining, enrichment, and scoring to prioritise the accounts most likely to convert",
      "Multichannel nurture programmes that move leads from awareness to sales-ready status",
      "Creative experimentation frameworks aligned with audience pain points and offer relevance",
    ],
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description:
      "Engineer RevOps workflows that remove manual tasks, centralise communication, and keep teams focused on revenue work.",
    bullets: [
      "CRM architecture, lifecycle scoring, and governance that keep marketing, sales, and CS aligned",
      "Sales hand-off, onboarding, and support automations that reduce leakage and response times",
      "Unified communication hubs consolidating email, SMS, chat, and voice into auditable workflows",
      "Operational dashboards with QA loops, alerts, and documentation to scale with new hires",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Tracking",
    description:
      "Instrument journeys from first touch to renewal, empowering teams with reliable data, attribution, and experiment frameworks.",
    bullets: [
      "North-star measurement plans translating business objectives into marketing, product, and revenue KPIs",
      "Server-side, consent-aware tracking setups that protect data integrity across devices",
      "Attribution models and dashboards tying spend to pipeline, ARR, and payback periods",
      "Experimentation backlogs with statistical guardrails and insights workflows",
    ],
  },
]

const pillarDeepDives = [
  {
    id: "branding",
    eyebrow: "Define your category edge",
    title: "Brand strategy that turns attention into preference",
    summary:
      "We translate interviews, desk research, and competitive positioning into a platform your team can activate without guesswork.",
    checklist: [
      "Narrative architecture that links customer pains to your product differentiators",
      "Naming, tone-of-voice, and vocabulary standards to keep every touchpoint consistent",
      "Asset library spanning pitch decks, proposal templates, and social media kits",
    ],
    insight:
      "Outcome: your organisation speaks with one voice and carries a recognisable visual identity that compounds trust across channels.",
  },
  {
    id: "web",
    eyebrow: "Convert demand 24/7",
    title: "Conversion-centred, AI-augmented web experiences",
    summary:
      "Beyond aesthetics, we build adaptive experiences that learn from behaviour, remove friction, and integrate with your operating stack.",
    checklist: [
      "Modular content models so marketing teams can publish without developer dependencies",
      "Integrations with CRM, booking, analytics, and automations configured during implementation",
      "Performance budgets, accessibility audits, and QA routines that keep pages fast and inclusive",
    ],
    insight:
      "Outcome: a measurable website that captures, qualifies, and routes demand to the right workflow automatically.",
  },
  {
    id: "seo",
    eyebrow: "Be found for high-intent problems",
    title: "Search visibility engineered for revenue impact",
    summary:
      "We pair technical excellence with topical authority so your brand shows up where paying customers are researching solutions.",
    checklist: [
      "Opportunity matrices aligning keywords to funnel stages and business impact",
      "Editorial sprints shipping long-form, product-led, and thought-leadership assets every month",
      "Backlink acquisition executed through partnerships, PR, and digital communities in your niche",
    ],
    insight:
      "Outcome: organic traffic that is pre-qualified, measurable, and keeps customer acquisition costs trending down.",
  },
  {
    id: "lead",
    eyebrow: "Fill your pipeline predictably",
    title: "Paid media and outbound programmes that compound results",
    summary:
      "Every campaign is rooted in conversion data, creative insights, and automation so that scale does not dilute profitability.",
    checklist: [
      "Offer development and landing page CRO in lockstep with media buying",
      "Sales enablement collateral that arms SDRs and AEs with timely talking points",
      "Always-on experimentation to refine audiences, creative, and bidding strategies",
    ],
    insight:
      "Outcome: consistent SQL volume, reliable forecasts, and faster payback periods on marketing spend.",
  },
  {
    id: "automation",
    eyebrow: "Operate with precision",
    title: "Workflow automation that protects experience quality",
    summary:
      "We design automations where humans and AI collaborate, ensuring hand-offs, follow-ups, and renewals happen without manual chasing.",
    checklist: [
      "Lifecycle playbooks that outline triggers, messages, owners, and success metrics",
      "Data hygiene routines plus enrichment to keep CRM and customer data trustworthy",
      "Governance documentation so new hires understand the system in their first week",
    ],
    insight:
      "Outcome: lean teams tackling high-value work while the infrastructure handles repetitive yet critical tasks.",
  },
  {
    id: "analytics",
    eyebrow: "Decide with clarity",
    title: "Analytics ecosystems anchored to commercial goals",
    summary:
      "From instrumentation to storytelling, we ensure every team sees the same truth-and that experiments translate into board-ready reporting.",
    checklist: [
      "Tagging and tracking plans that respect privacy regulations without losing fidelity",
      "Multi-touch attribution tailored to your sales cycle and pipeline velocity",
      "Insight cadences with actionable recommendations, not just dashboards",
    ],
    insight:
      "Outcome: a closed-loop measurement machine that proves what works, what to stop, and where to invest next.",
  },
]

const deliverySteps = [
  {
    title: "Discovery & Alignment",
    copy: "Stakeholder interviews, analytics reviews, and competitive research surface the growth levers that matter to your organisation.",
  },
  {
    title: "Roadmap & Build",
    copy: "We translate strategy into an actionable sprint plan, pairing designers, developers, and marketers to launch improvements quickly.",
  },
  {
    title: "Optimise & Scale",
    copy: "Dashboards, experiment plans, and automation keep your programmes improving every month without adding headcount.",
  },
]

const outcomeMetrics = [
  {
    stat: "42%",
    label: "Average increase in sales-qualified pipeline",
    detail: "Measured across 90-day full-funnel engagements combining SEO, paid media, and conversion optimisation.",
  },
  {
    stat: "28 days",
    label: "Median time to launch first growth sprint",
    detail: "From kickoff workshop to shipping the initial mix of messaging, creative, and channel experiments.",
  },
  {
    stat: "3.6x",
    label: "Return on marketing automation investment",
    detail: "Realised within six months as manual follow-up and lead leakage are replaced by RevOps workflows.",
  },
]

const faqs = [
  {
    question: "How do you decide which service pillar to prioritise?",
    answer:
      "We start with a diagnostics sprint that maps your current demand, conversion, and retention metrics. From there, we prioritise the pillar that unlocks the quickest revenue impact before sequencing long-term initiatives.",
  },
  {
    question: "Can you work alongside our in-house team?",
    answer:
      "Yes. Many clients keep internal marketers focused on campaigns while we handle brand systems, marketing ops, and analytics. We design rhythms that complement existing processes instead of replacing them.",
  },
  {
    question: "Do you offer ongoing optimisation or only project work?",
    answer:
      "Both. Launch engagements typically run in 8-12 week sprints. Most partners then retain us to oversee experimentation, reporting, and automation so the system keeps improving long after go-live.",
  },
]

const ServicesPage = () => (
  <>
    <SEO
      title="Digital Marketing Services | Nex Digital Agency"
      description="Explore Nex Digital Agency's full-funnel services - branding, smart websites, SEO, paid acquisition, automation, and analytics engineered for growth-focused teams."
      canonical="https://nexdigitals.agency/services"
      openGraph={{
        title: "Digital Marketing Services | Nex Digital Agency",
        description:
          "Partner with Nex to orchestrate branding, websites, SEO, paid media, automation, and analytics around measurable revenue outcomes.",
        url: "https://nexdigitals.agency/services",
        image: "https://nexdigitals.agency/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Digital Marketing Services Built to Scale",
        description:
          "See how Nex Digital Agency integrates strategy, execution, and automation into one growth programme for ambitious brands.",
        image: "https://nexdigitals.agency/nex.jpg",
      }}
    />
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 sm:px-6 lg:px-10">
        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
          Services
        </span>
        <div className="space-y-4">
          <h1 className="font-space-grotesk text-[34px] font-semibold leading-[42px] sm:text-[44px] sm:leading-[50px]">
            Growth programmes that turn quiet brands into always-on revenue machines
          </h1>
          <p className="max-w-3xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Nex Digital Agency plans, builds, and runs the digital marketing systems that attract the right audience, convert intent into
            pipeline, and retain customers with meaningful experiences. Strategy, execution, and automation operate together under one roof.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroHighlights.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-white/10 bg-white/5 p-5 text-white/80">
              <h2 className="font-space-grotesk text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#service-deep-dives"
            className="inline-flex items-center justify-center rounded-full bg-[#D81F26] px-6 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-black transition hover:bg-[#f0383f]"
          >
            View service playbooks
          </a>
          <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-white transition hover:border-white/60"
          >
            Book a strategy call
          </a>
        </div>
      </div>
    </section>

    <section className="bg-black py-20 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 sm:px-6 lg:px-10">
        <header className="space-y-4 text-center">
          <h2 className="font-space-grotesk text-[30px] font-semibold leading-[38px] sm:text-[36px] sm:leading-[44px]">
            Digital growth service pillars
          </h2>
          <p className="mx-auto max-w-3xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Choose a single service to solve today's constraint or combine pillars into a full go-to-market engine that keeps momentum long
            after launch.
          </p>
        </header>
        <div className="grid gap-10 lg:grid-cols-2">
          {offerPillars.map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              className="flex flex-col gap-6 rounded-[28px] border border-white/12 bg-black/60 p-6 shadow-[0px_24px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="space-y-2">
                <h3 className="font-space-grotesk text-[24px] font-semibold leading-[30px] text-white lg:text-[26px]">{offer.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{offer.description}</p>
              </div>
              <ul className="flex flex-col gap-2 text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                {offer.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/services/${offer.id}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#D81F26]"
              >
                View {offer.title.toLowerCase()}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="service-deep-dives" className="bg-black py-20 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 sm:px-6 lg:px-10">
        <header className="space-y-4 text-center sm:text-left">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Programme detail
          </span>
          <h2 className="font-space-grotesk text-[30px] font-semibold leading-[38px] sm:text-[36px] sm:leading-[44px]">
            In-depth playbooks aligned to your north-star metrics
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Every pillar combines research, experience design, automation, and analytics so marketing, sales, and success teams stay aligned
            on the same commercial goals.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {pillarDeepDives.map((pillar) => (
            <article
              key={pillar.id}
              className="flex h-full flex-col gap-5 rounded-[28px] border border-white/12 bg-black/60 p-6 shadow-[0px_24px_70px_rgba(0,0,0,0.35)] sm:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D81F26]">{pillar.eyebrow}</span>
              <h3 className="font-space-grotesk text-[24px] font-semibold leading-[30px] text-white sm:text-[26px]">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{pillar.summary}</p>
              <ul className="flex flex-col gap-2 text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                {pillar.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                {pillar.insight}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {outcomeMetrics.map((metric) => (
            <article
              key={metric.label}
              className="flex h-full flex-col gap-3 rounded-[24px] border border-white/12 bg-[#0B0B0F] px-5 py-6 text-center shadow-[0px_20px_60px_rgba(0,0,0,0.35)]"
            >
              <span className="font-space-grotesk text-[30px] font-semibold text-white sm:text-[34px]">{metric.stat}</span>
              <h4 className="text-[15px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-sm">{metric.label}</h4>
              <p className="text-[14px] leading-relaxed text-white/60 sm:text-[15px]">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-black py-16 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 sm:px-6 lg:px-10">
        <header className="space-y-4 text-center sm:text-left">
          <h2 className="font-space-grotesk text-[28px] font-semibold leading-[34px] sm:text-[32px]">
            How we deliver every engagement
          </h2>
          <p className="text-[15px] leading-relaxed text-white/70 sm:max-w-2xl sm:text-base">
            Every project follows a proven strategy-build-optimise rhythm so you see quick wins while laying foundations for sustainable,
            compounding growth.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverySteps.map((step) => (
            <article
              key={step.title}
              className="rounded-[24px] border border-white/12 bg-black/60 p-6 shadow-[0px_20px_60px_rgba(0,0,0,0.35)]"
            >
              <h3 className="font-space-grotesk text-[20px] font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-black py-16 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 sm:px-6 lg:px-10">
        <header className="space-y-3 text-center sm:text-left">
          <h2 className="font-space-grotesk text-[28px] font-semibold leading-[34px] sm:text-[32px]">
            Frequently asked questions
          </h2>
          <p className="text-[15px] leading-relaxed text-white/70 sm:max-w-2xl sm:text-base">
            Have more questions about partnering with Nex Digital Agency? These answers cover the topics prospects ask us before we begin.
          </p>
        </header>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[24px] border border-white/12 bg-[#0B0B0F] px-5 py-4">
              <h3 className="font-space-grotesk text-[18px] font-semibold text-white sm:text-[20px]">{faq.question}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70 sm:text-base">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <AIConversion id="ai" />
    <GrowthPartner id="growth" />
    <Testimonials id="testimonials" />
    <Quote id="quote" />
  </>
)

export default ServicesPage
