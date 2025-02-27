/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coins, 
  Trophy, 
  Users, 
  Sparkles, 
  ArrowRight,
  MessageCircle,
  Twitter,
  Disc
} from 'lucide-react';

const Community: React.FC = () => {
  const featureCards = [
    {
      icon: <Coins className="w-6 h-6 text-indigo-500" />,
      title: "Passive Rewards",
      description: "Earn $LZY tokens automatically just by holding in your wallet."
    },
    {
      icon: <Trophy className="w-6 h-6 text-indigo-500" />,
      title: "Staking Benefits",
      description: "Stake your $LZY tokens to multiply your earnings and unlock exclusive perks."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Community Driven",
      description: "Join a thriving community of like-minded investors and enthusiasts."
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
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-5">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-white mb-4">
              Ready to Get <span className="font-bold text-indigo-500">Lazy</span>?
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-5 -right-5"
            >
              <Sparkles className="w-6 h-6 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Join the LazyFi community and start earning passive rewards while you relax. It's that simple.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {featureCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg flex items-center w-full md:w-auto justify-center"
          >
            Get $LZY Now
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="ml-2"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/lazyfi_community" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex items-center w-full md:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-indigo-500" />
            Join Community
          </motion.a>
        </motion.div>
        
        {/* Social links */}
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 mb-6"
          >
            Connect with us
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/lazyfi_official" },
              { icon: <Disc className="w-5 h-5" />, url: "https://discord.gg/lazyfi" },
              { icon: <MessageCircle className="w-5 h-5" />, url: "https://t.me/lazyfi_community" },
            ].map((social, index) => (
              <motion.a 
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(99, 102, 241, 0.1)"
                }}
                href={social.url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-slate-600 dark:text-slate-400 hover:text-indigo-500 border border-slate-100 dark:border-slate-700"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-slate-500 dark:text-slate-500 text-sm">© 2025 LazyFi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Community;