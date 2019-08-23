const apiURL = 'https://api.todoist.com/sync/v8/sync';

export default {
  getItems(next) {
    let apiKey = '<null>';
    fetch('/.netlify/functions/todoist-api-key')
      .then(response => response.json())
      .then((data) => { apiKey = data.key; });

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
