"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function ProjectsHeader() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="bg-[#FFFEF2] py-20 lg:py-32 relative">
      <div className="max-w-7xl min-h-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative flex justify-center items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative ">
            <motion.div
              className="flex items-center justify-center md::justify-center relative top-5 md:top-10 md:right-38 space-x-3 mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
              variants={fadeInUp}
            >
              <svg className="w-5 h-5 text-[#1D322D] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="6" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
              <span className="text-xs font-semibold md:text-[12px] relative  left-1 md:left-0 md:top-0 text-[#1D322D] tracking-wider uppercase inter-placeholder">
                Our Portfolio
              </span>
            </motion.div>

            <motion.div className="text-center text-[#1D322D]" variants={fadeInUp}>
              <h1 className="text-6xl text-[#1D322D] sm:text-7xl md:text-[192px]  lg:text-[192px]   font-black  leading-[0.75] tracking-tighter inter-placeholder">
                Projects
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>




    </section>
  )
}
