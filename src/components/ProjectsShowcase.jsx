import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "Coastal Harmony Home",
    description:
      "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature.",
    src: "https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024",
    color: "#F7F6E9",
    categories: ["RESIDENTIAL", "SINGLE HOME"],
  },
  {
    title: "Modern Chic Boutique",
    description:
      "A stunning transformation of an industrial space into a contemporary living environment, featuring clean lines, natural materials, and innovative storage solutions.",
    src: "https://framerusercontent.com/images/x5a11f8qOcvgmeDq7Md2i98hgk.jpg?scale-down-to=1024",
    color: "#F7F6E9",
    categories: ["COMERCIAL", "SHOWROOM"],
  },
  {
    title: "Masterpiece Exibition Gallery",
    description:
      "This project focused on creating a peaceful sanctuary through thoughtful design choices, emphasizing simplicity, functionality, and connection with nature.",
    src: "https://framerusercontent.com/images/3wp3G3n95M9VxpgmYdj0Efs3zSg.jpg?scale-down-to=1024",
    color: "#F7F6E9",
    categories: ["SEPCIALIZED", "EXIBITION SPACE"],
  },
  {
    title: "Midnight Dream Home",
    description:
      "This project focused on creating a peaceful sanctuary through thoughtful design choices, emphasizing simplicity, functionality, and connection with nature.",
    src: "https://framerusercontent.com/images/fOckIjkgOR7dMVJ4RMB6RsXNzSE.jpg?scale-down-to=1024",
    color: "#F7F6E9",
    categories: ["RESIDENTIAL", "SINGLE HOME"],
  },
]

const Card = ({ title, description, src, color, categories, i }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center"
      style={{
        top: `calc(5vh + ${i * 25}px)`,
        // height: "100vh",

      }}

    >
      <motion.div className="w-full max-w-[1400px] mx-auto px-2 lg:px-20 overflow-y-auto" style={{ y }}>
        <div
          className="flex flex-col lg:flex-row top-1 items-start gap-8 lg:gap-16 rounded-3xl p-4 my-4 lg:px-4 min-h-[80vh] lg:min-h-[70vh] "
          style={{ backgroundColor: color }}
        >
          {/* Left - Categories */}
          <div className="flex-shrink-0">
            <div className="flex flex-row gap-3 text-[12px]">
              {categories.map((category, idx) => (
                <motion.button
                  key={idx}
                  className="px-2 py-2 border border-gray-400 rounded-lg font-medium text-[#1D322D] hover:border-gray-600 transition-colors duration-200 inter-placeholder"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Center - Project Image */}
          <div className="flex-shrink-0">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={src || "/placeholder.svg"}
                alt={title}
                className="w-[331px] lg:w-[370px] h-[203px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Button Overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out opacity-0 group-hover:opacity-100">
                  <button className="bg-[#f7f6e9] text-[#1D322D] px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg transition-all duration-200">
                    <span>View Project</span>
                    <div className="bg-slate-800 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="flex-1 max-w-lg h-[400px] sm:h-[460px] lg:h-[500px]">
            <div className="h-full flex flex-col justify-between">
              {/* Project Title - Top */}
              <h2 className="text-[24px] lg:text-[32px] md:max-w-[300px] text-black font-black leading-[0.9] inter-placeholder">
                {title}
              </h2>
              {/* Project Description - Bottom */}
              <p className="text-black text-base md:pb-12 text-[16px] md:text-[24px] m-2 md:m-0 lg:text-lg leading-relaxed inter-placeholder">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectShowcase() {

  return (
    <div className="relative">
      <div className="h-[100%]">
        {projects.map((project, i) => (
          <Card key={i} {...project} i={i} />
        ))}
      </div>

      {/* Bottom Button Section */}
      <div className="relative group flex justify-center items-center py-16">
        <motion.button
          className="bg-[#1F3630] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View All Services</span>
          <motion.div className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out" />
        </motion.button>
        <motion.button
          className="bg-[#F3AC85] text-slate-800 p-4 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l hover:text-slate-800 focus:outline-none relative z-10"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          className="absolute top-0 left-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          style={{
            width: "calc(100% - 8px)",
            zIndex: 5,
          }}
        />
      </div>
    </div>
  )
}


