import { Package, Building2, DollarSign, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

const quickServices = [
  {
    icon: Package,
    title: 'Package Pickup',
    service: 'I need a package picked up',
  },
  {
    icon: Building2,
    title: 'Huduma Services',
    service: 'Queue for Huduma service',
  },
  {
    icon: DollarSign,
    title: 'Price Checking',
    service: 'Price check for product',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping Research',
    service: 'Shopping research needed',
  },
];

export function QuickRequestCards() {
  const handleCardClick = (service: string) => {
    const contactSection = document.getElementById('contact');
    const serviceDropdown = document.getElementById('service-type') as HTMLSelectElement;
    
    if (contactSection && serviceDropdown) {
      serviceDropdown.value = service;
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleCardClick(item.service)}
                className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-2 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3A5F0B]/10 rounded-full mb-4 group-hover:bg-[#3A5F0B]/20 transition-all group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#3A5F0B]" />
                </div>
                <h3 className="text-[#000000]">{item.title}</h3>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
