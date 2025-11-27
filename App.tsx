import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { QuickRequestCards } from './components/QuickRequestCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesGrid } from './components/ServicesGrid';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <QuickRequestCards />
      <WhyChooseUs />
      <ServicesGrid />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
