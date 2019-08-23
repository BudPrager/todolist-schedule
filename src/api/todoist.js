const apiUrl = 'https://api.todoist.com/rest/v1/tasks';

export default {
  getItems(next) {
    // Get the api key from the netlify environment variable
    fetch('/.netlify/functions/todoist-api-key')
      .then(response => response.json())
      .then((data) => {
        const auth = `Bearer ${data.key}`;

        // When we have the auth, build the headers
        const requestParams = {
          method: 'GET',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'text/plain',
            Authorization: auth,
          },
        };

        // Get the request and return an object from the json
        fetch(apiUrl, requestParams)
          .then(res => res.json())
          .then((items) => { console.log(items); next(items); });
      });
  },
};
