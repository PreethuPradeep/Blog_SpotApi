const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {type: String,required: [true, 'Category name is required'],unique: true,trim: true},
    slug: {type: String,required: [true, 'Slug is required'],lowercase: true,trim: true}
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);
