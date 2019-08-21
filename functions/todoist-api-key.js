
// Gets the TODOIST API KEY from the Environmental Variables
exports.handler = (event, context, callback) => {
  const key = { key: process.env.TODO_KEY };
  callback(null,
    {
      statusCode: 200,
      body: JSON.stringify(key),
    });
};
