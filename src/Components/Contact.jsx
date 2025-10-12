
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

import Illustration from "../assets/Illustration1.svg"


const Contact = ({ id }) => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const artRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
      gsap.from(artRef.current, {
        autoAlpha: 0,
        x: 40,
        duration: 0.7,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section id={id} ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23] font-space-grotesk">
            <h2 className="text-[26px] font-medium leading-[34px] text-white sm:text-[32px] md:text-[40px] md:leading-[51px]">Contact Us</h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-white/75 sm:text-sm md:text-[18px] md:leading-[23px]">
            Connect with us: let's discuss your digital marketing needs.
          </p>
        </header>

        <div className="mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-[45px] border border-white/10 bg-[#F3F3F3] px-6 py-12 text-black shadow-[0px_25px_80px_rgba(0,0,0,0.35)] sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:pl-[100px] lg:pr-0 lg:py-[60px] xl:gap-16 xl:py-[80px]">
          <div ref={formRef} className="flex w-full max-w-[556px] flex-col gap-10">
            <fieldset className="flex items-center gap-[35px]">
              <legend className="sr-only">Reason for reaching out</legend>
              <label className="flex items-center gap-3 text-[18px]">
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-black bg-white" />
                  <input
                    type="radio"
                    name="intent"
                    defaultChecked
                    className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-full"
                  />
                  <span className="pointer-events-none absolute h-3.5 w-3.5 rounded-full bg-[#D81F26] opacity-0 transition peer-checked:opacity-100" />
                </span>
                <span>Say hi</span>
              </label>
              <label className="flex items-center gap-3 text-[18px]">
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-black bg-white" />
                  <input
                    type="radio"
                    name="intent"
                    className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-full"
                  />
                  <span className="pointer-events-none absolute h-3.5 w-3.5 rounded-full bg-[#D81F26] opacity-0 transition peer-checked:opacity-100" />
                </span>
                <span>Get a quote</span>
              </label>
            </fieldset>

            <form className="flex flex-col gap-[25px]" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[16px] text-black">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-[18px] text-[#898989] outline-none placeholder:text-[#898989] transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[16px] text-black">Email*</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-[18px] text-[#898989] outline-none placeholder:text-[#898989] transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-space-grotesk text-[16px] text-black">Message*</span>
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-[18px] text-[#898989] outline-none placeholder:text-[#898989] transition focus:-translate-y-0.5 focus:border-[#D81F26]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-black px-[35px] py-[20px] font-space-grotesk text-[20px] font-medium text-white transition hover:bg-[#161616]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="relative mt-10 hidden flex-1 items-start justify-end overflow-visible rounded-r-[45px] lg:flex">
            <img src={Illustration} alt="Abstract contact illustration" className="h-[648px] w-[692px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
