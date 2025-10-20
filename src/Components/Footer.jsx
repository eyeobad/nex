
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

import { Linkedin, Twitter, Facebook } from "lucide-react"
import Logo from "../assets/logo.png"

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
      gsap.from(".footer-card", {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <footer className="relative bg-black py-24 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[100px]">
        <div className="flex flex-col gap-14 rounded-[45px]  bg-black px-6 py-12 shadow-[0px_30px_80px_rgba(0,0,0,0.5)] sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-6 lg:gap-10">
              <img src={Logo} alt=".neX logo" className="h-12 w-auto" />
              <nav className="flex flex-wrap items-center gap-6 text-[16px] sm:text-[18px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="underline decoration-white/40 decoration-1 underline-offset-4 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:-translate-y-1"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex min-w-[280px] max-w-[360px] flex-col gap-6">
              <span className="inline-flex w-fit rounded-[7px] bg-[#D81F26] px-[7px] py-2 font-space-grotesk text-[18px] font-medium text-black">
                Contact us:
              </span>
              <div className="flex flex-col gap-4 text-[16px] sm:text-[18px]">
                <p>Email: info@nexdigital.name.ng</p>
                <p>Phone: 09038357956</p>
                
              </div>
            </div>

            <div className="flex w-full max-w-[634px] flex-col gap-4 rounded-[14px] bg-[#231F20] px-[40px] py-[40px] sm:flex-row sm:items-center sm:gap-6">
              <input
                type="email"
                placeholder="Email"
                className="h-[67px] w-full max-w-[285px] rounded-[14px] border border-white/30 bg-transparent px-6 text-white outline-none transition focus:border-white"
              />
              <button
                type="submit"
                className="inline-flex h-[68px] w-full max-w-[249px] items-center justify-center rounded-[14px] bg-[#D81F26] px-6 py-4 font-space-grotesk text-[18px] font-medium text-black transition hover:bg-[#f04a3f]"
              >
                Subscribe to news
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="h-px w-full bg-black/80" aria-hidden />
            <div className="flex flex-col gap-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:text-[16px]">
              <p>&copy; 2025 .neX All Rights Reserved.</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/privacy" className="underline transition hover:text-white">
                  Privacy Policy
                </Link>
                <span aria-hidden className="text-white/40">
                  |
                </span>
                <Link to="/terms" className="underline transition hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


