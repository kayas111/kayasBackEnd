const mongoose=require('mongoose')
const Func=mongoose.Schema
const Schema=new Func({
    contact:{
    type:Number,
    required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})
const model=mongoose.model('comments',Schema)
module.exports=model;

