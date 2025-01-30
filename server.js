require('dotenv').config(); // Carregar variáveis do .env

const express = require('express');
const sequelize = require('./config/sequelize'); // Importar a instância do Sequelize
const routes = require('./routes/routes'); // Importar o arquivo de rotas

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
    console.error('❌ Não foi possível conectar ao banco de dados:', err);
  });