import { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const serviceTemplates = [
  'I need a package picked up',
  'Queue for Huduma service',
  'Price check for product',
  'Shopping research needed',
  'Custom errand request',
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    details: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend or WhatsApp
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-4 text-[#000000]">Get Started Today</h2>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below and we'll get back to you within 30 minutes
        </p>

        <div className="bg-white p-8 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5F0B] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-gray-700">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5F0B] focus:border-transparent"
                placeholder="07XX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="service-type" className="block mb-2 text-gray-700">
                Service Type *
              </label>
              <select
                id="service-type"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5F0B] focus:border-transparent bg-white"
              >
                <option value="">Select a service</option>
                {serviceTemplates.map((template, index) => (
                  <option key={index} value={template}>
                    {template}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block mb-2 text-gray-700">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5F0B] focus:border-transparent"
                placeholder="e.g., Westlands, CBD, Kilimani"
              />
            </div>

            <div>
              <label htmlFor="details" className="block mb-2 text-gray-700">
                Additional Details *
              </label>
              <textarea
                id="details"
                name="details"
                required
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5F0B] focus:border-transparent resize-none"
                placeholder="Please provide specific details about your errand..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3A5F0B] text-white px-8 py-4 rounded-lg hover:bg-[#2f4d09] hover:scale-[1.02] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {submitted ? 'Request Sent!' : 'Submit Request'}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center animate-[slideIn_0.3s_ease-out]">
              Thank you! We'll contact you shortly via WhatsApp.
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Or reach us directly:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-[#3A5F0B] hover:text-[#2f4d09] hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>+254 700 000 000</span>
            </a>
            <a
              href="mailto:info@errandservice.co.ke"
              className="flex items-center gap-2 text-[#3A5F0B] hover:text-[#2f4d09] hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>info@errandservice.co.ke</span>
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#3A5F0B] hover:text-[#2f4d09] hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
