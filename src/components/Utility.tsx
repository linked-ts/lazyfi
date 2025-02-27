"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Zap, Rocket } from 'lucide-react';

interface UtilityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Utility: React.FC = () => {
  const features: UtilityFeature[] = [
    {
      icon: <Wallet className="w-8 h-8 text-indigo-500" />,
      title: "Reflections",
      description: "Earn passive income through automatic redistribution of transaction fees."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
      title: "Security",
      description: "Contract audited by leading security firms ensuring your assets are safe."
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: "Lightning Fast",
      description: "Experience rapid transactions with minimal gas fees on our optimized network."
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      title: "Growth Potential",
      description: "Strategic tokenomics designed for sustainable long-term value appreciation."
    }
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
    <section id="utility" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-white mb-4">
            <span className="font-bold text-indigo-500">Utilities</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Designed for maximum value with minimal effort. Just like being lazy should be.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium py-3 px-8 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
          >
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="ml-2 inline-block"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Utility;