
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
    <section className="bg-yellow-50 lg:py-32">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* What We Do  */}
          <motion.div className="flex items-center space-x-3 mb-8 ml-0 lg:ml-16 relative left-25 top-10" variants={fadeInUp}>
            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
            <span className="text-sm font-semibold text-slate-800 tracking-wider uppercase">What We Do</span>
          </motion.div>

          {/* Services Heading */}
          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold text-slate-800 leading-[0.75] tracking-[-0.03em] inter-placeholder">
              Services
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
