import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import HeroUiMock from './HeroUiMock';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#030F0F]">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030F0F] via-[#022c22] to-[#03624C] opacity-80"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,223,130,0.1)]">
              <Sparkles className="w-3 h-3" />
              <span>Hiring simplified for startups</span>
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Find Your Ideal Candidate <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#00DF82] to-emerald-200 filter drop-shadow-[0_0_10px_rgba(0,223,130,0.3)]">
              Without the Chaos
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            HirePilot helps startups and small companies manage their entire hiring process—from job posting to offer letter—all in one simple dashboard.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_30px_-5px_rgba(0,223,130,0.5)]">
              Start Hiring for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
              <CheckCircle className="w-4 h-4 text-accent" /> No credit card required
            </div>
          </motion.div>
        </div>

        <HeroUiMock />
      </div>
    </section>
  );
};

export default Hero;