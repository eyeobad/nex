import React from "react"
import { ArrowUpRight } from "lucide-react"

const studies = [
  {
    title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    href: "#",
  },
  {
    title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    href: "#",
  },
  {
    title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    href: "#",
  },
]

const CaseStudies = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pb-20 pt-12 sm:px-10 md:px-16 xl:px-[100px]">
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-1 shadow-[0px_3px_0px_#191A23]">
            <h2 className="text-[26px] font-space-grotesk font-medium leading-[34px] text-white sm:text-[32px] md:text-[40px] md:leading-[51px]">
              Case Studies
            </h2>
          </div>
          <p className="max-w-xl text-[14px] leading-relaxed text-white/75 sm:text-sm md:text-[18px] md:leading-[23px]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </header>

        <div className="rounded-[30px] border border-white/15 bg-[#0F0F10] px-6 py-12 shadow-[0px_6px_0px_#191A23] sm:rounded-[45px] sm:px-10 md:px-14">
          <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-0">
            {studies.map((study) => (
              <article
                key={study.title}
                className="flex flex-col gap-5 border-white/10 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r"
              >
                <p className="text-sm leading-6 text-white sm:text-base md:text-[18px] md:leading-[23px]">
                  {study.title}
                </p>
                <a
                  href={study.href}
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-[#D81F26] sm:text-base md:text-[20px] md:leading-[28px]"
                >
                  Learn more
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D81F26] text-[#D81F26] transition-all group-hover:translate-x-1 sm:h-6 sm:w-6">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
