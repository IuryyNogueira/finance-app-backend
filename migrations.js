const sequelize = require('./config/sequelize'); // Corrigir o caminho para o arquivo sequelize.js
const User = require('./models/user');

async function migrate() {
    try {
        await sequelize.sync({ force: true }); // Força a recriação das tabelas
        console.log('Tabelas sincronizadas com sucesso!');
    } catch (err) {
        console.error('Erro ao sincronizar tabelas:', err);
    }
}

migrate();