const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const expenseController = require('../controllers/expenseController');
const auth = require('../middleware/auth');

// Rotas para registro e login
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, userController.registerUser);

router.post('/login', [
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, userController.loginUser);

// Rotas para usuários
router.get('/users', auth, userController.getUsers);
router.get('/users/:id', auth, userController.getUserById);
router.put('/users/:id', auth, userController.updateUser);
router.delete('/users/:id', auth, userController.deleteUser);

// Rotas para despesas
router.post('/expenses', auth, expenseController.createExpense);
router.get('/expenses', auth, expenseController.getExpenses);
router.get('/expenses/:id', auth, expenseController.getExpenseById);
router.put('/expenses/:id', auth, expenseController.updateExpense);
router.delete('/expenses/:id', auth, expenseController.deleteExpense);

module.exports = router;