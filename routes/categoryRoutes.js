const express = require('express');
const router = express.Router();
const commentCtrl=require("../controllers/commentController");
const categoryCtrl = require('../controllers/categoryControllers');
const categoryValidators=require('../validators/categoryValidators')
const validator=require('../validators/validator');

router.post('/',categoryValidators,validator, categoryCtrl.addCategory);
router.get('/',categoryCtrl.getAllCategories);
router.get('/:id',categoryCtrl.getCategoryById);
router.put('/:id',categoryValidators,validator,categoryCtrl.updateCategory);
router.delete('/:id',categoryCtrl.deleteCategory);
router.get('/:categoryId/comments',categoryCtrl.getCommentsByCategory);

module.exports = router;