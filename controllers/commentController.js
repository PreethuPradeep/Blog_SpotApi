const Comment = require("../models/Comment");


exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment({ ...req.body });
        await newComment.save();

        res.status(201).json({ message: 'Comment created successfully', data: newComment });
    } catch (err) {
        res.status(400).json({ message: 'Error creating comment', error: err.message });
    }
};


exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({ data: comments });
    } catch (err) {
        res.status(400).json({ message: 'Error getting comments', error: err.message });
    }
};


exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({ data: comment });
    } catch (err) {
        res.status(400).json({ message: "Error getting comment by ID", error: err.message });
    }
};


exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found for update" });
        }

        res.status(200).json({ message: "Comment updated", data: updatedComment });
    } catch (err) {
        res.status(400).json({ message: "Error updating comment", error: err.message });
    }
};


exports.deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);

        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found for deletion" });
        }

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting comment", error: err.message });
    }
};

