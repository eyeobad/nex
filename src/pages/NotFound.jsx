import React from "react"
import { Link } from "react-router-dom"
import SEO from "../Components/SEO"

const NotFound = () => {
  const title = "Page Not Found | Nex Digital Agency"
  const description =
    "Looks like the page you were searching for has moved. Explore our services, blog insights, or reach out and we will guide you."
  const canonical = "https://nexdigital.name.ng/404"

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        robots="noindex, follow"
        openGraph={{
          title,
          description,
          url: canonical,
          image: "https://nexdigital.name.ng/nex.jpg",
          siteName: "Nex Digital Agency",
          locale: "en",
        }}
        twitter={{
          card: "summary_large_image",
          title,
          description,
          image: "https://nexdigital.name.ng/nex.jpg",
        }}
      />

      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-black px-6 py-24 text-center text-white sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="mx-auto h-64 w-64 rounded-full bg-[#D81F26]/10 blur-3xl sm:h-80 sm:w-80" aria-hidden />
        </div>

        <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
            404
          </span>
          <h1 className="text-[28px] font-space-grotesk font-semibold leading-[34px] sm:text-[34px] sm:leading-[40px]">
            We could not find that page
          </h1>
          <p className="text-base leading-relaxed text-white/70 sm:text-[18px]">
            The link you followed may be broken or no longer exists. Bounce back to the homepage, explore our services, or book time
            with the team and we will point you in the right direction.
          </p>

          <div className="mt-4 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-black/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_16px_45px_rgba(216,31,38,0.22)] transition duration-200 hover:border-[#D81F26] hover:bg-black/60 sm:w-auto"
            >
              Go home
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition duration-200 hover:border-[#D81F26] hover:text-white sm:w-auto"
            >
              View services
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-12 w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left text-white/70 sm:p-8">
          <h2 className="text-[18px] font-space-grotesk font-semibold text-white sm:text-[20px]">Try these quick links</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: "Our Process", href: "/process" },
              { label: "Blog Insights", href: "/blog" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Request a Quote", href: "/quote" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 transition duration-200 hover:border-[#D81F26] hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/40 transition group-hover:text-white/70">
                    Explore
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default NotFound
