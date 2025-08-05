const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {type: String,required: [true, 'Comment title is required'],trim: true,},
    description: {type: String,required: [true, 'Comment description is required'],trim: true,},
    categoryId: {type: mongoose.Schema.Types.ObjectId,ref: 'Category',required: [true, 'Category ID is required'],},
    commentDate: {type: Date,required: [true, 'Comment date is required'],
    },
    rating: {type: Number,required: true,default: 0,min: [0, 'Rating cannot be negative'],
    },
    isActive: {type: Boolean,default: true,},
    createdDate: {type: Date,default: Date.now,},}, {timestamps: true});

module.exports = mongoose.model("Comment", commentSchema);
