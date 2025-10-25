import React, { useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import Quote from "../Components/Quote"
import SEO from "../Components/SEO"
import { blogPosts, blogPages } from "../data/blogPosts"
import { DigitalMarketingEcommerceArticle } from "./DigitalMarketingEcommerce"

const BlogPage = () => {
  const [searchParams] = useSearchParams()

  const pageNumbers = useMemo(() => blogPages.map((page) => page.page), [])
  const defaultPage = pageNumbers[0]
  const queryPage = Number.parseInt(searchParams.get("page") || "", 10)
  const currentPage = Number.isFinite(queryPage) && pageNumbers.includes(queryPage) ? queryPage : defaultPage
  const isDefaultPage = currentPage === defaultPage

  const postsForPage = useMemo(() => {
    if (isDefaultPage) {
      return blogPosts.filter((post) => post.page !== defaultPage || post.showInGrid !== false)
    }
    return blogPosts.filter((post) => post.page === currentPage && post.showInGrid !== false)
  }, [currentPage, defaultPage, isDefaultPage])

  const currentPageMeta = blogPages.find((page) => page.page === currentPage)
  const sectionHeading = isDefaultPage
    ? "More insights from the lab"
    : currentPageMeta?.label || `Page ${currentPage}`
  const sectionDescription = isDefaultPage
    ? "Keep exploring recent strategies the team is testing, refining, and shipping for clients."
    : "Browse every article in this collection to keep your growth programmes sharp."

  return (
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
          description:
            "Growth playbooks covering brand, SEO, paid media, automation, and analytics for ambitious businesses.",
          image: "https://nexdigital.name.ng/nex.jpg",
        }}
      />

      {!isDefaultPage && (
        <section id="blog" className="relative bg-black py-24 text-white">
          <div className="mx-auto flex w-full max-w-[920px] flex-col gap-6 px-4 text-center sm:px-6">
            <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Blog
            </span>
            <h1 className="font-space-grotesk text-[32px] font-medium leading-[36px] sm:text-[40px] sm:leading-[46px]">
              {sectionHeading}
            </h1>
            <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">{sectionDescription}</p>
          </div>
        </section>
      )}

      {isDefaultPage ? <DigitalMarketingEcommerceArticle /> : null}

      {postsForPage.length > 0 && (
        <section className="bg-black py-20 text-white">
          <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-10 px-4 sm:px-6">
            {isDefaultPage ? (
              <div className="flex flex-col gap-3">
                <h2 className="font-space-grotesk text-[28px] font-semibold leading-[34px] sm:text-[32px] sm:leading-[38px]">
                  {sectionHeading}
                </h2>
                <p className="text-white/70 sm:text-[17px]">{sectionDescription}</p>
              </div>
            ) : null}

            <div className="grid gap-8 lg:grid-cols-3">
              {postsForPage.map((post) => (
                <article
                  key={post.slug}
                  className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0px_18px_50px_rgba(0,0,0,0.35)]"
                >
                  <figure className="h-44 w-full overflow-hidden border-b border-white/10 bg-white/5">
                    <img src={post.image} alt={`${post.title} illustration`} className="h-full w-full object-cover" loading="lazy" />
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
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{post.readingTime}</span>
                      {post.link ? (
                        <Link
                          to={post.link}
                          className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D81F26] transition hover:text-white"
                        >
                          Read
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Quote id="quote" />
    </>
  )
}

export default BlogPage

