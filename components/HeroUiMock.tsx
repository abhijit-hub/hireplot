import React from 'react';
import { motion } from 'framer-motion';

const HeroUiMock: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto perspective-1000">
      {/* Glow behind the mockup */}
      <div className="absolute inset-0 bg-accent/20 blur-3xl transform scale-90 translate-y-10 -z-10 rounded-full opacity-30"></div>
      
      <motion.div 
        className="bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden w-full h-[500px] flex flex-col relative z-10"
        initial={{ y: 100, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.4 }}
      >
        {/* Floating Animation Wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full flex flex-col"
        >
          {/* Fake Browser Toolbar */}
          <div className="h-12 bg-gray-50/80 border-b border-gray-200 flex items-center px-4 gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
            </div>
            <div className="flex-1 max-w-xl mx-auto bg-white h-8 rounded-md border border-gray-200 text-xs text-gray-400 flex items-center justify-center shadow-sm">
              app.hirepilot.com/dashboard
            </div>
            <div className="w-16"></div> 
          </div>

          <div className="flex flex-1 overflow-hidden">
             {/* Sidebar */}
            <div className="w-56 bg-gray-50/50 border-r border-gray-200 hidden md:flex flex-col p-5 gap-6">
              <div className="h-8 w-32 bg-gray-200/50 rounded-md animate-pulse"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3 opacity-60">
                    <div className="w-5 h-5 bg-gray-200 rounded-md"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content (Kanban) */}
            <div className="flex-1 bg-white/50 p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="h-7 w-48 bg-gray-800 rounded-md mb-3"></div>
                  <div className="h-3 w-32 bg-gray-300 rounded-md"></div>
                </div>
                <div className="h-9 w-28 bg-accent shadow-lg shadow-accent/20 rounded-md"></div>
              </div>

              <div className="grid grid-cols-3 gap-6 h-full">
                {/* Column 1: Applied */}
                <div className="bg-gray-50/80 rounded-xl p-4 flex flex-col gap-3 border border-gray-100">
                  <div className="flex justify-between mb-2 px-1">
                    <div className="h-3 w-16 bg-gray-400 rounded"></div>
                    <div className="h-4 w-6 bg-gray-200 rounded text-[10px] flex items-center justify-center text-gray-500 font-bold">3</div>
                  </div>
                  <CandidateCard name="Alex M." role="Frontend Dev" delay={0.8} />
                  <CandidateCard name="Sam K." role="Frontend Dev" delay={0.9} />
                  <CandidateCard name="Jordan P." role="Frontend Dev" delay={1.0} />
                </div>

                {/* Column 2: Interviewing */}
                <div className="bg-gray-50/80 rounded-xl p-4 flex flex-col gap-3 border border-gray-100">
                   <div className="flex justify-between mb-2 px-1">
                    <div className="h-3 w-24 bg-indigo-400 rounded"></div>
                    <div className="h-4 w-6 bg-gray-200 rounded text-[10px] flex items-center justify-center text-gray-500 font-bold">1</div>
                  </div>
                   <CandidateCard name="Taylor S." role="Frontend Dev" active delay={1.1} />
                </div>

                 {/* Column 3: Offer */}
                 <div className="bg-gray-50/80 rounded-xl p-4 flex flex-col gap-3 border border-gray-100">
                   <div className="flex justify-between mb-2 px-1">
                    <div className="h-4 w-12 bg-accent/20 text-accent rounded text-[9px] font-bold px-2 flex items-center border border-accent/20">OFFER</div>
                    <div className="h-4 w-6 bg-gray-200 rounded text-[10px] flex items-center justify-center text-gray-500 font-bold">1</div>
                  </div>
                   <CandidateCard name="Morgan W." role="Frontend Dev" isWinner delay={1.2} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CandidateCard = ({ name, role, active, isWinner, delay }: { name: string, role: string, active?: boolean, isWinner?: boolean, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`p-4 rounded-lg shadow-sm border ${isWinner ? 'bg-green-50/50 border-accent' : 'bg-white border-gray-100'} ${active ? 'ring-2 ring-accent ring-opacity-50' : ''}`}
    whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-8 h-8 rounded-full ${isWinner ? 'bg-accent' : 'bg-gray-200'}`}></div>
      <div>
        <div className="h-3 w-24 bg-gray-800 rounded mb-1.5 opacity-80"></div>
        <div className="h-2 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div className="flex gap-2">
       <div className="h-4 w-14 bg-gray-100 rounded"></div>
       <div className="h-4 w-10 bg-gray-100 rounded"></div>
    </div>
  </motion.div>
);

export default HeroUiMock;