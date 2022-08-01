const mongoose=require('mongoose')
const Func=mongoose.Schema
const commentsSchema=new Func({
    contact:{
    type:Number,
    required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})

let commentsModel=mongoose.model('comments',commentsSchema);




const campusSchema=new Func({
    contact:{
    type:Number,
    required:true
    },
    date:{
        type:String,
        required:true
    }, 
    name:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})
let campusModel=mongoose.model('campus',campusSchema)


module.exports.campus=campusModel
module.exports.comments=commentsModel




 