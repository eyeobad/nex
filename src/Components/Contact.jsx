// Contact.jsx
import React, { useEffect } from "react";

export default function Contact({ id = "contact" }) {
  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id={id} className="bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <header className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23] font-space-grotesk">
            <h2 className="text-[26px] font-medium leading-[34px] text-white sm:text-[32px] md:text-[40px] md:leading-[51px]">
              Talk to Nex Digital Agency
            </h2>
          </div>
          <p className="max-w-xl text-[14px] leading-relaxed text-white/75 sm:text-sm md:text-[18px] md:leading-[23px]">
            Fill out the short form below and our growth team will respond with next steps within one business day.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[980px] rounded-[22px] border border-white/10 bg-[#0D0F13] p-4 sm:p-6 lg:p-8">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/0tC0xYMeShCbQevMFse2"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "5px",
              minHeight: "690px",
            }}
            id="inline-0tC0xYMeShCbQevMFse2"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Form"
            data-height="690"
            data-layout-iframe-id="inline-0tC0xYMeShCbQevMFse2"
            data-form-id="0tC0xYMeShCbQevMFse2"
            title="Contact Form"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
