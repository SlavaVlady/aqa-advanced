const axios = require('axios');
const makeErrorRequest = require('./errorRequest.js');

jest.mock('axios');

describe('Axios error handling', () => {
  it('should handle error properly and return the correct error message', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    await expect(makeErrorRequest()).rejects.toThrow('Error: Unable to fetch data');
  });
});
