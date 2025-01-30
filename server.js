const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes/routes');
require('dotenv').config(); // Carregar variáveis do .env

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados:', err);
  });

module.exports = app; // Exportar o app para uso nos testes