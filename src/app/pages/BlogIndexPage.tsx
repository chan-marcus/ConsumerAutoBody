import { ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { POSTS, postPath, formatDate } from '../posts';
import { H, T } from '../typeset';

export function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <nav aria-label="Breadcrumb" className="text-sm text-neutral-300 mb-4">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">Blog</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Body Tips and Advice</h1>
              <p className="text-xl text-cyan-100 leading-relaxed">
                <T>Straight answers about accidents, insurance claims and car repairs in San Francisco, from the team at Consumer Auto Body.</T>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* One column, newest first, so any number of posts lays out evenly. */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {[...POSTS].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
                <a
                  key={post.slug}
                  href={postPath(post)}
                  className="group flex flex-col bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-neutral-200"
                >
                  <time dateTime={post.date} className="text-sm text-neutral-500 mb-2">{formatDate(post.date)}</time>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-700 transition-colors"><H>{post.h1}</H></h2>
                  <p className="text-neutral-600 leading-relaxed mb-4"><T>{post.card}</T></p>
                  <span className="mt-auto inline-flex items-center gap-2 font-semibold text-cyan-700 whitespace-nowrap">
                    Read the article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
