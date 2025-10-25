export const blogPosts = [
  {
    page: 1,
    slug: "digital-marketing-for-ecommerce-businesses",
    title: "Digital Marketing for E-commerce Businesses: Comprehensive Strategies to Grow Your Online Store",
    summary:
      "An end-to-end ecommerce marketing strategy guide covering SEO, PPC, social commerce, email automation, CRO, emerging trends, and compliance in 2025.",
    readingTime: "18 min read",
    focus: "Ecommerce Growth",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    takeaways: [
      "Use integrated channel planning so SEO, PPC, social, and email compound revenue.",
      "Deploy lifecycle automation and predictive analytics to lift lifetime value.",
      "Adopt privacy-by-design marketing practices while scaling AR, AI, and social commerce.",
    ],
    link: "/blog/digital-marketing-for-ecommerce-businesses",
    pageTitle: "Digital Marketing Playbook",
    showInGrid: false,
  },
  {
    page: 2,
    slug: "conversion-ready-brand-platform",
    title: "Building a Conversion-Ready Brand Platform in 30 Days",
    summary:
      "How a fintech founder moved from fragmented visuals to a launch-ready identity that increased demo bookings by 42 percent.",
    readingTime: "8 min read",
    focus: "Branding",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    takeaways: [
      "Run a positioning sprint before touching visuals.",
      "Validate messaging with customer interviews.",
      "Document launch guidelines so sales and marketing stay aligned.",
    ],
    pageTitle: "Brand Platform & Automation Insights",
  },
  {
    page: 2,
    slug: "automation-ladder",
    title: "The Automation Ladder: Sequencing Workflows That Actually Save Time",
    summary:
      "A practical framework for choosing what to automate first, what to defer, and how to keep humans in control of the experience.",
    readingTime: "10 min read",
    focus: "Automation",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    takeaways: [
      "Start with bottlenecks that impact customer response times.",
      "Design approval checkpoints for sensitive communications.",
      "Review metrics monthly to prevent silent workflow failures.",
    ],
  },
  {
    page: 2,
    slug: "ai-powered-websites",
    title: "AI-Powered Websites: What Matters Beyond the Chatbot",
    summary:
      "Five upgrades that turned a brochure site into an interactive sales engine delivering inbound SQLs in the first week.",
    readingTime: "7 min read",
    focus: "Web Experience",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
    takeaways: [
      "Pair AI with clear conversion paths and strong offers.",
      "Instrument analytics before launching new automations.",
      "Use conversational data to inform nurture sequences.",
    ],
  },
]

export const blogPages = Array.from(
  blogPosts.reduce((acc, post) => {
    if (!acc.has(post.page)) {
      acc.set(post.page, {
        page: post.page,
        href: post.page === 1 ? "/blog" : `/blog?page=${post.page}`,
        label: post.pageTitle || `Page ${post.page}`,
      })
    }
    return acc
  }, new Map()),
  ([, value]) => value,
).sort((a, b) => a.page - b.page)
