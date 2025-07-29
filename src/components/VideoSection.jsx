"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone } from "lucide-react"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform values for scroll animations
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const handleMouseEnter = () => {
    setShowControls(true)
  }

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false)
    }
  }

  return (
    <section ref={sectionRef} className="relative -mt-32 z-100 w-full" style={{ height: "120vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-100">
        <motion.div
          className="relative min-w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            y,
            scale,
            opacity,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video ref={videoRef} className="min-w-full h-full object-cover z-100" autoPlay muted loop playsInline>
            <source src="/videos/video01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            className="absolute top-4 right-4 sm:top-6 sm:right-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            
          </motion.div>

          <motion.div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:right-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div
              className="bg-white bg-opacity-90 hover:bg-opacity-100 px-3 py-2 rounded-lg shadow-sm border border-gray-200 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-sm text-gray-600 font-medium">Made in Framer</span>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 bg-opacity-50">
            <motion.div
              className="h-full bg-orange-400"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={{ duration: 30, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-[#FFFEF2]py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        
      </motion.div>
    </section>
  )
}
