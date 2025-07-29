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
    <section className="bg-[#FFFEF1] py-20 lg:py-32 relative">
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
              className="flex items-center space-x-3 mb-4 sm:mb-6 justify-center sm:justify-start sm:ml-8 lg:ml-12 relative top-10 left-25"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-slate-800 rounded-full "></div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wider uppercase">
                Our Portfolio
              </span>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black text-slate-800 leading-[0.75] tracking-tighter inter-placeholder">
                Projects
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>

     

      
    </section>
  )
}
