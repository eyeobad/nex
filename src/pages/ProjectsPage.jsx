import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";

// The project array order is preserved exactly as requested.
const projects = [
  {
    title: "Alpine Home Air",
    description:
      "A high-performance HVAC retail platform featuring advanced on-page SEO architecture and fluid micro-animations to enhance the buying journey.",
    src: "/alpine mockup.jpg",
    link: "https://www.alpinehomeair.com/",
    color: "#2E5C86",
  },
  {
    title: "Trust Roofing",
    description:
      "A lead-generation powerhouse for roofing services. Strategically integrates high-conversion capture forms without compromising the clean, premium aesthetic.",
    src: "/roof mockup.jpg",
    link: "https://trustroofing.com/",
    color: "#000080",
  },
  {
    title: "Black Cafe",
    description:
      "An atmospheric digital storefront for a boutique coffee brand, designed to translate physical ambiance into a premium web experience.",
    src: "/cofee mock up.jpg",
    link: "https://Coffee-pi-navy.vercel.app",
    color: "#000000",
  },
  {
    title: "E-Commerce Superstore",
    description:
      "A comprehensive digital marketplace engineered for high-volume inventory management and seamless user checkout experiences.",
    src: "/seun.jpg",
    link: "https://eyeobad.pythonanywhere.com/home",
    color: "#FFFFFF",
  },
  {
    title: "Just a Memecoin",
    description:
      "A viral-architected brand platform designed with high-impact typography and frictionless user flows to maximize community engagement and social sharing.",
    src: "/memecoin.jpg",
    link: "https://www.justamemecoin.com/",
    color: "#FFD700",
  },
  {
    title: "Artisanal Bakery",
    description:
      "A visual-first landing page designed to showcase product quality and drive local foot traffic through appetizing UI design.",
    src: "/bakery mockup.jpg",
    link: "https://sweet-treats-landingpage.netlify.app/",
    color: "#A0522D",
  },
  {
    title: "Motion on Solana",
    description:
      "An immersive Web3 interface featuring GPU-accelerated motion graphics and real-time blockchain data visualization to reflect network speed.",
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
    // Force each load/reload to start at the top
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = previous;
      };
    }
    return undefined;
  }, []);

  // --- OVERFLOW FIX ---
  useEffect(() => {
    const mainElement = document.querySelector("main");
    let originalOverflow = "";
    if (mainElement) {
      originalOverflow = mainElement.style.overflow;
      mainElement.style.overflow = "visible";
      mainElement.style.overflowX = "clip";
    }
    return () => {
      if (mainElement) {
        mainElement.style.overflow = originalOverflow;
        mainElement.style.overflowX = "";
      }
    };
  }, []);

  return (
    <div className="bg-black relative z-10" ref={container}>
      <section className="text-white w-full bg-slate-950 pb-[20vh] mt-12">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.02;
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

// ⚠️ Note: The `githubLink` prop is removed from the Card function signature
function Card({ i, title, description, src, link, color, progress, range, targetScale }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 20}px)`,
          // small GPU/compositing hints for smoother animations
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        className="relative flex flex-col items-center justify-center h-full w-full"
      >
        <div
          className="relative flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 shrink-0 transition-shadow duration-300"
          style={{
            width: "800px",
            maxWidth: "90vw",
            height: "400px",
          }}
        >
          {/* LEFT: Image (60%) */}
          <div className="w-full md:w-[60%] h-[160px] md:h-full relative overflow-hidden group">
            <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <img src={src} alt={title} className="w-full h-full object-cover" />
            </motion.div>

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* RIGHT: Content (40%) */}
          <div className="w-full md:w-[40%] h-full p-6 md:p-8 flex flex-col justify-between bg-zinc-900/50 backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px]"
                  style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                />
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Project 0{i + 1}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-space-grotesk leading-tight line-clamp-2">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4 md:line-clamp-5">{description}</p>
            </div>

            {/* Live Demo button is now the only element and spans the full width */}
            <div className="flex pt-6 border-t border-white/5 mt-auto">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                // Made the anchor tag span the full width of its container
                className="w-full flex justify-center items-center px-4 py-3 rounded-xl transition-all text-sm font-bold gap-2"
                style={{
                  backgroundColor: color,
                  color: color === "#FFFFFF" || color === "#FFD700" ? "#000000" : "#FFFFFF",
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

// ⚠️ Note: PropTypes for githubLink is removed
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
