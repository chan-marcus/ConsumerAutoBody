import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SERVICES, servicePath } from './services';

/** Pages are prerendered per path at build time; the browser hydrates the same path. */
export default function App({ path }: { path: string }) {
  const p = path.endsWith('/') ? path : `${path}/`;
  if (p === '/') return <HomePage />;
  const service = SERVICES.find((s) => servicePath(s) === p);
  if (service) return <ServicePage service={service} />;
  return <NotFoundPage />;
}
