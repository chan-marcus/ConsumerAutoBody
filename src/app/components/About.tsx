import { Award, MapPin, Calendar } from 'lucide-react';
import awardImg from '../../imports/img50-768x1024.jpg';

export function About() {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="about" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src={awardImg}
              alt="San Francisco Small Business Excellence Award - Consumer Auto Body"
              className="hidden md:block float-right ml-8 mb-6 w-64 h-auto rounded-lg shadow-xl"
            />

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              At <strong>Consumer Auto Body</strong>, we take pride in every repair that comes through our shop. We treat every vehicle as if it were our own because we know your car is important to you. Our team is committed to providing reliable service, honest communication, and quality workmanship, making sure you leave feeling confident and satisfied with the results.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Whether you've been in an accident, need repairs, or simply want to bring your vehicle back to life, we're here to help. No job is too big or too small. From minor dents and touch-ups to major collision repairs and complete restorations, our experienced team has the knowledge, tools, and technology to get your vehicle looking its best again.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Our repair facility is equipped with professional-grade equipment, including modern paint booths with EPA-approved filtration systems and high-flow ventilation designed to deliver high-quality refinishing results and attention to detail throughout the process.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              We also offer interior and exterior detailing services to help your vehicle look and feel refreshed. Tell us your vision, and we'll work with you to make it happen. From repairs and refinishing to working with insurance claims, <strong>Consumer Auto Body</strong> is here to make the process as smooth and stress-free as possible.
            </p>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Give us a call today to schedule an appointment. We look forward to getting you back on the road!
            </p>

            <div className="md:hidden flex justify-center mb-8">
              <img
                src={awardImg}
                alt="San Francisco Small Business Excellence Award - Consumer Auto Body"
                className="w-64 h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Located In the Mission</h3>
              <p className="text-neutral-600">Serving San Francisco since 2002</p>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <Award className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">30+ Years Experience</h3>
              <p className="text-neutral-600">Expert technicians you can trust</p>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <Calendar className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Established in 2002</h3>
              <p className="text-neutral-600">A trusted local business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
