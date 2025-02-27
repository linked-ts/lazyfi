import { motion } from "framer-motion";
import { Bed, Clock, ShieldCheck } from "lucide-react";

const About = () => {
  const cards = [
    { 
      icon: <Bed className="w-8 h-8 text-indigo-500" />, 
      emoji: "🛌", 
      title: "Rest & Earn", 
      text: "Our unique Lazy Staking protocol rewards holders for doing absolutely nothing." 
    },
    { 
      icon: <Clock className="w-8 h-8 text-purple-500" />, 
      emoji: "😴", 
      title: "Procrastination Pays", 
      text: "Embrace the philosophy that sometimes doing less is more." 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, 
      emoji: "🔐", 
      title: "Secure By Design", 
      text: "Built on Base with audited contracts for safe, chill gains." 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-light mb-6 text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What is{" "}
            <span className="text-4xl md:text-5xl font-bold gradient-text">LazyFi?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Turn procrastination into passive income with the first memecoin built for those who prefer to kick back and let their money do the work.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-8"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700/50 flex flex-col items-start h-full"
            >
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-3 rounded-xl bg-indigo-100/80 dark:bg-indigo-900/30 backdrop-blur-sm">
                  {card.icon}
                </div>
                <div className="text-4xl">{card.emoji}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">{card.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;