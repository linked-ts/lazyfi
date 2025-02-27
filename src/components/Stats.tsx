import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Coins } from "lucide-react";

const Stats = () => {
    const stats = [
        { value: "$0M", label: "Market Cap", icon: <DollarSign className="w-6 h-6" /> },
        { value: "0", label: "Holders", icon: <Users className="w-6 h-6" /> },
        { value: "$0", label: "Daily Volume", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "$0", label: "Token Price", icon: <Coins className="w-6 h-6" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
                        >
                            <motion.div 
                                className="flex justify-center mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400">
                                    {stat.icon}
                                </div>
                            </motion.div>
                            <motion.p 
                                className="text-3xl md:text-4xl font-bold gradient-text mb-3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;