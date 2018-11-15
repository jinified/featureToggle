const axios = require('axios');
const featureStore = require('./featureStore.service');

jest.mock('axios');

describe('Service - featureStore', () => {
  it('should return flag on success', async () => {
    axios.get.mockImplementation(async () => ({
      response: { flag: true }
    }));
    const val = await featureStore.getRecord('validity_period');
    expect(val).toBeTruthy();
  });

  it('should return 500 response on failure', async () => {
    axios.get.mockImplementation(async () => Promise.reject(new Error()));
    const err = await featureStore.getRecord('validity_period');
    expect(err.responseCode).toEqual(500);
  });

  it('should return error code on failure with', async () => {
    const errorCode = 'ETIMEDOUT';
    axios.get.mockImplementation(async () => Promise.reject(new Error({ code: errorCode })));
    const err = await featureStore.getRecord('validity_period');
    expect(err.response.errors[0].errorCode).toEqual('MIDDLEWARE_DOWN');
  });
});
