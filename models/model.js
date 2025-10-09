const mongoose=require('mongoose')
const Func=mongoose.Schema


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
        required:false
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
module.exports.pubArticleModel=mongoose.model('pubarticles',pubArticleSchema)
const monitoredOpinionSchema=new mongoose.Schema({name:String,msg:String,contact:Number,clientId:String},{strict:false})
let monitoredOpinionsModel=mongoose.model('monitoredopinions',monitoredOpinionSchema)
let articleGrantModel=mongoose.model('articlegrants',new mongoose.Schema({name:String},{strict:false}))
const messagerSchema=new mongoose.Schema({contact:Number},{strict:false})
let messagerModel=mongoose.model('messagees',messagerSchema)
module.exports.articleGrantModel=articleGrantModel
module.exports.messagerModel=messagerModel





module.exports.campus=campusModel
module.exports.opinionModel=opinionModel
module.exports.comments=commentsModel
module.exports.registrationModel=mongoose.model('kayasers',new mongoose.Schema({dynamic:String},{strict:false}))


module.exports.pendingRegistration=pendingRegistrationModel
module.exports.quotes=quotesModel


module.exports.monitoredOpinionsModel=monitoredOpinionsModel
module.exports.recommendationModel=mongoose.model('recommendations',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.traderModel=mongoose.model('traders',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.hookupsModel=mongoose.model('hookups',new mongoose.Schema({},{strict:false}))
module.exports.SmsSubscribersModel=mongoose.model('smssubscribers',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.pendingSmsNotificationsModel=mongoose.model('pendingsmsnotifications',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.requestsModel=mongoose.model('requests',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.bidsModel=mongoose.model('bids',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.webPushSubscriptionModel=mongoose.model('webpushsubscriptions',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.permissionTokensModel=mongoose.model('permissiontokens',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.registerModel=mongoose.model('registers',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.articleAssessmentModel=mongoose.model('articleassessments',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.voterOpinionPollModel=mongoose.model('voteropinionpolls',new mongoose.Schema({dynamic:String},{strict:false}))
module.exports.linkModel=mongoose.model('links',new mongoose.Schema({},{strict:false}))
module.exports.audienceModel=mongoose.model('audiences',new mongoose.Schema({},{strict:false}))
module.exports.marqueeNewsModel=mongoose.model('marqueenews',new mongoose.Schema({},{strict:false}))
module.exports.bnplTransactionModel=mongoose.model('bnpltransactions',new mongoose.Schema({},{strict:false}))
module.exports.bnplDailyPromotionsModel=mongoose.model('bnpldailypromotions',new mongoose.Schema({},{strict:false}))
module.exports.foodDeliveryRequestModel=mongoose.model('fooddeliveryrequests',new mongoose.Schema({},{strict:false}))
module.exports.foodDeliveryCommentModel=mongoose.model('fooddeliverycomments',new mongoose.Schema({},{strict:false}))
module.exports.queueMemberModel=mongoose.model('queuemembers',new mongoose.Schema({},{strict:false}))
module.exports.queueToolTellerModel=mongoose.model('queuetooltellers',new mongoose.Schema({},{strict:false}))
module.exports.pendingCreditClientModel=mongoose.model('pendingCreditRequests',new mongoose.Schema({},{strict:false}))
module.exports.controlsModel=mongoose.model('controls',new mongoose.Schema({},{strict:false}))
module.exports.pendingPaymentsModel=mongoose.model('pendingpayments',new mongoose.Schema({},{strict:false}))
module.exports.deliveryAgentModel=mongoose.model('deliveryagents',new mongoose.Schema({},{strict:false}))
module.exports.donationModel=mongoose.model('donations',new mongoose.Schema({},{strict:false}))
module.exports.ticketModel=mongoose.model('tickets',new mongoose.Schema({},{strict:false}))
module.exports.imageModel=mongoose.model('images',new mongoose.Schema({img:{data: Buffer,contentType: String}},{strict:false}))
//module.exports.pubArticleModel=mongoose.model('pubarticles',new mongoose.Schema({dynamic:String},{strict:false}))



 