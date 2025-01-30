const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis do .env

// Configuração do Sequelize com as variáveis de ambiente
const sequelize = new Sequelize({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    dialect: 'postgres',
    logging: false, // Desabilitar log de SQL (opcional)
});

module.exports = sequelize; // Exportar a configuração