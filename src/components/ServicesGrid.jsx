
import { motion } from "framer-motion"
import { BedDouble, Sofa } from "lucide-react"

export default function ServicesGrid() {
    const services = [
        {
            id: 1,
            title: "Residential Interior Design",
            description:
                "Tailored design services for private homes, including room makeovers and complete home transformations.",
            icon: "https://framerusercontent.com/images/LBKuqrUKUS4DWi9ftZI8DVHVe4.png"
        },
        {
            id: 2,
            title: "Commercial Interior Design",
            description:
                "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
            icon: "https://framerusercontent.com/images/EL0ccE4I9Ydcr6XzZyIGziwAtvw.png"
        },
        {
            id: 3,
            title: "Space Planning",
            description: "Optimizing the layout of a space to improve functionality and flow.",
            icon: "https://framerusercontent.com/images/Zy6EyuSb6xNTwAGreyZYWV5X53M.png"
        },
        {
            id: 4,
            title: "Design Consultation",
            description: "Providing professional advice on concepts, color schemes & material selection.",
            icon: "https://framerusercontent.com/images/ELZWr0V10IFUobZuhITxIU9Do.png"
        },
        {
            id: 5,
            title: "Lighting Design",
            description: "Crafting lighting solutions that enhance the ambiance and functionality of a space.",
            icon: "https://framerusercontent.com/images/JbyjEq4WEAx6qDzQgw6Zkax3iY.png"
        },
        {
            id: 6,
            title: "Custom Furniture Design",
            description: "Designing and creating bespoke furniture pieces that perfectly fit the your space and style.",
            icon: "https://framerusercontent.com/images/IV4BUPwYOVqQsCgGwzjpM6TnN38.png"
        },
        {
            id: 7,
            title: "Art and Accessory Procurement",
            description: "Sourcing and selecting art pieces and accessories to complement the overall design.",
            icon: "https://framerusercontent.com/images/bREeJ5St6Fj7cNJuxeIsZZKdBg.png"
        },
        {
            id: 8,
            title: "Color Consultation",
            description: "Assisting clients in selecting color schemes that enhance the mood and aesthetic of a space.",
            icon: "https://framerusercontent.com/images/hRVFsVQ3zt4SHEWeKVbvVrXKFZ4.png"
        },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const iconVariants = {
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="bg-[#F7F6E9] py-8 ">
            <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-24 ">
                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            className="bg-[#F7F6E9] rounded-2xl p-6 transition-all duration-300 group"
                            key={service.id}
                            style={{ backgroundColor: "#fffef2" }}
                            variants={cardVariants}
                            whileHover={{
                                backgroundColor: "#F7F6E9",
                            }}
                        >
                            <motion.div className=" flex justify-strart mb-6 lg:mb-8" variants={iconVariants}>
                                <motion.div className="py-4  rounded-xl transition-colors duration-300">
                                    <img src={service.icon} alt={service.title} className="w-28 h-28" />
                                </motion.div>
                            </motion.div>
                            <div className="text-center space-y-4 text-[#1D322D]">
                                <motion.h3
                                    className="text-xl lg:text-2xl font-bold text-[#1D322D] leading-tight text-start inter-placeholder lg:text-[30px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 text-sm lg:text-[16px] leading-relaxed text-start inter-placeholder"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center items-center align-center item-center w-full h-full mt-[-20px] bg-[#ffffff]/[0.1] backdrop-filter backdrop-blur-sm rounded-2xl "
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}

                >
                    <div className="relative group flex justify-center items-center align-center item-center">
                        <motion.button
                            className="bg-[#1F3630]  text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">View All Services</span>
                            <motion.div
                                className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                            />
                        </motion.button>

                        <motion.button
                            className="bg-[#F3AC85]  text-slate-800 p-4 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l  hover:text-slate-800 focus:outline-none relative z-10"
                            whileHover={{
                                scale: 1.05,
                                
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
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
            </div>
        </section>
    )
}
