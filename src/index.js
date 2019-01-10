const featureStore = require('./services/featureStore');

/*
 * Get feature flag
 * @param {String} or {Array} featureId The featureId to be retrieved from feature store
 *
*/
const get = async (featureId) => {
  try {
    const received = Array.isArray(featureId)
      ? await featureStore.getRecords(featureId)
      : await featureStore.getRecord(featureId);
    return received;
  } catch (err) {
    return undefined;
  }
};

module.exports = {
  get
};
