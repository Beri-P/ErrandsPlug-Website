import { Facebook, Instagram, Phone, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a2f05] to-[#000000] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Tagline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#3A5F0B] rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white">ErrandsPlug</span>
            <span className="text-xs text-gray-400 leading-none">Convenience on Hassle Errands</span>
          </div>
        </div>

        {/* Contact Us Anytime Banner */}
        <div className="text-center mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-[#3A5F0B] bg-white px-6 py-3 rounded-full mb-3">
            <Phone className="w-5 h-5" />
            <span>Available Mon-Sat, 8AM-6PM</span>
          </div>
          <p className="text-gray-300">Contact us anytime for professional errand services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Request Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Phone: +254 790 328 589/ +254 115 850 561</li>
              <li>Email: harunkiprotich12@gmail.com</li>
              <li>Hours: Mon-Sat, 8AM-6PM</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100089279539534"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3A5F0B] hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/errandsplugnairobi?igsh=OHhpMHV2c3BobDMx"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3A5F0B] hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ErrandsPlug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
