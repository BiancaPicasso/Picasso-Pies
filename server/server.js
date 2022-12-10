const path = require('path');
const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

// Express REST API routes
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

// handle unknwon routes
app.use('*', (req, res) => {
  res.status(404).send('Error 404, page not found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
      log: 'Express error handle caught unknown middleware error',
      status: 500,
      message: { err: 'an error has occured' }
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});

module.exports = { app };