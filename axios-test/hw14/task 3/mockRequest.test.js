const axios = require('axios');
const fetchData = require('./mockRequest');

jest.mock('axios');

describe('Mocking Axios requests', () => {
  it('should return data for successful request', async () => {
    const mockData = { data: 'successful response' };
    axios.get.mockResolvedValue(mockData);

    const url = 'https://valid-url.com';
    const result = await fetchData(url);

    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockData.data);
  });

  it('should throw an error for failed request', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const url = 'https://invalid-url.com';

    await expect(fetchData(url)).rejects.toThrow('Error: Unable to fetch data');
  });
});
