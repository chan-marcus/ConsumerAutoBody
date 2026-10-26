// Server entry for scripts/prerender.mjs: renders one path to HTML plus its head tags.
import { renderToString } from "react-dom/server";
import App from "./app/App.tsx";
import { headFor, renderHead } from "./app/head";
import { SERVICES, servicePath } from "./app/services";
import { SITE_URL } from "./app/site";

export { SITE_URL };

/** Every indexable path, in sitemap order. */
export const PATHS = ["/", ...SERVICES.map(servicePath)];

export function render(path: string) {
  return {
    html: renderToString(<App path={path} />),
    head: renderHead(headFor(path)),
  };
}
