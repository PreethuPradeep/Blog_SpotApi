const { body } = require('express-validator');

exports.coomentValidator = [
  body('categoryName').notEmpty().withMessage('Name is required'),
];
