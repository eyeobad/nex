import React from "react"
import Quote from "../Components/Quote"
import SEO from "../Components/SEO"

const posts = [
  {
    title: "Building a Conversion-Ready Brand Platform in 30 Days",
    summary:
      "How a fintech founder moved from fragmented visuals to a launch-ready identity that increased demo bookings by 42 percent.",
    readingTime: "8 min read",
    focus: "Branding",
    image: "/nex.jpg",
    takeaways: [
      "Run a positioning sprint before touching visuals.",
      "Validate messaging with customer interviews.",
      "Document launch guidelines so sales and marketing stay aligned.",
    ],
  },
  {
    title: "The Automation Ladder: Sequencing Workflows That Actually Save Time",
    summary:
      "A practical framework for choosing what to automate first, what to defer, and how to keep humans in control of the experience.",
    readingTime: "10 min read",
    focus: "Automation",
    image: "/nex.jpg",
    takeaways: [
      "Start with bottlenecks that impact customer response times.",
      "Design approval checkpoints for sensitive communications.",
      "Review metrics monthly to prevent silent workflow failures.",
    ],
  },
  {
    title: "AI-Powered Websites: What Matters Beyond the Chatbot",
    summary:
      "Five upgrades that turned a brochure site into an interactive sales engine delivering inbound SQLs in the first week.",
    readingTime: "7 min read",
    focus: "Web Experience",
    image: "/nex.jpg",
    takeaways: [
      "Pair AI with clear conversion paths and strong offers.",
      "Instrument analytics before launching new automations.",
      "Use conversational data to inform nurture sequences.",
    ],
  },
]

const BlogPage = () => (
  <>
    <SEO
      title="Insights & Playbooks | Nex Digital Agency Blog"
      description="Read Nex Digital Agency's latest insights on branding, automation, SEO, paid media, and analytics tailored for growth teams."
      canonical="https://nexdigital.name.ng/blog"
      openGraph={{
        title: "Insights & Playbooks | Nex Digital Agency Blog",
        description:
          "Actionable guides on building brand preference, deploying automation, scaling paid media, and measuring marketing ROI.",
        url: "https://nexdigital.name.ng/blog",
        image: "https://nexdigital.name.ng/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Nex Digital Agency Blog",
        description: "Growth playbooks covering brand, SEO, paid media, automation, and analytics for ambitious businesses.",
        image: "https://nexdigital.name.ng/nex.jpg",
      }}
    />
    <section id="blog" className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[920px] flex-col gap-6 px-4 text-center sm:px-6">
        <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Blog
        </span>
        <h1 className="font-space-grotesk text-[32px] font-medium leading-[36px] sm:text-[40px] sm:leading-[46px]">
          Stories, playbooks, and growth experiments
        </h1>
        <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
          Explore the strategies we use to help marketing leaders ship faster, automate smarter, and scale sustainably.
        </p>
      </div>
    </section>

    <section className="bg-black py-20 text-white">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-12 px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0px_18px_50px_rgba(0,0,0,0.35)]"
            >
              <figure className="h-44 w-full overflow-hidden border-b border-white/10 bg-white/5">
                <img src={post.image} alt={`${post.title} illustration`} className="h-full w-full object-cover" />
              </figure>
              <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {post.focus}
                </span>
                <h2 className="font-space-grotesk text-[22px] font-semibold leading-[30px] sm:text-[24px] sm:leading-[32px]">{post.title}</h2>
                <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{post.summary}</p>
                <ul className="flex flex-col gap-2 rounded-[18px] border border-white/10 bg-black/40 px-4 py-4 text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                  {post.takeaways.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D81F26]" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{post.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <Quote id="quote" />
  </>
)

export default BlogPage



