import React from "react"
import SEO from "../Components/SEO"

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy | Nex Digital Agency"
      description="Understand how Nex Digital Agency collects, uses, and protects personal information across our marketing, automation, and analytics services."
      canonical="https://nexdigital.name.ng/privacy"
      openGraph={{
        title: "Privacy Policy | Nex Digital Agency",
        description:
          "Learn how Nex Digital Agency handles personal data, cookies, and compliance while delivering growth programmes.",
        url: "https://nexdigital.name.ng/privacy",
        image: "https://nexdigital.name.ng/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
    />
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-10 px-4 sm:px-6 lg:px-10">
        <header className="space-y-4 text-center sm:text-left">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:self-start">
            Privacy Policy
          </span>
          <h1 className="font-space-grotesk text-[32px] font-semibold leading-[38px] sm:text-[40px] sm:leading-[46px]">
            How we protect your data and honour your trust
          </h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            Nex Digital Agency builds growth systems for clients worldwide. This privacy policy explains how we collect,
            use, and safeguard personal information obtained through our website, campaigns, and client engagements.
          </p>
        </header>

        <article className="space-y-6 text-white/70">
          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">1. Information we collect</h2>
            <p>
              We collect only the information necessary to deliver and improve our services. This includes contact details shared through
              forms or chat widgets, usage data from analytics platforms, CRM records provided by clients, and project documentation uploaded
              during engagements.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Identification data such as names, job titles, and company information.</li>
              <li>Contact data such as email addresses, phone numbers, and messaging handles.</li>
              <li>Engagement data such as meeting notes, campaign performance, and automation logs.</li>
              <li>Technical data such as IP addresses, device characteristics, and cookie identifiers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">2. How we use information</h2>
            <p>We process information to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Deliver contracted services including strategy, creative, analytics, and automation support.</li>
              <li>Respond to enquiries, schedule consultations, and provide customer service.</li>
              <li>Improving website experience and measure the effectiveness of marketing activities.</li>
              <li>Comply with legal obligations, prevent fraud, and enforce our agreements.</li>
            </ul>
            <p>We never sell personal data or use it for purposes unrelated to the services you request.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">3. Data retention and security</h2>
            <p>
              We store information only as long as necessary to fulfil the purposes outlined above or to meet regulatory requirements. We
              deploy secure cloud infrastructure, access controls, and encryption to protect the data we manage. When data is no longer
              required, we delete or anonymise it safely.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">4. Working with third parties</h2>
            <p>
              We may share information with trusted partners that help us deliver our services, such as analytics providers, CRM platforms, or
              payment processors. Each partner agrees to strict confidentiality obligations and uses the data only as instructed by Nex Digital
              Agency.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">5. Your rights</h2>
            <p>You have the right to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Request a copy of the personal data we hold about you.</li>
              <li>Ask us to correct, update, or delete information that is inaccurate or outdated.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Lodge a complaint with your local data protection authority if you believe we have misused your data.</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@nexdigital.name.ng" className="underline">
                info@nexdigital.name.ng
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">6. Updates to this policy</h2>
            <p>
              We review this policy regularly to reflect new services, regulations, or best practices. We will post any updates on this page
              and include a revision date. Continued use of our services after an update constitutes acceptance of the new terms.
            </p>
            <p className="text-white/60">Last updated: October 20, 2025</p>
          </section>
        </article>
      </div>
    </section>
  </>
)

export default PrivacyPolicy

