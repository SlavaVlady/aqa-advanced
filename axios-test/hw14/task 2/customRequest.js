const axios = require('axios');

const makeCustomRequest = async (url, headers, params) => {
  try {
    const response = await axios.get(url, { headers, params });
    return response.data;
  } catch (error) {
    throw new Error('Error: Unable to fetch data');
  }
};

module.exports = makeCustomRequest;
