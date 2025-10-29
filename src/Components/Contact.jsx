// Contact.jsx
import React, { useEffect, useState } from "react"
import PresenceCalculator from "./PresenceCalculator"
import { packagesData } from "./Packages"

export default function Contact({ id = "contact" }) {
  const [recommended, setRecommended] = useState(packagesData[0])

  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js"
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script")
      s.src = src
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <section id={id} className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D81F26]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 rounded-full bg-[#3B1F49]/40 blur-[160px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="mb-12 flex flex-col gap-4 text-center lg:mb-14">
          <span className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 font-space-grotesk text-[11px] uppercase tracking-[0.32em] text-[#D81F26]/80 sm:text-xs">
            Contact
          </span>
          <h2 className="text-[28px] font-medium leading-[36px] text-white sm:text-[34px] md:text-[42px] md:leading-[52px]">
            Tell us about your project
          </h2>
          <p className="mx-auto max-w-3xl text-[14px] leading-relaxed text-white/70 sm:text-[15px] md:text-[18px] md:leading-[27px]">
            Share your targets, your current stack, and anything that feels stuck. We’ll respond with a next-step plan inside one business day.
          </p>
        </header>

        <div className="mx-auto grid w-full max-w-[1180px] gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,520px)] lg:items-start">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="space-y-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D81F26]/80 sm:text-sm">Try the growth pulse</p>
              <h3 className="font-space-grotesk text-[24px] font-semibold text-white sm:text-[28px] md:text-[32px]">
                Get your online presence score
              </h3>
              <p className="text-[13px] leading-relaxed text-white/70 sm:text-[14px] md:text-[16px]">
                Slide each lever to match your current momentum. Your strategist receives the score alongside your form submission so we can prep a tailored roadmap.
              </p>
            </div>

            <PresenceCalculator onRecommendationChange={setRecommended} />
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="w-full rounded-[18px] border border-white/12 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xs lg:text-[11px]">
              Recommended package <span className="ml-3 rounded-full bg-[#D81F26]/20 px-3 py-1 text-white/90">{recommended.name}</span>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/12 bg-black/60 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/0tC0xYMeShCbQevMFse2?transparent=1"
                className="w-full"
                style={{ border: "none", borderRadius: "0px", background: "transparent", minHeight: "680px" }}
                id="inline-0tC0xYMeShCbQevMFse2"
                allowTransparency="true"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="687"
                data-layout-iframe-id="inline-0tC0xYMeShCbQevMFse2"
                data-form-id="0tC0xYMeShCbQevMFse2"
                title="Contact Form"
                loading="lazy"
              />
            </div>
            <p className="text-center text-[11px] leading-relaxed text-white/45 sm:text-xs">
              Mention your score in the message field so we can prioritise the right playbook.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
