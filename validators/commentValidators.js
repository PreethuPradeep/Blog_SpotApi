const { body } = require('express-validator');
const commentValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('A valid description is required').isLength({ min: 6 }).withMessage('description must be at least 6 characters long'),
  body('categoryId').notEmpty().withMessage('categoryId cannot be empty').isMongoId().withMessage('Must be a mongoId'),
];
module.exports=commentValidator;