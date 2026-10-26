import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { PostPage } from './pages/PostPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SERVICES, servicePath } from './services';
import { POSTS, postPath } from './posts';

/** Pages are prerendered per path at build time; the browser hydrates the same path. */
export default function App({ path }: { path: string }) {
  const p = path.endsWith('/') ? path : `${path}/`;
  if (p === '/') return <HomePage />;
  if (p === '/blog/') return <BlogIndexPage />;
  const service = SERVICES.find((s) => servicePath(s) === p);
  if (service) return <ServicePage service={service} />;
  const post = POSTS.find((x) => postPath(x) === p);
  if (post) return <PostPage post={post} />;
  return <NotFoundPage />;
}
