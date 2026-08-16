import { Car, Paintbrush, Sparkles, Frame, GlassWater, Zap, CircleDot, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Car,
      title: 'Collision Repair',
      description: "Been in an accident? Our ASE-certified technicians handle everything from minor fender-benders to major collision damage. We work with all insurance companies and get your vehicle back to pre-accident condition."
    },
    {
      icon: Paintbrush,
      title: 'Automotive Refinishing',
      description: "We use premium PPG waterborne paints in our EPA-approved spray booths to achieve a factory-perfect color match. Whether it's one panel or a full respray, your car leaves looking showroom-new."
    },
    {
      icon: Sparkles,
      title: 'Auto Detailing',
      description: 'Full-service detailing covers exterior hand wash, clay bar, waxing, tire dressing, and interior deep cleaning including carpet shampooing and leather conditioning. A great finishing touch after any repair.'
    },
    {
      icon: Frame,
      title: 'Frame Straightening',
      description: 'A bent frame affects your safety and tire wear, not just how the car looks. Using computerized measuring equipment, we restore your vehicle\'s structural geometry to manufacturer specs so it drives straight again.'
    },
    {
      icon: GlassWater,
      title: 'Glass Repair & Replacement',
      description: 'Small windshield chips can be repaired in under an hour before they spread into a costly crack. When replacement is needed, we fit OEM-quality auto glass with proper sealing to keep out leaks and wind noise.'
    },
    {
      icon: Zap,
      title: 'Welding & Metal Fabrication',
      description: 'Our welders handle chassis repairs, panel fabrication, and rust-through restoration. All welds are ground flush and sealed to stop future corrosion. Built to hold up, not just to look right.'
    },
    {
      icon: CircleDot,
      title: 'Dent Removal',
      description: "From parking lot dings to larger collision dents, we have the tools to pull or massage the metal back to its original shape. In many cases we can do it without touching your factory paint finish."
    },
    {
      icon: Shield,
      title: 'Bumper Repair & Replacement',
      description: 'Cracked, scraped, or detached bumpers are something we fix every day. We repair what can be repaired and replace what needs replacing, then blend the paint so the repair disappears completely.'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="services" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(6, 182, 212, 0.03) 50px, rgba(6, 182, 212, 0.03) 52px)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            San Francisco's Mission District auto body shop with over 30 years of experience. No job too big or too small — we handle collision repair, paint, detailing, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-neutral-200"
              >
                <Icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
