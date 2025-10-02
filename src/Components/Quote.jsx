import React from "react"

const Quote = ({ id }) => {
  return (
    <section id={id} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-8 rounded-[45px] border border-white/10 bg-[#0F0F10] px-6 py-12 text-center shadow-[0px_25px_60px_rgba(0,0,0,0.45)] sm:px-10 md:gap-10 md:px-[80px] md:py-[70px]">
          <span className="inline-flex rounded-full bg-[#D81F26]/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D81F26]">
            Get a quote
          </span>
          <h3 className="max-w-2xl font-space-grotesk text-[28px] font-medium leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[46px]">
            Ready to see how our services accelerate your growth?
          </h3>
          <p className="max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base md:text-[18px] md:leading-[26px]">
            Tell us about your goals and we’ll send a tailored roadmap with timelines, investment, and quick wins for your team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#D81F26] px-8 py-4 font-space-grotesk text-[18px] font-semibold text-black transition hover:bg-[#f04a3f]"
          >
            Request project quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Quote
