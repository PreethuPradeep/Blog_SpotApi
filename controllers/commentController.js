const Comment=require("../models/Comment");

exports.addComment=async(req,res)=>{
    try{
        const newComment = new Comment({...req.body});
        await newComment.save();
        res.status(201).json({ message: 'Comment created successfully', event});
    } catch(err){
        res.status(400).json({message:'error cretaing Comment',err:err.message});
    }
};

exports.getAllComments=async(req,res)=>{
    try{
        const Comments=await Comment.find();
        res.status(200).json({Comments});
    } catch(err){
        res.status(400).json({message:'error getting comments',err:err.message});
    };
}

exports.getCommentById=async(req,res)=>{
    try{
        const comment=await  Comment.findById(req.params.id);
        res.status(200).json({comment});
    } catch(err){
        res.status(400).json({message:"error getting comment by id",err:err.message});
    }
};

exports.updateComment=async(req,res)=>{
    try{
        const updatedComment=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({updatedComment}); 
    }catch(err){
        res.status(400).json({message:"error updating comment",err:err.message})
    } 
};

exports.deleteComment=async(req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Comment deleted",err:err.message});
    } catch(err){
        res.status(400).json({message:"error deleting comment",err:err.message});
    }
};

exports.getCommentsByCategory = async (req, res) => {
    try{
        const comments = await Comment.find({ categoryId: req.params.id });
        res.json(comments);
    } catch(err){
        res.status(400).json({message:'error getting comments by category',err:err.message});
    }
};