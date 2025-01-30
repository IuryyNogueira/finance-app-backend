const { User, Expense, sequelize } = require('../models'); // Corrigir o caminho para '../models'

async function test() {
  try {
    // Sincronizar o banco de dados
    await sequelize.sync({ force: true });

    // Criar um usuário
    const user = await User.create({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password123'
    });

    // Criar uma despesa para o usuário
    const expense = await Expense.create({
      description: 'Dinner',
      amount: 25.75,
      userId: user.id
    });

    console.log('User created:', user.toJSON());
    console.log('Expense created:', expense.toJSON());
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

test();