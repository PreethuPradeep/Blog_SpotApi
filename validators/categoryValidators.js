const { body } = require('express-validator');

const categoryValidator = [
  body('categoryName').trim().notEmpty().withMessage('Category name is required').isLength({ min: 3 }).withMessage('Category name must be at least 3 characters long').matches(/^[A-Za-z0-9\s]+$/).withMessage('Category name must contain only letters, numbers, and spaces'),
];

module.exports = categoryValidator;
