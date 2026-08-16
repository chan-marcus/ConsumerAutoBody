import { useEffect } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle2, Wrench, Sparkles, Shield } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import faviconImg from '../imports/favicon.png';

const SITE_URL = 'https://www.consumerautobody.com';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoBodyShop',
  name: 'Consumer Auto Body',
  image: `${SITE_URL}/favicon.png`,
  url: SITE_URL,
  telephone: '+1-415-550-8585',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '923 Valencia Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94110',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.7592,
    longitude: -122.4212,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '120',
  },
  sameAs: [
    'https://www.yelp.com/biz/consumer-auto-body-san-francisco',
  ],
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function App() {
  useEffect(() => {
    document.title = 'Consumer Auto Body | Auto Body Repair in San Francisco Mission District';

    // Meta description
    setMeta('description', 'Consumer Auto Body at 923 Valencia Street in San Francisco\'s Mission District. Expert collision repair, paint, dent removal and more. BBB A+, ASE and I-CAR certified. Free estimates.');
    setMeta('keywords', 'auto body repair San Francisco, collision repair Mission District, car paint shop SF, dent removal San Francisco, auto body shop 94110, Consumer Auto Body');
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:url', SITE_URL, true);
    setMeta('og:title', 'Consumer Auto Body | San Francisco Mission District', true);
    setMeta('og:description', 'Expert auto body repair at 923 Valencia Street, San Francisco. BBB A+, ASE & I-CAR certified. Free estimates — call us today.', true);
    setMeta('og:image', `${SITE_URL}/favicon.png`, true);

    // Twitter Card
    setMeta('twitter:card', 'summary');
    setMeta('twitter:title', 'Consumer Auto Body | San Francisco');
    setMeta('twitter:description', 'Expert auto body repair in SF\'s Mission District. BBB A+, ASE & I-CAR certified. Free estimates.');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;

    // LocalBusiness JSON-LD schema
    const existingSchema = document.getElementById('local-business-schema');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.id = 'local-business-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(schema);

    // Favicon
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(link => link.remove());

    const link1 = document.createElement('link');
    link1.rel = 'icon';
    link1.type = 'image/png';
    link1.sizes = '32x32';
    link1.href = faviconImg;

    const link2 = document.createElement('link');
    link2.rel = 'shortcut icon';
    link2.href = faviconImg;

    const link3 = document.createElement('link');
    link3.rel = 'apple-touch-icon';
    link3.href = faviconImg;

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Certifications />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}