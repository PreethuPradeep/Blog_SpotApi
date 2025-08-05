const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/commentController');
const commentValidators = require('../validators/commentValidators');
const validator = require('../validators/validator');


router.post('/comments', commentValidators, validator, commentCtrl.addComment);
router.get('/comments', commentCtrl.getAllComments);
router.get('/comments/:id', commentCtrl.getCommentById);
router.put('/comments/:id', commentValidators, validator, commentCtrl.updateComment);
router.delete('/comments/:id', commentCtrl.deleteComment);

module.exports = router;
