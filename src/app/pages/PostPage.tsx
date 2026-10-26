import { CheckCircle2, ExternalLink, Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { type Post, formatDate } from '../posts';
import { SERVICES, servicePath } from '../services';
import { BUSINESS } from '../site';
import { H, T } from '../typeset';

export function PostPage({ post }: { post: Post }) {
  const services = post.services.map((slug) => SERVICES.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <article>
          <header className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <nav aria-label="Breadcrumb" className="text-sm text-neutral-300 mb-4">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                    <li aria-hidden="true">/</li>
                    <li><a href="/blog/" className="hover:text-cyan-300 transition-colors">Blog</a></li>
                  </ol>
                </nav>
                <h1 className="text-3xl md:text-5xl font-bold mb-4"><H>{post.h1}</H></h1>
                <p className="text-sm text-neutral-300 mb-6">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true"> · </span>
                  <span className="whitespace-nowrap">Consumer Auto Body</span>
                </p>
                <p className="text-xl text-cyan-100 leading-relaxed"><T>{post.lead}</T></p>
              </div>
            </div>
          </header>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-12">
                {post.sections.map((section) => (
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

                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-3">Need a repair?</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-5">
                    <T>Consumer Auto Body works with all insurance companies and gives free estimates at 923 Valencia Street in the Mission District.</T>
                  </p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white transition-colors px-5 py-3 rounded-lg font-semibold whitespace-nowrap"
                    >
                      <Phone className="w-5 h-5" />
                      Call {BUSINESS.phoneDisplay}
                    </a>
                    <a
                      href="/#estimate"
                      className="inline-flex items-center border border-cyan-600 text-cyan-700 hover:bg-white transition-colors px-5 py-3 rounded-lg font-semibold whitespace-nowrap"
                    >
                      Request a free estimate
                    </a>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-semibold">Related services: </span>
                    {services.map((s, i) => (
                      <span key={s.slug}>
                        {i > 0 && ', '}
                        <a href={servicePath(s)} className="text-cyan-700 hover:text-cyan-800 underline underline-offset-2 whitespace-nowrap">{s.name}</a>
                      </span>
                    ))}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">Sources</h2>
                  <ul className="space-y-2">
                    {post.sources.map(([label, url]) => (
                      <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 underline underline-offset-2">
                          {label}
                          <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-neutral-500 mt-4">
                    <T>This article is general information, not legal or insurance advice. Check your own policy, or ask your agent, before you decide on a claim.</T>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
