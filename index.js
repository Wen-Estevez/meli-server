const server = require('./src/app.js');

// Syncing all the models at once.
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
