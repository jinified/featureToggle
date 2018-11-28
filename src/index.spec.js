const service = require('./index');
const featureStore = require('./services/featureStore');

jest.mock('./services/featureStore');
jest.mock('@astro-my/cache');

describe('Service - feature toggle', () => {
  it('should call service if key is not found in cache with the correct value', async () => {
    await service.get('validity_period');
    expect(featureStore.getRecord).toHaveBeenCalledTimes(1);
  });
});
