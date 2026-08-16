import { Phone, MapPin, Clock, Star, Globe } from 'lucide-react';
import googleLogo from '../../imports/image.png';
import yelpLogo from '../../imports/image-1.png';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white sticky top-0 z-50 shadow-2xl">
      {/* Top Info Bar */}
      <div className="bg-black/30 border-b border-neutral-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs md:text-sm">
            <a
              href="https://maps.google.com/?q=923+Valencia+Street+San+Francisco+CA+94110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>923 Valencia St, San Francisco, CA 94110</span>
            </a>
            <div className="flex gap-2 md:gap-6 items-center">
              <a href="tel:+14152851547" className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 transition-colors whitespace-nowrap">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs md:text-sm">(415) 285-1547</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 md:gap-2 text-neutral-300 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-xs md:text-sm">Mon-Fri: 8:00 AM - 5:30 PM</span>
                  <span className="sm:hidden text-xs">M-F: 8-5:30</span>
                </div>
                <div className="flex gap-2 items-center border-l border-neutral-600 pl-2">
                  <a
                    href="https://www.yelp.com/biz/consumer-auto-body-repair-san-francisco-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                    title="Review us on Yelp"
                  >
                    <img src={yelpLogo} alt="Yelp" className="h-4 md:h-5 w-auto" />
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Consumers+Auto+Body+Inc/@37.75817,-122.4211242,15z/data=!4m7!3m6!1s0x0:0x358d59699a3a300f!8m2!3d37.75817!4d-122.4211242!9m1!1b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                    title="Find us on Google"
                  >
                    <img src={googleLogo} alt="Google" className="h-4 md:h-5 w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
              <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-1 text-white hover:text-cyan-400 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Consumer Auto Body
              </h1>
            </a>
            <p className="text-neutral-300 text-xs tracking-wide">Over 30+ Years of Excellence • Est. 2002</p>
          </div>

          {/* Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              <li>
                <a href="#about" className="text-sm md:text-base hover:text-cyan-400 transition-colors font-medium border-b-2 border-transparent hover:border-cyan-400 pb-1">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm md:text-base hover:text-cyan-400 transition-colors font-medium border-b-2 border-transparent hover:border-cyan-400 pb-1">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm md:text-base hover:text-cyan-400 transition-colors font-medium border-b-2 border-transparent hover:border-cyan-400 pb-1">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm md:text-base hover:text-cyan-400 transition-colors font-medium border-b-2 border-transparent hover:border-cyan-400 pb-1">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="text-sm md:text-base bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 rounded font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
