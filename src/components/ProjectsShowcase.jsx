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

  const buttonSlideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-[#FFFEF2] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Categories */}
          <motion.div className="lg:col-span-3" variants={fadeInUp}>
            <div className="flex flex-wrap gap-3 lg:flex-col lg:space-y-3">
              <motion.button
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                RESIDENTIAL
              </motion.button>
              <motion.button
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SINGLE HOME
              </motion.button>
            </div>
          </motion.div>

          {/* Center Column - Project Image */}
          <motion.div className="lg:col-span-5" variants={fadeInUp}>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/placeholder.svg?height=600&width=500&text=Modern+Interior+Design"
                alt="Coastal Harmony Home Interior"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial="hidden"
                  whileHover="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <motion.button
                    className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg transition-all duration-200"
                    variants={buttonSlideUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Project</span>
                    <div className="bg-slate-800 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div className="lg:col-span-4" variants={fadeInUp}>
            <div className="space-y-6">
              {/* Project Title */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
                variants={fadeInUp}
              >
                Coastal Harmony Home
              </motion.h2>

              {/* Project Description */}
              <motion.p className="text-gray-600 text-base lg:text-lg leading-relaxed" variants={fadeInUp}>
                The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it
                into a serene and stylish retreat that reflects the client's love for the ocean and nature.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Elements - Right Side */}
      <div className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 space-y-4">
        {/* Free Quote Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white bg-opacity-95 hover:bg-opacity-100 px-3 sm:px-4 py-2 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-2 transition-all duration-200"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-4 h-4 bg-orange-100 rounded flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700 hidden sm:inline">Free Quote</span>
          </motion.button>
        </motion.div>

        {/* Phone Number */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white bg-opacity-95 hover:bg-opacity-100 p-3 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-3 transition-all duration-200"
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <div className="bg-orange-100 p-2 rounded-full">
              <Phone className="h-4 w-4 text-orange-600" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 font-medium">Call us now</p>
              <p className="text-sm font-semibold text-gray-900">+1 555 123 4567</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Made in Framer - Bottom Right */}
      <motion.div
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-white bg-opacity-90 hover:bg-opacity-100 px-3 py-2 rounded-lg shadow-sm border border-gray-200 transition-all duration-200"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className="text-sm text-gray-600 font-medium">Made in Framer</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
