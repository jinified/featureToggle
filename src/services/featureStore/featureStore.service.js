/**
 *  Feature Toggle Service
 */
const axios = require('axios');
const config = require('../../config');

const getRecord = async id => axios.get(`${config.API_ENDPOINT}/get`, {
  params: {
    featureId: id
  }
})
  .then(res => res.data.response)
  .catch(err => handleError(err));


const handleError = (error) => {
  let result = {
    responseCode: 500,
    responseMessage: 'Something went wrong'
  };
  let _error;
  let errorCode;
  if (!error.response) {
    if (error && (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED')) {
      errorCode = 'ETIMEDOUT';
    } else {
      errorCode = 'MIDDLEWARE_DOWN';
    }
    _error = {
      errors: [{ errorCode }]
    };
    result.response = _error;
  } else {
    result = error.response.data;
  }
  return result;
};

module.exports = {
  getRecord
};
