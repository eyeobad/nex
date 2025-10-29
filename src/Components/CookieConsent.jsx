import React, { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "cookie-consent"

const CookieConsent = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const exitTimer = useRef(null)
  const enterTimer = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setIsMounted(true)
      enterTimer.current = window.setTimeout(() => setIsVisible(true), 600)
      return () => {
        if (enterTimer.current) {
          window.clearTimeout(enterTimer.current)
          enterTimer.current = null
        }
      }
    }
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    document.documentElement.style.setProperty("--cookie-banner-motion", prefersReduced ? "0" : "1")
    return () => {
      document.documentElement.style.removeProperty("--cookie-banner-motion")
    }
  }, [isMounted])

  const persistChoice = (value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value)
      window.dispatchEvent(new CustomEvent("cookie-preference-change", { detail: { status: value } }))
    }
  }

  const closeBanner = (value) => {
    persistChoice(value)
    setIsVisible(false)
    exitTimer.current = window.setTimeout(() => {
      setIsMounted(false)
      exitTimer.current = null
    }, 360)
  }

  useEffect(() => () => {
    if (exitTimer.current) {
      window.clearTimeout(exitTimer.current)
      exitTimer.current = null
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      <style>{`
        .cookie-banner::before{
          content:"";
          position:absolute;
          inset:-40% -40% auto -40%;
          height:180%;
          background:radial-gradient(circle at center, rgba(216,31,38,0.22), transparent 65%);
          opacity:calc(0.65 * var(--cookie-banner-motion, 1));
          animation:cookie-glow 6s ease-in-out infinite alternate;
          pointer-events:none;
        }
        @keyframes cookie-glow{
          from { transform:translate3d(-6%, 2%, 0) scale(1); opacity:0.4; }
          to   { transform:translate3d(6%, -2%, 0) scale(1.08); opacity:0.7; }
        }
        @media (prefers-reduced-motion: reduce){
          .cookie-motion{ transition:none !important; animation:none !important; }
          .cookie-banner::before{ display:none; }
        }
      `}</style>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6">
        <div
          className={[
            "cookie-banner cookie-motion pointer-events-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/8 bg-[rgba(16,16,19,0.92)] px-5 py-5 backdrop-blur-xl shadow-[0_24px_90px_rgba(216,31,38,0.28)] transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(.18,.89,.32,1.28)]",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 md:translate-y-12 opacity-0",
          ].join(" ")}
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p className="font-space-grotesk text-sm font-semibold tracking-[0.24em] text-[#D81F26] uppercase">
                We use cookies
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                We use cookies to improve your experience on our site. By using our site, you consent to the use of cookies.
                Rejecting cookies will prevent non-essential cookies from loading.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="/privacy"
                className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60 hover:text-white transition"
              >
                Cookie Policy
              </a>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <button
                  type="button"
                  onClick={() => closeBanner("rejected")}
                  className="h-11 rounded-full border border-white/14 px-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:text-white"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={() => closeBanner("accepted")}
                  className="h-11 rounded-full bg-[#D81F26] px-6 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#f53b40]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieConsent
