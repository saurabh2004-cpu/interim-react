"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

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
      number: 200,
      title: "Project Completed",
      description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.",
    },
    {
      number: 15,
      title: "Years of Expertise",
      description: "With 15 years in the industry, we bring a wealth of knowledge and skill to every project.",
    },
    {
      number: 150,
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
    <section className="md:py-16 lg:py-24 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label */}
          <motion.div className="flex items-center space-x-3  relative top-15 md:top-10" variants={fadeInUp}>
            <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            </svg>
            <span className=" font-semibold text-[#1D322D] text-[12px] tracking-wider uppercase inter-placeholder ">By The Numbers</span>
          </motion.div>

          {/* Stats Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 lg:gap-4 " variants={staggerContainer}>
            {stats.map((stat, index) => (
              <motion.div key={index} className="md:space-y-6 text-left bg-[#F7F6E9] rounded-lg px-4 my-2 md:my-0 " variants={fadeInUp}>
                <div className="flex items-center gap-2 ">
                  <div className="  text-[134px] xl:text-[134px] font-semibold text-[#1F3630] leading-none tracking-tight">
                    <AnimatedCounter value={stat.number} duration={2.5} />
                  </div>
                  <span className=" text-[#F3AC85]   inter-placeholder   text-7xl xl:text-8xl   ml-1 " style={{color: "#F3AC85"}}>+</span>
                </div>

                <div className="md:py-4 ">
                  {/* Title */}
                  <h3 className="text-2xl pt-22 sm:text-3xl lg:text-4xl font-bold text-[#1F3630] leading-tight inter-placeholder">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#1D322D] md:text-[16px] min-w-full text-base sm:text-lg leading-relaxed max-w-sm inter-placeholder">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
