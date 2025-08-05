const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/commentController');
const commentValidators=require('../validators/commentValidators');
const validator=require('../validators/validator');

router.post('/comment/add',commentValidators,validator, commentCtrl.addComment);
router.get('/comment/getAll',commentCtrl.getAllComments);
router.get('/comment/getById',commentCtrl.getCommentById);
router.put('/comment/update/:id',commentCtrl.updateComment);
router.delete('/comment/delete/:id',commentCtrl.deleteComment);
router.get('/categories/:categoryId/comments',commentCtrl.getCommentsByCategory);

module.exports = router;