import React from "react"
import Quote from "../Components/Quote"

const BlogPage = () => (
  <>
    <section id="blog" className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6 px-4 text-center sm:px-6">
        <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Blog
        </span>
        <h1 className="font-space-grotesk text-[32px] font-medium leading-[36px] sm:text-[40px] sm:leading-[46px]">
          Stories, playbooks, and growth experiments
        </h1>
        <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
          We are busy documenting the strategies that helped our partners scale. Come back soon or subscribe to be first in line.
        </p>
      </div>
    </section>
  
  </>
)

export default BlogPage
