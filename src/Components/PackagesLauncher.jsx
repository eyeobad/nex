import React, { useEffect, useState } from "react"
import { Package, X } from "lucide-react"
import { useLocation } from "react-router-dom"
import { packagesData } from "./Packages"

const PackagesLauncher = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-white/15 bg-black/70 px-5 py-3 text-white shadow-[0px_20px_45px_rgba(216,31,38,0.5)] transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
        aria-label="Toggle packages preview"
      >
        <span className="relative inline-flex items-center gap-2">
          <Package className="h-6 w-6 stroke-[2.4] animate-bounce" />
          <span className="bg-gradient-to-r from-[#FD853A] via-[#D81F26] to-[#8B5CF6] bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent animate-[pulse_1.8s_ease-in-out_infinite]">
            Packages
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/75 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-[min(1180px,94vw)] max-h-[85vh] overflow-auto rounded-[32px] border border-white/12 bg-black/90 text-white shadow-[0px_50px_140px_rgba(0,0,0,0.65)]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 rounded-full border border-white/20 p-2 text-white/70 transition hover:text-white"
              aria-label="Close packages preview"
            >
              <X className="h-5 w-5" strokeWidth={2.2} />
            </button>

            <div className="px-8 pb-8 pt-12">
              <div className="grid gap-6 md:grid-cols-3">
                {packagesData.map((pkg, index) => {
                  const themeClasses = [
                    "bg-gradient-to-br from-[#2B2B52]/95 via-[#D81F26]/85 to-[#FF9F7F]/90 border-[#FFB5A7]/40",
                    "bg-gradient-to-br from-[#0F172A]/95 via-[#6366F1]/85 to-[#22D3EE]/80 border-[#8EA6FF]/40",
                    "bg-gradient-to-br from-[#1F2937]/95 via-[#F97316]/85 to-[#FACC15]/80 border-[#FDE68A]/40",
                  ]
                  const theme = themeClasses[index % themeClasses.length]

                  return (
                    <article
                      key={pkg.name}
                      className={`flex h-full min-h-[320px] flex-col gap-5 rounded-[26px] border p-6 shadow-[0px_26px_90px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0px_34px_100px_rgba(216,31,38,0.4)] ${theme}`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <h3 className="font-space-grotesk text-[22px] font-semibold text-white">{pkg.name}</h3>
                            <div className="text-[11px] uppercase tracking-[0.26em] text-white/60">
                              Setup {pkg.pricing.setup} • {pkg.pricing.monthly}
                            </div>
                          </div>
                          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                            {pkg.headline.split(" ")[0]}
                          </span>
                        </div>
                        <a
                          href="#contact"
                          className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white/90"
                          onClick={() => setOpen(false)}
                        >
                          Get Offer
                        </a>
                        <p className="text-[15px] leading-relaxed text-white/70 sm:text-base">{pkg.intro}</p>
                      </div>

                      <ul className="flex flex-1 flex-col gap-3 text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/80" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                        {pkg.pricing.setup} setup • {pkg.pricing.monthly}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PackagesLauncher
