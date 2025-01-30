const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis do .env

// Configuração do Sequelize com as variáveis de ambiente
const sequelize = new Sequelize(
    process.env.DB_NAME,       // Nome do banco de dados
    process.env.DB_USER,       // Usuário do banco de dados
    process.env.DB_PASSWORD,   // Senha do banco de dados
    {
        host: process.env.DB_HOST,  // Host do banco de dados
        dialect: 'postgres',       // Tipo de banco (PostgreSQL)
        port: process.env.DB_PORT,  // Porta do banco
        logging: false,            // Desabilitar log de SQL (opcional)
    }
);

module.exports = sequelize;  // Exportar a configuração
