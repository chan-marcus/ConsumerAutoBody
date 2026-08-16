import { MapPin, Phone, Clock } from 'lucide-react';

export function Location() {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="location" style={{ backgroundImage: 'linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visit Us</h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-neutral-700">923 Valencia Street</p>
                  <p className="text-neutral-700">San Francisco, CA 94110</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+14152851547" className="text-cyan-600 hover:text-cyan-700 text-lg">
                    (415) 285-1547
                  </a>
                  <p className="text-neutral-600 text-sm mt-1">Call us to schedule your appointment!</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-neutral-700">Monday - Friday</p>
                  <p className="text-neutral-700">8:00 AM to 5:30 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <h3 className="font-bold text-lg mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Over 30+ years of experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>BBB A+ Accredited Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>ASE & I-CAR Certified Technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Located in the Mission District</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Free estimates available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5832579876597!2d-122.42164588468198!3d37.75781197976114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2s923%20Valencia%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Consumer Auto Body Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
