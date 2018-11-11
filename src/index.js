const cache = require('@astro-my/cache');
const featureStore = require('./services/featureStore');

/*
 * Get feature flag
 * @param {String} featureId The featureId to be retrieved from feature store
 *
*/
const get = async (featureId) => {
  try {
    const val = await cache.get(featureId);
    if (val == null) {
      return featureStore.getRecord(featureId);
    }
    return val;
  } catch (err) {
    return undefined;
  }
};

module.exports = {
  get
};
