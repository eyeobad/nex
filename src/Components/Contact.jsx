import React from "react"
import Illustration from "../assets/Illustration1.svg"

const Contact = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <div className="flex flex-col overflow-hidden rounded-[45px] border border-white/10 bg-[#F3F3F3] px-6 py-12 shadow-[0px_25px_80px_rgba(0,0,0,0.35)] sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-16">
          <div className="flex w-full max-w-[580px] flex-col gap-10 text-black">
            <div className="flex flex-col gap-4">
              <h2 className="font-space-grotesk text-[28px] font-medium leading-[36px] text-black sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[46px]">
                Let’s build something bold together
              </h2>
              <p className="text-[14px] leading-relaxed text-black/70 sm:text-[15px]">
                Tell us what you’re planning and we’ll come back with ideas, timelines, and what partnering with .nex can look like.
              </p>
            </div>

            <fieldset className="flex flex-wrap items-center gap-6 text-sm font-medium text-black sm:text-base">
              <legend className="sr-only">Reason for reaching out</legend>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="intent"
                  defaultChecked
                  className="relative size-6 cursor-pointer appearance-none rounded-full border border-black bg-white before:absolute before:left-1/2 before:top-1/2 before:size-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#D81F26] before:opacity-0 before:transition-opacity checked:before:opacity-100"
                />
                <span>Say hi</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="intent"
                  className="relative size-6 cursor-pointer appearance-none rounded-full border border-black bg-white before:absolute before:left-1/2 before:top-1/2 before:size-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#D81F26] before:opacity-0 before:transition-opacity checked:before:opacity-100"
                />
                <span>Get a quote</span>
              </label>
            </fieldset>

            <form className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[15px] font-medium text-black">Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[14px] border border-black bg-white px-5 py-4 text-sm text-black shadow-sm outline-none transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[15px] font-medium text-black">Email*</span>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-[14px] border border-black bg-white px-5 py-4 text-sm text-black shadow-sm outline-none transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[15px] font-medium text-black">Message*</span>
                <textarea
                  required
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-[14px] border border-black bg-white px-5 py-4 text-sm text-black shadow-sm outline-none transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-black px-6 py-4 font-space-grotesk text-base font-semibold tracking-wide text-white transition hover:bg-[#161616]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 flex w-full flex-1 justify-center lg:mt-0">
            <div className="relative w-full max-w-[520px]">
              <img src={Illustration} alt="Abstract contact illustration" className="h-auto w-full object-contain" />
              <span className="pointer-events-none absolute -right-16 top-10 h-24 w-24 rotate-45 rounded-[40px] border border-black/20 bg-black/80 blur-md" aria-hidden />
              <span className="pointer-events-none absolute -left-12 bottom-12 h-20 w-20 rotate-12 rounded-[40px] border border-black/20 bg-[#D81F26] blur-md" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
