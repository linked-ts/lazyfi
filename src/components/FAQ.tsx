"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is LazyFi ($LZY)?",
      answer: "LazyFi ($LZY) is a unique memecoin designed to embrace the art of procrastination and relaxation, turning laziness into passive gains through innovative tokenomics and community-driven growth."
    },
    {
      question: "How do I earn passive income with LazyFi?",
      answer: "By simply holding $LZY tokens in your wallet, you automatically earn reflections from each transaction on the network. Additionally, you can stake your tokens to multiply your earnings and unlock exclusive benefits."
    },
    {
      question: "Is the LazyFi contract audited?",
      answer: "Yes, the LazyFi smart contract has been thoroughly audited by leading security firms to ensure that your assets remain safe and the protocol functions as intended."
    },
    {
      question: "Where can I buy $LZY tokens?",
      answer: "You can purchase $LZY tokens on Uniswap and other major decentralized exchanges. Simply connect your wallet, swap ETH or other tokens for $LZY, and join our growing community of lazy holders."
    },
    {
      question: "What makes LazyFi different from other memecoins?",
      answer: "Unlike many memecoins that rely solely on hype, LazyFi combines humor with genuine utility through its reflection mechanism, staking benefits, and strong community focus. We're building a sustainable ecosystem where being lazy actually pays off."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-indigo-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-white">
              <span className="font-bold text-indigo-500">FAQ</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about LazyFi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-slate-800 dark:text-white">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/lazyfi_community"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg flex items-center"
          >
            More Questions? Ask Our Community
            <ChevronDown className="ml-2 w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;