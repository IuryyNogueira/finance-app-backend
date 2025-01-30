'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Expense.associate = (models) => {
    Expense.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Expense;
};