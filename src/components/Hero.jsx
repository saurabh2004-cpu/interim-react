"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ArrowRight, Phone } from "lucide-react"

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    {
      text: "I was skeptical about virtual design services but their e-design package was comprehensive and perfectly tailored to my needs.",
      author: "Tony M.",
    },
    {
      text: "The custom furniture designed by Interim has transformed our home. Each piece is a masterpiece that fits perfectly into our space and meets our aesthetic desires.",
      author: "Samantha",
    },
    {
      text: "Interim has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled.",
      author: "Mathews R.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const slideUpVariants = {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="bg-[#FFFEF2] h-screen flex flex-col justify-center relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20 w-full">
        <motion.div className="space-y-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div className="text-center pt-24 " variants={slideUpVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-black text-slate-800  tracking-tight text-center sm:text-start inter-placeholder">
              <span className="block font-black text-6xl text-start mt-16 mb-2 md:mb-0 md:mt-0 md:text-9xl text-[#1D322D]">Your Ideas,</span>
              <span className="w-full md:block ">
                <span className="font-black flex md:inline text-5xl text-start md:text-9xl text-[#1D322D]">Our Creative </span>
                <span className="font-light italic flex text-6xl text-[#1D322D] text-start md:text-[145px] font-satisfy text-[#1D322D]">
                  Twist
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start " variants={staggerContainer}>
            <motion.div className=" w-full p-6 rounded-lg max-w-sm relative md:bottom-12 " variants={slideUpVariants}>
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-3 font-medium">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-gray-900 font-semibold text-sm">- {quotes[currentQuote].author}</cite>
              </motion.div>

              <div className="flex space-x-2 mt-4">
                <div className="w-8 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-400"></div>
                <div className="w-4 h-0.5 bg-gray-300"></div>
              </div>


            </motion.div>

            <motion.div
              className="bg-[#F6F7E9] w-full p-4 relative max-w-md rounded-2xl  space-y-6 md:relative md:bottom-15 md:left-65"
              variants={slideUpVariants}

            >
              <motion.p
                className="text-gray-600 text-lg leading-relaxed font-medium pr-0  lg:pr-20"
                whileHover={{ color: "#374151" }}
              >
                With a commitment to sustainability and innovative solutions where we craft beautiful, functional spaces
                that stand the test of time.
              </motion.p>

              <div className="relative group flex justify-start items-center align-center item-center mb-32">
                <motion.button
                  className="bg-[#1F3630]  text-white px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">But Template</span>
                  <motion.div
                    className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                  />
                </motion.button>

                <motion.button
                  className="bg-[#F3AC85]  text-slate-800 p-3 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l  hover:text-slate-800 focus:outline-none relative z-10"
                  whileHover={{
                    scale: 1.05,

                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                <motion.div
                  className="absolute top-0 left-0 h-full  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  style={{
                    width: "calc(100% - 8px)",
                    zIndex: 5,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
