import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const AwardsSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const awards = [
        { year: "2023", title: "Innovative Design Studio" },
        { year: "2022", title: "Best Residential Design" },
        { year: "2021", title: "Sustainable Design Award" },
        { year: "2020", title: "Top Commercial Design" },
        { year: "2018", title: "Creative Office Space Award" },
        { year: "2016", title: "Emerging Designer of the Year" },
    ];

    return (
        <div className="md:w-[90em]  rounded-2xl mx-4 md:mx-auto  bg-[#1f3630] flex flex-col items-center justify-center py-20 rounded-2xl px-4 py-">
            <div className=" max-w-7xl mx-auto">
                <motion.div
                    className="flex flex-col items-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="flex items-center space-x-3 mb-4 relative top-5  md:top-15 md:right-19"
                        variants={fadeInUp}
                    >
                        <svg className="w-5 h-5 text-[#f3ac85]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="6" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                        </svg>
                        <span className="text-xs font-semibold text-[#f3ac85] uppercase tracking-wider">
                            Recognition We Got
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-7xl s md:text-8xl  lg:text-[160px] font-black leading-none text-[#fdfcee] tracking-tighter text-center inter-placeholder"
                        style={{color: "#fdfcee"}}
                        variants={fadeInUp}
                    >
                        Awards
                    </motion.h1>
                </motion.div>

               {/* Custom Layout Grid */}
                <div className="flex items-center justify-center mt-6">
                    <div className="w-full max-w-6xl">
                        {/* Top row - 3 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 max-w-5xl mx-auto">
                            {awards.slice(0, 3).map((award, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FFFFFF0D] rounded-lg p-4 sm:p-5 md:p-6 flex items-center space-x-3 sm:space-x-4 transition-colors duration-200 "
                                >
                                    <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-300 fill-orange-300 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1">{award.year}</div>
                                        <div className="text-white text-base sm:text-lg leading-tight break-words">{award.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Middle row - 2 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6  mb-4 sm:mb-6 max-w-2xl mx-auto">
                            {awards.slice(3, 5).map((award, index) => (
                                <div
                                    key={index + 3}
                                    className="bg-[#FFFFFF0D] rounded-lg p-4 sm:p-5 md:p-6 flex items-center space-x-3 sm:space-x-4 transition-colors duration-200 "
                                >
                                    <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-300 fill-orange-300 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1">{award.year}</div>
                                        <div className="text-white text-base sm:text-lg leading-tight break-words">{award.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom row - 1 card centered */}
                        <div className="flex justify-center">
                            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/10 ">
                                <div className="bg-[#FFFFFF0D] rounded-lg p-4 sm:p-5 md:p-6 flex items-center space-x-3 sm:space-x-4 transition-colors duration-200 ">
                                    <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-300 fill-orange-300 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1">{awards[5].year}</div>
                                        <div className="text-white text-base sm:text-lg font-medium leading-tight break-words">{awards[5].title}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AwardsSection;
