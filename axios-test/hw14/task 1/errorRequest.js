const axios = require('axios');

const makeErrorRequest = async () => {
  try {
    const response = await axios.get('https://invalid-url.com');
    return response.data;
  } catch (error) {
    throw new Error('Error: Unable to fetch data');
  }
};

module.exports = makeErrorRequest;
