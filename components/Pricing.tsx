import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: "Starter",
    description: "Perfect for early-stage startups making their first hires.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1 Active Job Post",
      "Basic Kanban Board",
      "Email Support",
      "1 Team Member",
      "Standard Candidate Profile"
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams that need to hire consistently.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "5 Active Job Posts",
      "Advanced AI Filtering",
      "Team Collaboration Tools",
      "Unlimited Team Members",
      "Slack Integration",
      "Priority Support"
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "Scale your recruiting with advanced automation and data.",
    monthlyPrice: 149,
    annualPrice: 119,
    features: [
      "Unlimited Job Posts",
      "Dedicated Account Manager",
      "Custom Career Page",
      "API Access",
      "Advanced Analytics",
      "SSO & Security Compliance"
    ],
    cta: "Contact Sales",
    popular: false,
  }
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-full -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-tr-full -z-10 opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-secondary mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto mb-8"
          >
            Start for free, upgrade when you grow. No hidden fees.
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-secondary' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-gray-200 rounded-full relative p-1 transition-colors duration-300 focus:outline-none hover:bg-gray-300"
            >
              <motion.div 
                className="w-6 h-6 bg-primary rounded-full shadow-sm"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-secondary' : 'text-gray-400'}`}>
              Yearly <span className="text-accent text-xs ml-1 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'bg-secondary text-white border-secondary shadow-xl scale-105 z-10' 
                  : 'bg-white text-secondary border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-secondary'}`}>{plan.name}</h3>
                <p className={`text-sm min-h-[40px] ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-primary text-accent' : 'bg-green-50 text-primary'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'}
                className={`w-full ${!plan.popular ? 'border-gray-200 text-secondary hover:bg-gray-50 hover:text-primary' : ''}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;