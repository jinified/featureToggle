module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  NODE_ENV: process.env.NODE_ENV,
  API_ENDPOINT: process.env.featureToggleService || 'https://8xtgead0s6.execute-api.ap-southeast-1.amazonaws.com/develop/featuretoggle/api/v1'
};
