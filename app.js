'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes/routes'); // Importar o arquivo de rotas
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes here
app.use('/api', routes); // Ensure the routes are prefixed with /api
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