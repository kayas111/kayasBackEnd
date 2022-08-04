const mongoose=require('mongoose')
const Func=mongoose.Schema

const requestsSchema=new Func({
    contact:{
    type:Number,
    required:true
    },
    serviceType:{
        type:String,
        required:true
    }
},{timestamps:true})

let requestsModel=mongoose.model('requests',requestsSchema);

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





const registrationSchema=new Func({
   
    name:{
        type:String,
        required:true
    },
     contact:{
    type:String,
    required:true
    },
    pin:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
    
},{timestamps:true})
let registrationModel=mongoose.model('kayasers',registrationSchema)

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

module.exports.requests=requestsModel
module.exports.campus=campusModel
module.exports.comments=commentsModel
module.exports.registration=registrationModel




 