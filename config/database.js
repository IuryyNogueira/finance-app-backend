const { Client } = require('pg');
require('dotenv').config();  // Carrega as variáveis do .env

// Configuração de conexão usando variáveis de ambiente
const client = new Client({
    user: process.env.DB_USER,       // Variável do .env
    host: process.env.DB_HOST,       // Variável do .env
    database: process.env.DB_NAME,   // Variável do .env
    password: process.env.DB_PASSWORD, // Variável do .env
    port: process.env.DB_PORT,       // Variável do .env
});

client.connect()
    .then(() => console.log('Conectado ao banco de dados!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));

module.exports = client; // Exporta a conexão para outros arquivos usarem
