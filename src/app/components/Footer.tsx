import { Phone, MapPin, Mail, Star, Globe } from 'lucide-react';
import logo from '../../imports/ChatGPT_Image_May_22__2026__12_49_36_PM-2.png';
import googleLogo from '../../imports/image.png';
import yelpLogo from '../../imports/image-1.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logo}
                alt="Consumer Auto Body"
                className="h-16 w-auto"
              />
              <h3 className="text-xl font-bold tracking-wider uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                Consumer<br />Auto Body
              </h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Expert auto body repair<br />
              in San Francisco's Mission District.<br />
              Over 30 years of experience serving our community.
            </p>
            <div className="flex gap-2 text-sm text-neutral-400">
              <span>BBB A+</span>
              <span>•</span>
              <span>ASE Certified</span>
              <span>•</span>
              <span>I-CAR Certified</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:max-w-md md:ml-24">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left w-full">Contact Info</h3>
            <ul className="space-y-3 text-neutral-300 w-full max-w-xs md:max-w-none">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+14152851547" className="hover:text-cyan-400 transition-colors text-left">
                  (415) 285-1547
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=923+Valencia+Street+San+Francisco+CA+94110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  923 Valencia Street<br />
                  San Francisco, CA 94110
                </a>
              </li>
            </ul>

            <div className="mt-6 w-full">
              <h4 className="font-bold mb-3 text-center md:text-left">Review Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://www.yelp.com/biz/consumer-auto-body-repair-san-francisco-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors w-24"
                >
                  <img src={yelpLogo} alt="Yelp" className="h-6 w-auto max-w-full" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Consumers+Auto+Body+Inc/@37.75817,-122.4211242,15z/data=!4m7!3m6!1s0x0:0x358d59699a3a300f!8m2!3d37.75817!4d-122.4211242!9m1!1b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors w-24"
                >
                  <img src={googleLogo} alt="Google" className="h-6 w-auto max-w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Consumer Auto Body. All rights reserved.</p>
          <p className="mt-2">Established in 2002 • Over 30 Years Experience</p>
        </div>
      </div>
    </footer>
  );
}
