if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const db = require('./config/Database.js');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers');
const port = 5000

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch(error){
  console.error('Unable to connect to the database:', error);
}

app.use([
  cors({ credentials:true, origin: 'http://localhost:3000'}), 
  express.json(), 
  cookieParser(),
  express.urlencoded({ extended: false })
]);
app.use(router);

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));

module.exports = app;
