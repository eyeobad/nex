import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import Logo from "../assets/logo.png"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const navLinks = [
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Use Cases", to: "/process" },
  { label: "Blog", to: "/blog" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
]

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://www.twitter.com" },
]

const Footer = ({ id }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-anim]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      id={id}
      ref={sectionRef}
      className="relative overflow-hidden bg-[#040406] py-20 text-white sm:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[-12%] h-64 w-64 rounded-full bg-[#D81F26]/24 blur-[140px]" />
        <div className="absolute bottom-[-18%] right-[-15%] h-72 w-72 rounded-full bg-[#5A189A]/32 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[200px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <div className="flex flex-col gap-12 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-10 lg:gap-14 lg:rounded-[36px]">
         
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="flex flex-col gap-6" data-footer-anim>
              <div className="flex items-center gap-4">
                <img src={Logo} alt=".neX logo" className="h-12 w-auto" />
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                 DIGITAL AGENCY
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/65 sm:text-[15px]">
                Nex Digital engineers automated growth systems that convert 24/7. We align marketing, sales, and retention around the same revenue KPIs.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon, label, href }) => {
                  const Icon = icon
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <nav
              className="grid gap-4 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto_auto] lg:gap-6"
              data-footer-anim
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/40">Explore</p>
                <ul className="space-y-2.5">
                  {navLinks.slice(0, 3).map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/40">Resources</p>
                <ul className="space-y-2.5">
                  {navLinks.slice(3).map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="flex flex-col gap-5" data-footer-anim>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Stay in the loop</p>
              <p className="text-sm text-white/65">
                Monthly dispatches on AI-assisted marketing, automation blueprints, and battle-tested experiments.
              </p>
              <form className="flex w-full flex-col gap-3 rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                <label htmlFor="footer-email" className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Sign up to get more marketing tips
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="alex@nexbrand.com"
                  className="h-12 rounded-full border border-white/20 bg-black/40 px-4 text-sm text-white outline-none transition focus:border-white/60"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#D81F26] px-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[#ff3a45]"
                >
                  Subscribe
                </button>
                <p className="text-[11px] text-white/40">We respect your inbox. Unsubscribe anytime.</p>
              </form>

              <div className="flex flex-col gap-2 text-sm text-white/65">
                <p>
                  Email:{" "}
                  <a className="text-white transition hover:text-[#D81F26]" href="mailto:info@nexdigitals.agency">
                    info@nexdigitals.agency
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a className="text-white transition hover:text-[#D81F26]" href="tel:+2349038357956">
                    +234 903 835 7956
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-sm"
            data-footer-anim
          >
            <p>&copy; {new Date().getFullYear()} .neX Digital. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden className="hidden text-white/30 sm:inline">
                /
              </span>
              <Link to="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
