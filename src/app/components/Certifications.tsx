import { Award, Shield, Star, CheckCircle2 } from 'lucide-react';
import bbbLogo from '../../imports/img29.png';
import aseLogo from '../../imports/img40.png';
import icarLogo from '../../imports/img36.png';
import yelpLogo from '../../imports/img32.png';
import googleLogo from '../../imports/img30.png';

export function Certifications() {
  const certifications = [
    {
      name: 'BBB',
      title: 'A+ Accredited Business',
      image: bbbLogo,
      color: 'text-cyan-600'
    },
    {
      name: 'ASE',
      title: 'ASE Certified',
      image: aseLogo,
      color: 'text-cyan-600'
    },
    {
      name: 'I-CAR',
      title: 'I-CAR Certified Technicians',
      image: icarLogo,
      color: 'text-cyan-600'
    },
    {
      name: 'Yelp',
      title: '5-Star Reviews',
      image: yelpLogo,
      color: 'text-yellow-500'
    },
    {
      name: 'Google',
      title: 'Top Rated on Google',
      image: googleLogo,
      color: 'text-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certified and Trusted</h2>
        <p className="text-center text-cyan-200 mb-12 text-lg">
          Your satisfaction and safety are our top priorities
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="text-center w-40">
                <div className="bg-white rounded-lg p-6 mb-3 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-[120px]">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <Icon className={`w-12 h-12 ${cert.color} mx-auto`} />
                  )}
                </div>
                <p className="font-bold">{cert.name}</p>
                <p className="text-sm text-cyan-200">{cert.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
