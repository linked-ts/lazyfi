import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <header className="bg-white dark:bg-slate-950 relative">
            {/* Theme toggle positioned in top-right corner */}
            

            <section className="py-24 md:py-36 overflow-hidden relative">
              {/* Decorative background elements */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-400/30 dark:bg-purple-600/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl" />
              </div>

              <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    className="lg:w-1/2"
                  >
                    <motion.h1 
                      className="text-4xl md:text-6xl font-light mb-8 leading-tight text-slate-800 dark:text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      Relax. Procrastinate.{" "}
                      <span className="font-bold gradient-text">Earn</span>
                    </motion.h1>
                    <motion.p 
                      className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-lg"
                      initial={{ opacity: 0 }}
                      animate={isLoaded ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      LazyFi ($LZY) is a unique memecoin designed to embrace the art of procrastination and relaxation, turning laziness into passive gains.
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-4 mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://app.uniswap.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full gradient-button text-white font-medium shadow-lg flex items-center"
                      >
                        Buy $LZY <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05, borderColor: "#6366f1", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#tokenomics"
                        className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                      >
                        Learn More
                      </motion.a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0 }}
                      animate={isLoaded ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ x: -10 * i, opacity: 0 }}
                            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.9 + (i * 0.1) }}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center"
                          >
                            <Zap className="w-5 h-5 text-white" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        <span className="font-bold">2,500+</span> lazy holders and growing
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="lg:w-1/2 flex justify-center"
                  >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-500/30 blur-xl"
                      />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ 
                          y: [0, -15, 0],
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <Image src="/logo.png" alt="LazyFi Logo" width={400} height={400} priority />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
        </header>
    );
};

export default Header;