import { motion } from "framer-motion";

const BlogsCards = () => {
  const articles = [
    {
      title: "5 Creative Tips for Adding Personality to Your Space",
      category: "ARTICLES",
      date: "JUN 1, 2024",
      readTime: "12 MIN READ",
      linkText: "Read Post"
    },
    {
      title: "The Art of Historical Renovations - Breathing New Life into Old Structures",
      category: "TIPS",
      date: "JUN 1, 2024",
      readTime: "15 MIN READ",
      linkText: "Read Post"
    },
    {
      title: "7 Essential Tips for a Successful Interior Design Project",
      category: "TIPS",
      date: "MAY 30, 2024",
      readTime: "8 MIN READ",
      linkText: "Read Post"
    },
    {
      title: "The Secrets to Creating a Serene Home Office",
      category: "TIPS",
      date: "MAY 28, 2024",
      readTime: "10 MIN READ",
      linkText: "Read Post"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFEF2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium text-[#1F3630] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="mx-2 text-[#1F3630]/50">•</span>
                  <span className="text-xs text-[#1F3630]/70">
                    {article.date}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-xs text-[#1F3630]/70">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-[#1D322D] mb-4 leading-tight">
                  {article.title}
                </h3>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center text-[#1F3630] group font-medium"
                  whileHover={{ x: 5 }}
                >
                  {article.linkText}
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.a
            href="#"
            className="flex items-center justify-center group rounded-[10px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <div className="px-6 py-4 bg-[#1F3630] rounded-l-[10px]">
                <span className="text-lg font-medium text-white">
                  Free Quote
                </span>
              </div>
              <div className="px-4 py-4 bg-[#F3AC85] rounded-r-[10px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="rotate-90"
                  fill="#1F3630"
                >
                  <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </div>
          </motion.a>

          
        </div>
      </div>
    </section>
  );
};

export default BlogsCards;