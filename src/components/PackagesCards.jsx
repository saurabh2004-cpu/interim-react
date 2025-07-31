import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PackagesCards = () => {
    const plans = [
        {
            title: "Essentials",
            price: "$5,000",
            background: "#F7F6E9",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#1F3630">
                    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                </svg>
            ),
            features: [
                "Initial consultation and space assessment",
                "Basic concept design and mood board",
                "Floor plan layout",
                "Selection of color scheme and materials",
                "Furniture placement plan",
                "2D renderings of key areas",
                "Project timeline and budget overview"
            ],
            buttonText: "Book a Call",
            textColor: "#FDFCEE",
            featureTextColor: "#1D322D",
            checkmarkColor: "#1F3630",
            buttonColor: "#1F3630",
            arrowColor: "#1F3630"
        },
        {
            title: "Premium",
            price: "$15,000",
            background: "#1F3630",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#FDFCEE">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
            ),
            features: [
                "Everything in the Essentials Package plus:",
                "Detailed design development",
                "3D renderings of the entire space",
                "Custom furniture and fixture design",
                "Selection of art and decor items",
                "Comprehensive lighting plan",
                "Coordination with contractors and vendors",
                "Bi-weekly progress updates"
            ],
            buttonText: "Free Quote",
            textColor: "#1D322D",
            featureTextColor: "#FDFCEE",
            checkmarkColor: "#F3AC85",
            buttonColor: "#FFFEF2",
            arrowColor: "#1F3630"
        },
        {
            title: "Luxury",
            price: "$30,000",
            background: "#F7F6E9",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#1F3630">
                    <path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,29.86a12.11,12.11,0,0,0-20.74,0L75.71,99.52l-50.19-25A12.11,12.11,0,0,0,8.62,89.12l37,113.36a8,8,0,0,0,11.68,4.4C57.55,206.73,83.12,192,128,192s70.45,14.73,70.68,14.87a8,8,0,0,0,11.71-4.39l37-113.33A12.06,12.06,0,0,0,243.84,76.19Zm-68,80.61a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12,228.2,228.2,0,0,0-77.22,0,8,8,0,0,1-2.78-15.76,244.42,244.42,0,0,1,82.78,0A8,8,0,0,1,175.88,156.8Z"></path>
                </svg>
            ),
            features: [
                "Everything in the Premium Package plus:",
                "Full project management from start to finish",
                "Personal shopping services for furniture and decor",
                "On-site supervision during implementation",
                "Custom-built elements and bespoke solutions",
                "Post-completion styling and final touches",
                "Detailed documentation and maintenance guide",
                "Client access to exclusive design resources and events"
            ],
            buttonText: "Book a Call",
            textColor: "#FDFCEE",
            featureTextColor: "#1D322D",
            checkmarkColor: "#1F3630",
            buttonColor: "#1F3630",
            arrowColor: "#1F3630"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFEF2] min-h-[38.25em]">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-6"
                            style={{ backgroundColor: plan.background }}
                        >
                            <div className="flex items-start mb-4">
                                <div className="p-2 rounded-md bg-[#F3AC85] mr-4">
                                    {plan.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold" style={{ color: plan.textColor }}>{plan.title}</h3>
                                    <p className="text-lg text-[#F3AC85]">{plan.price}</p>
                                </div>
                            </div>

                            <ul className="space-y-3 my-12">
                                {plan.features.map((feature, i) => (
                                    <React.Fragment key={i}>
                                        <li className="flex items-start my-5 pb-3 border-b border-[#1F3630]/10">
                                            <svg
                                                className="flex-shrink-0 h-3 w-3 mr-2 mt-0.5"
                                                viewBox="0 0 256 256"
                                                fill={plan.checkmarkColor}
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                            </svg>
                                            <span style={{ color: plan.featureTextColor, opacity: 0.8 }}>{feature}</span>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>


                                {/* //button */}
                            <motion.div
                                className="flex justify-center items-center mt-[-20px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <a
                                    href="./"
                                    className="inline-flex items-center group rounded-[10px] overflow-hidden"
                                >
                                    <motion.button
                                        className="px-8 py-4 font-semibold text-lg transition-all duration-300 relative z-10 group-hover:pr-4"
                                        style={{
                                            backgroundColor: plan.buttonColor,
                                            color: plan.textColor
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {plan.buttonText}
                                    </motion.button>

                                    <motion.button
                                        className="bg-[#F3AC85]   text-slate-800 p-4 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l  hover:text-slate-800 focus:outline-none relative z-10"
                                        whileHover={{
                                            scale: 1.05,

                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                                            {/* <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg> */}
                                            <ArrowRight color={plan.arrowColor} className="hover:rotate-[-45deg]" />
                                        </motion.div>
                                    </motion.button>

                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesCards;