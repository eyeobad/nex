import React from "react"
import SEO from "../Components/SEO"

const TermsOfService = () => (
  <>
    <SEO
      title="Terms of Service | Nex Digital Agency"
      description="Review the engagement terms, responsibilities, and acceptable use guidelines that govern Nex Digital Agency's services."
      canonical="https://nexdigitals.agency/terms"
      openGraph={{
        title: "Terms of Service | Nex Digital Agency",
        description:
          "Understand how Nex Digital Agency delivers projects, manages billing, and handles intellectual property across every engagement.",
        url: "https://nexdigitals.agency/terms",
        image: "https://nexdigitals.agency/nex.jpg",
        siteName: "Nex Digital Agency",
        locale: "en",
      }}
    />
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-10 px-4 sm:px-6 lg:px-10">
        <header className="space-y-4 text-center sm:text-left">
          <span className="inline-flex w-fit self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:self-start">
            Terms of Service
          </span>
          <h1 className="font-space-grotesk text-[32px] font-semibold leading-[38px] sm:text-[40px] sm:leading-[46px]">
            The rules that keep our partnerships clear and collaborative
          </h1>
          <p className="text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            These terms ("Terms") govern the use of Nex Digital Agency's website and services. By working with us or accessing our digital
            properties, you agree to the commitments outlined below.
          </p>
        </header>

        <article className="space-y-6 text-white/70">
          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">1. Services</h2>
            <p>
              Nex Digital Agency delivers strategic, creative, technology, and analytics services as defined in each statement of work,
              proposal, or order form. Scope, deliverables, and timelines are agreed in writing before work begins.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">2. Client responsibilities</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>Provide timely access to stakeholders, tools, and information needed to complete work.</li>
              <li>Review deliverables promptly and share consolidated feedback within agreed timeframes.</li>
              <li>Represent that all assets supplied (copy, data, creative, lists) are lawful and properly licensed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">3. Fees and payment</h2>
            <p>
              Fees are outlined in each engagement letter. Invoices are payable within 14 days unless otherwise specified. Late payments may incur
              financing charges or a pause in services until the account is current.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">4. Intellectual property</h2>
            <p>
              Upon full payment, you own the final deliverables we produce specifically for you. Nex Digital Agency retains ownership of
              pre-existing materials, methodologies, and software used while delivering services. We may showcase non-confidential project
              outcomes in our portfolio unless you instruct otherwise in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">5. Confidentiality</h2>
            <p>
              We keep all proprietary or sensitive information confidential, use it solely for the project, and ensure our team and partners do
              the same. You agree to treat our documentation, pricing, and methodologies as confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">6. Liability</h2>
            <p>
              Nex Digital Agency is committed to delivering high-quality work. However, we are not liable for indirect, incidental, or
              consequential damages. Our total liability is limited to the fees paid for the relevant engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">7. Cancellation</h2>
            <p>
              Either party may end an engagement with 30 days' written notice. Work completed up to the termination date will be invoiced, and
              any prepaid amounts for unperformed services will be credited or refunded.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">8. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be handled in the competent courts of Lagos
              State unless both parties agree to an alternative venue or arbitration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-space-grotesk text-[22px] font-semibold text-white">9. Updates</h2>
            <p>
              We may revise these Terms to reflect new services or legal requirements. Material changes will be posted on this page with a new
              revision date. Continued use of our services constitutes acceptance of the updated Terms.
            </p>
            <p className="text-white/60">Last updated: October 20, 2025</p>
          </section>
        </article>
      </div>
    </section>
  </>
)

export default TermsOfService
