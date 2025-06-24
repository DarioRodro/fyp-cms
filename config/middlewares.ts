export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:4200', 'https://starlit-semolina-8a608b.netlify.app'], // tu app Angular
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: '*',
      keepHeaderCase: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
