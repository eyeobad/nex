import React from "react"
import { useParams } from "react-router-dom"
import Quote from "../Components/Quote"
import Contact from "../Components/Contact"
import SEO from "../Components/SEO"

const serviceContent = {
  branding: {
    eyebrow: "Branding & Identity",
    title: "Foundational Branding & Identity",
    description:
      "Establish a cohesive brand platform that anchors every campaign, sales conversation, and customer touchpoint.",
    metaTitle: "Branding & Identity Services | Nex Digital Agency",
    metaDescription:
      "Launch a distinctive brand platform with Nex Digital Agency's branding and identity services - covering positioning, messaging, visuals, and go-to-market activation for growing businesses.",
    canonicalPath: "/services/branding",
    schemaServiceType: "Branding & Identity Services",
    overview:
      "We translate your story into a clear identity system that includes research-backed positioning, visual direction, and practical guidelines your team can deploy immediately.",
    valueProps: [
      { heading: "Positioning Blueprint", copy: "Clarify who you serve, the problem you solve, and why buyers should choose you over competitors." },
      { heading: "Signature Identity", copy: "Design logo systems, colour palettes, and typography that scale across digital and offline channels." },
      { heading: "Messaging Framework", copy: "Give marketing and sales teams plug-and-play messaging that keeps your story consistent." },
      { heading: "Brand Launch Toolkit", copy: "Provide templates, social assets, and rollout plans so everyone can activate the new identity on day one." },
    ],
    process: [
      { title: "Discovery & Insight", detail: "Stakeholder workshops and market audits uncover what makes your brand distinct." },
      { title: "Identity Sprints", detail: "We iterate on visuals, tone, and messaging until the brand platform reflects your ambition." },
      { title: "Guideline Build", detail: "A practical style guide, usage rules, and asset library keep execution on-brand and efficient." },
      { title: "Launch Support", detail: "We partner with your team to roll out the refreshed brand across key channels." },
    ],
    outcomes: [
      "Strategic positioning narrative",
      "Brand identity toolkit (logo, colour, typography)",
      "Messaging and voice guide",
      "Asset library for marketing and sales teams",
    ],
  },
  web: {
    eyebrow: "Web Experience",
    title: "Smart Website Development",
    description: "Launch a high-performing website engineered for conversions, automation, and round-the-clock lead capture.",
    metaTitle: "Smart Website Development | Nex Digital Agency",
    metaDescription:
      "Build conversion-ready, automation-friendly websites with Nex Digital Agency. Our team blends UX, AI assistants, integrations, and CRO to keep your pipeline active 24/7.",
    canonicalPath: "/services/web",
    schemaServiceType: "Website Development Services",
    overview:
      "Your site becomes a living growth engine with AI assistants, frictionless booking, and analytics that show exactly what is working.",
    valueProps: [
      { heading: "Conversion Architecture", copy: "Wireframes and UX flows guide visitors from interest to booked call or purchase." },
      { heading: "AI-Powered Assistance", copy: "Deploy chatbots, voice agents, and smart forms that qualify leads without manual effort." },
      { heading: "Integrated Stack", copy: "Connect CRM, automations, and analytics so the entire journey is tracked and measured." },
      { heading: "Performance Optimised", copy: "Ship blazing-fast pages with robust SEO foundations and accessibility baked in." },
    ],
    process: [
      { title: "Experience Strategy", detail: "We map jobs-to-be-done, content hierarchy, and conversion goals with your stakeholders." },
      { title: "Design & Prototype", detail: "Responsive design systems align with your brand and highlight key value propositions." },
      { title: "Full Build & Integrations", detail: "We develop the experience, connect data sources, and configure automations." },
      { title: "Launch & Optimise", detail: "Post-launch testing, analytics reviews, and iterative enhancements keep results climbing." },
    ],
    outcomes: [
      "AI-assisted lead funnels",
      "Responsive multi-page website",
      "Automation-ready CMS and CRM connections",
      "Playbook for continuous optimisation",
    ],
  },
  seo: {
    eyebrow: "Growth Visibility",
    title: "Digital Visibility & SEO",
    description: "Earn visibility when buyers search for the problems you solve and capture market share through sustained SEO momentum.",
    metaTitle: "SEO Services | Nex Digital Agency",
    metaDescription:
      "Nex Digital Agency delivers technical SEO, content engines, and authority programmes that help modern brands dominate high-intent search results and convert organic demand.",
    canonicalPath: "/services/seo",
    schemaServiceType: "SEO Services",
    overview:
      "We build technical foundations, search-informed content, and authority signals that move the right keywords into the money positions.",
    valueProps: [
      { heading: "Technical Excellence", copy: "Site health audits, schema, and core vitals improvements ensure search engines trust your domain." },
      { heading: "Content Engines", copy: "Pillar and cluster strategies translate expertise into search-winning articles, guides, and resources." },
      { heading: "Authority Growth", copy: "Digital PR, partnerships, and link programs strengthen domain authority month after month." },
      { heading: "Revenue Reporting", copy: "Keyword tracking and pipeline attribution show exactly how organic traffic drives revenue." },
    ],
    process: [
      { title: "SEO Roadmap", detail: "We align priority keywords and gaps with your commercial goals." },
      { title: "Site Readiness", detail: "Technical fixes, speed improvements, and structured data prepare the foundation." },
      { title: "Content Production", detail: "Recurring content sprints ship high-impact assets aligned to search intent." },
      { title: "Authority & Optimisation", detail: "Link acquisition, testing, and ongoing refinement keep rankings advancing." },
    ],
    outcomes: [
      "12-month SEO roadmap",
      "Technical health improvements",
      "Content production calendar",
      "Ranking and pipeline dashboards",
    ],
  },
  lead: {
    eyebrow: "Demand Engine",
    title: "Lead Generation & Acquisition",
    description: "Build proactive, always-on pipelines that engage, qualify, and convert the buyers that matter most.",
    metaTitle: "Lead Generation Services | Nex Digital Agency",
    metaDescription:
      "Predictably fill your pipeline with Nex Digital Agency's lead generation services. We orchestrate paid media, outbound, and nurture automation tailored to your best-fit buyers.",
    canonicalPath: "/services/lead",
    schemaServiceType: "Lead Generation Services",
    overview:
      "We combine paid media, outbound prospecting, and nurture programs into a coordinated growth engine supported by automation.",
    valueProps: [
      { heading: "Precision Targeting", copy: "Audience research, intent data, and list building uncover the highest-value prospects." },
      { heading: "Compelling Campaigns", copy: "Cross-channel creative keeps your offer present on the platforms buyers use daily." },
      { heading: "Outbound Orchestration", copy: "Sequenced email, social, and SMS outreach starts conversations with qualified accounts." },
      { heading: "Lifecycle Automation", copy: "Score, route, and nurture leads automatically so sales focuses on closing." },
    ],
    process: [
      { title: "Growth Planning", detail: "We model revenue targets, CAC guardrails, and channel mix to chart achievable outcomes." },
      { title: "Campaign Build", detail: "Creative, offers, tracking, and automations are launched in coordinated waves." },
      { title: "Pipeline Acceleration", detail: "Outbound, retargeting, and nurture workflows keep prospects engaged until ready to buy." },
      { title: "Optimization Cycles", detail: "Weekly performance reviews surface quick wins and inform next experiments." },
    ],
    outcomes: [
      "Channel and budget playbook",
      "Full-funnel reporting suite",
      "Automation sequences for nurture and follow-up",
      "Test backlog focused on revenue impact",
    ],
  },
  automation: {
    eyebrow: "Operations Automation",
    title: "Business Process Automation",
    description: "Engineer custom workflows that eliminate manual tasks, reduce errors, and create clear visibility across teams.",
    metaTitle: "Marketing & Sales Automation | Nex Digital Agency",
    metaDescription:
      "Automate marketing, sales, and customer success workflows with Nex Digital Agency. We design RevOps automations, governance, and communication hubs for scaling teams.",
    canonicalPath: "/services/automation",
    schemaServiceType: "Marketing Automation Services",
    overview:
      "From lead routing to service delivery, we design and implement automations that keep operations moving even when the team is offline.",
    valueProps: [
      { heading: "Workflow Design", copy: "Map every handoff, decision point, and trigger to remove friction and delays." },
      { heading: "Unified Communication", copy: "Centralise email, SMS, chat, and social inboxes so nobody misses a message." },
      { heading: "Data Consistency", copy: "Sync CRMs, project tools, and finance systems so teams rely on a single source of truth." },
      { heading: "Human Override", copy: "Automations include clear alerts and approvals to keep teams in control of critical decisions." },
    ],
    process: [
      { title: "Audit & Mapping", detail: "We review current workflows, tech stack, and bottlenecks with functional leaders." },
      { title: "System Architecture", detail: "Solution design outlines tools, integrations, and automation logic." },
      { title: "Implementation Sprint", detail: "We build, test, and document workflows with phased go-lives." },
      { title: "Enablement & Support", detail: "Training, playbooks, and on-call support keep the system running smoothly." },
    ],
    outcomes: [
      "Automation architecture diagram",
      "Documented SOPs and playbooks",
      "Alerting and reporting dashboards",
      "Continuous improvement roadmap",
    ],
  },
  analytics: {
    eyebrow: "Measurement & Insight",
    title: "Analytics & Tracking",
    description: "Capture the right signals so every marketing and sales move is guided by clear, actionable data.",
    metaTitle: "Marketing Analytics & Reporting | Nex Digital Agency",
    metaDescription:
      "Nex Digital Agency builds analytics, attribution, and experimentation systems that help organisations prove marketing ROI and act on insight.",
    canonicalPath: "/services/analytics",
    schemaServiceType: "Marketing Analytics Services",
    overview:
      "We build tracking architectures that reveal how prospects discover you, where they convert, and which investments deliver revenue.",
    valueProps: [
      { heading: "Instrumentation Blueprint", copy: "Map journeys across web, product, and campaigns to capture the metrics that matter." },
      { heading: "Attribution Modelling", copy: "Connect touchpoints to pipeline and revenue with dashboards your leadership team can trust." },
      { heading: "Insight Automation", copy: "Surface alerts, weekly snapshots, and decision-ready summaries without manual reporting." },
      { heading: "Experiment Support", copy: "Layer testing frameworks on top of tracking so you can learn faster and double down on wins." },
    ],
    process: [
      { title: "Measurement Planning", detail: "We align KPIs, goals, and data sources with stakeholders to define the analytics roadmap." },
      { title: "Tracking Build", detail: "Tagging plans, event schemas, and integrations are implemented across your stack." },
      { title: "Dashboard Delivery", detail: "Custom reporting surfaces live metrics, cohort insights, and channel performance." },
      { title: "Optimisation Cadence", detail: "Recurring reviews keep data pristine and transform insights into next-step experiments." },
    ],
    outcomes: [
      "Analytics implementation playbook",
      "Attribution dashboards tied to revenue",
      "Automated reporting and alerting suite",
      "A/B testing and experimentation backlog",
    ],
  },
}

