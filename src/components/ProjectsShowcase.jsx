"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export default function ProjectShowcase() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className=" py-8 lg:py-12 relative min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-2   lg:px-20 ">
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 rounded-3xl p-4 lg:px-4 bg-[#f7f6e9]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="flex-shrink-0" variants={fadeInUp}>
            <div className="flex flex-row gap-3 text-[12px]">
              <motion.button
                className="px-2  border border-gray-400 rounded-lg  font-medium text-[#1D322D]  hover:border-gray-600 transition-colors duration-200  inter-placeholder "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                RESIDENTIAL
              </motion.button>
              <motion.button
                className="px-4 py-2 border font-semibold border-gray-400 text-[12px] rounded-lg text-sm  text-[#1D322D]  hover:border-gray-600 transition-colors duration-200 "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SINGLE HOME
              </motion.button>
            </div>
          </motion.div>

          {/* Center - Project Image */}
          <motion.div className="flex-shrink-0" variants={fadeInUp}>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024"
                alt="Coastal Harmony Home Interior"
                className="w-[331px]  lg:w-[370px] h-[203px]  lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Button Overlay */}
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out opacity-0 group-hover:opacity-100">
                  <button className="bg-[#f7f6e9]  text-[#1D322D] px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg transition-all duration-200">
                    <span>View Project</span>
                    <div className="bg-slate-800 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div className="flex-1 max-w-lg h-[400px] sm:h-[460px] lg:h-[500px]" variants={fadeInUp}>
            <div className="h-full flex flex-col justify-between">
              {/* Project Title - Top */}
              <motion.h2
                className="text-[24px] lg:text-[30px] md:max-w-[300px]  text-[#1D322D] font-black leading-[0.9] inter-placeholder "
                variants={fadeInUp}
              >
                Coastal Harmony Home
              </motion.h2>

              {/* Project Description - Bottom */}
              <motion.p className="text-[#1D322D] text-base md:pb-12 text-[16px] md:text-[24px] m-2 md:m-0 lg:text-lg leading-relaxed inter-placeholder" variants={fadeInUp}>
                The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it
                into a serene and stylish retreat that reflects the client's love for the ocean and nature.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  )
}
