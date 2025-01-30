'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});