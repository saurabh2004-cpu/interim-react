"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="bg-[#FAFAED] text-[#1D2B29]  px-6 p-12 m-x-12 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">

        <div className="flex items-start gap-2 min-w-[100px]">
          <span className="mt-1 h-3 w-3 rounded-full border-2 border-[#1D2B29] bg-[#FAFAED]" />
          <span className="uppercase text-sm font-semibold tracking-wide">About Us</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-5xl relative z-10 sm:left-50"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-medium">
            Founded in 2010, our studio started as a small team of design
            enthusiasts with big dreams. At Interim, we're not just about
            creating beautiful spaces – we're about crafting stories and
            making dreams come true! Our passionate team of design
            enthusiasts loves turning ordinary rooms into extraordinary
            experiences, blending creativity with a touch of whimsy.
          </p>

          <div className="mt-8 flex items-center gap-2 group cursor-pointer w-fit border-b border-[#1D2B29] pb-1">
            <span className="text-sm sm:text-base font-semibold uppercase">Know More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
