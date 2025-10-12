
import React from "react"
import Services from "../Components/Services"
import Quote from "../Components/Quote"
import Testimonials from "../Components/Testimonials"
import Contact from "../Components/Contact"
import PillarsOverview from "../Components/PillarsOverview"
import PillarDetail from "../Components/PillarDetail"
import Packages from "../Components/Packages"
import FeatureComparison from "../Components/FeatureComparison"
import AIConversion from "../Components/AIConversion"
import WhyChoose from "../Components/WhyChoose"
import GrowthPartner from "../Components/GrowthPartner"

const pillarDetails = [
  {
    id: "branding-pillar",
    eyebrow: "Pillar 1",
    title: "Foundational Branding & Identity",
    description:
      "We begin by creating a powerful brand platform—logo, colour systems, typography, and voice—that becomes the blueprint for every marketing effort that follows.",
    items: [
      { heading: "Brand Resonance", copy: "Establish a memorable identity that speaks to your ideal customers and forges a lasting connection." },
      { heading: "Competitive Edge", copy: "Strategically position your business to stand out decisively from competitors." },
      { heading: "Cohesive Identity", copy: "Deliver cohesive visuals through expert logo creation, colour palette, and typography." },
      { heading: "Comprehensive Style Guide", copy: "Apply your brand consistently across every touchpoint with a rigorous style guide." },
      { heading: "Foundation for Growth", copy: "Lay the essential groundwork for all subsequent digital growth efforts." },
      { heading: "Full Package", copy: "Includes messaging frameworks, tone of voice, and creative direction playbooks." },
    ],
  },
  {
    id: "web-pillar",
    eyebrow: "Pillar 2",
    title: "Smart Website Development",
    description:
      "Transform your online presence into a dynamic, results-driven platform that captures and converts leads around the clock.",
    items: [
      { heading: "Intelligent & High-Performing", copy: "Architect AI-powered sites engineered for speed, security, and conversions." },
      { heading: "24/7 Lead Generation", copy: "Deploy experiences that actively capture and nurture leads day and night." },
      { heading: "Advanced Features", copy: "Deliver multi-page smart experiences with gated content, automations, and integrations." },
      { heading: "AI Conversion Tools", copy: "Integrate chatbots, voice agents, and scheduling to automate qualification." },
      { heading: "Active Business Engines", copy: "Go beyond static brochures with websites that operate as revenue machines." },
    ],
  },
  {
    id: "seo-pillar",
    eyebrow: "Pillar 3",
    title: "Digital Visibility & SEO",
    description:
      "Secure top positions in search results and connect customer demand with your solutions through strategic SEO leadership.",
    items: [
      { heading: "Strategic Implementation", copy: "Build lasting authority with advanced technical, on-page, and off-page SEO." },
      { heading: "Customer Discoverability", copy: "Ensure your brand appears exactly when buyers search for the problems you solve." },
      { heading: "Competitive Advantage", copy: "Outperform competitors by capturing more organic traffic and qualified leads." },
      { heading: "Comprehensive Keyword Ranking", copy: "Expand reach with keyword campaigns targeting high-intent search queries." },
      { heading: "Sustained Advantage", copy: "Adapt continuously to algorithm changes with ongoing optimisation." },
    ],
  },
  {
    id: "lead-pillar",
    eyebrow: "Pillar 4",
    title: "Lead Generation & Customer Acquisition",
    description:
      "Build proactive pipelines that grow your customer base fast through targeted, multi-channel strategies.",
    items: [
      { heading: "Multi-Channel Strategies", copy: "Fill your pipeline with targeted, multi-channel acquisition campaigns." },
      { heading: "Paid Advertising", copy: "Launch precision campaigns across Google, Meta, and X for predictable growth." },
      { heading: "Advanced Lead Scraping", copy: "Actively find high-fit prospects with intelligent scraping and outreach." },
      { heading: "Multi-Platform Ad Management", copy: "Manage and optimise campaigns across every paid platform." },
      { heading: "Beyond Passive Engagement", copy: "Move beyond waiting for inbound by actively nurturing and converting demand." },
    ],
  },
  {
    id: "automation-pillar",
    eyebrow: "Pillar 5",
    title: "Business Process Automation",
    description:
      "Engineer custom workflows that automate repetitive tasks, delivering unprecedented efficiency and clarity across your organisation.",
    items: [
      { heading: "Custom Workflow Automation", copy: "Streamline operations with bespoke automations tailored to your teams." },
      { heading: "Efficiency & Focus", copy: "Reduce human error and free teams to focus on high-impact initiatives." },
      { heading: "Integrated Lead Management", copy: "Implement CRM pipelines with full-funnel visibility and follow-up." },
      { heading: "Automated Nurture Campaigns", copy: "Deploy broadcast and nurture sequences that keep prospects engaged." },
      { heading: "Seamless Appointment Booking", copy: "Simplify scheduling for clients and sales teams with automated booking." },
      { heading: "Centralised Communication", copy: "Combine email, SMS, and social DMs into a unified inbox." },
    ],
  },
]

const ServicesPage = () => (
  <>
    <Services id="services" />
    <PillarsOverview id="pillars" />
    {pillarDetails.map((pillar) => (
      <PillarDetail key={pillar.id} {...pillar} />
    ))}
    <AIConversion id="ai" />
    <Packages id="packages" />
    <FeatureComparison id="comparison" />
    <GrowthPartner id="growth" />
    <WhyChoose id="why" />
    <Testimonials id="testimonials" />
    <Quote id="quote" />
    <Contact id="contact" />
  </>
)

export default ServicesPage
