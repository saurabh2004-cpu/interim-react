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

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  // Animation variants
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <motion.div className="space-y-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div className="text-center" variants={slideUpVariants}>
            <h1 className="text-4xl sm:text-5xl relative  lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-800 leading-[0.9] tracking-tight sm:text-start">
              <span className="block font-black">Your Ideas,</span>
              <span className="block">
                <span className="font-black">Our Creative </span>
                <span className="font-light italic text-slate-700" style={{ fontFamily: "Dancing Script, cursive" }}>
                  Twist
                </span>
              </span>
            </h1>
          </motion.div>

          
          <motion.div className="grid lg:grid-cols-2 relative  gap-12 lg:gap-20 items-start" variants={staggerContainer}>
            <motion.div className="bg-white p-6 rounded-lg shadow-sm max-w-md" variants={slideUpVariants}>
              {/* Stars */}
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

              <div className="flex space-x-2 mt-4 justify-center">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentQuote ? "bg-orange-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Column  */}
            <motion.div
              className="bg-amber-50 p-8 relative sm:left-50  max-w-md rounded-2xl shadow-sm border border-amber-100 space-y-6 relative"
              variants={slideUpVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                className="text-gray-600 text-lg leading-relaxed font-medium pr-20"
                whileHover={{ color: "#374151" }}
              >
                With a commitment to sustainability and innovative solutions where we craft beautiful, functional spaces
                that stand the test of time.
              </motion.p>

              {/* Buttons */}
              <motion.div className="flex items-center gap-3">
                <motion.button
                  className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Template
                </motion.button>

                <motion.button
                  className="bg-orange-300 hover:bg-orange-400 text-slate-800 p-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>

             
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  )
}
