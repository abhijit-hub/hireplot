import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Don't take our word for it
          </h2>
          <p className="text-gray-500">Hear from the teams building the future.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-gray-100 w-12 h-12 fill-current" />
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent ring-offset-2"
                />
                <div>
                  <h4 className="font-bold text-secondary text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role} @ {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;