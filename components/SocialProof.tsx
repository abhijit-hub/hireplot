import React from 'react';
import { TRUSTED_COMPANIES } from '../constants';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 tracking-widest uppercase">
          Trusted by Growing Teams
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {TRUSTED_COMPANIES.map((company, index) => (
            <motion.div 
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2"
            >
              {/* Using a generic placeholder icon structure for logos */}
              <div className="w-6 h-6 bg-current rounded-full opacity-20"></div>
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;