const { Expense } = require('../models');
const { Op } = require('sequelize');
const { body, validationResult } = require('express-validator');

exports.createExpense = async (req, res) => {
  try {
    const { description, amount } = req.body;
    const expense = await Expense.create({
      description,
      amount,
      userId: req.user.id
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  const { page = 1, limit = 10, description, minAmount, maxAmount, startDate, endDate } = req.query;
  const where = { userId: req.user.id };

  if (description) where.description = { [Op.like]: `%${description}%` };
  if (minAmount) where.amount = { ...where.amount, [Op.gte]: parseFloat(minAmount) };
  if (maxAmount) where.amount = { ...where.amount, [Op.lte]: parseFloat(maxAmount) };
  if (startDate) where.createdAt = { ...where.createdAt, [Op.gte]: new Date(startDate) };
  if (endDate) where.createdAt = { ...where.createdAt, [Op.lte]: new Date(endDate) };

  try {
    const expenses = await Expense.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: (page - 1) * limit
    });
    res.status(200).json({
      total: expenses.count,
      pages: Math.ceil(expenses.count / limit),
      data: expenses.rows
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      res.status(200).json(expense);
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateExpense = [
  body('description').notEmpty().withMessage('Description is required'),
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const [updated] = await Expense.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedExpense = await Expense.findByPk(req.params.id);
        res.status(200).json(updatedExpense);
      } else {
        res.status(404).json({ error: 'Expense not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
];

exports.deleteExpense = async (req, res) => {
  try {
    const deleted = await Expense.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};