import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Alpine Home Air",
    description: "A high-performance HVAC retail platform featuring advanced on-page SEO architecture and fluid micro-animations.",
    src: "/alpine mockup.jpg",
    link: "https://www.alpinehomeair.com/",
    color: "#2E5C86",
  },
  {
    title: "Trust Roofing",
    description: "A lead-generation powerhouse for roofing services. Strategically integrates high-conversion capture forms.",
    src: "/roof mockup.jpg",
    link: "https://trustroofing.com/",
    color: "#000080",
  },
  {
    title: "Black Cafe",
    description: "An atmospheric digital storefront for a boutique coffee brand, designed to translate physical ambiance into a premium web experience.",
    src: "/cofee mock up.jpg",
    link: "https://Coffee-pi-navy.vercel.app",
    color: "#1a1a1a", 
  },
  {
    title: "E-Commerce Superstore",
    description: "A comprehensive digital marketplace engineered for high-volume inventory management and seamless user checkout experiences.",
    src: "/seun.jpg",
    link: "https://eyeobad.pythonanywhere.com/home",
    color: "#FFFFFF",
  },
  {
    title: "Just a Memecoin",
    description: "A viral-architected brand platform designed with high-impact typography and frictionless user flows.",
    src: "/memecoin.jpg",
    link: "https://www.justamemecoin.com/",
    color: "#FFD700",
  },
  {
    title: "Artisanal Bakery",
    description: "A visual-first landing page designed to showcase product quality and drive local foot traffic through appetizing UI design.",
    src: "/bakery mockup.jpg",
    link: "https://sweet-treats-landingpage.netlify.app/",
    color: "#A0522D",
  },
  {
    title: "Motion on Solana",
    description: "An immersive Web3 interface featuring GPU-accelerated motion graphics and real-time blockchain data.",
    src: "/motion mockup.jpg",
    link: "https://motiononsolana.com/",
    color: "#9945FF",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Your Overflow Fix (Preserved)
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const originalOverflow = mainElement.style.overflow;
      const originalOverflowX = mainElement.style.overflowX;
      mainElement.style.overflow = "visible";
      mainElement.style.overflowX = "clip"; 
      return () => {
        mainElement.style.overflow = originalOverflow;
        mainElement.style.overflowX = originalOverflowX;
      };
    }
  }, []);

  return (
    <div className="bg-black relative z-10" ref={container}>
      <section className="text-white w-full bg-slate-950 pb-[20vh] pt-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
}

function Card({ i, title, description, src, link, color, progress, range, targetScale }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Dynamic text color logic
  const isLight = ["#FFFFFF", "#FFD700", "#E6E6E6"].includes(color);
  const textColor = isLight ? "#000000" : "#FFFFFF";

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          // MATCHED CODE A: Adjusted top offset to -5vh (was -10vh) to prevent clipping
          top: `calc(-5vh + ${i * 25}px)`,
          willChange: "transform",
        }}
        // MATCHED CODE A: Responsive widths instead of fixed 800px
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[1000px] origin-top"
      >
        <div 
          className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          // MATCHED CODE A: Removed fixed height, relying on aspect ratios and padding
          style={{ minHeight: "400px" }}
        >
          {/* LEFT: Image (60%) */}
          <div className="w-full md:w-[60%] h-[250px] md:h-[450px] relative overflow-hidden group">
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
              <img
                src={src}
                alt={title}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* RIGHT: Content (40%) */}
          {/* MATCHED CODE A: Removed backdrop-blur, used solid bg-zinc-900 */}
          <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-between bg-zinc-900">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span 
                    className="w-3 h-3 rounded-full animate-pulse" 
                    style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} 
                />
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Project 0{i + 1}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-space-grotesk leading-tight">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4">
                {description}
              </p>
            </div>

            <div className="flex pt-6 border-t border-white/5 mt-auto">
              <a 
                href={link} 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex justify-center items-center px-4 py-3 rounded-xl transition-all text-sm font-bold gap-2 hover:scale-[1.02] hover:brightness-110"
                style={{ 
                  backgroundColor: color,
                  color: textColor
                }}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  progress: PropTypes.object,
  range: PropTypes.array,
  targetScale: PropTypes.number,
};