// Hero.jsx (logos normalized + mobile-tight)
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Illustration from "../assets/Illustration.svg";
import LogoMark from "../assets/logo.png";
import HubSpotLogo from "../assets/Company logo (2).svg";
import GoHighLevelLogo from "../assets/Company logo (3).png";
import ZoomLogo from "../assets/Company logo (4).svg";
import { Google } from "@lobehub/icons";

const partnerLogos = [
  { name: "GoHighLevel", type: "img", src: GoHighLevelLogo },
  { name: "Google", type: "svg", component: Google.BrandColor },
  { name: "HubSpot", type: "img", src: HubSpotLogo },
  { name: "Zoom", type: "img", src: ZoomLogo },
];

const Hero = ({ id }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: -18, autoAlpha: 0, duration: 0.6 })
        .from(".hero-headline", { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-brand", { y: 24, autoAlpha: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-copy", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { y: 16, autoAlpha: 0, duration: 0.5 }, "-=0.35")
        .from(".hero-logos .brand-slot", { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.4 }, "-=0.25")
        .from(".hero-illustration", { x: 40, autoAlpha: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-card", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.5");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={heroRef} className="bg-black relative overflow-hidden">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D81F26]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#D81F26]/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 px-6 pt-20 pb-16 lg:flex-row lg:items-center">
        <div className="w-full max-w-xl lg:w-1/2">
          <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-white/60 backdrop-blur-md">
            <span className="h-1 w-1 rounded-full bg-[#D81F26]" />
            <span>Digital agency</span>
          </div>

          <h1 className="hero-headline mt-6 text-4xl font-space-grotesk font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Accelerating ambitious brands with AI-powered marketing systems
          </h1>

          <p className="hero-copy mt-6 text-base leading-relaxed text-white/70">
            <span className="inline-flex items-end gap-2 align-bottom">
              <img src={LogoMark} alt="neX" className="h-8 w-auto pb-2" loading="lazy" />
            </span>
            &nbsp;digital agency engineers automated growth systems for ambitious teams worldwide. We blend brand strategy, conversion-first web
            experiences, demand generation, and RevOps automation so your pipeline grows even when your team is offline.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="rounded-full border border-white/25 bg-black/40 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(216,31,38,0.25)] transition duration-200 hover:border-[#D81F26] hover:bg-black/60 hover:text-white"
            >
              Book a consultation
            </Link>
          </div>

          {/* Logos — normalized sizing */}
          <div className="hero-logos mt-12">
            <p className="text-xs uppercase tracking-[0.33em] text-white/45">Powered by</p>

            {/* Single row, no wrap. We reduce height + gap on mobile to fit. */}
            <div className="mt-5 flex w-full max-w-md items-center justify-between gap-4 sm:gap-6 md:gap-8 flex-nowrap">
              {partnerLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="brand-slot h-4 sm:h-5 md:h-6 lg:h-7 w-auto shrink-0 flex items-center justify-center opacity-90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  title={brand.name}
                  aria-label={brand.name}
                >
                  {brand.type === "svg" && brand.component ? (
                    // Force SVG to respect the slot height
                    <brand.component className="h-full w-auto" aria-hidden="true" />
                  ) : (
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2">
          <figure className="hero-illustration relative mx-auto hidden max-w-xl lg:block">
            <img
              src={Illustration}
              alt="Megaphone illustration with abstract shapes"
              className="w-full drop-shadow-[0_30px_120px_rgba(216,31,38,0.35)]"
              loading="lazy"
            />
          </figure>

          <div className="hero-card absolute -bottom-12 right-8 hidden items-center gap-3 rounded-full border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-lg lg:flex">
            <span className="h-3 w-3 rounded-full bg-[#D81F26]" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Active campaigns</p>
              <p className="font-space-grotesk text-lg font-semibold text-white">128 this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
