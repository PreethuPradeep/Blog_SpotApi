const mongoose=require('mongoose');
const { applyTimestamps } = require('./Category');
const commentSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'Category',required:true},
    commentDate:{type:Date,required:true},
    rating:{type:Number,required:true,default:0},
    isActive:{type:Boolean,default:true},
    createdDate:{type:Date,default:Date.now}
},{timestamps:true});
module.exports=mongoose.model("Comment",commentSchema);