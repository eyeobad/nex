import React from "react"
import SEO from "../Components/SEO"

const reviews = [
  {
    name: "Elena Martins",
    role: "VP of Marketing, Alpine Home Air",
    quote:
      "The Nex team rebuilt our funnel end-to-end. Paid efficiency improved 27% and inbound leads are now tracked with precision.",
    highlight: "27% lift in paid efficiency",
  },
  {
    name: "Travis Cole",
    role: "Founder, Trust Roofing",
    quote:
      "We went from a brochure site to a true lead engine. The automation follow-up alone paid for the project in the first month.",
    highlight: "2.3x more booked inspections",
  },
  {
    name: "Priya Shah",
    role: "CMO, Motion on Solana",
    quote:
      "They shipped a performant Web3 experience with clear analytics. The design and speed reflect our brand without sacrificing clarity.",
    highlight: "Faster launch with clean analytics",
  },
  {
    name: "Luis Romero",
    role: "Director, Black Cafe",
    quote:
      "Our online store finally matches the in-person experience. Subscriptions grew and the site now tells the right story.",
    highlight: "Higher subscription uptake",
  },
]

const ReviewCard = ({ name, role, quote, highlight }) => (
  <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0px_18px_50px_rgba(0,0,0,0.35)]">
    <div className="flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="text-sm text-white/60">{role}</span>
      </div>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        {highlight}
      </span>
    </div>
    <p className="text-base leading-relaxed text-white/75">“{quote}”</p>
  </article>
)

const ReviewPage = () => {
  return (
    <>
      <SEO
        title="Client Reviews | Nex Digital Agency"
        description="Read client reviews for Nex Digital Agency. See how we ship growth-ready websites, automation, and campaigns that improve revenue outcomes."
        canonical="https://nexdigital.name.ng/reviews"
      />

      <section className="relative bg-black py-24 text-white">
        <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6 px-4 text-center sm:px-6">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Reviews
          </span>
          <h1 className="font-space-grotesk text-[32px] font-medium leading-[36px] sm:text-[40px] sm:leading-[46px]">
            Outcomes our clients notice and measure
          </h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Real feedback from teams that trusted us to rebuild their digital engines, automate follow-up, and scale revenue programs.
          </p>
        </div>
      </section>

      <section className="bg-black pb-24 text-white">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((item) => (
              <ReviewCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewPage

