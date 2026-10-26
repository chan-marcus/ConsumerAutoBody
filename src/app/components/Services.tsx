import { ArrowRight } from 'lucide-react';
import { SERVICES, servicePath, type Service } from '../services';
import { T } from '../typeset';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a
      href={servicePath(service)}
      className="group flex flex-col bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-neutral-200"
    >
      <Icon className="w-12 h-12 text-cyan-600 mb-4" />
      <h3 className="text-xl md:text-lg xl:text-xl font-bold mb-3 whitespace-nowrap">{service.name}</h3>
      <p className="text-neutral-600 leading-relaxed mb-4"><T narrow>{service.card}</T></p>
      <span className="mt-auto inline-flex items-center gap-2 font-semibold text-cyan-700 group-hover:text-cyan-800 whitespace-nowrap">
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function Services() {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="services" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(6, 182, 212, 0.03) 50px, rgba(6, 182, 212, 0.03) 52px)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            <T>San Francisco's Mission District auto body shop with over 30 years of experience. No job is too big or too small, from collision repair and paint to detailing and everything in between.</T>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
