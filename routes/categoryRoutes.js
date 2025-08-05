const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/categoryControllers');
const categoryValidators=require('../validators/categoryValidators')
const validator=require('../validators/validator');

router.post('/category/add',categoryValidators,validator, categoryCtrl.addCategory);
router.get('/category/getAll',categoryCtrl.getAllCategories);
router.get('/category/getById',categoryCtrl.getCategoryById);
router.put('/category/update/:id',categoryValidators,validator,categoryCtrl.updateCategory);
router.delete('/category/delete/:id',categoryCtrl.deleteCategory);

module.exports = router;