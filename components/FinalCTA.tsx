import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to build your dream team?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Join 2,000+ companies hiring better candidates faster. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="w-full sm:w-auto text-lg">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white hover:text-primary">
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;