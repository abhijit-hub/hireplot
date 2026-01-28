import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <span className="text-accent font-semibold tracking-wide uppercase text-sm">Everything Included</span>
           <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
            Powerful tools, <br className="hidden md:block" />
            zero complexity.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;