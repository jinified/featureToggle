module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  NODE_ENV: process.env.NODE_ENV,
  API_ENDPOINT: process.env.featureToggleService || 'https://identity-feature-develop.identity.astro.com.my/api/v1'
};
