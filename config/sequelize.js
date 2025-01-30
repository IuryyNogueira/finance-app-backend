const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres', // ou o dialeto do seu banco de dados
  protocol: 'postgres', // ou o protocolo do seu banco de dados
  logging: false, // ou true se você quiser ver os logs de SQL
});


module.exports = sequelize;