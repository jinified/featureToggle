const featureStore = require('./featureStore.service');
const axios = require('axios');
jest.mock('axios');

describe('Service - featureStore', () => {
    it('should return flag on success', async () => {
        axios.get.mockImplementation( async () => { return {
            response: { flag: true }
            }
        })
        const val = await featureStore.getRecord("validity_period")
        expect(val).toBeTruthy();
    })

    it('should return 500 response on failure', async () => {
        axios.get.mockImplementation( async () => { 
            return Promise.reject("Error")
        })
        const err = await featureStore.getRecord("validity_period")
        expect(err.responseCode).toEqual(500)
    })

    it('should return error code on failure with', async () => {
        let errorCode = "ETIMEDOUT";
        axios.get.mockImplementation( async () => { 
            return Promise.reject({code: errorCode})
        })
        const err = await featureStore.getRecord("validity_period")
        expect(err.response.errors[0].errorCode).toEqual(errorCode)
    })
})
