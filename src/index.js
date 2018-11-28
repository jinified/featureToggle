const cache = require('@astro-my/cache');
const featureStore = require('./services/featureStore');

const SERVICE_NAME = 'identity-feature';

/*
 * Get feature flag
 * @param {String} featureId The featureId to be retrieved from feature store
 *
*/
const get = async (featureId) => {
  const key = `${SERVICE_NAME}-${featureId}`;
  try {
    const val = await cache.get(key);
    console.log('Cache: ', val);
    if (val === null || val === undefined) {
      const received = await featureStore.getRecord(featureId);
      console.log('DB: ', received);
      // Stores result in cache
      cache.put(key, received);
      return received;
    }
    return val;
  } catch (err) {
    return undefined;
  }
};

module.exports = {
  get
};
