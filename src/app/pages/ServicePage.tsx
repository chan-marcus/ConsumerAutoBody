import { CheckCircle2, Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { EstimateForm } from '../components/EstimateForm';
import { Certifications } from '../components/Certifications';
import { ServiceCard } from '../components/Services';
import { Location } from '../components/Location';
import { Footer } from '../components/Footer';
import backgroundImg from '../../imports/hero-bg.webp';
import { SERVICES, type Service } from '../services';
import { POSTS, postPath } from '../posts';
import { BUSINESS } from '../site';
import { H, T } from '../typeset';

export function ServicePage({ service }: { service: Service }) {
  const at = SERVICES.indexOf(service);
  const related = [1, 2, 3].map((k) => SERVICES[(at + k) % SERVICES.length]);
  const reading = POSTS.filter((p) => p.services.includes(service.slug));

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 md:py-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <nav aria-label="Breadcrumb" className="text-sm text-neutral-300 mb-4">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                    <li aria-hidden="true">/</li>
                    <li><a href="/#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-white">{service.name}</li>
                  </ol>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold mb-6"><H>{service.h1}</H></h1>
                <p className="text-xl text-cyan-100 leading-relaxed mb-6"><T>{service.lead}</T></p>
                <ul className="space-y-3 mb-8">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="whitespace-nowrap">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition-colors px-6 py-3 rounded-lg font-semibold shadow-lg whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>

              <EstimateForm service={service.name} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-5"><H>{section.heading}</H></h2>
                  {section.body?.map((text) => (
                    <p key={text} className="text-lg text-neutral-700 leading-relaxed mb-4"><T>{text}</T></p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3 mb-4">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 text-lg text-neutral-700 leading-relaxed">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                          <span><T>{item}</T></span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.steps && (
                    <ol className="space-y-5 mb-4">
                      {section.steps.map(([name, text], k) => (
                        <li key={name} className="flex gap-4">
                          <span className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center">
                            {k + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-1">{name}</h3>
                            <p className="text-lg text-neutral-700 leading-relaxed"><T>{text}</T></p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.after?.map((text) => (
                    <p key={text} className="text-lg text-neutral-700 leading-relaxed mb-4"><T>{text}</T></p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                <H>{`Questions we hear about ${service.name.toLowerCase()}`}</H>
              </h2>
              <div className="space-y-6">
                {service.faqs.map(([question, answer]) => (
                  <div key={question} className="bg-white rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-xl font-bold mb-2"><H>{question}</H></h3>
                    <p className="text-lg text-neutral-700 leading-relaxed"><T>{answer}</T></p>
                  </div>
                ))}
              </div>
              {reading.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-3">Related reading</h3>
                  <ul className="space-y-2">
                    {reading.map((p) => (
                      <li key={p.slug}>
                        <a href={postPath(p)} className="text-lg text-cyan-700 hover:text-cyan-800 underline underline-offset-2">
                          <H>{p.h1}</H>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <Certifications />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Other Services</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>

        <Location />
      </main>
      <Footer />
    </div>
  );
}
