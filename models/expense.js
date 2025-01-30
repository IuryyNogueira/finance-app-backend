'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      // Define association here
      Expense.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Expense.init({
    description: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};