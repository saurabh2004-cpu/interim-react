"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Maximize2, Minimize2 } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Theron P.",
    title: "RESTAURANT OWNER",
    avatar: "https://framerusercontent.com/images/dAcR1mFFOnJ1M0v56dPZt2uVR0Q.jpg",
    review:
      "The custom furniture designed by Interim has transformed our home. Each piece is a masterpiece that fits perfectly into our space and meets our aesthetic desires. The quality and craftsmanship are outstanding. We can't wait to collaborate with Interim on future projects!",
    projectImage: "https://framerusercontent.com/images/YKkTgOVxPurWe9Jsrj7OBGVS4kU.jpg",
  },
  {
    id: 2,
    name: "Soren F.",
    title: "HOME OWNER",
    avatar: "https://framerusercontent.com/images/M42LatEEMyCZIYxJ6WTCmgMpAkY.jpg",
    review:
      "Interim has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled. They transformed my living room into a space that is both stylish and comfortable. Their team was professional, creative, and attentive to my needs. I couldn't be happier!",
    projectImage: "https://framerusercontent.com/images/paHVIhNEbGxecA1Pf2fSVsBf0GU.jpg",
  },
  {
    id: 3,
    name: "Isolde V.",
    title: "HOME OWNER",
    avatar: "https://framerusercontent.com/images/lbTX1WoSdRtumjKKMoW37tNM1dk.jpg",
    review:
      "I was skeptical about virtual design services, but Interim made the process seamless and enjoyable. Their e-design package was comprehensive and perfectly tailored to my needs. Even from afar, they managed to transform my apartment into a chic and functional space. Fantastic work!",
    projectImage: "https://framerusercontent.com/images/H8xRswbK4LrDXyXiJ6fgbKka0E.jpg",
  },
  {
    id: 4,
    name: "Zephyr K.",
    title: "SHOP OWNER",
    avatar: "https://framerusercontent.com/images/UtT0EbdUaHYnyWs7ho4NFiQE0k.jpg",
    review:
      "Interim turned our retail store into an inviting and stylish space that customers love. The design is not only visually appealing but also highly functional. Our sales have increased, and we receive compliments daily. Interim's work has truly elevated our business!",
    projectImage: "https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg",
  },
]

const ReviewCard = ({ review, index }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="flex-shrink-0 w-[330px] h-[450px] md:h-[502px] bg-[#F7F6E9] rounded-2xl p-4 sm:p-6 mx-2  flex flex-col relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Header with avatar and info */}
      <div className="flex items-start mb-4 sm:mb-6 z-10">
        <div className="p-2 relative md:bottom-6 md:right-6 bg-[#FFFEF2] rounded-tl-lg rounded-br-lg">
          <img
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">{review.name}</h3>
          <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">{review.title}</p>
        </div>
      </div>

      {/* Review text */}
      {!expanded && (
        <div className="flex-1 mb-4 z-10">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">"{review.review}"</p>
        </div>
      )}

      {/* Project image overlay */}
      <motion.div
        layout
        transition={{ duration: 0.4 }}
        className={`absolute bottom-0 left-0 w-full cursor-pointer z-20 ${expanded ? "h-[80%] px-6" : "h-[60px] px-2"
          }`}
        onClick={() => setExpanded(!expanded)}
      >
        <motion.img
          src={review.projectImage || "/placeholder.svg"}
          alt="Project showcase"
          initial={false}
          animate={{
            scaleX: expanded ? 1.05 : 1,
            scaleY: expanded ? 1 : 1,
          }}
          transition={{ duration: 0.4 }}
          className={`w-full h-full object-cover transition-transform duration-300 origin-bottom rounded-lg`}
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=100&width=300&text=Project+Image"
          }}
        />

        <div className="absolute top-2  sm:top-3 right-3  bg-opacity-50 rounded-lg p-1.5 sm:p-2">
          {expanded ? (
            <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          ) : (
            <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4 text-white " />
          )}
        </div>
      </motion.div>

    </motion.div>
  )
}

export default function ReviewsCarousel() {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [duplicatedReviews, setDuplicatedReviews] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Touch/drag functionality
  const x = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setDuplicatedReviews([...reviews, ...reviews, ...reviews])

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  // Calculate card width based on screen size
  const cardWidth = isMobile ? 280 + 16 : 320 + 32 // card width + margin
  const totalDistance = cardWidth * reviews.length

  return (
    <motion.section
      ref={containerRef}
      className="py-8 sm:py-16 lg:py-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Reviews Carousel */}
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab active:cursor-grabbing"
          style={isMobile ? { x: xSpring } : {}}
          drag={isMobile ? "x" : false}
          dragConstraints={isMobile ? { left: -totalDistance * 2, right: 0 } : {}}
          dragElastic={0.1}
          animate={
            !isMobile
              ? {
                x: [0, -totalDistance],
              }
              : {}
          }
          transition={
            !isMobile
              ? {
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: isHovered ? 60 : 30, // Slower when hovered, faster normally
                  ease: "linear",
                },
              }
              : {}
          }
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} index={index} />
          ))}
        </motion.div>
      </div>

      

      {/* Side UI Elements */}
     

     
    </motion.section>
  )
}
