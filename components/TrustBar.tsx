import { Clock, Receipt, MapPin, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

const trustPoints = [
  { icon: Clock, text: 'Fast & Reliable' },
  { icon: Receipt, text: 'Proof of Work' },
  { icon: MapPin, text: 'All Nairobi' },
  { icon: Handshake, text: 'Trusted Service' },
];

export function TrustBar() {
  return (
    <section className="py-12 px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 mb-8"
        >
          Trusted by busy professionals across Nairobi
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-[#3A5F0B]/10 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-[#3A5F0B]" />
                </div>
                <p className="text-sm text-gray-700">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
