// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routers');

app.use([
  cors(), 
  express.json(), 
  express.urlencoded({ extended: false })
]);

app.use(router);

const port = 3000;

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));

module.exports = app;
