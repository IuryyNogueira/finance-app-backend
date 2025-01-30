const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis do .env

// Configuração do Sequelize com a URL do banco de dados
const sequelize = new Sequelize(process.env.DATABASE_URL, {
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