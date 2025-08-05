const express = require('express');
const router = express.Router();
const commentCtrl=require("../controllers/commentController");
const categoryCtrl = require('../controllers/categoryControllers');
const categoryValidators=require('../validators/categoryValidators')
const validator=require('../validators/validator');

router.post('/categories',categoryValidators,validator, categoryCtrl.addCategory);
router.get('/categories',categoryCtrl.getAllCategories);
router.get('/categories/:id',categoryCtrl.getCategoryById);
router.put('/categories/:id',categoryValidators,validator,categoryCtrl.updateCategory);
router.delete('/categories/:id',categoryCtrl.deleteCategory);
router.get('/categories/:categoryId/comments',categoryCtrl.getCommentsByCategory);

module.exports = router;