import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";

export default function ProductDetailPage() {
  const { slug } = useParams();
  // FIX: Removed fallback "|| projectDetails[0]" to ensure 404s are handled correctly
  const product = projectDetails.find((item) => item.slug === slug);

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
      {/* Container */}
      <article className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20 space-y-20 md:space-y-32">
        
        {/* Header Section */}
        <header className="space-y-8 md:space-y-10 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link
              to="/projects"
              className="group inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200 mr-2">←</span>
              Back to projects
            </Link>
            
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-semibold">
                Case Study
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk tracking-tight leading-[1.1]">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-light">
              {product.headline}
            </p>
          </div>
        </header>

        {/* Hero Image */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-zinc-800 to-transparent opacity-20 blur-2xl rounded-[2.5rem]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
            <img
              src={product.heroImage}
              alt={product.heroAlt || `${product.title} Hero`}
              className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </section>

        {/* Brief & Challenge Grid */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold">Overview</h3>
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

          {/* Right: The Challenge Card */}
          <div className="lg:col-span-5 bg-zinc-900/30 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-6">
              The Challenge
            </h3>
            <ul className="space-y-4">
              {product.challengeItems.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-zinc-300 text-sm md:text-base leading-relaxed">
                  <span className="mt-1.5 block min-w-[6px] h-[6px] rounded-full bg-emerald-500/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution & Process */}
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Solution */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold pl-2">The Solution</h3>
            <div className="space-y-4">
              {product.solutionItems.map((item, idx) => (
                <div key={idx} className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-emerald-400">0{idx + 1}</span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/20 transition-colors" />
                  </div>
                  <p className="text-base text-zinc-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Process */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold pl-2">Process</h3>
            <div className="space-y-4">
              {product.process.map((step, idx) => (
                <div key={step.title} className="flex flex-col p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-900/20">
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

        {/* Video Section (Only render if ID exists) */}
        {product.vimeoId && (
          <section className="space-y-8">
            <div className="border-l-2 border-emerald-500 pl-6">
              <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Project Demo</h2>
            </div>
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl aspect-video">
              <iframe
                src={`https://player.vimeo.com/video/${product.vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
                title="Project Video"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        <section className="space-y-8">
           <div className="border-l-2 border-emerald-500 pl-6">
            <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Screens & Flows</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {product.gallery.map((shot, i) => (
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

        <hr className="border-white/10" />

        {/* Footer / Next Projects */}
        <footer className="space-y-12">
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
                    <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  {/* Assuming item might have a category or short desc, add here if exists */}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 p-12 text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold max-w-2xl mx-auto">
              Ready to build something <span className="text-emerald-400">extraordinary?</span>
            </h3>
            <div className="flex items-center justify-center pt-4">
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