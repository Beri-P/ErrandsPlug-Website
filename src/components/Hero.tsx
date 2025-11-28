import { motion } from 'motion/react';
import { Header } from './Header';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#3A5F0B] via-[#2f4d09] to-[#2a4508] text-white py-24 px-6 md:py-32">
      <Header />
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            y: {
              type: 'spring',
              stiffness: 300,
              damping: 15,
            },
          }}
          className="mb-6 text-white"
        >
          Focus on What Matters. We'll Handle the Rest.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
        >
          Professional errand services across Nairobi CBD and neighboring towns - from document collection to sourcing utensils, plumbing materials, stationery, flowers, and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToContact}
            className="bg-white text-[#3A5F0B] px-10 py-4 rounded-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Request Service
          </button>
          <button
            onClick={scrollToServices}
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-200"
          >
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
