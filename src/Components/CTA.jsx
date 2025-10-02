import React from "react"
import { ArrowRight } from "lucide-react"
import Illustration from "../assets/Illustration.svg"

const CTA = ({ id }) => {
  return (
    <section id={id} className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-4 pb-20 pt-12 sm:px-10 md:flex-row md:items-center md:justify-center md:px-16 xl:px-[100px]">
        <div className="relative flex w-full max-w-[1240px] flex-col overflow-hidden rounded-[32px] bg-[#F3F3F3] px-6 py-10 text-black shadow-[0px_8px_0px_#191A23] sm:px-10 md:flex-row md:items-center md:justify-between md:gap-16 md:rounded-[45px] md:px-[60px] md:py-[70px]">
          <div className="flex max-w-[520px] flex-col gap-6 text-left">
            <h3 className="text-[26px] font-space-grotesk font-medium leading-[34px] text-black sm:text-[28px] sm:leading-[36px] md:text-[30px] md:leading-[38px]">
              Let’s make things happen
            </h3>
            <p className="text-[15px] leading-relaxed text-black/80 sm:text-base md:text-[18px] md:leading-[23px]">
              Contact us today to learn more about how our digital marketing services can help your business grow and
              succeed online.
            </p>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-3 rounded-[12px] bg-black px-5 py-4 text-sm font-medium text-white shadow-[0px_15px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0px_20px_45px_rgba(0,0,0,0.35)] sm:w-auto sm:px-7 sm:py-5 sm:text-base md:text-[20px] md:leading-[28px]"
            >
              Get your free proposal
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="relative mt-12 flex w-full max-w-[320px] items-center justify-center self-center md:mt-0 md:max-w-[380px]">
            <div className="absolute inset-x-4 bottom-0 h-[60px] rounded-full border border-black/15" />
            <div className="absolute inset-x-8 bottom-5 h-[60px] rounded-full border border-black/15" />
            <div className="relative flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-full border border-black/20 bg-white sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]">
              <img
                src={Illustration}
                alt="Call to action illustration"
                className="h-[220px] w-[220px] object-contain sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
