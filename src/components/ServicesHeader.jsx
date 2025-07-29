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
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex items-center justify-center md:text-[12px] sm:justify-center relative  top-5 md:top-10 md:right-45 space-x-3 mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
            variants={fadeInUp}
          >
            <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
            <span className="text-xs sm:text-sm font-semibold relative  left-1 md:left-0 md:top-0 text-[#1D322D] tracking-wider uppercase">What We Do</span>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-[66px] font-semibold md:text-[220px] text-[#1D322D] font-black leading-[0.75] tracking-[-0.03em] inter-placeholder sm:font-sm">
              Services
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
