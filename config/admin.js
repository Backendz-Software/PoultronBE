module.exports = ({ env }) => ({
  auth: {
    // Admin JWT secret - prefer setting ADMIN_JWT_SECRET in environment
    secret: env('ADMIN_JWT_SECRET', '8f3a9d2c1b6a4f0e9d7c3a2b1e5f9a8c'),
  },
  apiToken: {
    // Salt used for API tokens. Prefer setting API_TOKEN_SALT in environment
    salt: env('API_TOKEN_SALT', 'nZc3V1k9b2X4s8Qh'),
  },
  transfer: {
    token: {
      // Salt used for transfer tokens
      salt: env('TRANSFER_TOKEN_SALT', 'tR4nSfeR7oK3nSa1t'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

