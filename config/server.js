module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Provide an array of app keys. Prefer setting the `APP_KEYS` env var
    // as a comma-separated list in production. We include a default key
    // here so Strapi can start in development.
    keys: env.array('APP_KEYS', [
      'd71fbde8aa9e43f4e034befd68822bb9c315bbf1a55e19505740c9e473b20ca4',
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
