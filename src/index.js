const featureStore = require('./services/featureStore');

const SERVICE_NAME = 'identity-feature';

/*
 * Get feature flag
 * @param {String} featureId The featureId to be retrieved from feature store
 *
*/
const get = async (featureId) => {
  try {
    const received = await featureStore.getRecord(featureId);
    return received;
  } catch (err) {
    return undefined;
  }
};

module.exports = {
  get
};