const fallbackContent = {
  eyebrow: "Services",
  title: "Growth Programmes",
  description: "We design growth programs that blend performance media, lifecycle automation, and brand storytelling.",
  overview: "Explore tailored solutions for every stage of your digital journey.",
  metaTitle: "Digital Marketing Services | Nex Digital Agency",
  metaDescription:
    "Work with Nex Digital Agency to plan, execute, and optimise branding, websites, SEO, lead generation, automation, and analytics tailored to your growth goals.",
  canonicalPath: "/services",
  schemaServiceType: "Digital Marketing Services",
  valueProps: [],
  process: [],
  outcomes: [],
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const content = serviceContent[slug] || fallbackContent
  const metaTitle = content.metaTitle || `${content.title} | Nex Digital Agency`
  const metaDescription = content.metaDescription || content.description
  const canonicalPath = content.canonicalPath || (slug ? `/services/${slug}` : "/services")
  const canonicalUrl = `https://nexdigitals.agency${canonicalPath}`
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.title,
      serviceType: content.schemaServiceType || content.title,
      description: metaDescription,
      provider: {
        "@type": "Organization",
        name: "Nex Digital Agency",
          url: "https://nexdigitals.agency",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
  ]

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        openGraph={{
          title: metaTitle,
          description: metaDescription,
          url: canonicalUrl,
          image: "https://nexdigitals.agency/nex.jpg",
          siteName: "Nex Digital Agency",
          locale: "en",
        }}
        twitter={{
          card: "summary_large_image",
          title: metaTitle,
          description: metaDescription,
          image: "https://nexdigitals.agency/nex.jpg",
        }}
        schema={schema}
      />
      <section className="relative bg-black py-24 text-white">
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-8 px-4 text-center sm:px-6">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            {content.eyebrow}
          </span>
          <h1 className="font-space-grotesk text-[32px] font-semibold leading-[38px] sm:text-[42px] sm:leading-[48px]">{content.title}</h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">{content.description}</p>
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-16 px-4 sm:px-6">
          <div className="space-y-6 text-white/80">
            <h2 className="font-space-grotesk text-[28px] font-medium leading-[34px] sm:text-[32px] sm:leading-[40px]">
              Why this matters
            </h2>
            <p className="text-[16px] leading-relaxed sm:text-[18px]">{content.overview}</p>
          </div>

          {content.valueProps.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-[22px] font-medium text-white sm:text-[26px]">What you get</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {content.valueProps.map((item) => (
                  <article key={item.heading} className="rounded-[24px] border border-white/10 bg-black/60 px-6 py-6 shadow-[0px_12px_30px_rgba(0,0,0,0.35)]">
                    <h4 className="font-space-grotesk text-[18px] font-semibold text-white sm:text-[20px]">{item.heading}</h4>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/70 sm:text-base">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {content.process.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-[22px] font-medium text-white sm:text-[26px]">How we work together</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {content.process.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4 rounded-[20px] border border-white/10 bg-black/50 px-6 py-5">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D81F26] font-space-grotesk text-sm font-semibold text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-space-grotesk text-[18px] font-semibold text-white sm:text-[20px]">{step.title}</h4>
                      <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.outcomes.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-[22px] font-medium text-white sm:text-[26px]">Deliverables you take away</h3>
              <ul className="grid gap-3 text-[15px] leading-relaxed text-white/70 sm:text-base md:grid-cols-2">
                {content.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Quote id="quote" />
      <Contact id="contact" />
    </>
  )
}

export default ServiceDetail



