const mongoose=require('mongoose')
const Func=mongoose.Schema
const quotesSchema=new Func({
   
    quote:{
        type:String,
        required:true
    }
},{timestamps:true})
let quotesModel=mongoose.model('quotes',quotesSchema);


const requestsSchema=new Func({
    name:{
        type:String,
        required:true
        },
        stdNo:{
            type:Number,
            required:true
        },
    contact:{
    type:Number,
    required:true
    },
   
    serviceType:{
        type:String,
        required:true
    },
    attachment:{
        type:String,
        required:true
    }
    ,
    parent:{
        type:String,
        required:true
    }
    ,
    grandparent:{
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



const recommendationSchema=new Func({
   
    name:{
        type:String,
        required:true
        },
    recommender:{
        type:Number,
        required:true
        },
     recommendee:{
    type:[Number
   ],
   required:true
    }
   
    
},{timestamps:true})
let recommendationModel=mongoose.model('recommendations',recommendationSchema)

const registrationSchema=new Func({
   
    name:{
        type:String,
        required:true
    },
    stdNo:{
        type:Number,
        required:true
    },
     contact:{
    type:Number,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    }
   
    
},{timestamps:true})
let registrationModel=mongoose.model('kayasers',registrationSchema)

const campusSchema=new Func({
    contact:{
    type:Number,
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
module.exports.recommendation=recommendationModel
module.exports.requests=requestsModel
module.exports.campus=campusModel
module.exports.comments=commentsModel
module.exports.registration=registrationModel
module.exports.quotes=quotesModel




 