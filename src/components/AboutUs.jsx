"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="bg-[#FAFAED] text-[#1D2B29]  px-6 p-12 m-x-12 sm:px-10 lg:px-20">
      <div className=" mx-auto flex flex-col lg:flex-row items-start gap-12">

        <div className="flex items-start gap-2 min-w-[100px] relative top-10 md:top-0">
          <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
          <span className="uppercase text-sm font-semibold tracking-wide">About Us</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-5xl relative z-10 sm:left-50"
        >
          <p className="indent-8 md:indent-16 text-[28px] px-2  text-[#1D322D] text-start  lg:text-4xl leading-tight font-medium">
            Founded in 2010, our studio started as a small team of design
            enthusiasts with big dreams. At Interim, we're not just about
            creating beautiful spaces – we're about crafting stories and
            making dreams come true! Our passionate team of design
            enthusiasts loves turning ordinary rooms into extraordinary
            experiences, blending creativity with a touch of whimsy.
          </p>

          <div className="group w-fit cursor-pointer pt-8">
            <div className="flex items-center gap-2 pb-1 relative">
              <span className="text-sm sm:text-base font-bold uppercase text-[#1D2B29]">
                Know More
              </span>

              <div className="hover:bg-[#F4B183] rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>

              {/* Animated underline */}
              <motion.div
                className="absolute left-0 -bottom-0.5 h-0.5 bg-[#1D2B29]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
