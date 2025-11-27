import { Star } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    name: 'James Mwangi',
    review: 'Saved me 3 hours at Huduma Centre! They handled my ID renewal while I focused on work. Professional and reliable service.',
    rating: 5,
  },
  {
    name: 'Sarah Akinyi',
    review: 'Used them for package pickup from town. Got photo updates throughout and delivery was quick. Will definitely use again!',
    rating: 5,
  },
  {
    name: 'David Omondi',
    review: 'The price checking service helped me save money on electronics. They visited 5 shops and sent me detailed comparisons. Excellent!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 text-[#000000]"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F5F5F5] p-8 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
            >
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3A5F0B] text-[#3A5F0B]" />
                ))}
              </div>
              <p className="text-lg mb-4 text-center text-gray-700">
                "{testimonials[currentIndex].review}"
              </p>
              <p className="text-center text-[#3A5F0B]">
                - {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#3A5F0B] w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
