const service = require('./index');
const featureStore = require('./services/featureStore');

jest.mock('./services/featureStore');
jest.mock('@astro-my/cache');

describe('Service - feature toggle', () => {
  it('should return correct value if key is found in cache', async () => {
    const key = 'identity-feature-validity_period';
    const val = true;

    cache.get.mockImplementation(featureId => (featureId === key ? Promise.resolve(val) : Promise.resolve(null)));

    const res = await service.get('validity_period');
    expect(featureStore.getRecord).toHaveBeenCalledTimes(0);
    expect(res).toEqual(val);
  });

  it('should call service if key is not found in cache with the correct value', async () => {
    cache.get.mockImplementation(() => Promise.resolve(null));
    await service.get('validity_period');
    expect(featureStore.getRecord).toHaveBeenCalledTimes(1);
  });
});
