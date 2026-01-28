import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#030F0F] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            A Simple Way to Manage Hiring
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Stop wrestling with spreadsheets. Our intuitive 3-step process gets you from "need a person" to "hired" in record time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group px-4"
            >
              {/* Number Box */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-b from-[#e6fcf5] to-[#c3fae8] shadow-[0_0_25px_rgba(0,223,130,0.15)] flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 ring-4 ring-white/5">
                <span className="text-3xl font-bold text-[#03624C]">{step.id}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;