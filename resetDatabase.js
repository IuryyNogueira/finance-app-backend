const { sequelize } = require('../models');

async function resetDatabase() {
  try {
    await sequelize.drop(); // Derrubar todas as tabelas
    await sequelize.sync(); // Recriar todas as tabelas
    console.log('Database reset successfully.');
  } catch (error) {
    console.error('Error resetting database:', error);
  } finally {
    await sequelize.close();
  }
}

resetDatabase();