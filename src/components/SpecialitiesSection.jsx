import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SpecialtiesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const specialties = [
        {
            title: "Personalized Design Solutions",
            content: "We tailor each project to meet your unique vision and needs, ensuring every design reflects your personality and preferences, creating spaces that are truly yours."
        },
        {
            title: "Extensive Experience",
            content: "Content for Extensive Experience..."
        },
        {
            title: "Budget Friendly",
            content: "Content for Budget Friendly..."
        },
        {
            title: "Client-Centric Approach",
            content: "Content for Client-Centric Approach..."
        },
        {
            title: "Sustainable Practices",
            content: "Content for Sustainable Practices..."
        },
        {
            title: "Dedicated Team & Support",
            content: "Content for Dedicated Team & Support..."
        }
    ];

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
        <section className="flex flex-col lg:flex-row max-h-[40em] overflow-hidden rounded-2xl mx-8">
            <div className="relative w-full h-screen overflow-hidden rounded-2xl mx-2">
                <div className="absolute inset-0">
                    <img
                        src="https://framerusercontent.com/images/KGTXISgxyxmkCq256EXQwsbnNto.jpg"
                        alt="Interior design background"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Content Container */}
                <motion.div
                    className="relative h-full flex flex-col justify-between z-10  md:p-12 "
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Top Content (if needed) */}
                    <div></div>

                    {/* Bottom Overlay Card */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-4 mx-auto w-full"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-2xl md:text-3xl  font-light font-semibold inter-placeholder mb-4"
                            variants={fadeInUp}
                            style={{ color: '#FDFCEE' }}
                        >
                            Our specialty lies in transforming spaces into harmonious environments
                        </motion.h2>

                        <motion.p
                            className="text-white/80 text-sm md:text-base mb-6 font-medium inter-placeholder"
                            variants={fadeInUp}
                            style={{ color: '#FDFCEE' }}
                        >
                            Our craft, a delicate dance of light and shadow, seeks to conjure spaces that echo with the whispers of timeless elegance and bespoke charm.
                        </motion.p>

                        <div className='flex align-center'>
                            <motion.button
                                className="bg-[#fffef2] text-white px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 inter-placeholder" style={{ color: '#1f3630' }}>Start a Project </span>
                                <motion.div
                                    className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                                />
                            </motion.button>
                            <motion.button
                                className="bg-[#F3AC85]  text-[#1F3630] p-3 rounded-xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l focus:outline-none relative z-10"
                                whileHover={{
                                    scale: 1.05,

                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                                    <ArrowRight size={20} strokeWidth={2} />
                                </motion.div>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scrollable Right Section */}
            <div className='  min-h-[40em] flex flex-col overflow-y-auto  rounded-2xl scrollbar-hide'>
                <motion.div
                    className="flex  relative justify-center md:justify-start   mb-6 sm:mb-8 sm:ml-4  "
                    variants={fadeInUp}
                >
                    <svg className="w-5 h-5 text-[#1D322D] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="6" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                    </svg>
                    <span className="text-xs font-semibold md:text-[12px] relative  left-1 md:left-0 md:top-0 text-[#1D322D] tracking-wider uppercase inter-placeholder">
                        OUR SPECIALITIES
                    </span>
                </motion.div>
                <div className="min-h-screen text-[#1d322d] text-white " style={{ color: '#1D322D' }}>
                    <div className=" mx-auto">
                        <div className="mb-6">
                            <h1 className="text-3xl md:text-[40px] font-bold text-center md:text-left relative text-[#1D322D] bottom-4 md:bottom-6" style={{ fontWeight: 'bold' }}>
                                Why you'll love working with Interim.
                            </h1>
                        </div>

                        <div className="flex flex-col lg:flex-colgap-12">
                            <div className="w-full md:p-x-4">
                                <blockquote className="border-l-4 border-[#FFFFFF4D] md:pl-6 mb-8">
                                    <p className="text-lg lg:text-[15px]  inter-placeholder  mb-6" style={{ color: '#1D322D' }}>
                                        "Design is more than just aesthetics; it's a reflection of the soul and a journey
                                        towards creating timeless spaces that resonate with individuality and purpose. At
                                        Interim, we strive to craft environments that not only captivate the eye but also
                                        inspire the mind and nurture the spirit."
                                    </p>
                                    <div className="not-italic ">
                                        <div className='flex items-center space-x-4'>
                                            <img src="https://framerusercontent.com/images/XDcRjEJ0HdfRgvjaqQFTeR8Bsk.jpg?scale-down-to=1024"
                                                alt=""
                                                className="w-[65px] h-[65px] rounded-md" />
                                            <div className=''>
                                                <p className=" text-[#1D322D] inter-placeholder text-[16px] font-semibold " style={{ color: '#1D322D' }}>Real Mehedi</p>
                                                <p className="text-[#1D322D]">Founder, Interim Design Studio</p>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>

                            {/* Right Column - Specialities List */}
                            <div className="overflow-y-auto bg-[#1D322D]   rounded-2xl scrollbar-hide">
                                <div className="space-y-6">
                                    {specialties.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 m-4  rounded-xl hover:bg-[#FFFFFF0D] transition-all cursor-pointer "
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl mb-4 text-[#FDFCEE] font-medium">{item.title}</h3>
                                                <motion.div
                                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-[#FDFCEE]"
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </motion.div>
                                            </div>

                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-[#FFFFFF80] leading-relaxed pt-2">{item.content}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;