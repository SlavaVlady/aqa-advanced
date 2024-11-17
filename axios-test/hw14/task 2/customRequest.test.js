const axios = require('axios');
const makeCustomRequest = require('./customRequest');

jest.mock('axios');

describe('Axios custom headers and params', () => {
  it('should include custom headers and parameters in the request', async () => {
    const mockData = { data: 'response' };
    axios.get.mockResolvedValue(mockData);

    const url = 'https://example.com';
    const headers = { 'Authorization': 'Bearer token' };
    const params = { userId: 1 };

    const result = await makeCustomRequest(url, headers, params);
    expect(axios.get).toHaveBeenCalledWith(url, expect.objectContaining({
      headers: expect.objectContaining(headers),
      params: expect.objectContaining(params),
    }));

    expect(result).toEqual(mockData.data);
  });
});
