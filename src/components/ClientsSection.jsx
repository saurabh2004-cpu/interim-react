import { motion } from "framer-motion";

const ClientsSection = () => {
    const clients = [
        { name: "Lumin", logo: "https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg" },
        { name: "Elysan", logo: "https://framerusercontent.com/images/JXpKtBJKpHK42NhZlu7pnrdSI8.svg" },
        { name: "Zephyr", logo: "https://framerusercontent.com/images/ai5aTS5GwmknA02FMovLXZcdo.svg" },
        { name: "Aurum", logo: "https://framerusercontent.com/images/l0AIm4dNymLUb8QHxLD7VrW8k0.svg" },
        { name: "Vantage", logo: "https://framerusercontent.com/images/dRusBk4C6XpzYRnw6QIqpJCec8.svg" },
    ];

    // Duplicate the array to create seamless loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <div className="w-full bg-[#FFFFFF80] py-16 px-4 max-w-[90em] mx-auto rounded-3xl mt-20" style={{ backgroundColor: "#FFFEF2" }}>
            <div className=" mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center text-sm  space-x-3 ">
                        <svg className="w-5 h-5 text-[#1D322D] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="6" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                        </svg>
                        <span className="text-xsm text-gray-600 uppercase tracking-wider inter-placeholder tracking-[-0.2em]">
                            Clients
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight inter-placeholder text-[#1D322D]" style={{ color: "#1D322D" }}>
                        Our Beloved Clients
                    </h2>
                </div>

                <div className=" block relative overflow-hidden">
                    {/* Gradient overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#FFFEF2] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#FFFEF2] to-transparent z-10"></div>

                    {/* Scrolling container */}
                    <div className="flex">
                        <motion.div
                            className="flex space-x-12"
                            animate={{
                                x: [0, -duplicatedClients.length * 220], // 👈 animate longer distance
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 15,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 h-full max-w-[400px] min-w-[300px] min-h-[80px] items-center flex-row gap-4 gap-x-6 align-center justify-center bg-[#0000000D] min-w-[200px] rounded-2xl p-4  mx-2  flex flex-col relative overflow-hidden"
                                >

                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full h-8 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <p className="text-2xl text-3xl  font-bold text-[#1D322D] whitespace-nowrap max-w-[200px]  ">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsSection;