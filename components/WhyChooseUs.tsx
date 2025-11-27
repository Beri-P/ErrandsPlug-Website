import { Clock, Camera, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Stop wasting hours in queues',
  },
  {
    icon: Camera,
    title: 'Proof of Work',
    description: 'Photos, videos & receipts for every task',
  },
  {
    icon: Wallet,
    title: 'Affordable',
    description: 'No travel costs for you',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 text-[#000000]"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3A5F0B]/10 rounded-full mb-4 group-hover:bg-[#3A5F0B]/20 transition-all group-hover:scale-110">
                  <Icon className="w-10 h-10 text-[#3A5F0B]" />
                </div>
                <h3 className="mb-2 text-[#000000]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
