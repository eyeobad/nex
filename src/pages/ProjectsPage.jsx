import React, { useEffect, useRef } from "react"
import { ReactLenis } from "lenis/react"
import { useScroll, useTransform, motion } from "framer-motion"
import PropTypes from "prop-types"

const projects = [
  {
    title: "E-Commerce Superstore",
    description: "A comprehensive digital marketplace engineered for high-volume inventory management and seamless user checkout experiences.",
    src: "/Se_un.jpg",
    link: "/Se_un.jpg",
    color: "#D81F26",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://eyeobad.pythonanywhere.com/home",
  },
  {
    title: "Alpine Home Air",
    description: "A high-performance HVAC retail platform featuring advanced on-page SEO architecture and fluid micro-animations to enhance the buying journey.",
    src: "/alpine air.jpeg",
    link: "/alpine air.jpeg",
    color: "#2E5C86",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://www.alpinehomeair.com/",
  },
  {
    title: "Motion on Solana",
    description: "An immersive Web3 interface featuring GPU-accelerated motion graphics and real-time blockchain data visualization to reflect network speed.",
    src: "/motion.jpeg", 
    link: "/motion.jpeg",
    color: "#9945FF", 
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://motiononsolana.com/",
  },
  {
    title: "Trust Roofing",
    description: "A lead-generation powerhouse for roofing services. Strategically integrates high-conversion capture forms without compromising the clean, premium aesthetic.",
    src: "/trust roofing.jpeg",
    link: "/trust roofing.jpeg",
    color: "#E67E22",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://trustroofing.com/",
  },
  {
    title: "Just a Memecoin",
    description: "A viral-architected brand platform designed with high-impact typography and frictionless user flows to maximize community engagement and social sharing.",
    src: "/memecoin.jpeg",
    link: "/memecoin.jpeg",
    color: "#FFD700", 
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://www.justamemecoin.com/",
  },
  {
    title: "Black Cafe",
    description: "An atmospheric digital storefront for a boutique coffee brand, designed to translate physical ambiance into a premium web experience.",
    src: "/black cafe.jpg",
    link: "/black cafe.jpg",
    color: "#D81F26",
    githubLink: "https://github.com/eyeobad/coffee",
    liveLink: "https://Coffee-pi-navy.vercel.app",
  },
  {
    title: "Artisanal Bakery",
    description: "A visual-first landing page designed to showcase product quality and drive local foot traffic through appetizing UI design.",
    src: "/bakery.jpg",
    link: "/bakery.jpg",
    color: "#D81F26",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://sweet-treats-landingpage.netlify.app/",
  },
  {
    title: "Ccord Marketing",
    description: "A dynamic B2B interface featuring motion-design elements tailored to increase user retention and communicate brand authority.",
    src: "/ccoed.jpg",
    link: "/ccoed.jpg",
    color: "#D81F26",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://ccords.netlify.app/",
  },
]

const ProjectsPage = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `
    document.head.appendChild(style)

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85")
        document.documentElement.style.setProperty("--project-margin", "-5vh")
      } else {
        document.documentElement.style.setProperty("--project-scale", "1")
        document.documentElement.style.setProperty("--project-margin", "0")
      }
    }

    checkResolution()
    window.addEventListener("resize", checkResolution)

    return () => {
      document.head.removeChild(style)
      window.removeEventListener("resize", checkResolution)
    }
  }, [])

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950 pb-20">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

export default ProjectsPage

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div 
      ref={container} 
      className="h-screen flex items-start justify-center sticky top-0 project-container pt-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 15}px)`, 
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* FIX APPLIED HERE: 
           1. Added 'h-[450px] md:h-[500px]' to the parent flex container.
           This FORCES the card to be exactly 500px tall on desktop, no matter the text/image size.
        */}
        <div className="w-full flex flex-col md:flex-row h-[450px] md:h-[500px] bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-white/10">
          
          {/* IMAGE SIDE: h-full ensures it takes 100% of the 500px height */}
          <div className="w-full md:w-[60%] h-[50%] md:h-full relative overflow-hidden border-r border-white/5">
            <motion.img
              src={url}
              alt={title}
              // object-cover ensures the image fills the box perfectly without stretching
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/10">
              Project {i + 1}
            </div>
          </div>

          {/* TEXT SIDE: h-full ensures it also takes 100% height */}
          <div className="w-full md:w-[40%] h-[50%] md:h-full p-6 md:p-8 lg:p-10 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">{title}</h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-4 md:line-clamp-none">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white">Code</span>
                </motion.a>

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white">Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
}