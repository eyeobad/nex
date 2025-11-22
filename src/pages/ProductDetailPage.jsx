import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";

export default function ProductDetailPage() {
  const { slug } = useParams();
  // FIX: Removed fallback "|| projectDetails[0]" to ensure 404s are handled correctly
  const product = projectDetails.find((item) => item.slug === slug);
  const primaryShot = product?.gallery?.[0];
  const remainingShots = product?.gallery?.slice(1) ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 / Not Found View
  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
        <div className="max-w-xl text-center space-y-6 animate-fade-in">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-zinc-500">
            404 — Not Found
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk">
            Project not found
          </h1>
          <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
            The case study you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-emerald-500/30">
      <article className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-16 space-y-14 md:space-y-20">
        {/* Header */}
        <header className="space-y-6 md:space-y-8 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200 mr-2">←</span>
              Back to projects
            </Link>
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D81F26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D81F26]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-semibold">
                Case Study
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight">
              {product.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
              {product.headline}
            </p>
          </div>
        </header>

        {/* Screens & Flows (replaces hero) */}
        {primaryShot && (
          <section className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#D81F26]/15 to-transparent opacity-30 blur-3xl rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <img
                src={primaryShot.image}
                alt={primaryShot.caption || `${product.title} screen`}
                className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </section>
        )}

        {/* Overview + Challenge */}
        <section
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start rounded-3xl border border-white/10 p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(216,31,38,0.16), rgba(0,0,0,0.6))" }}
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#D81F26] font-semibold">Overview</h3>
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
                {product.summary}
              </p>
            </div>
            {product.liveUrl && (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
          <div className="lg:col-span-5 bg-black/50 border border-white/10 p-7 md:p-8 rounded-2xl">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#D81F26] font-semibold mb-5">
              The Challenge
            </h3>
            <ul className="space-y-4">
              {product.challengeItems.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-zinc-300 text-sm md:text-base leading-relaxed">
                  <span className="mt-1.5 block min-w-[6px] h-[6px] rounded-full bg-[#D81F26]/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution + Process */}
        <section
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 rounded-3xl border border-white/10 p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(216,31,38,0.12), rgba(0,0,0,0.65))" }}
        >
          <div className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#D81F26] font-semibold pl-1">The Solution</h3>
            <div className="space-y-4">
              {product.solutionItems.map((item, idx) => (
                <div key={idx} className="group p-5 md:p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[#D81F26]">0{idx + 1}</span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/20 transition-colors" />
                  </div>
                  <p className="text-base text-zinc-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#D81F26] font-semibold pl-1">Process</h3>
            <div className="space-y-4">
              {product.process.map((step, idx) => (
                <div key={step.title} className="flex flex-col p-5 md:p-6 rounded-2xl border border-white/5 bg-zinc-900/40">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="flex items-center justify-center w-6 h-6 rounded bg-white/10 text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-lg font-semibold font-space-grotesk">{step.title}</h4>
                  </div>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video + Feature Visual */}
        {product.vimeoEmbed && primaryShot && (
          <section className="space-y-6">
            <div className="border-l-2 border-red-400 pl-6">
              <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Project Demo & Key Screen</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl aspect-[4/3] md:aspect-video">
                <iframe
                  src={product.vimeoEmbed}
                  title={`${product.title} demo video`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl flex">
                <img 
                  src={primaryShot.image} 
                  alt={primaryShot.caption || `${product.title} screen`} 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
          </section>
        )}

        {/* Gallery Grid (remaining shots) */}
        {remainingShots.length > 0 && (
          <section className="space-y-6">
            <div className="border-l-2 border-red-400 pl-6">
              <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Screens & Flows</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {remainingShots.map((shot, i) => (
                <figure key={i} className="group space-y-3">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                    <img 
                      src={shot.image} 
                      alt={shot.caption} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy" 
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-500 font-medium px-1">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <hr className="border-white/10" />

        {/* Footer / Next Projects */}
        <footer className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold">Explore More</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {product.otherProjects?.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group p-6 rounded-2xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#D81F26] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 p-10 md:p-12 text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold max-w-2xl mx-auto">
              Ready to build something <span className="text-[#D81F26]">extraordinary?</span>
            </h3>
            <div className="flex items-center justify-center pt-2">
              <Link
                to="/quote"
                className="px-8 py-4 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
