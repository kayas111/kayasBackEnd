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

const opinionSchema=new mongoose.Schema({id:{type:String,required:true},opinions:{type:[],required:true}},{strict:false})
let opinionModel=mongoose.model('clientopinions',opinionSchema)

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
    },
    registrationPromoBalance:{
        type:Number,
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
   
    
},{timestamps:true,strict:false})
let pendingRegistrationModel=mongoose.model('pendingregistrations',registrationSchema)
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

const groupLinkSchema=new Func({campusId:Number,campus:String,groupName:String,groupAdmin:String,description:String,link:String},{strict:false})
let groupLinkModel=mongoose.model('whatsappgrouplinks',groupLinkSchema)

const pubArticleSchema=new Func({
   
    id:{
        type:Number,
        required:true
    },
    headline1:{
        type:String,
        required:true
    },author:{
        type:String,
        required:true
    },
     contact:{
    type:Number,
    required:true
    },
    body:{
        type:String,
        required:true
    },
    pubArticleOpinions:{
        type:[],
       required:true
        }
        ,
        showCustomerMessage:{
            type:String,
            required:true
        },
        recentCommentOnTop:{
            type:String,
            required:true
        }
        ,
        showCustomerContact:{
            type:String,
            required:true
        }
},{timestamps:true,strict:false})
let pubArticleModel=mongoose.model('pubarticles',pubArticleSchema)
const monitoredOpinionSchema=new mongoose.Schema({name:String,msg:String,contact:Number,clientId:String},{strict:false})
let monitoredOpinionsModel=mongoose.model('monitoredopinions',monitoredOpinionSchema)
let articleGrantModel=mongoose.model('articlegrants',new mongoose.Schema({name:String},{strict:false}))
const messagerSchema=new mongoose.Schema({contact:Number},{strict:false})
let messagerModel=mongoose.model('messagees',messagerSchema)
module.exports.articleGrantModel=articleGrantModel
module.exports.messagerModel=messagerModel
module.exports.pubArticleModel=pubArticleModel
module.exports.groupLinkModel=groupLinkModel
module.exports.recommendation=recommendationModel
module.exports.bid=bidsModel
module.exports.requests=requestsModel
module.exports.campus=campusModel
module.exports.opinionModel=opinionModel
module.exports.comments=commentsModel
module.exports.registration=registrationModel
module.exports.pendingRegistration=pendingRegistrationModel
module.exports.quotes=quotesModel
module.exports.trader=tradingRegistrationModel
module.exports.hookup=hookupModel
module.exports.monitoredOpinionsModel=monitoredOpinionsModel




 