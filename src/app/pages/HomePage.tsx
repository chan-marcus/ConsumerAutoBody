import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Services } from '../components/Services';
import { Certifications } from '../components/Certifications';
import { Testimonials } from '../components/Testimonials';
import { Location } from '../components/Location';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Certifications />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
