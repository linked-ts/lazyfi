import { motion } from "framer-motion";
import { PieChart, BarChart3, Wallet } from "lucide-react";

const Tokenomics = () => {
    const distribution = [
      { label: "Public Sale", percent: "42.0%", width: "42%" },
      { label: "Lazy Staking Rewards", percent: "30.0%", width: "30%" },
      { label: "Community Treasury", percent: "15.0%", width: "15%" },
      { label: "Team & Development", percent: "10.0%", width: "10%" },
      { label: "Marketing", percent: "3.0%", width: "3%" },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="tokenomics" className="py-24 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-light mb-6 text-slate-800 dark:text-white"
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text">Tokenomics</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
              >
                A fair launch with sustainable rewards designed to benefit long-term, lazy holders.
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-8"
              ></motion.div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                      <PieChart className="w-6 h-6 text-indigo-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Token Distribution</h3>
                  </div>
                  <div className="space-y-6">
                    {distribution.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-base font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
                          <span className="text-base font-bold text-indigo-500 dark:text-indigo-400">{item.percent}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.width }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="bg-white dark:bg-slate-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                        <BarChart3 className="w-5 h-5 text-indigo-500" />
                      </div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">Total Supply</h4>
                    </div>
                    <p className="text-3xl font-bold gradient-text">1,000,000,000 $LZY</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white dark:bg-slate-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                        <Wallet className="w-5 h-5 text-indigo-500" />
                      </div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">Transaction Tax</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      Buy: <span className="font-bold text-indigo-500">1%</span> (0.5% to holders, 0.5% to liquidity)
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Sell: <span className="font-bold text-indigo-500">2%</span> (1% to holders, 1% to liquidity)
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white dark:bg-slate-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                        <span className="text-xl">💤</span>
                      </div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">Lazy Staking APY</h4>
                    </div>
                    <p className="text-3xl font-bold gradient-text">Up to 42% APY</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                      The longer you hold, the higher your rewards
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    );
};

export default Tokenomics;