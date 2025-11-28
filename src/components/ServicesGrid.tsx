import { FileText, Users, Search, Package, ShoppingCart, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: FileText,
    title: 'Document Collection',
    description: 'Pick up and deliver important documents across Nairobi',
  },
  {
    icon: Users,
    title: 'Queue Services',
    description: 'Huduma, NTSA, and other government service queues',
  },
  {
    icon: Search,
    title: 'Product Research & Price Checks',
    description: 'Compare prices and find the best deals for you',
  },
  {
    icon: Package,
    title: 'Package Pickup/Delivery',
    description: 'Secure collection and delivery of your packages',
  },
  {
    icon: ShoppingCart,
    title: 'Shopping & Sourcing',
    description: 'Sourcing utensils, plumbing materials, stationery, flowers, jua kali products, and more',
  },
  {
    icon: MapPin,
    title: 'Nairobi & Surrounding Areas',
    description: 'CBD, Westlands, Kilimani, Juja, Kitengela, and all neighboring towns',
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 text-[#000000]"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3A5F0B]/10 rounded-xl mb-4 group-hover:bg-[#3A5F0B]/20 transition-all group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#3A5F0B]" />
                </div>
                <h3 className="mb-2 text-[#000000]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}