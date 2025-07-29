"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Phone } from "lucide-react"

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return <span ref={ref}>{displayValue}</span>
}

export default function StatsSection() {
  const stats = [
    {
      number: 199,
      title: "Project Completed",
      description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.",
    },
    {
      number: 15,
      title: "Years of Expertise",
      description: "With 15 years in the industry, we bring a wealth of knowledge and skill to every project.",
    },
    {
      number: 149,
      title: "Happy Clients",
      description:
        "Proudly serving more than 150 satisfied clients who have trusted us with their interior design needs.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="bg-[#FFFEF2] py-16 lg:py-24 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label */}
          <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
            <span className="text-sm font-semibold text-slate-800 tracking-wider uppercase">By The Numbers</span>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 bg-yellow-50 rounded-3xl p-8 lg:p-12"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="space-y-4 " variants={fadeInUp}>
                {/* Large Number */}
                <div className="flex items-center">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-lg text-[#253e28] leading-none">
                    <AnimatedCounter value={stat.number} duration={2.5} />

                  </div>
                  <div>
                    <span className="text-6xl text-orange-200 font-black ">+</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">{stat.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
