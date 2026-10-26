// Per-page <head> tags and JSON-LD, written into the prerendered HTML by
// scripts/prerender.mjs.
import { BUSINESS, SITE_URL } from './site';
import { SERVICES, servicePath } from './services';

export type Head = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  schema: object[];
};

const BUSINESS_ID = `${SITE_URL}/#business`;

const business = {
  '@type': 'AutoBodyShop',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  telephone: BUSINESS.phoneSchema,
  priceRange: '$$',
  foundingDate: '2002',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: BUSINESS.googleUrl,
  areaServed: { '@type': 'City', name: 'San Francisco' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  sameAs: [BUSINESS.yelpUrl],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto body services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.h1.replace(/ in San Francisco$/, ''), url: SITE_URL + servicePath(s) },
    })),
  },
};

const website = { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: BUSINESS.name, url: `${SITE_URL}/` };

export function headFor(path: string): Head {
  if (path === '/') {
    return {
      title: 'Auto Body Shop in San Francisco | Consumer Auto Body',
      description:
        "Consumer Auto Body at 923 Valencia Street in San Francisco's Mission District: collision repair, painting, dents, frames and bumpers. Free estimates.",
      path,
      schema: [business, website],
    };
  }
  const s = SERVICES.find((x) => servicePath(x) === path);
  if (s) {
    const name = s.h1.replace(/ in San Francisco$/, '');
    return {
      title: s.title,
      description: s.description,
      path,
      schema: [
        business,
        {
          '@type': 'Service',
          name,
          serviceType: name,
          url: SITE_URL + path,
          description: s.description,
          provider: { '@id': BUSINESS_ID },
          areaServed: { '@type': 'City', name: 'San Francisco' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
            { '@type': 'ListItem', position: 3, name: s.name, item: SITE_URL + path },
          ],
        },
      ],
    };
  }
  return {
    title: 'Page Not Found | Consumer Auto Body',
    description: 'That page doesn’t exist. Find our services, address and phone number on the Consumer Auto Body home page.',
    path,
    noindex: true,
    schema: [],
  };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderHead(h: Head): string {
  const url = SITE_URL + h.path;
  const tags = [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    h.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${BUSINESS.name}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    h.noindex ? '' : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/og-image.jpg" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
  ];
  if (h.schema.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': h.schema }).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.filter(Boolean).join('\n    ');
}
