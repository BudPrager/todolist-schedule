const apiKey = 'fakeKey';
const apiURL = 'https://fake.com';

export default {
  getItems(next) {
    const params = {
      token: apiKey,
      sync_token: '*',
      resource_types: '["items"]',
      method: 'POST',
    };

    fetch(apiURL, params)
      .then((data) => { next(data); });
  },
};
