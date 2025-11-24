import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
  useLayoutEffect,
  memo,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Utility Functions ---

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

// --- Project Data ---

const projects = [
  {
    title: "Alpine Home Air",
    description:
      "A high-performance HVAC retail platform featuring advanced on-page SEO architecture and fluid micro-animations.",
    src: "/alpinemockup.jpg",
    link: "https://www.alpinehomeair.com/",
    color: "#2E5C86",
  },
  {
    title: "Trust Roofing",
    description:
      "A lead-generation powerhouse for roofing services. Strategically integrates high-conversion capture forms.",
    src: "/roofmockup.jpg",
    link: "https://trustroofing.com/",
    color: "#000080",
  },
  {
    title: "Epic Roofing",
    description:
      "A bold roofing lead-gen experience with strong CTAs, proof, and a streamlined quote flow.",
    src: "/epic roofing.jpeg",
    link: "/projects/epic-roofing",
    color: "#F35F38",
  },
  {
    title: "Black Cafe",
    description:
      "An atmospheric digital storefront for a boutique coffee brand, designed to translate physical ambiance into a premium web experience.",
    src: "/cofeemockup.jpg",
    link: "https://Coffee-pi-navy.vercel.app",
    color: "#1a1a1a",
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
      "A viral-architected brand platform designed with high-impact typography and frictionless user flows.",
    src: "/memecoin.jpg",
    link: "https://www.justamemecoin.com/",
    color: "#FFD700",
  },
  {
    title: "Artisanal Bakery",
    description:
      "A visual-first landing page designed to showcase product quality and drive local foot traffic through appetizing UI design.",
    src: "/bakerymockup.jpg",
    link: "https://sweet-treats-landingpage.netlify.app/",
    color: "#A0522D",
  },
  {
    title: "Motion on Solana",
    description:
      "An immersive Web3 interface featuring GPU-accelerated motion graphics and real-time blockchain data.",
    src: "/motionmockup.jpg",
    link: "https://motiononsolana.com/",
    color: "#9945FF",
  },
];

const lightColors = new Set(["#FFFFFF", "#FFD700", "#E6E6E6"]);

// --- Shared visual card ---

