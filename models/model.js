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



module.exports.campus=campusModel
module.exports.opinionModel=opinionModel
module.exports.comments=commentsModel
module.exports.registrationModel=mongoose.model('kayasers',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.pendingRegistration=pendingRegistrationModel
module.exports.quotes=quotesModel

module.exports.hookup=hookupModel
module.exports.monitoredOpinionsModel=monitoredOpinionsModel
module.exports.recommendationModel=mongoose.model('recommendations',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.traderModel=mongoose.model('traders',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.SmsSubscribersModel=mongoose.model('smssubscribers',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.pendingSmsNotificationsModel=mongoose.model('pendingsmsnotifications',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.requestsModel=mongoose.model('requests',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.bidsModel=mongoose.model('bids',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.webPushSubscriptionModel=mongoose.model('webpushsubscriptions',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.permissionTokensModel=mongoose.model('permissiontokens',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.registerModel=mongoose.model('registers',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.articleAssessmentModel=mongoose.model('articleassessments',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.mukOpinionPollsModel=mongoose.model('mukopinionpolls',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.mubsOpinionPollsModel=mongoose.model('mubsopinionpolls',new mongoose.Schema({dynamic:String},{strict:false}))





 