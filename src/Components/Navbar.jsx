import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import LogoMark from "../assets/logo.png"
import { blogPages } from "../data/blogPosts"

const blogSubmenuLinks = blogPages.map((page) => ({
  label: `Page ${page.page} — ${page.label}`,
  href: page.href,
}))

const primaryLinks = [
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Smart Website Development", href: "/services/web" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Strategic Lead Generation", href: "/services/lead" },
      { label: "Advanced Business Process Automation", href: "/services/automation" },
      { label: "Analytics & Tracking", href: "/services/analytics" },
    ],
  },
  { label: "About us", href: "/about" },
  { label: "Use Cases", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog", submenu: blogSubmenuLinks },
]

const FunMenuIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="menuGradient" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FD853A" />
        <stop offset="0.5" stopColor="#F83F62" />
        <stop offset="1" stopColor="#D81F26" />
      </linearGradient>
    </defs>
    <rect x="9" y="12" width="30" height="4" rx="2" fill="url(#menuGradient)" />
    <rect x="9" y="22" width="24" height="4" rx="2" fill="url(#menuGradient)" />
    <rect x="9" y="32" width="18" height="4" rx="2" fill="url(#menuGradient)" />
    <circle cx="36" cy="24" r="3" fill="url(#menuGradient)" />
  </svg>
)

const FunCloseIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="closeGradient" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FD853A" />
        <stop offset="1" stopColor="#D81F26" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="21" stroke="url(#closeGradient)" strokeWidth="2" opacity="0.3" />
    <path
      d="M16 16L32 32"
      stroke="url(#closeGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 16L16 32"
      stroke="url(#closeGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return

    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const selectLinks = gsap.utils.selector(panel)

      tlRef.current = gsap.timeline({ paused: true })
      tlRef.current
        .set(overlayRef.current, { autoAlpha: 0 })
        .set(panel, { y: -24, autoAlpha: 0 })
        .set(selectLinks(".mobile-link"), { y: 20, autoAlpha: 0 })
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.35, ease: "power2.out" })
        .to(panel, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" }, "<+0.05")
        .to(selectLinks(".mobile-link"), { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.08, ease: "power3.out" }, "-=0.28")

      tlRef.current.eventCallback("onReverseComplete", () => {
        gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" })
      })
    }, overlayRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!tlRef.current || !overlayRef.current) return

    if (isOpen) {
      gsap.set(overlayRef.current, { display: "flex", pointerEvents: "auto" })
      document.body.style.overflow = "hidden"
      tlRef.current.play()
    } else {
      document.body.style.overflow = ""
      tlRef.current.reverse()
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => {
    setIsOpen(false)
    setExpandedMenu(null)
  }
  const toggleSubmenu = (label) => {
    setExpandedMenu((prev) => (prev === label ? null : label))
  }

  return (
    <header className="relative z-50 border-b border-white/10 bg-black/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:py-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={LogoMark} alt="neX agency logo" className="h-8 w-auto sm:h-9 lg:h-12" loading="lazy" />
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium text-white/70 lg:flex">
          {primaryLinks.map((link) =>
            link.submenu ? (
              <div key={link.label} className="group relative">
                <Link
                  to={link.href}
                  className="flex items-center gap-2 rounded-full px-4 py-2 tracking-wide text-white/70 transition duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </Link>
                <div className="absolute left-0 top-full hidden min-w-[220px] rounded-xl border border-white/15 bg-[#151518] py-2 shadow-xl group-hover:block">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-full px-4 py-2 tracking-wide text-white/70 transition duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            to="/booking"
            className="rounded-full border border-white/20 bg-black/40 px-6 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(216,31,38,0.18)] transition duration-200 hover:border-[#D81F26] hover:bg-black/60 hover:text-white"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/60 text-white/80 shadow-[0_12px_40px_rgba(216,31,38,0.28)] transition duration-200 hover:border-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FunCloseIcon className="h-7 w-7" /> : <FunMenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 hidden items-start justify-end bg-gradient-to-br from-black/90 via-black/80 to-black/60 lg:hidden"
        style={{ display: "none" }}
      >
        <div
          ref={panelRef}
          className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/85 p-9 text-white shadow-[0_30px_90px_rgba(216,31,38,0.35)] backdrop-blur-2xl"
        >
          <button
            type="button"
            onClick={closeMenu}
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-black/60 text-white/80 transition duration-200 hover:border-white/50 hover:text-white"
            aria-label="Close navigation"
          >
            <FunCloseIcon className="h-6 w-6" />
          </button>

          <Link to="/" onClick={closeMenu} className="mb-8 flex items-center gap-3">
            <img src={LogoMark} alt="neX agency logo" className="h-9 w-auto" loading="lazy" />
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">digital agency</span>
          </Link>

          <div className="space-y-3">
            {primaryLinks.map((link) => {
              if (link.submenu) {
                const open = expandedMenu === link.label
                return (
                  <div key={link.label} className="rounded-2xl border border-white/15 bg-white/[0.05]">
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(link.label)}
                      className="mobile-link flex w-full items-center justify-between gap-2 px-5 py-3 text-left text-base font-semibold tracking-wide text-white/90"
                      aria-expanded={open}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                        open ? "max-h-96 border-t border-white/10" : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-1 px-5 py-3">
                        {link.submenu.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.href}
                              onClick={closeMenu}
                              className="block rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition hover:border-[#D81F26] hover:text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={closeMenu}
                  className="mobile-link block rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-base font-semibold tracking-wide text-white/90 shadow-[0_14px_40px_rgba(216,31,38,0.2)] transition duration-200 hover:border-[#D81F26] hover:bg-black/70"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <Link
            to="/booking"
            onClick={closeMenu}
            className="mobile-link mt-9 flex items-center justify-center gap-2 rounded-full border border-[#D81F26] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(216,31,38,0.25)] transition duration-200 hover:bg-[#D81F26]/30"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

