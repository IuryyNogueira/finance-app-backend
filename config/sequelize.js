const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis do .env

const { DATABASE_URL, PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

const connectionString = DATABASE_URL || `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false, // Desabilitar log de SQL (opcional)
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // You may need to adjust this based on your SSL configuration
        }
    }
});

module.exports = sequelize; // Exportar a configuração