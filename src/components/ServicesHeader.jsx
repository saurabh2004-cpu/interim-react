"use client"

import { motion } from "framer-motion"

export default function ServicesHeader() {
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
    <section className="bg-yellow-50 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex items-center justify-center   sm:justify-center md:relative md:top-10 md:right-23 space-x-3 mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-slate-800 rounded-full relative top-3 left-1 md:left-0 md:top-0"></div>
            <span className="text-xs sm:text-sm font-semibold relative top-3 left-1 md:left-0 md:top-0 text-slate-800 tracking-wider uppercase">What We Do</span>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[12rem] font-black text-slate-800 leading-[0.75] tracking-[-0.03em] inter-placeholder sm:font-sm">
              Services
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
