import { Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BUSINESS } from '../site';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-lg text-neutral-600 mb-2">That page isn’t here.</p>
            <p className="text-lg text-neutral-600 mb-8">Our services are listed below, or call us.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="bg-cyan-500 hover:bg-cyan-600 text-white transition-colors px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Go to the home page
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 border border-cyan-600 text-cyan-700 hover:bg-cyan-50 transition-colors px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
