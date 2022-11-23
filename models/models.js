const mongoose=require('mongoose')
const Func=mongoose.Schema
const hookupSchema=new Func(
    
    {name:{type:String,required:true},campus:{type:String,required:true},contact:{type:Number,required:true},msg:{type:String,required:true}}
    
    ,{timestamps:true})
let hookupModel=mongoose.model('hookups',hookupSchema);

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

const tradingRegistrationSchema=new Func({
   
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
    tradingCode:{
        type:String,
        required:true
    }
   
    
},{timestamps:true})
let tradingRegistrationModel=mongoose.model('traders',tradingRegistrationSchema)



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

const bidsSchema=new Func({
   
   
    contact:{
        type:String,
        required:true
    },
     amount:{
    type:Number,
    required:true
    },
tradingId:{
        type:String,
        required:true
    },
    traderName:{
        type:String,
        required:true
    }
   
    
},{timestamps:true})
let bidsModel=mongoose.model('bids',bidsSchema)


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
module.exports.bid=bidsModel
module.exports.requests=requestsModel
module.exports.campus=campusModel

module.exports.comments=commentsModel
module.exports.registration=registrationModel
module.exports.quotes=quotesModel
module.exports.trader=tradingRegistrationModel
module.exports.hookup=hookupModel




 