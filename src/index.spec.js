const service = require('./index');

describe('Service - feature toggle', () => {
  it('should initialize cache', async () => {
    const val = service.get('validity_period');
    expect(val).toEqual({});
  });
});
