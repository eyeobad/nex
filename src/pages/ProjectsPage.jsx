import React, { useEffect, useRef, memo, useMemo, useCallback } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import PropTypes from "prop-types";

const preloadImages = (sources = []) => {
  const head = document.head;
  const links = sources.map((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    head.appendChild(link);
    return link;
  });
  return () => {
    links.forEach((link) => {
      if (head.contains(link)) head.removeChild(link);
    });
  };
};

const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const projects = [
  {
    title: "Alpine Home Air",
    description: "A high-performance HVAC retail platform featuring advanced on-page SEO architecture and fluid micro-animations.",
    src: "/alpinemockup.jpg",
    link: "https://www.alpinehomeair.com/",
    color: "#2E5C86",
  },
  {
    title: "Trust Roofing",
    description: "A lead-generation powerhouse for roofing services. Strategically integrates high-conversion capture forms.",
    src: "/roofmockup.jpg",
    link: "https://trustroofing.com/",
    color: "#000080",
  },
  {
    title: "Black Cafe",
    description: "An atmospheric digital storefront for a boutique coffee brand, designed to translate physical ambiance into a premium web experience.",
    src: "/cofeemockup.jpg",
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
    src: "/bakerymockup.jpg",
    link: "https://sweet-treats-landingpage.netlify.app/",
    color: "#A0522D",
  },
  {
    title: "Motion on Solana",
    description: "An immersive Web3 interface featuring GPU-accelerated motion graphics and real-time blockchain data.",
    src: "/motionmockup.jpg",
    link: "https://motiononsolana.com/",
    color: "#9945FF",
  },
];

// Precompute expensive values
const lightColors = new Set(["#FFFFFF", "#FFD700", "#E6E6E6"]);

const Card = memo(({ i, title, description, src, link, color, progress, range, targetScale, slug }) => {
  const container = useRef(null);
  
  // Optimized scale transform with spring physics
  const scale = useTransform(progress, range, [1, targetScale], {
    clamp: false
  });

  // Memoize expensive calculations
  const { textColor, cardStyle } = useMemo(() => {
    const isLight = lightColors.has(color);
    return {
      textColor: isLight ? "#000000" : "#FFFFFF",
      cardStyle: { 
        width: "90vw",
        maxWidth: "1000px",
        height: "auto",
        minHeight: "400px",
        // Force GPU layer more efficiently
        transform: "translate3d(0,0,0)"
      }
    };
  }, [color]);

  // Optimized hover handler
  const handleHover = useCallback((e) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1.05)';
    }
  }, []);

  const handleHoverEnd = useCallback((e) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  }, []);

  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0"
      style={{
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col items-center justify-center h-full w-full origin-top"
        // Reduced motion for better performance
        whileHover={{ y: -2 }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        <div
          className="relative flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 shrink-0"
          style={cardStyle}
        >
          {/* LEFT: Image (60%) - Optimized */}
          <div 
            className="w-full md:w-[60%] h-[250px] md:h-[450px] relative overflow-hidden"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
          >
            <div className="w-full h-full transition-transform duration-300 ease-out">
              <img 
                src={src} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                loading={i < 2 ? "eager" : "lazy"} // Load first 2 eagerly
                decoding="async"
                fetchPriority={i === 0 ? "high" : "auto"}
                style={{
                  contentVisibility: "auto",
                  imageRendering: "crisp-edges",
                }}
              />
            </div>

            {/* Optimized overlay without expensive mix-blend-mode */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-20 pointer-events-none"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* RIGHT: Content (40%) */}
          <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-between bg-zinc-900">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
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
                href={`/projects/${slug}`}
                className="w-full flex justify-center items-center px-4 py-3 rounded-xl transition-all duration-150 text-sm font-bold gap-2 hover:opacity-90 active:opacity-80"
                style={{
                  backgroundColor: color,
                  color: textColor,
                  transform: 'translate3d(0,0,0)'
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
});

Card.displayName = "Card";

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
  slug: PropTypes.string,
};

export default function Projects() {
  const container = useRef(null);
  
  // Smoother scroll with spring physics
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    mass: 0.1,
    restDelta: 0.001
  });

  // Memoize project calculations
  const projectConfigs = useMemo(() => 
    projects.map((project, i) => {
      const targetScale = 1 - (projects.length - i) * 0.02;
      const range = [i * (1 / projects.length), 1];
      return { ...project, i, targetScale, range, slug: slugify(project.title) };
    }), 
    []
  );

  useEffect(() => {
    const cleanup = preloadImages(projects.map((p) => p.src));
    return cleanup;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = previous;
      };
    }
  }, []);

  // Optimized overflow fix
  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    const originalOverflow = mainElement.style.overflow;
    const originalOverflowX = mainElement.style.overflowX;
    
    mainElement.style.overflow = "visible";
    mainElement.style.overflowX = "clip";

    return () => {
      mainElement.style.overflow = originalOverflow;
      mainElement.style.overflowX = originalOverflowX;
    };
  }, []);

  return (
    <div 
      className="bg-black relative z-10" 
      ref={container}
      style={{
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <section 
        className="text-white w-full bg-slate-950 pb-[20vh] mt-12"
      >
        {projectConfigs.map((project) => (
          <Card
            key={`project-${project.i}`}
            {...project}
            progress={smoothProgress} // Use smoothed progress
          />
        ))}
      </section>
    </div>
  );
}

// Add performance CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* Critical performance optimizations */
    * {
      box-sizing: border-box;
    }
    
    .sticky {
      transform: translate3d(0,0,0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    /* Optimize image rendering */
    img {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      transform: translateZ(0);
    }
    
    /* Reduce motion for preference */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    /* Hardware acceleration for smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
  `;
  document.head.appendChild(style);
}