const BaseCard = ({
  i,
  title,
  description,
  src,
  color,
  textColor,
  slug,
  cardStyle,
  handleHover,
  handleHoverEnd,
}) => (
  <div
    className="relative flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 shrink-0"
    style={cardStyle}
  >
    {/* LEFT: Image */}
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
          loading={i < 2 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={i === 0 ? "high" : "auto"}
          style={{
            contentVisibility: "auto",
            imageRendering: "crisp-edges",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-20 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </div>

    {/* RIGHT: Content */}
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
        <p className="text-sm text-zinc-400 leading-relaxed">
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
          }}
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

// --- Desktop sticky card (Framer) ---

const DesktopCard = memo(
  ({ i, title, description, src, color, progress, range, targetScale, slug }) => {
    const container = useRef(null);

    const scale = useTransform(progress, range, [1, targetScale], {
      clamp: false,
    });

    const desktopTopOffset = `calc(-5vh + ${i * 25}px)`;

    const { textColor, cardStyle } = useMemo(() => {
      const isLight = lightColors.has(color);
      return {
        textColor: isLight ? "#000000" : "#FFFFFF",
        cardStyle: {
          width: "90vw",
          maxWidth: "1000px",
          height: "auto",
          minHeight: "400px",
        },
      };
    }, [color]);

    const handleHover = useCallback((e) => {
      const img = e.currentTarget.querySelector("img");
      if (img) img.style.transform = "scale(1.05)";
    }, []);

    const handleHoverEnd = useCallback((e) => {
      const img = e.currentTarget.querySelector("img");
      if (img) img.style.transform = "scale(1)";
    }, []);

    return (
      <div
        ref={container}
        className="min-h-[85vh] md:h-screen flex items-center justify-center sticky top-0"
        style={{ height: "100vh" }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center h-full w-full origin-top project-motion"
          style={{
            scale,
            y: 0,
            top: desktopTopOffset,
          }}
          whileHover={{ y: -2 }}
          transition={{ type: "tween", duration: 0.15 }}
        >
          <BaseCard
            i={i}
            title={title}
            description={description}
            src={src}
            color={color}
            textColor={textColor}
            slug={slug}
            cardStyle={cardStyle}
            handleHover={handleHover}
            handleHoverEnd={handleHoverEnd}
          />
        </motion.div>
      </div>
    );
  }
);

DesktopCard.displayName = "DesktopCard";

// --- Mobile GSAP horizontal section with focus/blur ---

const MobileHorizontal = ({ configs }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const total = configs.length;
      const cardWidth = window.innerWidth;

      gsap.set(trackRef.current, { x: 0 });

      const tween = gsap.to(trackRef.current, {
        x: -cardWidth * (total - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cardWidth * total * 1.1}`, // slower slide
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
        },
      });

      const trigger = tween.scrollTrigger;
      const cards = gsap.utils.toArray(".project-card-mobile");

      if (trigger && cards.length === total) {
        trigger.onUpdate = (self) => {
          const progress = self.progress; // 0 → 1
          const activeIndex = Math.round(progress * (total - 1));

          cards.forEach((card, idx) => {
            const isActive = idx === activeIndex;
            gsap.to(card, {
              scale: isActive ? 1.03 : 0.9,
              filter: isActive ? "blur(0px)" : "blur(4px)",
              opacity: isActive ? 1 : 0.55,
              duration: 0.25,
              overwrite: "auto",
            });
          });
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [configs]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-slate-950 text-white overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: `${configs.length * 100}vw` }}
      >
        {configs.map((project) => {
          const { i, title, description, src, color, slug } = project;

          const isLight = lightColors.has(color);
          const textColor = isLight ? "#000000" : "#FFFFFF";

          // Inset from edges for nicer spacing
          const cardStyle = {
            width: "88vw",
            maxWidth: "88vw",
            minHeight: "380px",
          };

          const handleHover = () => {};
          const handleHoverEnd = () => {};

          return (
            <motion.div
              key={`mobile-gsap-${i}`}
              className="project-card-mobile flex items-center justify-center h-full flex-shrink-0"
              style={{ width: "100vw" }}
            >
              <div className="rounded-[32px] p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent transition-transform duration-200 active:scale-[0.97]">
                <BaseCard
                  i={i}
                  title={title}
                  description={description}
                  src={src}
                  color={color}
                  textColor={textColor}
                  slug={slug}
                  cardStyle={cardStyle}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

MobileHorizontal.propTypes = {
  configs: PropTypes.array.isRequired,
};

// --- Projects wrapper ---

export default function Projects() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    mass: 0.1,
    restDelta: 0.001,
  });

  const projectConfigs = useMemo(
    () =>
      projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.02;
        const range = [i * (1 / projects.length), 1];
        return {
          ...project,
          i,
          targetScale,
          range,
          slug: slugify(project.title),
        };
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
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const setMatch = () => setIsMobile(mq.matches);
    setMatch();
    mq.addEventListener("change", setMatch);
    return () => mq.removeEventListener("change", setMatch);
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector("main") || document.body;
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

  if (isMobile) {
    // MOBILE: GSAP horizontal with focus/blur
    return (
      <div className="bg-black relative z-10">
        <MobileHorizontal configs={projectConfigs} />
      </div>
    );
  }

  // DESKTOP: original sticky stack
  return (
    <div className="bg-black relative z-10" ref={container}>
      <section className="text-white w-full bg-slate-950 pb-[20vh] mt-8 md:mt-12">
        {projectConfigs.map((project) => (
          <DesktopCard
            key={`project-desktop-${project.i}`}
            {...project}
            progress={smoothProgress}
          />
        ))}
      </section>
    </div>
  );
}
