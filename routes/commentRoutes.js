const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/commentController');
const commentValidators = require('../validators/commentValidators');
const validator = require('../validators/validator');


router.post('/', commentValidators, validator, commentCtrl.addComment);
router.get('/', commentCtrl.getAllComments);
router.get('/:id', commentCtrl.getCommentById);
router.put('/:id', commentValidators, validator, commentCtrl.updateComment);
router.delete('/:id', commentCtrl.deleteComment);

module.exports = router;
