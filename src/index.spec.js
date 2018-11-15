const service = require('./index');
const featureStore = require('./services/featureStore');
const cache = require('@astro-my/cache');
jest.mock('./services/featureStore');
jest.mock('@astro-my/cache');

describe('Service - feature toggle', () => {
  it('should return correct value if key is found in cache', async () => {

    let key = "validity_period"
    let val = true

    cache.get.mockImplementation((featureId) => {
        return featureId === key ? Promise.resolve(val) : Promise.resolve(null)
    });

    const res = await service.get('validity_period');
    expect(featureStore.getRecord).toHaveBeenCalledTimes(0);
    expect(res).toEqual(val);
  });

  it('should call service if key is not found in cache with the correct value', async () => {
    cache.get.mockImplementation((featureId) => {
        return Promise.resolve(null)
    });
    await service.get('validity_period');
    expect(featureStore.getRecord).toHaveBeenCalledTimes(1);
  });

});
