const Category = require("../models/Category");
const Comment = require("../models/Comment");

exports.addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const slug = categoryName.toLowerCase().split(' ').join('-');
        const newCategory = new Category({ categoryName, slug });
        await newCategory.save();
        res.status(201).json({ message: 'Category added successfully', data: newCategory });
    } catch (err) {
        res.status(400).json({ message: 'Error adding category', error: err.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ categories });
    } catch (err) {
        res.status(400).json({ message: 'Error getting categories', error: err.message });
    }
};


exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ category });
    } catch (err) {
        res.status(400).json({ message: "Error getting category by ID", error: err.message });
    }
};


exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found for update" });
        }
        res.status(200).json({ message: "Category updated", data: updatedCategory });
    } catch (err) {
        res.status(400).json({ message: "Error updating category", error: err.message });
    }
};


exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found for deletion" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting category", error: err.message });
    }
};


exports.getCommentsByCategory = async (req, res) => {
    try {
        const comments = await Comment.find({ categoryId: req.params.id });
        res.status(200).json({ comments });
    } catch (err) {
        res.status(400).json({ message: 'Error getting comments by category', error: err.message });
    }
};
