import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-7 h-7 text-[#3A5F0B] fill-[#3A5F0B]" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#3A5F0B] rounded-full animate-pulse"></div>
          </div>
          
          {/* Business Name */}
          <div className="flex flex-col">
            <span className="text-white tracking-tight leading-none">
              ErrandsPlug
            </span>
            <span className="text-xs text-white/80 leading-none mt-0.5">
              Your Nairobi Errand Partner
            </span>
          </div>
        </motion.div>

        {/* CTA Button - Desktop only */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={scrollToContact}
          className="hidden md:block bg-white text-[#3A5F0B] px-6 py-2.5 rounded-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all"
        >
          Get Started
        </motion.button>
      </div>
    </header>
  );
}
