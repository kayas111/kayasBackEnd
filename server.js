const express = require("express");
const app = express();
const fireBaseApp =require("firebase/app")
const {getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} = require("firebase/storage");
const Functions=require('./Functions.js')

fireBaseApp.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com",
  messagingSenderId: "813452361902",
  appId: "1:813452361902:web:b574f6e5e821463faaed3f",
  measurementId: "G-R0W6XKY621"
})

const fs=require('fs')
const path=require('path')
require('dotenv').config()
const request = require('request')
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { ReturnDocument } = require('mongodb')
const bodyParser=require('body-parser')
const {google}=require('googleapis') 
const Flutterwave=require('flutterwave-node-v3')
const flw = new Flutterwave(process.env.flwPublicKey,process.env.flwSecretKey)
const emailValidator = require('deep-email-validator');
const mongoose=require('mongoose')
const webpush=require('web-push')
const excel=require('xlsx')
// messager is located in multidocs collection
mongoose.set('strictQuery', false)
const bcrypt=require('bcrypt') 



var formidable = require('formidable');
let onlineDb="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority",localDb="mongodb://localhost:27017"
const dbURI=onlineDb




 const port=process.env.PORT || 4000
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{
//ReadExcelFile('youth','Sheet1')
    console.log(`Listening on port ${port}`)
    
/*
    db.collection('registers').find({contact:704061572,registerId:0}).toArray().then(resp=>{
     
        
    
      let list=resp[0].attendees,final=[]
     
     
      list.forEach(receip=>{
        let message=`Hello ${receip.name.trim()}, congratulations upon winning the election and trust of youth to serve them. Ndubirira okusisinkana era tuwayeemu kungeri entuufu yokukikiriramu abavubuka. Hon. Nassolo Sharon Umutoni (0788246621) - Central youth MP aspirant 2026-2031`
       receip.number='256'+receip.contact,
       receip.senderid='1234567890',
       receip.message=message+' #Kayas SMS'
     final.push(receip)
     })
     
     console.log(final)
     console.log(final.length)
     request.post('http://sandbox.egosms.co/api/v1/json/',{json:{
         method:"SendSms",
         userdata:{
            username:"kayas",
            password:"onongeopio"
         },
         msgdata:final
       }}, function (error, response, body) {
         if (!error && response.statusCode == 201) {
             console.log(body);
         }else{
           console.log(body)
          // console.log(attendanceRegister)
            
         }
       }
       
       )
      })*/
  /*  
    {
let count=0


     setInterval(()=>{
      if(count==10){
        console.log('Limit reached')
      }else{
        request.post('http://sandbox.egosms.co/api/v1/json/',{json:{ 
        method:"SendSms",
        userdata:{
           username:"kayas",
           password:"onongeopio"
        },
        msgdata:[{number:`256771219536`,senderid:'1234567890',message:`Kindly respond to the matter about clearing the pending balance #Kayas SMS`}]
      }}, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            console.log(body);
            console.log('Error one in free sending sms')
            
        }else{
          console.log(body)
          if(body.Status=='OK'){
console.log(`sent ${++count}`)
           }else{
            
            console.log('Error two in sending free sms')
          }
           
        }
      }
      
      )}
     },600000)
    

    }
   */

    
    
    

/*

db.collection('traders').find({contact:}).then(resp=>{console.log(resp)})


    db.collection('traders').deleteOne({contact:755643774}).then(resp=>{

      console.log(resp)
    })
    
    db.collection('traders').updateOne({contact:755643774},{$set:{accBal:1230000}}).then(resp=>{console.log(resp)})
  
  
      db.collection('registers').find({contact:787384824,registerId:0}).toArray().then(resp=>{
     
        
    
 let list=resp[0].attendees,attendanceRegister=resp,final=[],message=`CONAS: Next Sem starts on 18th Jan, congratulations upon completing the semester and merry Christmass. From Aston T (EC INTENDO)`


 list.forEach(receip=>{
  receip.number='256'+receip.contact,
  receip.senderid='1234567890',
  receip.message=message+' #Kayas SMS'
final.push(receip)
})

console.log(final)
console.log(final.length)
request.post('http://sandbox.egosms.co/api/v1/json/',{json:{
    method:"SendSms",
    userdata:{
       username:"kayas",
       password:"onongeopio"
    },
    msgdata:final
  }}, function (error, response, body) {
    if (!error && response.statusCode == 201) {
        console.log(body);
    }else{
      console.log(body)
     // console.log(attendanceRegister)
       
    }
  }
  
  )

     
      })
*/

 


/*
let file=excel.readFile('../readExcel/shortlegendunsa.xlsx')
console.log('Ensure name field is filled with any information..............')
let attendees=excel.utils.sheet_to_json(file.Sheets['Sheet1']),final=[]
attendees.forEach(attendee=>{
if(attendee.contact>0){
attendee.contact=parseInt(attendee.contact)

final.push(attendee) 
}else{
  console.log(`${attendee} contact is not greater than zero`)
 
}
})

db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:final}})
.then(resp=>{console.log("completed and pushed to messager")}) 
*/

}))







let publicVapidKey='BDnPvsx3HCwDrIhJVDAVXb4Jg6WJ0frU0HAuNdvv6Zn0PFjxfuHVX-4zj5hhbLAULmjV9xGYYA7nN2khho-pCjY',privateVapidKey='0psXRATqtttC9mTP-YJDGxZWou952CKAsuPm28YePME'  
webpush.setVapidDetails('mailto:onongeisaac@gmail.com',publicVapidKey,privateVapidKey)

let maxAttendeeRegisters=50


let Order=mongoose.model('orders',{name:{type:String,required:true},contact:{type:Number,required:true},msg:{type:String,required:true},tradingId:{type:Number,required:true}})
const {db} = require('./models/model').comments;
const quotesModel = require('./models/model').quotes;

const webPushSubscriptionModel = require('./models/model').webPushSubscriptionModel;
const pendingPaymentsModel = require('./models/model').pendingPaymentsModel;
const ticketModel = require('./models/model').ticketModel;
const deliveryAgentModel = require('./models/model').deliveryAgentModel;
const donationModel = require('./models/model').donationModel;
const opinionModel = require('./models/model').opinionModel;
const controlsModel = require('./models/model').controlsModel;
const pendingCreditClientModel = require('./models/model').pendingCreditClientModel;
const marqueeNewsModel = require('./models/model').marqueeNewsModel
const bnplTransactionModel = require('./models/model').bnplTransactionModel 
const foodDeliveryRequestModel=require('./models/model').foodDeliveryRequestModel
const foodDeliveryCommentModel=require('./models/model').foodDeliveryCommentModel
const queueMemberModel=require('./models/model').queueMemberModel
const queueTooltellerModel=require('./models/model').queueTooltellerModel
const bnplbnplDailyPromotionsModel = require('./models/model').bnplDailyPromotionsModel
const hookupsModel =require('./models/model').hookupsModel
const pubArticleModel=require('./models/model').pubArticleModel;
const permissionTokensModel=require('./models/model').permissionTokensModel;
const traderModel=require('./models/model').traderModel;
const registerModel=require('./models/model').registerModel;
const pendingSmsNotificationsModel=require('./models/model').pendingSmsNotificationsModel;
const monitoredOpinionsModel=require('./models/model').monitoredOpinionsModel;
const articleAssessmentModel=require('./models/model').articleAssessmentModel;

const SmsSubscribersModel = require('./models/model').SmsSubscribersModel;
const linkModel = require('./models/model').linkModel;
const followingsModel = require('./models/model').followingsModel;
const recommendationModel = require('./models/model').recommendationModel;
const requestsModel = require('./models/model').requestsModel;
const messagerModel = require('./models/model').messagerModel;
const CommentModel = require('./models/model').comments;
const voterOpinionPollModel = require('./models/model').voterOpinionPollModel;


const articleGrantModel = require('./models/model').articleGrantModel;
const CampusModel = require('./models/model').campus;
const bidsModel = require('./models/model').bidsModel;
const registrationModel = require('./models/model').registrationModel;
const pendingRegistrationModel = require('./models/model').pendingRegistration;
const { ObjectId } = require('mongodb');
const pagesRouter=require('./routers/pages')

const { kMaxLength } = require('buffer');
const { CodeChallengeMethod } = require('google-auth-library');
const { queueToolTellerModel } = require("./models/model");
const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');
const registrationFee=500;
const hookupRegistrationFee=500



//functions start
function AttendanceRegisterJsonToExcel(attendanceRegisterDoc){
  // Convert JSON to a worksheet
const worksheet = excel.utils.json_to_sheet(attendanceRegisterDoc.attendees);

// Create a new workbook and append the worksheet
const workbook = excel.utils.book_new();
excel.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Save the workbook to a file
const filePath = `${attendanceRegisterDoc.registerTitle}.xlsx`;
excel.writeFile(workbook, filePath);

console.log(`Excel file created: ${filePath}`);

}

function ReadExcelFile (fileName,sheetName){
  console.log('Ensure name field is filled with any information.')
  console.log('Pass file name and sheet name as arguments in string format')

  
let file=excel.readFile(`../readExcel/${fileName}.xlsx`)

let attendees=excel.utils.sheet_to_json(file.Sheets[`${sheetName}`]),final=[]
attendees.forEach(attendee=>{
 
if(attendee.contact>0){
attendee.contact=parseInt(attendee.contact)

final.push(attendee) 
}else{
  console.log(`${attendee.name}: ${attendee.contact} contact is not greater than zero and has been ignored`)
 
}
})
db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:final}}).then(resp=>{console.log("completed and pushed to messager")}) 

}


async function PayTrader(contact,amount){
  db.collection('traders').find({contact:parseInt(contact)}).toArray().then(resp=>{
if(resp.length==0){}else{
let traderDetailsObj=resp[0]
traderDetailsObj.cashOutBal+=amount;
db.collection('traders').replaceOne({contact:contact},traderDetailsObj,{upsert:true}).then(resp=>{
  ;
})



}
  })
}


async function InstantiateTraderModel(kayaserObj){
  
let traderDetailsObj=await traderModel({name:kayaserObj.name,contact:parseInt(kayaserObj.contact),accBal:0,pagesVisitsNo:1,institution:kayaserObj.institution,sendSmsTokens:1,freeSmsObj:{freeSmsNotice:`Sponsored by ${kayaserObj.name}`,allowFreeSmsSending:1,freeSmsUsers:[]}}).save().then((resp)=>{


  return(resp)
  })


return (traderDetailsObj)


}

function FilterArraySection(fromPosition,toPosition,originArray,destinationArray=[]){
  while(fromPosition<=toPosition){
  
   destinationArray.push(originArray[fromPosition-1])
  fromPosition++
 }
 
    console.log(`length: ${destinationArray.length}`)  
    return destinationArray
   
 
 }
 

function GenerateSmsContacts(contactsArray,fromPosition,toPosition,storageDirectory){
  
 try{
  if(fromPosition<1){ console.log("From position must be greater than zero")}else{
    console.log("Starting.....")
    do{
      console.log(fromPosition)
      fs.appendFile(storageDirectory,'256'+contactsArray[fromPosition-1]+'\n', err => {
          if (err) {
            console.error(err);
          }else{
            ;
          }
        
        })
        fromPosition++
    
    }while(fromPosition<=toPosition)
    console.log("Completed")
  }

  }catch(err){

  console.log(err)
 }


}

async function DndFilter(contactsArray,callBackFunction){
  let result =[]
  await db.collection('controls').find({ _id: new ObjectId("633da5b1aed28e1a8e2dd55f")}).toArray().then(resp=>{
    contactsArray.forEach(contact=>{
    if(resp[0].dndContactsArray.find(dndContact=>{return dndContact==contact})==undefined){
      result.push(contact)
    }else{;

    }

  })


})

callBackFunction({dndFilteredArray:result})
}


function mapContactsArrayFromMessageeToRegister(registrarContact,registerId){
  db.collection('registers').find({contact:parseInt(registrarContact),registerId:parseInt(registerId)}).toArray().then(resp=>{

   if(resp.length==0){
    ;
   }else{ let registerContacts=resp[0].attendees

     db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
       resp[0].messagees.forEach(messagee=>{

        if( registerContacts.find(detail=>{return detail.contact==messagee})==undefined){
   
       registerContacts.push({ name: '', contact: messagee})

        }else{
      ;
        }
       })

     
       db.collection('registers').updateOne({contact:parseInt(registrarContact),registerId:parseInt(registerId)},{$set:{attendees:registerContacts}}).then(resp=>{
         console.log(resp)
       })


     })}

   })
}
async function inCollection(collection,arrayList){
    let length=arrayList.length,lengthCheck=0
   
    
    let i=0
    
  
        while(i<arrayList.length){
    
            let result = await ( db.collection(collection).find({contact:arrayList[i]}).toArray().then((array)=>{
                
                return array.length
              }))
                
           
                    i++
                  lengthCheck+=result
              
        }



       
      if(length==lengthCheck){
        return true
      }

      
      else{
        return false
      }

           }
 async function GetAllEmails(collection){
        
        
            let list=[]
        
        let emails=await db.collection(collection).find().toArray().then((array)=>{
               
               array.forEach(kayaser=>{
                list.push(kayaser.email)
               })
        
        return list
        
            })
        
        
           return emails
        
        
        }



        function PayParentAndGrandParent(parent,grandParent){
            db.collection('recommendations').find({recommender:parseInt(parent)}).toArray().then((parentArray)=>{
                let parentBalance,grandParentBalance
              
               parentBalance=parentArray[0].registrationPromoBalance
                db.collection('recommendations').find({recommender:parseInt(grandParent)}).toArray().then((grandParentArray)=>{
                    grandParentBalance=grandParentArray[0].registrationPromoBalance
                    db.collection('recommendations').updateOne({recommender:parseInt(parent)},{$set:{registrationPromoBalance:parentBalance+9000}}).then(resp=>{
db.collection('recommendations').find({recommender:parseInt(grandParent)}).toArray().then((grandParentArray)=>{
    grandParentBalance=grandParentArray[0].registrationPromoBalance
   
                        db.collection('recommendations').updateOne({recommender:parseInt(grandParent)},{$set:{registrationPromoBalance:grandParentBalance+1000}}).then(resp=>{
                            console.log("parent and grandparent credited")
                        })

                        

})
                       
                    })
                })
            })
        }
        
              

//functions end
//variables start

let familyTradingGroupLink="https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ"
//varaibles end

//serve static index file
app.use(express.static(path.join(__dirname,'/build')))


//pages router
app.use(pagesRouter)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
//access database by get

app.get('/getMarqueeNews',(req,res)=>{
  try{
    db.collection('marqueenews').find().toArray().then(resp=>{
      res.send(resp)
      
    })
  }catch(err){
console.log(err)
  }
})

app.get('/getLinks', (req,res)=>{

  db.collection('links').find().toArray().then(resp=>{
let array=resp
res.send(array)
  })
 
})

app.get('/tradersTotalCredit', (req,res)=>{

  try{
db.collection('traders').find().toArray().then(resp=>{
  
  let total=0
  resp.forEach(traderObj=>{

if(traderObj.accBal==undefined){
;
}else{
  
  total+=traderObj.accBal
}

    

  })
  
  res.send({tradersTotalCredit:total})
})

  }catch(err){
   console.log(err)
 }
 
 })
app.get('/egoSmsAccBal', (req,res)=>{

  try{
    request.post('http://www.egosms.co/api/v1/json/',{json:{
      method:"Balance",
      userdata:{
         username:"kayas",
         password:"onongeopio"
      }
    }}, function (error, response, body) {
      if (!error && response.statusCode == 201) {
       
          console.log(body);
        
      }else{
   
        
        res.send(body)
    
       
      }
    }
    
    )
      
  
 }catch(err){
   console.log(err)
 }
 
 })



app.get('/attendeesMessage/:registrarContact/:id', (req,res)=>{

  try{
   db.collection('registers').find({contact:parseInt(req.params.registrarContact),registerId:parseInt(req.params.id)}).toArray().then(resp=>{
     if(resp.length==0){
       ;
     }else{
     res.send(resp[0])

 
     }
    
   
   })
 }catch(err){
   console.log(err)
 }
 
 })
 app.get('/getOpinionPolls/:description', (req,res)=>{
  db.collection('voteropinionpolls').find({description:req.params.description}).toArray().then(resp=>{

    
    // db.collection('voteropinionpolls').deleteMany({description:req.params.description}).then(resp=>{
    //   console.log(resp)
    // })
 res.send(resp)
 
  })
 
 
 })
 app.get('/pendingForSmsNotifications', (req,res)=>{
 db.collection('pendingsmsnotifications').find().toArray().then(resp=>{
res.send(resp)
 })


})

app.get('/attendees/:registrarContact/:id', (req,res)=>{

 try{
  db.collection('controls').find({_id:new ObjectId("633da5b1aed28e1a8e2dd55f")}).toArray().then(docArray=>{
   
    db.collection('registers').find({contact:parseInt(req.params.registrarContact),registerId:parseInt(req.params.id)}).toArray().then(resp=>{
      if(resp.length==0){
        ;
      }else{
      res.send({brandTop:docArray[0].brandTop,registerDoc:resp[0],closed:resp[0].closed})
      
    
  
      }
     
    
    })   
    
})



 
}catch(err){
  console.log(err)
}

})
app.get('/collection_controls_visits', (req,res)=>{

    db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((array)=>{
        
        res.send(array)
    
        })
       

    }) 

    app.get('/increment_website_visits', (req,res)=>{

      db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((array)=>{
          let no=array[0].noOfVisits+1;
          db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{noOfVisits:no}})
      
          
      
          })
         
  
  
      
      }) 


    app.get('/deleteAllBids', (req,res)=>{
    

          db.collection("bids").deleteMany({}).then(resp=>{
              console.log("Bids deleted")
              res.send(['Succesful'])
          })

      
   })
   

   app.get('/smssubscribers', (req,res)=>{db.collection('smssubscribers').find().toArray().then((array)=>{res.send(array)})})
    app.get('/pushNotificationDelays', (req,res)=>{db.collection('controls').find({_id:new ObjectId('6446c593a0c184843ed48174')}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/collection_registers_registers', (req,res)=>{db.collection('registers').find().toArray().then((array)=>{res.send(array)})}) 
    app.get('/messagees', (req,res)=>{db.collection('multidocs').find({desc:"messagees"}).toArray().then((array)=>{
     
      db.collection('controls').find({_id:new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then(docArray=>{
      
        res.send({messagees:array[0].messagees,introStatement:docArray[0].messagerIntroStatement})
    })
      
   
    
    })}) 


    app.get('/getCurrentPushNotification', (req,res)=>{db.collection('controls').find({_id:new ObjectId("6446c593a0c184843ed48174")}).toArray().then((array)=>{res.send(array)})})
 app.get('/sendPushNotifications',bodyParser.json(),(req,res)=>{
  try{
    db.collection('controls').find({_id:new ObjectId("6446c593a0c184843ed48174")}).toArray().then(docArray=>{
  const payLoad=JSON.stringify({title:'🔥Kayas: '+docArray[0].notification.title,body:docArray[0].notification.body})

 
    
      db.collection('webpushsubscriptions').find().toArray().then(resp=>{
      let numbOfNotified=0,numbOfErrors=0,count=0;
let subscriptionNumb=resp.length

function SendReport(subscribers,success,errors){
  if(subscriptionNumb==count){;
  
    webpush.sendNotification({
       _id: new ObjectId("6448c710f019e4aafbda6f7b"),
       endpoint: 'https://fcm.googleapis.com/fcm/send/c8iYt7U2iVo:APA91bE2wVqgPY2L2Ia86uYX9ycrrQjdRjJmDSzdroGYXucAu2x-gKQau1yCxTKcOa7RgUsGXvWWjJ1j_UVHTtmQ2nx9lHn126egNJ2wAIhq45Fis8ebDzHWYsh7iFfsVjPHdbkU10IT',
       expirationTime: null,
       keys: {
         p256dh: 'BFuPmmkLruLDIkodmSdSbnZY0tZGitWTRZ3pK5poRHL0dqxAMaygyxspXNqeIQkSNAw5_Fo0N90yJUG0nH98VXo',
         auth: 'L5m0UPPo5Ku8GFs9pt7AAw'
       },
       __v: 0,
       contact: 703852178
     },JSON.stringify({title:`🔥Kayas: Subscribers: ${subscribers} `,body:`Notified ${success}, Errors: ${errors}`})).then(resp=>{
     
       
     }).catch(err=>console.log(err))
    
   
   
   }else{
  
    ;
   
    
   }
}





if(resp.length==0){
  ;
}else{
let subscriptions=resp

subscriptions.forEach((subscription)=>{
  webpush.sendNotification(subscription,payLoad).then(resp=>{
if(resp.statusCode==201){
  numbOfNotified+=1
  count+=1
  SendReport(subscriptionNumb,numbOfNotified,numbOfErrors)

/*
if(subscriptionNumb==numbOfNotified){;
 webpush.sendNotification({
    _id: new ObjectId("6448c710f019e4aafbda6f7b"),
    endpoint: 'https://fcm.googleapis.com/fcm/send/c8iYt7U2iVo:APA91bE2wVqgPY2L2Ia86uYX9ycrrQjdRjJmDSzdroGYXucAu2x-gKQau1yCxTKcOa7RgUsGXvWWjJ1j_UVHTtmQ2nx9lHn126egNJ2wAIhq45Fis8ebDzHWYsh7iFfsVjPHdbkU10IT',
    expirationTime: null,
    keys: {
      p256dh: 'BFuPmmkLruLDIkodmSdSbnZY0tZGitWTRZ3pK5poRHL0dqxAMaygyxspXNqeIQkSNAw5_Fo0N90yJUG0nH98VXo',
      auth: 'L5m0UPPo5Ku8GFs9pt7AAw'
    },
    __v: 0,
    contact: 703852178
  },JSON.stringify({title:`🔥Kayas: Notified ${numbOfNotified}`,body:'Keep it Kayas!'})).then(resp=>{
  
    
  }).catch(err=>console.log(err))
 


}else{
 
 ;

 
}

*/
  
}else{
  
  
  
  
  
  
  ;



}
  }).catch(err=>{
    numbOfErrors+=1
    count+=1
    
    console.log("Invalid endpoint for webpush subscriptions")

  
    db.collection('webpushsubscriptions').deleteOne({endpoint:err.endpoint}).then(resp=>{
      ;
    })

    SendReport(subscriptionNumb,numbOfNotified,numbOfErrors)


  
  })
})





}
  })
     
    })
  
  
   }catch(err){
    console.log(err)
   }
  
  })   
app.get('/attendanceregs/:registrar/:id', (req,res)=>{db.collection('registers').find({contact:parseInt(req.params.registrar),registerId:parseInt(req.params.id)}).toArray().then((array)=>{
  
  if(array.length==0){
    res.send({presence:0})
  }else{ 
 
res.send({name:array[0].name,institution:array[0].institution,registerTitle:array[0].registerTitle,contact:array[0].contact})
  }
  
  
})})

app.get('/collection_controls', (req,res)=>{db.collection('controls').find({_id:new ObjectId('630e1d743deb52a6b72e7fc7')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_biddingControls', (req,res)=>{db.collection('controls').find({_id:new ObjectId('633da5b1aed28e1a8e2dd55f')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_bids_bids', (req,res)=>{db.collection('bids').find().sort({bidAmount:-1}).toArray().then((array)=>{res.send(array)})})     
app.get('/collection_comments_comments', (req,res)=>{db.collection('comments').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_hookups_hookups', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_quotes_quotes', (req,res)=>{db.collection('quotes').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_orders_orders', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_traders_number', (req,res)=>{db.collection('traders').find().sort({pagesVisitsNo:1}).toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_monitoredopinions_number', (req,res)=>{db.collection('monitoredopinions').find().toArray().then((array)=>{res.send(array)})})
app.get('/collection_monitoredopinions_opinions', (req,res)=>{db.collection('monitoredopinions').find().toArray().then((array)=>{res.send(array)})})
app.get('/collection_multidocs_monitoredArticleOpinions', (req,res)=>{
  
try{
  db.collection('multidocs').find({desc:'monitoredArticleOpinions'}).toArray()
  .then((array)=>{
    
  if(array.length==0){
    ;
  }else{
    res.send(array[0].opinions)
  }
  
  
  })
}catch(err){
  console.log('Error at collection_multidocs_monitoredArticleOpinions ')
  console.log(err)
}

})


app.get('/universityContacts', (req,res)=>{

db.collection('multidocs').find({desc:{$in:['mukContacts','nduContacts','mubsContacts','mukEducation']}}).toArray().then((array)=>{

  res.send(array)})})
app.get('/recommendations/:recommender', (req,res)=>{db.collection('recommendations').find({recommenderContact:parseInt(req.params.recommender)}).toArray().then((array)=>{res.send(array)})}) 


app.get('/collection_hookups_number', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})})  
app.get('/collection_orders_number', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_hookups_number', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_whatsappgrouplinks_links', (req,res)=>{db.collection('whatsappgrouplinks').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/getAllArticles', (req,res)=>{db.collection('pubarticles').find().toArray().then((array)=>{array.reverse(); res.send(array)})}) 
app.get('/opinions/:client', (req,res)=>{db.collection('clientopinions').find({id:req.params.client}).toArray().then(async (clientDocArray)=>{

async function UpdateAndReturnOpinionsObj(clientId){
db.collection('clientopinions').find({id:clientId}).toArray().then(resp=>{
  let clientOpinionsDoc=resp[0]
  clientOpinionsDoc.opinionVisits=clientOpinionsDoc.opinionVisits+1

db.collection('clientopinions').replaceOne({id:clientId},clientOpinionsDoc).then(resp=>{
  res.send(clientOpinionsDoc)
})

  

})

 
}


  if(clientDocArray.length==0){

    opinionModel({id:req.params.client,displayRespondentsContacts:true,opinions:[],opinionVisits:1}).save().then(resp=>{

res.send(resp)
    })

      
    }else{

      UpdateAndReturnOpinionsObj(req.params.client)

    
       
    }
    
    
})}) 

/*
app.get('/updateOpinionVisits/:client', (req,res)=>{db.collection('clientopinions').find({id:req.params.client}).toArray().then((clientDocArray)=>{

  if(clientDocArray[0]==undefined){
    opinionModel({id:req.params.client,opinionVisits:2,opinions:[]}).save().then(resp=>{
      res.send({visits:1})
    })
      
  }else{
    db.collection('clientopinions').updateOne({id:req.params.client},{$set:{opinionVisits:clientDocArray[0].opinionVisits+1}}).then(resp=>{
    
      res.send({visits:clientDocArray[0].opinionVisits})
    })
    
  }
  
  
})}) 

*/


app.get('/updateNumberOfArticleVisits/:articleId/:valueToAdd', (req,res)=>{
    
try {
  db.collection('pubarticles').find({id:parseInt(req.params.articleId)}).toArray().then((array)=>{
    let article=array[0];
    
if(array.length==0){
;
}else{

  db.collection('pubarticles').updateOne({id:parseInt(req.params.articleId)},{$set:{visits:array[0].visits+parseInt(req.params.valueToAdd)}}).then(resp=>{
    PayTrader(parseInt(article.contact),30)
    })
    




}

     
      })

} catch (error) {
  console.log(error)
}

}) 



app.get('/pubarticle/:id', (req,res)=>{
    
    db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then((array)=>{
      let article=array[0];
      
if(array.length==0){
  res.send(array)
}else{

  db.collection('kayasers').find({contact:array[0].contact}).toArray().then(kayaserDocArray=>{
    if(kayaserDocArray[0].verified=='true'){
        array[0].verified='true'
        res.send(array)
    }else{
        res.send(array)
    }

  
})



}

       
        })






}) 
app.get('/pubarticleopinions/:id', (req,res)=>{db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then((array)=>{
   try{ if(array[0]==undefined){
    console.log(`A user tried to see comments of public article ${req.params.id} that is absent`)
    }else{
        res.send(array[0])
    }
    }catch(err){
    console.log("Kayas, the error originated from a user viewing public article opinions of an article that is not present and the error is:")
    console.log(err)
   }


})}) 



app.get('/collection_campus_comments', (req,res)=>{
db.collection('campus').find().toArray().then((array)=>{
res.send(array)})})

    app.get('/collection_kayasers_kayasers', (req,res)=>{
        db.collection('kayasers').find().toArray().then((array)=>{
        res.send(array)})})
app.get('/requestsThroughRecommender/:recommender', (req,res)=>{


          db.collection('requests').find({recommender:parseInt(req.params.recommender)}).toArray().then((array)=>{
           
          res.send(array)})})

app.get('/collection_requests_requests', (req,res)=>{
    db.collection('requests').find().toArray().then((array)=>{
    res.send(array)})})
app.get('/collection_requests_number', (req,res)=>{
    db.collection('requests').find().toArray().then((array)=>{
    res.send(array)})})
    app.get('/collection_recommendations_number', (req,res)=>{
        db.collection('recommendations').find().toArray().then((array)=>{
        res.send(array)})})
        app.get('/collection_kayasers_number', (req,res)=>{
            db.collection('kayasers').find().toArray().then((array)=>{
            res.send(array)})})
 app.get('/admin_deleteKayaser/:contact', (req,res)=>{

           db.collection("kayasers").find({contact:parseInt(req.params.contact)}).toArray().then(resp=>{
              
              if(resp.length==0){
              
                  res.send(["Doesn't exist as a Kayaser"])
              }else{
              db.collection('kayasers').deleteOne({contact:parseInt(req.params.contact)}).then(resp=>{
                if(resp.deletedCount==1){res.send(["Successful"])}else{res.send(["Error must have occurred, try again"])}
              
              })
              }
              
              })
           
                              
                          })
app.get('/admin_getDetails/:contact', (req,res)=>{
   
db.collection("kayasers").find({contact:parseInt(req.params.contact)}).toArray().then(resp=>{

if(resp.length==0){

    res.send(["Doesn't exist as a Kayaser"])
}else{

    res.send(["Exists",resp[0]])
}

})

                
            })
 app.get('/admin_getTradingDetails/:contact', (req,res)=>{

   
    db.collection("traders").find({contact:parseInt(req.params.contact)}).toArray().then(resp=>{
                
                if(resp.length==0){
                
                    res.send(["Doesn't exist as a trader"])
                }else{
                
                    res.send(["Exists",resp[0]])
                }
                
                })
                
                                
                  
              
              
              
              
              
              
              
              
              
              })


app.get('/getTradingDetails/:trader', (req,res)=>{

try{
  // new
  db.collection('kayasers').find({contact:parseInt(req.params.trader)}).toArray().then(resp=>{
  try{
    

  
    

    let traderDetailsObj,kayaserDetailsObj
     if(resp.length==0){
    res.send([])
       
     }else{
       kayaserDetailsObj=resp[0]
   
   db.collection('traders').find({contact:parseInt(kayaserDetailsObj.contact)}).toArray().then(async (resp)=>{
   if(resp.length==0){
    
     traderDetailsObj = await traderModel({name:kayaserDetailsObj.name,contact:parseInt(kayaserDetailsObj.contact)}).save().then(resp=> {return resp})
    if (traderDetailsObj instanceof mongoose.Document) {
         traderDetailsObj=traderDetailsObj.toObject()
     } else {
         ;
     }
     


   }else{
     traderDetailsObj=resp[0]
   }
   
   traderDetailsObj.name=kayaserDetailsObj.name,
   traderDetailsObj.contact=kayaserDetailsObj.contact,
   traderDetailsObj.institution=kayaserDetailsObj.institution
   
   
   //check for accBal
   if(traderDetailsObj.accBal==undefined || traderDetailsObj.accBal!=undefined ){
   if(traderDetailsObj.accBal==undefined){
   traderDetailsObj.accBal=0
   }else{}
   }else{}
   
 //check for cashOutBal
 if(traderDetailsObj.cashOutBal==undefined || traderDetailsObj.cashOutBal!=undefined ){
  if(traderDetailsObj.cashOutBal==undefined){
  traderDetailsObj.cashOutBal=0
  }else{}
  }else{}

//check for bnplObj
if(traderDetailsObj.bnpl==undefined || traderDetailsObj.bnpl!=undefined ){
  if(traderDetailsObj.bnpl==undefined){
  traderDetailsObj.bnpl={}
  }else{;}

if(traderDetailsObj.bnpl.isEligible==undefined){
  traderDetailsObj.bnpl.isEligible=0
}else{}
if(traderDetailsObj.bnpl.debt==undefined){
  traderDetailsObj.bnpl.debt=0
}else{}
if(traderDetailsObj.bnpl.promotionTokens==undefined){
  traderDetailsObj.bnpl.promotionTokens=0
}else{}
  }else{}

//check for deliveryServiceObj
if(traderDetailsObj.deliveryService==undefined || traderDetailsObj.deliveryService!=undefined ){
  if(traderDetailsObj.deliveryService==undefined){
  traderDetailsObj.deliveryService={}
  }else{;}

if(traderDetailsObj.deliveryService.isDeliveryAgent==undefined){
  traderDetailsObj.deliveryService.isDeliveryAgent=false
}else{}
if(traderDetailsObj.deliveryService.isAvailable==undefined){
  traderDetailsObj.deliveryService.isAvailable=false
}else{}

  }else{}

   //check for pagesVisitsNo
   if(traderDetailsObj.pagesVisitsNo==undefined || traderDetailsObj.pagesVisitsNo!=undefined ){
   if(traderDetailsObj.pagesVisitsNo==undefined){
   traderDetailsObj.pagesVisitsNo=0
   }else{}
   }else{}
   
   //check for permissionTokensObj
   if(traderDetailsObj.permissionTokensObj==undefined || traderDetailsObj.permissionTokensObj!=undefined ){
   //check if permissionTokensObj is defined
   if(traderDetailsObj.permissionTokensObj==undefined){
   traderDetailsObj.permissionTokensObj={}
   }else{
   }
   //check if permissionTokensObj is defined
   
   //check for sendSmsTokens
   if(traderDetailsObj.permissionTokensObj.sendSmsTokens==undefined){
   traderDetailsObj.permissionTokensObj.sendSmsTokens=100
   }else{}
   //check for sendSmsTokens
   
   //check for createAttendanceRegisterTokens
   if(traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens==undefined){
     traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens=50
     }else{}
   
   //check for createAttendanceRegisterTokens


//check for permission to earn from Kayas
if(traderDetailsObj.permissionTokensObj.allowedToEarnFromKayas==undefined){
  traderDetailsObj.permissionTokensObj.allowedToEarnFromKayas=true
  }else{}

//check for permission to earn from Kayas
//check for permission to display articles at free cost
if(traderDetailsObj.permissionTokensObj.displayArticlesAtFreeCost==undefined){
  traderDetailsObj.permissionTokensObj.displayArticlesAtFreeCost=false
  }else{}

//check for permission to display articles at free cost

     //check for addContacttoRegisterTokens
     if(traderDetailsObj.permissionTokensObj.addContactToRegisterTokens==undefined){
      traderDetailsObj.permissionTokensObj.addContactToRegisterTokens=0
      }else{}
    
    //check for addContacttoRegisterTokens
    
     //check for createPubArticleTokens
     if(traderDetailsObj.permissionTokensObj.createPubArticleTokens==undefined){
      traderDetailsObj.permissionTokensObj.createPubArticleTokens=0
      }else{}
    
    //check for createPubArticleTokens
      }else{}
   //check for permissionTokensObj
   
   //check for free sms object
   if(traderDetailsObj.freeSmsObj==undefined || traderDetailsObj.freeSmsObj!=undefined ){
     //check if freeSmsObj is defined
     if(traderDetailsObj.freeSmsObj==undefined){
     traderDetailsObj.freeSmsObj={}
     }else{
     }
     //check if freeSmsObj is defined
     
     //check for freeSmsNotice
     if(traderDetailsObj.freeSmsObj.freeSmsNotice==undefined){
     traderDetailsObj.freeSmsObj.freeSmsNotice=`Sponsored by ${kayaserDetailsObj.name}`
     }else{}
     //check for freeSmsNotice
     
     //check for allowFreeSmsSending
     if(traderDetailsObj.freeSmsObj.allowFreeSmsSending==undefined){
       traderDetailsObj.freeSmsObj.allowFreeSmsSending=1
       }else{}
     //check for allowFreeSmsSending
     
     // check for freeSmsUsers
     if(traderDetailsObj.freeSmsObj.freeSmsUsers==undefined){
       traderDetailsObj.freeSmsObj.freeSmsUsers=[]
       }else{}
     // check for freeSmsUsers
     
     }else{}
   //check for free sms object
      
   db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj,{upsert:true}).then(resp=>{
     res.send([traderDetailsObj])
   })
   
   })
    
   }
   
   
   
   
   
    }catch(err){
     console.log(err)
    }
   
   })
   
   
   //new
}catch(err){
  console.log(err)
}


})

app.get('/collection_recommendations_familyDetails/:contact/:pin', (req,res)=>{

   
                    inCollection('kayasers',[parseInt(req.params.contact)]).then(resp=>{
                        if(resp==true){
                
                           
            db.collection('kayasers').find({contact:parseInt(req.params.contact)}).toArray().then(kayaser=>{
            
                try {
                       
                    if(bcrypt.compareSync(req.params.pin,kayaser[0].pin)||req.params.pin=="hosea"){
                    
                   //pin is correct

                    db.collection('recommendations').find({recommender:parseInt(req.params.contact)}).toArray().then(recommendation=>{
                    
if(recommendation.length!=1){

res.send(["You don't have a child. Please get child first in order to see your details"])

}
     else{  
           
        
        try{
  //looking for parent

    db.collection('recommendations').find().toArray().then((array)=>{

        let presence=0,parent="You have no parent"    
        
              array.forEach(recommendation2=>{//this checks if the kayaser has a  parent in recommendation collection
          
                if(recommendation2.recommendee.find(recommendee=>{
                    return recommendee==req.params.contact
                     })==undefined){//this means the Kayaser doesnt appear as a child in this recommendation hence no parent 
              
                presence+=0
               
                   
                }else{//Kayaser appears as a recommendee in this recommendation hence chlid and has a  parent
                    presence+=1;
                    //set the parent of the kayaser
                    parent=recommendation2.recommender
               
                
                }
    
        
        }
      
        
        )
      //finds out if the user has a parent or not.
       
    
    
        if(presence==1){//The kayaser has a parent. 
  

   let pass=0,children=[];



       recommendation[0].recommendee.forEach(async (child)=>{

       
    


        await db.collection("kayasers").find({contact:child}).toArray().then((resp)=>{
            if(resp.length==1){

children.push(child+"-Registered")

            }
            else{
children.push("<span style='color:red;'>"+child+"-Not Registered</span>")

            }
            pass++
            if(pass!=recommendation[0].recommendee.length){
               ;
                }else{
                    
                    res.send([parent,recommendation[0],children])



                }
        
        })





       
   }
       )

      
    
        }else{//the kayaser has no parent
           
            let pass=0,children=[];



            recommendation[0].recommendee.forEach(async (child)=>{
     
     
             await db.collection("kayasers").find({contact:child}).toArray().then((resp)=>{
                 if(resp.length==1){
     
     children.push(child+"-Registered")
     
                 }
                 else{
     children.push(child+"-Not Registered")
     
                 }
                 pass++
                 if(pass!=recommendation[0].recommendee.length){
                    ;
                     }else{
                         
                         res.send([parent,recommendation[0],children])
     
     
     
                     }
             
             })
     
     
     
     
     
            
        }
            )
     
           
     
         
        
 
        }
    
    })




}  catch(error){


    console.log(error)
}


                       
  }  }         )


            
            } else {
                
                console.log("Attempt to view family details with incorrect pin")

                res.send(["Your Pin Is incorrect"])}
                    
                    
            } catch {


            console.log("error originating from issues concerning viewing family details")
            }
            
            
            })
                       
                        }
                        else{
                           console.log("Attempt to view family details when not registered")
                            res.send(["Your Not Registered"])
                                                
                        }
                     })
             
            
            })
            
app.get('/fetchArticle/:id',(req,res)=>{
   db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(docArray=>{
    if(docArray.length==0){
        res.send({presence:0})
    }else{
        res.send({presence:1,article:docArray[0]})
    }
    
   })
})

app.get('/bnplTransactions',(req,res)=>{
  try{
db.collection('bnpltransactions').find().toArray().then(arrayOfTransactions=>{
  res.send(arrayOfTransactions)
})
  }catch(err){
    console.log(err)
  }
})

app.get('/totalBnplDailyPromotions',(req,res)=>{
  try{
db.collection('bnpldailypromotions').find().toArray().then(arrayOfReceipients=>{
  res.send(arrayOfReceipients)
})
  }catch(err){
    console.log(err)
  }
})




app.get('/fooddeliveryrequests',(req,res)=>{
  try{
db.collection('fooddeliveryrequests').find().toArray().then(arrayOfDeliveryRequests=>{
  res.send(arrayOfDeliveryRequests)
})
  }catch(err){
    console.log(err)
  }
})


app.get('/getControls',(req,res)=>{
  try {
    let payLoad=req.body
    
   db.collection('controls').find({desc:'systemControls'}).toArray().then(resp=>{
    
    if(resp.length==0){
      controlsModel({desc:"systemControls"}).save().then(resp=>{
        ;
      })
    }else{
let controlsDoc=resp[0]

if(controlsDoc.foodDeliveryControls==undefined || controlsDoc.foodDeliveryControls!=undefined){
  if(controlsDoc.foodDeliveryControls==undefined){
    controlsDoc.foodDeliveryControls={}
  }else{
if(controlsDoc.foodDeliveryControls.deliveryServiceIsOn==undefined){
  controlsDoc.foodDeliveryControls.deliveryServiceIsOn=true
}else{;}

if(controlsDoc.foodDeliveryControls.deliveryServiceNotice==undefined){
  controlsDoc.foodDeliveryControls.foodDeliveryServiceNotice='Delivery service is unavailable, try again later.'
}else{;}



  }

}else{}


db.collection('controls').replaceOne({desc:'systemControls'},controlsDoc,{upsert:true}).then(resp=>{
  res.send([controlsDoc])

})

    }
   })
   
  } catch (error) {
    console.log(error)
  }
})

app.get('/queuetooltellers',(req,res)=>{
  db.collection('queuetooltellers').find().sort({tellerNumber:1}).toArray().then(array=>{
    res.send(array)
  })
})

app.get('/getDeliveryAgents',(req,res)=>{
  db.collection('deliveryagents').find().toArray().then(array=>{
    res.send(array)
  })
})

//posts to the database
app.post('/predictNutrients',async (req,res)=>{
  try {
   
    let payLoad=req.body
   

 
    request({
      url: 'https://feed-nutrient-level-prediction-api.onrender.com/predict',
      method: 'POST',
      json: true,
      body: payLoad
    }, function (error, response, body) {
      if (!error && response.statusCode == 201) {
          console.log('error')
        console.log(body);
        
          
      }else{
      
        res.send(body)
       // console.log(attendanceRegister)
         
      }
    }
    
    )



  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/approveticketpayment',async (req,res)=>{
  try {
   
    let payLoad=req.body,filteredArray=[]
 

await db.collection('tickets').find({ticketId:{ $regex: `^${payLoad.ticketId}$`, $options: "i" }}).toArray().then(resp=>{
 
if(resp.length==0){
  res.send({msg:'Ticket does not exit.'})

}else{
let ticket=resp[0]

  filteredArray=ticket.payments.filter(payment=>(payment.paymentSecretCode==payLoad.paymentSecretCode && payment.contact==payLoad.contact))
   
  if(filteredArray.length==0){
    
    res.send({msg:'Not paid'}) 
   }else{
let payment=filteredArray[0]



if(payment.paymentApproved==false){
  db.collection('tickets').updateOne({ ticketId: { $regex: `^${payment.ticketId}$`, $options: "i"},"payments.paymentSecretCode":payment.paymentSecretCode},{ $set: { "payments.$.paymentApproved": true } }).then(resp=>{
    
    if(resp.modifiedCount==1){
      res.send({msg:'Paid'})
  
    }else{
      res.send({msg:'Error must have occured, try again.'})
    }
  })
  


}else if(payment.paymentApproved==true){
  res.send({msg:'This ticket was already approved. Try another ticket'})
} else{
  res.send({msg:'Error must have occured'})
}
    
  }
}






})


  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/getMyTickets',async (req,res)=>{
  try {
   
    let payLoad=req.body
 

db.collection('tickets').find({ticketOwner:payLoad.contact}).toArray().then(resp=>{
  res.send(resp)
})


  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/payForTicket',async (req,res)=>{
  
  try {
   
    let payLoad=req.body
 

db.collection('tickets').find({ticketId:payLoad.ticketId}).toArray().then(resp=>{
   
  let ticket=resp[0],filteredArray=[]

 if((ticket.noOfTickets-ticket.payments.length)>0){
  
  
  filteredArray=ticket.payments.filter(payment=>(payment.contact==payLoad.contact && payment.paymentSecretCode==payLoad.paymentSecretCode))
  
  
  if(filteredArray.length==0){

    

    db.collection('tickets').updateOne({ticketId:payLoad.ticketId},{$push:{payments:payLoad}}).then(resp=>{
      if(resp.modifiedCount==1){
      
db.collection('traders').updateOne({contact:payLoad.contact},{ $inc: { accBal: parseInt(-payLoad.amount) } }).then(resp=>{

  if(resp.modifiedCount==1){
    res.send({msg:'Successful. Do not forget your payment secret code because you will be asked for it'})



  }else{
    res.send({msg:'Error must have occured, try again.'})
  }
})

      }else{
        res.send({msg:'Error must have occured, try again.'})
      }
    })
  }else{
    res.send({msg:'You already have this ticket. Change the payment secret code to buy another ticket'})
  }
 }else{
  res.send({msg:`No more tickets, contact 0${ticket.ticketOwner}`})
 }




})


  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/getMyPayments',(req,res)=>{
  try {
   
    let payLoad=req.body
    //console.log(payLoad)
  db.collection('tickets').find().toArray().then(async (resp)=>{
   
   if(resp.length==0){
    res.send([])
   }else{
let tickets=resp, myPayments=[]
tickets.forEach((ticket)=>{
  let filteredArray=ticket.payments.filter((payment)=>payment.contact==payLoad.contact)
  
  myPayments= myPayments.concat(filteredArray)
  

})

res.send(myPayments)
   }
    
  })


  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/getTicketDetails',(req,res)=>{
  try {
   
    let payLoad=req.body
   
  db.collection('tickets').find( { ticketId: { $regex: `^${payLoad.ticketId}$`, $options: "i" } }).toArray().then(async (resp)=>{

    res.send(resp)
  })


  } catch (error) {
    console.log(error)
  }
  
  })
app.post('/createTicket',(req,res)=>{
  try {

    let payLoad=req.body
  db.collection('tickets').find({ ticketId: { $regex: `^${payLoad.ticketId}$`, $options: "i" }}).toArray().then(async (resp)=>{
   
    if(resp.length==0){
await ticketModel(payLoad).save().then(resp=>{
  if(resp.ticketId==payLoad.ticketId){
    res.send({msg:'Successful. Share the ticket ID such that people can search for your tickets.'})
  }else{
    res.send({msg:'Error must have occured. Try again'})
  }
})
    }else{
res.send({msg:`${payLoad.ticketId} is already in use. Create another ticket ID`})

    }
  })


  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/addDeliveryAgent',(req,res)=>{
  try {

function AddDeliveryAgent(payLoad){
 db.collection('deliveryagents').find({contact:payLoad.contact}).toArray().then(resp=>{
  if(resp.length==0){

deliveryAgentModel(payLoad).save().then(resp=>{
res.send({success:true,msg:'Successful'})
})
  }else{
db.collection('deliveryagents').deleteMany({contact:payLoad.contact}).then(resp=>{
  if(resp.deletedCount==1){
    AddDeliveryAgent(payLoad)
  }else{;}
})
  }
 })
}

    let payLoad=req.body
    AddDeliveryAgent(payLoad)

  } catch (error) {
    console.log(error)
  }
    
  })
app.post('/initiateDelivery',(req,res)=>{
  try {
    let payLoad=req.body,Data=[{number:`256${payLoad.contact}`,senderid:`0${payLoad.contact}`,message:`0${payLoad.client} needs your service. Call now. #Kayas SMS`}]
    
  
  request.post('http://www.egosms.co/api/v1/json/',{json:{
    method:"SendSms",
    userdata:{
       username:"kayas",
       password:"onongeopio"
    },

  msgdata:Data
  }}, function (error, response, body) {
    if (!error && response.statusCode == 201) {
        //console.log(body);
        
        
    }else{
     // console.log(body)
      
     res.send({success:true,msg:'Successful, you will receive a call in 10 minutes'})
     // console.log(attendanceRegister)
       
    }
  }
  
  )
  
 
  } catch (error) {
    console.log(error)
  }
    
  })

app.post('/makePayment',(req,res)=>{
  
try {

 
  async function CheckForExistingPendingPayment(payLoad){
      
    return(await db.collection('pendingpayments').deleteMany({payerNo:payLoad.payerNo}).then(async (resp)=>{
     

return (await pendingPaymentsModel(payLoad).save().then(resp=>{
        if(resp.payerNo==payLoad.payerNo){
         
          
          return ({redirect:true,msg:'New Pending payment created, kindly redirect accordingly'})

        }else{
          return ({redirect:false})
        }
      }))
      
      }))
    
  }
 function InitiatePayment(PendingPaymentReport,Authorization){
   
  if(PendingPaymentReport.redirect==true && Authorization != undefined){
          
    res.send({redirect:true,redirectUrl:Authorization.meta.authorization.redirect})
  }else{
    console.log('Error in Authroization object of payment')
    }
 }



  let payLoad=req.body
 switch(payLoad.paymentReason){
  case 'depositToKayasAccount':{
  db.collection('kayasers').find({contact:parseInt(payLoad.beneficiary.contact)}).toArray().then(resp=>{
      payLoad.beneficiary.email=resp[0].email
   try {
        try {
          flw.MobileMoney.uganda({
          "fullname":`${payLoad.beneficiary.name}`,
          "phone_number":`256${parseInt(payLoad.payerNo)}`,
          "network":"MTN",
          "amount":parseInt(payLoad.amount),
          "currency": 'UGX',
          "email":`${payLoad.beneficiary.email}`,
         "tx_ref":'676555'
      })
          .then((resp)=>{
            
          try {
            let Authorization=resp
                     
            CheckForExistingPendingPayment(payLoad).then(resp=>{
              InitiatePayment(resp,Authorization)
             })
    
          } catch (error) {
            console.log('error in initiating flutter wave')
            console.log(error)
          }
              
          })
          .catch(console.log);}catch(error){
              console.log("Kayas, error originated from initiating a mobile money payment for registration and it is: ")
              console.log(error)
          }
      } catch (error) {
        console.log('error in initiating flutter wave')
       console.log(error)
      }
    })
    

break;

   }
 
 case 'donate':{
try {
  
  try {flw.MobileMoney.uganda({
    "fullname":`${payLoad.name}`,
    "phone_number":`256${parseInt(payLoad.payerNo)}`,
    "network":"MTN",
    "amount":parseInt(payLoad.amount),
    "currency": 'UGX',
    "email":`onongeisaac@gmail.com`,
   "tx_ref":'676555'
})
    .then((resp)=>{
    try {
      let Authorization=resp
    
      CheckForExistingPendingPayment(payLoad).then(resp=>{
       InitiatePayment(resp,Authorization)
      })

    } catch (error) {
      console.log(error)
    }
        
    })
    .catch(console.log);}catch(error){
        console.log("Kayas, error originated from initiating a mobile money payment for donation: ")
        console.log(error)
    }
} catch (error) {
  console.log(error)
}

  break;
 }


default:{
  res.send({success:0})
  console.log('Case value for method not available')
}
}



} catch (error) {
  console.log(error)
}
  
})


 app.post('/debitTraderAccountBalance',(req,res)=>{
  try {
    let payLoad=req.body
    
    db.collection('traders').updateOne({contact:payLoad.contact},{$inc:{'accBal':-parseInt(payLoad.amount)}}).then(resp=>{
      res.send(resp);
    })

  } catch (error) {
    console.log(error)
  }
 })

app.post('/approveCreditRequest',(req,res)=>{
  let payLoad=req.body
  
try {
  db.collection('pendingcreditrequests').find({stdNo:`${payLoad.studentNo}`}).toArray().then(resp=>{
    if(resp.length==0){
      res.send({requestExists:0,msg:'Client has not made a request.'})
    }else{
      payLoad.contact=resp[0].contact,payLoad.name=resp[0].name
      
      db.collection('traders').updateOne({contact:payLoad.contact},{$inc:{'bnpl.debt':parseInt(payLoad.price)}})
      .then(resp=>{
       
   if(resp.modifiedCount==1){
     
   bnplTransactionModel(payLoad).save().then(resp=>{;})
   db.collection('kayasers').find({contact:payLoad.contact}).toArray().then(resp=>{
   let kayaser=resp[0]
   
   
   emailReceipientsArray=[kayaser.email]
   Functions.SendEmail({credentialsObj:JSON.parse(process.env.kayasEmailApiCredentialsObj),arrayOfEmailReceipients:emailReceipientsArray,responseUrl:'#',subject:`BNPL debit of ${payLoad.price}`,html:`<div><div style="color:maroon;font-size:15px;padding-bottom:10px;font-weight:bold;">Debit transaction successful.</div>You have successfully been debited with ${payLoad.price} Ugandan shillings for receiving a credit service from Kayas credit service.<p></p>You received ${payLoad.description}. Thank you.<p></p>Kayas<br></br>0703852178 (WhatsApp)</div>`}).then(resp=>{
   ;
   })
   })
   db.collection('pendingcreditrequests').deleteMany({stdNo:`${payLoad.studentNo}`}).then(resp=>{
    ;
   })
   res.send({requestExists:0,msg:'Successful. Offer the product/service'})
   }else{
     res.send({success:false})
   }
   
   
      })
      
      
      
    }
  })
} catch (error) {
  console.log(error)
}
})

app.post('/requestForCredit',(req,res)=>{
  try {
    let payLoad=req.body
    db.collection('traders').find({contact:parseInt(payLoad.contact)}).toArray().then(resp=>{
      let trader=resp[0]
      if(resp[0].bnpl.studentDetails==undefined){
        res.send({studentDetailsPresent:0})
      }else{
        
        db.collection('pendingcreditrequests').find({contact:payLoad.contact}).toArray().then(resp=>{
          
          
    if(resp.length==0){
            
         let pendingCreditClient={}

         pendingCreditClient.name=trader.name,pendingCreditClient.contact=trader.contact,pendingCreditClient.stdNo=trader.bnpl.studentDetails.studentNo

 pendingCreditClientModel(pendingCreditClient).save().then(resp=>{
  res.send({msg:"Waiting for agent at service point to complete your request"})
 
 })

        }else{
           res.send({msg:"Waiting for agent at service point to complete your request"})
           }
        })
        
        
        //res.send({studentDetailsPresent:1})
      }
    })
  } catch (error) {
    console.log(error)
    
  }
})
app.post('/updateControls',(req,res)=>{

try {
  

  let receivedObj=req.body
  switch(receivedObj.task){
    case 'turnFoodDeliveryServiceOnOff':{
  
db.collection('controls').updateOne({desc:'systemControls'},[{$set:{"foodDeliveryControls.deliveryServiceIsOn":{$not:"$foodDeliveryControls.deliveryServiceIsOn"}}}]).then(resp=>{
  if(resp.modifiedCount==true){
    res.send({msg:'Successful'})
  }else{
    res.send({msg:'Not successful'})
  }
})


break;
  
     }
   
     case 'updateFoodDeliveryServiceNotice':{
  db.collection('controls').updateOne({desc:'systemControls'},{$set:{"foodDeliveryControls.foodDeliveryServiceNotice":receivedObj.notice}}).then(resp=>{
        
        console.log(resp)
        if(resp.modifiedCount==true){
          res.send({msg:'Successful'})
        }else{
          res.send({msg:'Not successful, notice could be up to date!'})
        }
      })
      
      
      break;
        
           }    
  
  
    
  
  
  default:{
    res.send({success:0})
    console.log('Case value for method not available')
  }
  }
  
  
  
  
  
} catch (error) {
  console.log(error)
}

  })


app.post('/foodDeliveryComment',(req,res)=>{
  try {
    let payLoad=req.body
    foodDeliveryCommentModel(payLoad).save().then(resp=>{
      
      res.send({msg:'Sent successfully'})
    })
   
  } catch (error) {
    console.log(error)
  }
})

app.post('/queueMethods',(req,res)=>{
  try {
    let payLoad=req.body
    

switch(payLoad.method){
  case 'deleteTeller':{

    db.collection('queuetooltellers').deleteOne({tellerNumber:parseInt(payLoad.tellerNumber)}).then(resp=>{
 if(resp.deletedCount==1){
res.send({msg:'Deleted successfully'})
 } else{
  res.send({msg:'Failed, try again'})
 }
     })
  
  
  
    break;
  }
  case 'joinQueue':{

  db.collection('queuemembers').find({contact:parseInt(payLoad.contact)}).toArray().then(array=>{
    if(array.length==0){
      
      queueMemberModel(payLoad).save().then(resp=>{
        
        res.send({msg:`Successful. You will be called soon.`})
      })
     
  
    }else{
      queueMember=array[0]
      res.send({msg:`You are already in the queue for service number ${queueMember.serviceType}`})
    }
   })



  break;
}


case 'leaveQueue':{

  db.collection('queuemembers').deleteOne({contact:parseInt(payLoad.contact)}).then(resp=>{
    
    if(resp.deletedCount==1){
      
     res.send({msg:'You have successfully left the queue'})
  
    }else{
      res.send({msg:'You are not in any queue'})
    }
   })



  break;
}
// let queue=[{contact:703852178},{contact:703852179},{contact:703852178},{contact:703852177},{contact:703852176}]
// 
case 'checkPosition':{

  db.collection('queuemembers').find({contact:parseInt(payLoad.contact)}).toArray().then(array=>{
    
    if(array.length==0){
      
     res.send({msg:'You are not in any queue'})
  
    }else{
      
      db.collection('queuemembers').find({serviceType:parseInt(array[0].serviceType)}).toArray().then(queueArray=>{

let position=queueArray.findIndex(queueMember=>queueMember.contact==parseInt(payLoad.contact))+1 

res.send({msg:`Position ${position} in the queue`})      
      })
    }
   })



  break;
}

case 'requestForClient':{
db.collection('queuemembers').find({serviceType:parseInt(payLoad.serviceType)}).toArray().then(array=>{
  if(array.length==0){
      
     res.send({msg:'No clients in the queue'})
  
    }else{
      let firstQueueMember=array[0],secondQueueMember=array[1]
    

      request.post('http://sandbox.egosms.co/api/v1/json/',{json:{
    method:"SendSms",
    userdata:{
       username:"kayas",
       password:"onongeopio"
    },

  msgdata:[{number:`256${firstQueueMember.contact}`,senderid:'1234567890',message:`Please go to Teller ${parseInt(payLoad.serviceType)}`}]
  }}, function (error, response, body) {
    if (!error && response.statusCode == 201) {
        console.log(body);
    }else{
      console.log(body)
     // console.log(attendanceRegister)
       
    }
  }
  
  )


      db.collection('queuemembers').deleteOne({contact:parseInt(firstQueueMember.contact)}).then(resp=>{
        if(resp.deletedCount==1){
          res.send({msg:'Successful, please wait for your client'})
        
        }else{
          res.send({msg:'Try again'})
        }
      })
    }
   })



  break;
}
case 'createNewTeller':{
  
  db.collection('queuetooltellers').find().toArray().then(array=>{
    if(array.length==0){
      
      let teller={tellerNumber:1,serviceType:payLoad.serviceType}
      
queueToolTellerModel(teller).save().then(resp=>{
  res.send({msg:'Successfully created new Teller'})
})

    }else{


let tellerNumbers=[]
array.forEach(teller=>{
  tellerNumbers.push(teller.tellerNumber)
})
let newTellerNumber=1,searchAgain=1
do{if(tellerNumbers.find(tellerNumber=>{
return tellerNumber==newTellerNumber
})==undefined){
searchAgain=0
}else{
newTellerNumber+=1
searchAgain=1

}}
while(searchAgain==1)


let teller={tellerNumber:parseInt(newTellerNumber),serviceType:payLoad.serviceType}
queueToolTellerModel(teller).save().then(resp=>{
  res.send({msg:`Successfully created new Teller for ${resp.serviceType}`})
})
    }
     
     })
  
  
  
    break;
  }
}



  } catch (error) {
    console.log(error)
  }
})

app.post('/requestFoodDelivery',(req,res)=>{
  try {
    let payLoad=req.body
    
    foodDeliveryRequestModel(payLoad).save().then(resp=>{
      
      res.send({msg:'Your delivery will arrive in less than 15 minutes, please stay in your location. Comment on the food after eating using the form below. Thank you.'})
    })
  } catch (error) {
    console.log(error)
  }
})




app.post('/deleteMarqueeNews',(req,res)=>{
  try{
  
    db.collection('marqueenews').deleteOne({_id:new ObjectId(req.body.id)}).then(resp=>{
      
      res.send(resp)
      
    })
  }catch(err){
console.log(err)
  }
})
app.post('/postNewsMarquee',(req,res)=>{
  try{
let payLoad=req.body
console.log(req.body)

marqueeNewsModel(payLoad).save().then(resp=>{

res.send({success:true})
})





  }catch(err){
    console.log(err)
  }
})



app.post('/searchForArticles',(req,res)=>{
  let articles=[]
  db.collection('pubarticles').find().toArray().then(resp=>{



  resp.forEach(article=>{
   let headlineComponentWords=article.headline1.toLowerCase().split(" "),searchComponentWords=req.body.articleSearchValue.toLowerCase().split(" ");

   searchComponentWords.forEach(searchWord=>{
if(headlineComponentWords.includes(searchWord)){

  articles.push(article);
}else{
;

}

   })

  
  })


res.send(articles)




  })
})
app.post('/saveLink',(req,res)=>{

 try{
  let payLoad=req.body
  payLoad.isValid=true

  db.collection('links').find({linkUrl:payLoad.linkUrl}).toArray().then(resp=>{
    
if(resp.length==0){


  linkModel(payLoad).save().then(resp=>{
    res.send({msg:'Successful!!'})
    })
    
    

}else{

res.send({msg:'Url already exists'})

}








  })



 }catch(err){
  console.log(err)
 }


})


app.post('/updateTraderDetails',(req,res)=>{

let receivedObj=req.body
switch(receivedObj.method){// method is update either as kayaser or as admin
  case 'updateAsKayaser':{

    switch(receivedObj.argsObj.fieldToUpdate){
      case 'isAvailable':{

        try {
            
          db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
            
            if(resp.length==0){
             
              res.send({msg:'Trader details do not exist.'})
            }else{
            let traderDetailsObj=resp[0]
     
            db.collection('traders').updateOne({contact:traderDetailsObj.contact},[{$set:{'deliveryService.isAvailable':{$not:"$deliveryService.isAvailable"}}}]).
            
            then(resp=>{
              
              if(resp.modifiedCount==1){
                res.send({success:true,msg:`Successful`})
  
                
              }else if(resp.modifiedCount==0){
                res.send({msg:'Upto debt'})
              }else{
                res.send({success:false,msg:`Not Successful`})
              }
            })
            
            
            
            }
              })
            
                break;
        } catch (error) {
          console.log(error)
        }
               }

      case 'addStudentDetails':{
        try {

 let studentDetails={studentNo:receivedObj.argsObj.studentNo,course:receivedObj.argsObj.course}
 

 db.collection('traders').find().toArray().then(array=>{
  try {
    
  let studentNoArray=[]
  
  array.forEach(trader=>{
if(trader.bnpl==undefined){;}else{
if(trader.bnpl.studentDetails==undefined){;}else{

  studentNoArray.push(trader.bnpl.studentDetails.studentNo)
}
}
  })


if(studentNoArray.find(studentNo=>{return studentNo==receivedObj.argsObj.studentNo})==undefined){
     db.collection('traders').updateOne({contact:parseInt(receivedObj.argsObj.contact)},{$set:{'bnpl.studentDetails':studentDetails}}).then(resp=>{
            if(resp.modifiedCount==1){
              res.send({success:1,msg:'You can now proceed wih requesting for credit'})
        
                  }else{
              res.send({success:0,msg:'Not successful, try again'})
          
            }
          
             })
}else{
  res.send({msg:'Not allowed, enter your student number'})
}
 
  } catch (error) {
    console.log(error)
  }
 })

       
     


            break;
                } catch (error) {
                 console.log(error)
                }
            
            }


      case 'allowFreeSmsSending':{
    
        db.collection('traders').find({contact:parseInt(receivedObj.argsObj.traderContact)}).toArray().then(resp=>{
          let traderDetailsObj=resp[0]
         
          traderDetailsObj.freeSmsObj[receivedObj.argsObj.fieldToUpdate]=receivedObj.argsObj.updateValue
         
          db.collection('traders').updateOne({contact:parseInt(receivedObj.argsObj.traderContact)},{$set:{freeSmsObj:traderDetailsObj.freeSmsObj}}).then(resp=>{
           if(resp.modifiedCount==1){
             res.send({success:1})
           }else{
             res.send({success:0})
         
           }
         
         
         })
         
         
         })
         

    break;
       }
      
      case 'freeSmsNotice':{
        
        db.collection('traders').find({contact:parseInt(receivedObj.argsObj.traderContact)}).toArray().then(resp=>{
        let traderDetailsObj=resp[0]
       
        traderDetailsObj.freeSmsObj[receivedObj.argsObj.fieldToUpdate]=receivedObj.argsObj.updateValue
       
        db.collection('traders').updateOne({contact:parseInt(receivedObj.argsObj.traderContact)},{$set:{freeSmsObj:traderDetailsObj.freeSmsObj}}).then(resp=>{
         if(resp.modifiedCount==1){
           res.send({success:1})
         }else{
           res.send({success:0})
       
         }
       
       
       })
       
       
       })

       break;
       
       }


       case 'bnplPromotionTokens':{
   try {
            db.collection('bnpldailypromotions').find({contact:parseInt(receivedObj.argsObj.traderContact)}).toArray()
           .then(resp=>{
            
if(resp.length>1){
res.send({msg:"You've reached your maximum daily limit. Tomorrow again."})
}else{
  db.collection('traders').updateOne({contact:parseInt(receivedObj.argsObj.traderContact)},[{$set:{'bnpl.promotionTokens':{$add:["$bnpl.promotionTokens",1]}}}]).then(resp=>{
    if(resp.modifiedCount==1){
bnplbnplDailyPromotionsModel({contact:parseInt(receivedObj.argsObj.traderContact)}).save().then(resp=>{
  res.send({success:1,msg:'Successful discount of 1,000shs'})
 })

          }else{
      res.send({success:0,msg:'Not successful'})
  
    }
  
     })
}
           })

       break;
           } catch (error) {
            console.log(error)
           }
       
       }




    default:{
      res.send({success:0})
      console.log('Case value for field to update not available')
      break;
    }
    }
    
break;

   }
  


   case 'updateAsAdmin':{

    switch(receivedObj.argsObj.fieldToUpdate){
   
      case 'displayArticlesAtFreeCost':{

        try {
            
          db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
            
            if(resp.length==0){
             
              res.send({msg:'Trader details do not exist.'})
            }else{
            let traderDetailsObj=resp[0]
          
            db.collection('traders').updateOne({contact:traderDetailsObj.contact},[{$set:{'permissionTokensObj.displayArticlesAtFreeCost':{$not:"$permissionTokensObj.displayArticlesAtFreeCost"}}}]).
            
            then(resp=>{
              if(resp.modifiedCount==1){
  if(traderDetailsObj.permissionTokensObj.displayArticlesAtFreeCost==true){
   res.send({msg:`Successfully turned off`})
  }else{
   res.send({msg:`Successfully turned on`})
  }
  
  
                
              }else if(resp.modifiedCount==0){
                res.send({msg:'Upto debt'})
              }else{
                res.send({msg:'Unsuccessful'})
              }
            })
            
            
            
            }
              })
            
                break;
        } catch (error) {
          console.log(error)
        }
               }
        
               case 'isDeliveryAgent':{

                try {
                    
                  db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
                    
                    if(resp.length==0){
                     
                      res.send({msg:'Trader details do not exist.'})
                    }else{
                    let traderDetailsObj=resp[0]
                  
                    db.collection('traders').updateOne({contact:traderDetailsObj.contact},[{$set:{'deliveryService.isDeliveryAgent':{$not:"$deliveryService.isDeliveryAgent"}}}]).
                    
                    then(resp=>{
                      if(resp.modifiedCount==1){
          if(traderDetailsObj.deliveryService.isDeliveryAgent==true){
           res.send({msg:`Successfully turned off`})
          }else{
           res.send({msg:`Successfully turned on`})
          }
          
          
                        
                      }else if(resp.modifiedCount==0){
                        res.send({msg:'Upto debt'})
                      }else{
                        res.send({msg:'Unsuccessful'})
                      }
                    })
                    
                    
                    
                    }
                      })
                    
                        break;
                } catch (error) {
                  console.log(error)
                }
                       }
                
      case 'bnplEligibility':{

      try {
          
        db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
          
          if(resp.length==0){
           
            res.send({msg:'Trader details do not exist.'})
          }else{
          let traderDetailsObj=resp[0]
        
          db.collection('traders').updateOne({contact:traderDetailsObj.contact},[{$set:{'bnpl.isEligible':{$not:"$bnpl.isEligible"}}}]).
          
          then(resp=>{
            if(resp.modifiedCount==1){
if(traderDetailsObj.bnpl.isEligible==true){
 res.send({msg:`Successfully turned off`})
}else{
 res.send({msg:`Successfully turned on`})
}


              
            }else if(resp.modifiedCount==0){
              res.send({msg:'Upto debt'})
            }else{
              res.send({msg:'Unsuccessful'})
            }
          })
          
          
          
          }
            })
          
              break;
      } catch (error) {
        console.log(error)
      }
             }
      
      
      case 'bnplDebt':{
   db.collection('traders').find({contact:receivedObj.argsObj.contact}).toArray().then(resp=>{
      if(resp.length==0){
        res.send({msg:'Trader details do not exist.'})
      }else{
      let traderDetailsObj=resp[0]
      
      db.collection('traders').updateOne({contact:traderDetailsObj.contact},{$set:{'bnpl.debt':receivedObj.argsObj.amount}}).
      
      then(resp=>{
        if(resp.modifiedCount==1){
          res.send({msg:'Successful'})
        }else if(resp.modifiedCount==0){
          res.send({msg:'Upto date'})
        }else{
          res.send({msg:'Unsuccessful'})
        }
      })
      
      
      
      }
        })
      
          break;
        }
      case 'sendSmsTokens':{
   
        db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
      if(resp.length==0){
        res.send(['<div style="color:red;">trader details do not exist!</div>'])
      }else{
      let traderDetailsObj=resp[0]
      traderDetailsObj.permissionTokensObj.sendSmsTokens=parseInt(receivedObj.argsObj.updateValue)
      db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj).then(resp=>{
        if(resp.modifiedCount==1){
          res.send(['<div style="color:green;">Successful!</div>'])
        }else if(resp.modifiedCount==0){
          res.send(['<div style="color:green;">Upto date!</div>'])
        }else{
          res.send(['<div style="color:red;">Unsuccessful!</div>'])
        }
      })
      
      
      
      }
        })
      
          break;
        }
      
        case 'accBal':{
   
          db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
        if(resp.length==0){
          res.send(['<div style="color:red;">trader details do not exist!</div>'])
        }else{
        let traderDetailsObj=resp[0]
        traderDetailsObj.accBal=traderDetailsObj.accBal+parseInt(receivedObj.argsObj.updateValue)
        db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj).then(resp=>{
          if(resp.modifiedCount==1){
            res.send(['<div style="color:green;">Successful!</div>'])
          }else if(resp.modifiedCount==0){
            res.send(['<div style="color:green;">Upto date!</div>'])
          }else{
            res.send(['<div style="color:red;">Unsuccessful!</div>'])
          }
        })
        
        
        
        }
          })
        
            break;
          }
        
  
  case 'createAttendanceRegisterTokens':{
   
    db.collection('traders').find({contact:receivedObj.argsObj.traderContact}).toArray().then(resp=>{
  if(resp.length==0){
    res.send(['<div style="color:red;">trader details do not exist!</div>'])
  }else{
  let traderDetailsObj=resp[0]
  traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens=parseInt(receivedObj.argsObj.updateValue)
  db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj).then(resp=>{
    if(resp.modifiedCount==1){
      res.send(['<div style="color:green;">Successful!</div>'])
    }else if(resp.modifiedCount==0){
      res.send(['<div style="color:green;">Upto date!</div>'])
    }else{
      res.send(['<div style="color:red;">Unsuccessful!</div>'])
    }
  })
  
  
  
  }
    })
  
      break;
    }
  



       

    default:{
      
      res.send(['<div style="color:red;">Case value for field to update not available!</div>'])
      console.log('Case value for field to update not available')
      break;
    }
    }
    
break;

   }
  




default:{
  res.send({success:0})
  console.log('Case value for method not available')
}

}





})
app.post('/followingsPostRequest',(req,res)=>{

try{

  let receivedObj=req.body
  switch(receivedObj.method){// method is update either as kayaser or as admin
    case 'createFollowersCategory':{
   
   db.collection('followings').find({contact:receivedObj.args.contact}).toArray().then(resp=>{
Functions.CreateIntId(resp,'categoryId').then(resp=>{
  let categoryId=resp,payLoad={categoryId:categoryId,name:receivedObj.args.name,contact:receivedObj.args.contact,categoryName:receivedObj.args.categoryName,followers:[]}
followingsModel(payLoad).save().then(resp=>{
  
  res.send(resp)

})

})


   })
  break;
  
     }
    case 'getFollowersCategories':{
   
   db.collection('followings').find({contact:receivedObj.args.contact}).toArray().then(resp=>{
    
res.send(resp)
   })
  break;
  
     }
    
    case 'getCategoriesSubscribedTo':{
   
   try{
    
    db.collection('followings').find().toArray().then(resp=>{
      let arrayOfFollowings=resp,responseArray=[]
          arrayOfFollowings.forEach(followingsDoc=>{
            if(followingsDoc.followers.find(follower=>{return follower.contact==receivedObj.args.contact})==undefined){
              ;
            }else{
              responseArray.push(followingsDoc)
            }

          })

res.send(responseArray)


         })
        break;




   }catch(err){
    console.log('Error trying to get categories subscribed to')
    console.log(err)
   }
  
     }
    
    case 'getFollowersCategory':{
   
   db.collection('followings').find({contact:receivedObj.args.contact,categoryId:receivedObj.args.categoryId}).toArray().then(resp=>{

res.send(resp)
   })
  break;
  
     }
    
    case 'updateFollowers':{
   try{

    db.collection('followings').find({contact:receivedObj.args.contact,categoryId:receivedObj.args.categoryId}).toArray().then(resp=>{
      let msg=receivedObj.args.msg,followers=resp[0].followers,arrayOfFollowersContacts=[],senderContact=receivedObj.args.contact
      followers.forEach(followerDoc=>{arrayOfFollowersContacts.push(followerDoc.contact)})
      db.collection('traders').find({contact:{$in:arrayOfFollowersContacts},accBal:{$gt:parseInt(process.env.followerUpdateSmsCost)}}).toArray().then(resp=>{
        let arrayOfEligibleTraders=resp,payLoad=[]
        arrayOfEligibleTraders.forEach(eligibleTrader=>{
          payLoad.push({number:'256'+eligibleTrader.contact,message:`${msg} (0${senderContact} #Kayas SMS)`,senderid:'0'+senderContact})
          })
     if(arrayOfEligibleTraders.length==0){
      res.send({msg:'<div style="color:red;">Not sent because no follower for this category has enough credit.</div>'})
    }else{
      request.post(process.env.egoSmsLiveSendApiUrl,{json:{
        method:"SendSms",
        userdata:{
           username:process.env.egoSmsUsername,
           password:process.env.egoSmsPassword
        },
        msgdata:payLoad
      }},(error, response, body) =>{
        if (!error && response.statusCode == 201) {
             console.log(body);
             res.send({msg:'Error occured. Contact Kayas on 0703852178'})
           
         }else{
           if(body.Status=='OK'){
            res.send({msg:`Message sent to ${arrayOfEligibleTraders.length} followers`})
         arrayOfEligibleTraders.forEach(async (receipient)=>{
      receipient.accBal-=parseInt(process.env.followerUpdateSmsCost)
      await db.collection('traders').replaceOne({contact:receipient.contact},receipient).then(resp=>{;})
      })
      
      
           }else{
             
            res.send({msg:'Message not sent. Contact Kayas on 0703852178'})
            
            
            }}
          
          }
       
      )
    }



      })
       })
        break;


   }catch(err){
    console.log('error updating followers')
    console.log(err)
   }
  
     }
    
    case 'subscribeToACategory':{
    db.collection('followings').find({contact:receivedObj.args.contactToFollow,categoryId:receivedObj.args.categoryId}).toArray().then(resp=>{
let caseFollower=receivedObj.args.follower
if(resp.length==0){
  res.send({msg:'This category ID does not exit.'})
}else{
 let categoryDoc=resp[0],followers=categoryDoc.followers
if(followers.find(follower=>{return follower.contact==caseFollower.contact})==undefined){
followers.push(caseFollower)
categoryDoc.followers=followers

db.collection('traders').find({contact:caseFollower.contact}).toArray().then(resp=>{
if(resp[0].accBal<process.env.minAccBalToFollowACategory){
  res.send({msg:`<div style="color:red;">Account balance should be atleast ${process.env.minAccBalToFollowACategory} in order to follow a category. WhatsApp Kayas on 0703852178 to recharge your account.</div>`})
}else{
  db.collection('followings').replaceOne({contact:categoryDoc.contact,categoryId:categoryDoc.categoryId},categoryDoc).then(resp=>{
    if(resp.modifiedCount==1){
  res.send({msg:'Successful'})
    }else{
      res.send({msg:'Error may have occured, try again'})
    }
  })
  
  
}

})



}else{
  res.send({msg:'You already subscribe to this category'})
}


}

   })
  break;
  
     }
    
    case 'unsubscribeFromACategory':{
    db.collection('followings').find({contact:receivedObj.args.contactToFollow,categoryId:receivedObj.args.categoryId}).toArray().then(resp=>{
let caseFollower=receivedObj.args.follower
if(resp.length==0){
  res.send({msg:'This category ID does not exit.'})
}else{
  let categoryDoc=resp[0],followers=categoryDoc.followers,newFollowers=[]
if(followers.find(follower=>{return follower.contact==caseFollower.contact})!=undefined){
followers.forEach(follower=>{
  if(follower.contact==caseFollower.contact){
    ;
  }else{
    newFollowers.push(follower)
  }
})
categoryDoc.followers=newFollowers
db.collection('followings').replaceOne({contact:categoryDoc.contact,categoryId:categoryDoc.categoryId},categoryDoc).then(resp=>{
  if(resp.modifiedCount==1){
res.send({msg:'Successful'})
  }else{
    res.send({msg:'Error may have occured, try again'})
  }
})

}else{
  res.send({msg:'You do not subscribe to this category'})
}

}

   })
  break;
  
     }
    
  
  default:{
    
    console.log('Case value for method not available')
  }
  }
  



}catch(err){
  console.log('Error at creating followers category')
console.log(err)
}




})



app.post('/sendSmsMessage',(req,res)=>{
try{

  let receivedObj=req.body
 // console.log(receivedObj)

switch(receivedObj.method){

  case 'sendFreeSmsMessage':{
 
      
    try{

      request.post('http://www.egosms.co/api/v1/json/',{json:{ 
        method:"SendSms",
        userdata:{
           username:"kayas",
           password:"onongeopio"
        },
        msgdata:[receivedObj.argsObj]
      }}, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            console.log(body);
            console.log('Error one in free sending sms')
            res.send({success:0})
        }else{
          console.log(body)
          if(body.Status=='OK'){ 
    
    let smsBill=process.env.freeSmsBill 
    
    db.collection('traders').find({contact:receivedObj.argsObj.sponsor}).toArray().then(resp=>{
     let trader=resp[0],freeSmsSenderInList,freeSmsUsersWithOutSender
      let originalBal=trader.accBal,newBal=originalBal-smsBill //calculate newBalance of trader
    
    let freeSmsUsers=trader.freeSmsObj.freeSmsUsers // initialize current free sms users
    
    if(freeSmsUsers.find(freeSmsUserObj=>{return parseInt(freeSmsUserObj.contact)==parseInt(receivedObj.argsObj.senderContact)})==undefined)
    {
      // add new user because doesnt exist in the list of free sms users
      freeSmsUsers.push({name:receivedObj.argsObj.senderName,contact:parseInt(receivedObj.argsObj.senderContact),noOfSmsSent:0})
      freeSmsSenderInList=freeSmsUsers.find(freeSmsUserObj=>{return parseInt(freeSmsUserObj.contact)==parseInt(receivedObj.argsObj.senderContact)})
      freeSmsUsersWithOutSender=freeSmsUsers.filter((freeSmsUserObj)=>{
      return freeSmsUserObj.contact!=freeSmsSenderInList.contact
    })

    }else{
      ; //do not add user because already present in list
    
    freeSmsSenderInList=freeSmsUsers.find(freeSmsUserObj=>{return parseInt(freeSmsUserObj.contact)==parseInt(receivedObj.argsObj.senderContact)})
    freeSmsUsersWithOutSender=freeSmsUsers.filter((freeSmsUserObj)=>{
      return freeSmsUserObj.contact!=freeSmsSenderInList.contact
    })
    }
    
    trader.accBal=newBal // set new account bal of trader
    trader.freeSmsObj.freeSmsUsers=freeSmsUsers // set traders' sms users  by adding new sms user who was originally absent else maintains previous users
    freeSmsSenderInList.noOfSmsSent+=1 // increases the number of SMS sent by the user originally in list
  freeSmsUsersWithOutSender.push(freeSmsSenderInList) //add sender to 'freeSmsUsersWithOutSender' list
    trader.freeSmsObj.freeSmsUsers=freeSmsUsersWithOutSender // but here, sender is now pushed to group 'freeSmsUsersWithOutSender' with added sms count
    db.collection('traders').replaceOne({contact:receivedObj.argsObj.sponsor},trader).then(resp=>{
       //update the trader document
    
      if(resp.modifiedCount>0){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
      
      
      
      })
    
    
    
    })
    
    
    
    
          }else{
            res.send({success:0})
            console.log('Error two in sending free sms')
          }
           
        }
      }
      
      )
    

    }catch(err){
      console.log('Error is catch block of sending a free sms message')
    }
    
    
    
      break;
    }
    
    
    
      default:{
        console.log('Switch case method not available')
      }

}







   
      



}catch(err){

  console.log('error occured at /sendSmsMessage route')
}


})





app.post('/testbackend',bodyParser.json(),(req,res)=>{
let publicVapidKey='BDnPvsx3HCwDrIhJVDAVXb4Jg6WJ0frU0HAuNdvv6Zn0PFjxfuHVX-4zj5hhbLAULmjV9xGYYA7nN2khho-pCjY',privateVapidKey='0psXRATqtttC9mTP-YJDGxZWou952CKAsuPm28YePME'  
webpush.setVapidDetails('mailto:onongeisaac@gmail.com',publicVapidKey,privateVapidKey)
const subscription=req.body
const payLoad=JSON.stringify({title:'PUSH TEST',body:'best man'})
webpush.sendNotification(subscription,payLoad).then(resp=>{
console.log("Push notification sent.........")

}).catch(err=>console.log(err))
})
/*
request.post('http://sandbox.egosms.co/api/v1/json/',{json:{
  method:"SendSms",
  userdata:{
     username:"kayas",
     password:"onongeopio"
  },
  msgdata:[
     {
        number:"256774643854",
        message:"testing the api",
        senderid:"1111111111"
     },
     {
      number:"256785271418",
      message:"logan with janet",
      senderid:"1111111111"
   }
  ]
}}, function (error, response, body) {
  if (!error && response.statusCode == 201) {
      console.log(body);
  }else{
    console.log(body)
  }
}

)

*/
app.post('/registerPageVisitOfTrader', (req,res)=>{

  

  try{

  db.collection('traders').find({contact:req.body.recommender}).toArray().then(resp=>{
   if(resp.length==0){
  db.collection('kayasers').find({contact:req.body.recommender}).toArray().then(resp=>{
if(resp.length==0){;}else{

  InstantiateTraderModel(resp[0]).then(resp=>{
 res.send([resp])
      
  })
  


}

  })
  }else{
    let traderDoc=resp[0]
    db.collection('traders').updateOne({contact:req.body.recommender},{$set:{pagesVisitsNo:traderDoc.pagesVisitsNo+1}}).then(resp=>{
      res.send(resp)
    })
   }
  })
 }catch(err){
   console.log(err)
 }
 
 })


 app.post('/getRecommendationDetails',(req,res)=>{


  try{

db.collection('recommendations').find({recommendeeContact:req.body.contact}).toArray().then(resp=>{
 
if(resp.length==0){
res.send(resp)
}else{
  if(req.body.method=='getRecommender'){
let response=[{method:'getRecommender',data:resp[0]}]
res.send(response)
  }else{
  res.send([{data:'no method defined'}])
  }




}
  
  
})




   }catch(err){
  
   console.log(err)
 
  }
 
 })



app.post('/creditDebitTrader',(req,res)=>{

  try{
 
db.collection('traders').find({contact:req.body.contact}).toArray().then(resp=>{
  if(resp.length==0){
    res.send(['<div style="color:red;">Account not active yet</div>'])
  }else{
   
    if(req.body.action=='credit'){
      db.collection('traders').updateOne({contact:req.body.contact},{$set:{accBal:resp[0].accBal+req.body.amount}}).then(resp=>{
      res.send([`credited ${req.body.contact} with ${req.body.amount}`])
      })

    }else if(req.body.action=='debit'){
      db.collection('traders').updateOne({contact:req.body.contact},{$set:{accBal:resp[0].accBal-req.body.amount}}).then(resp=>{
        res.send([`debited ${req.body.contact} with ${req.body.amount}`])
        })
  
    } else{
      res.send(['An error occured, try again'])
    }
  }
})



  }catch(err){
   res.send(['<div style="color:red;">An error occured, enter correct ID</div>'])
   console.log(err)
 
  }
 
 })
 app.post('/setTraderNotice',(req,res)=>{

  try{
 
db.collection('controls').updateOne({_id:new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{traderNotice:req.body.msg}}).then(resp=>{
  res.send(["Successful"])
})


  }catch(err){
   res.send(['<div style="color:red;">An error occured, enter correct ID</div>'])
   console.log(err)
 
  }
 
 })
 
app.post('/clearRequest',(req,res)=>{

 try{
  db.collection('requests').find({_id:new ObjectId(req.body.requestId)}).toArray().then(resp=>{
    if(resp.length==0){
    
      res.send(['Request not present'])
    }else{
    
      db.collection('requests').deleteOne({_id:new ObjectId(req.body.requestId)}).then(resp=>{
        res.send(['Succesfull'])
    
      })
    
    
    
    }
      })
 }catch(err){
  res.send(['<div style="color:red;">An error occured, enter correct ID</div>'])
  console.log(err)

 }

})

app.post('/setPushNotification',bodyParser.json(),(req,res)=>{
 
db.collection('controls').updateOne({_id:new ObjectId("6446c593a0c184843ed48174")},{$set:{notification:req.body}}).then(resp=>{
if(resp.modifiedCount==1){

  res.send(["Succesfull"])
}else{
  res.send(["Upto date!"])

}

})

})


app.post('/subscribeForWebPush',bodyParser.json(),(req,res)=>{
try{  let subscription=req.body

  
  db.collection('webpushsubscriptions').find({endpoint:subscription.endpoint}).toArray().then(resp=>{
 if(resp.length==0){
   webPushSubscriptionModel(subscription).save().then(resp=>{
res.send(["send response"])

   webpush.sendNotification({
    _id: new ObjectId("6448c710f019e4aafbda6f7b"),
    endpoint: 'https://fcm.googleapis.com/fcm/send/c8iYt7U2iVo:APA91bE2wVqgPY2L2Ia86uYX9ycrrQjdRjJmDSzdroGYXucAu2x-gKQau1yCxTKcOa7RgUsGXvWWjJ1j_UVHTtmQ2nx9lHn126egNJ2wAIhq45Fis8ebDzHWYsh7iFfsVjPHdbkU10IT',
    expirationTime: null,
    keys: {
      p256dh: 'BFuPmmkLruLDIkodmSdSbnZY0tZGitWTRZ3pK5poRHL0dqxAMaygyxspXNqeIQkSNAw5_Fo0N90yJUG0nH98VXo',
      auth: 'L5m0UPPo5Ku8GFs9pt7AAw'
    },
    __v: 0,
    contact: 703852178
  },JSON.stringify({title:'🔥Kayas: New subscriber received!',body:'Keep it Kayas!'})).then(resp=>{

    
  }).catch(err=>console.log(err))


   })
 
 }else{

  res.send(["send response"])
 }
 
 
 
 })
 }catch(err){
  console.log(err)
}

})

app.post('/getPushNotification',bodyParser.json(),(req,res)=>{

  try{
    let subscription=req.body

    db.collection('controls').find({_id:new ObjectId("6446c593a0c184843ed48174")}).toArray().then(docArray=>{
  const payLoad=JSON.stringify({title:'🔥Kayas: '+docArray[0].notification.title,body:docArray[0].notification.body})



  webpush.sendNotification(subscription,payLoad).then(resp=>{

  }).catch(err=>console.log(err))




     
    })
  
  
   }catch(err){
    console.log(err)
   }
  
  }) 


app.post('/updateAttendanceRegDetails',bodyParser.json(),(req,res)=>{

  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
 
  if(resp.length==0){
    res.send(['<div style="color:red;">Register does not exist!</div>'])
  }else{

switch(req.body.fieldToUpdate){
  case 'smsUnitCost':{
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{smsUnitCost:parseInt(req.body.fieldValue)}}).then(resp=>{
      if(resp.modifiedCount==1){
        res.send(['<div style="color:green;">Successful!</div>'])
      }else{
        res.send(['<div style="color:red;">Upto date!</div>'])

      }
    })
    break;
  }

  case 'name':{
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{name:req.body.fieldValue}}).then(resp=>{
      if(resp.modifiedCount==1){
        res.send(['<div style="color:green;">Successful!</div>'])
      }else{
        res.send(['<div style="color:red;">Upto date!</div>'])

      }
    })
    break;
  }

  case 'permissionToAddContactTokens':{
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{permissionToAddContactTokens:parseInt(req.body.fieldValue)}}).then(resp=>{
      if(resp.modifiedCount==1){
        res.send(['<div style="color:green;">Successful!</div>'])
      }else{
        res.send(['<div style="color:red;">Upto date!</div>'])

      }
      })

    break;
  }

  

default:{
  res.send(['<div style="color:red;">Field does not exist!</div>'])
}
}



  }
  })
  
  })

app.post('/getAttendanceRegDetails',bodyParser.json(),(req,res)=>{

 db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{

  res.send(resp)
 })
 
 })

 app.post('/closeopenAttendanceReg',bodyParser.json(),(req,res)=>{

try{
  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
  
 if(resp.length==0){
 res.send(["Register absent"])
 }else{
  if(resp[0].closed==true){
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{closed:false}}).then(resp=>{
      res.send(['Openned succesfully'])
    })
   }else{
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{closed:true}}).then(resp=>{
      res.send(['Closed succesfully'])
    })
   }
 }
    
  
   
     })
}catch(err){
  console.log(err)
}
  })
app.post('/submitOpinionpoll',bodyParser.json(),(req,res)=>{
try{

let submission=req.body


if(submission.candVotedFor==undefined){
  res.send(['<div style="color:red">Enter a number corresponding to an option on the list.</div>'])
}else{
  
  db.collection('voteropinionpolls').find({contactOfVoter:submission.contactOfVoter,description:submission.description}).toArray().then(resp=>{
    if(resp.length==0){
      
      voterOpinionPollModel(submission).save().then(resp=>{
        res.send(['<div style="color:green">Submitted. Thank you <span class="fa fa-check"></span></div>'])

      })
      
    }else{
      res.send(['<div style="color:red">You already voted.</div>'])
    }
  })
}

  

}catch(err){
  console.log(err)
}
})
app.post('/categorizeMessagerContacts',bodyParser.json(),(req,res)=>{
//dependecies: messager categorize button



  try{
    
    
  db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
     
 let messagees=resp[0].messagees
 if(messagees.length==0){
  res.send(["Messagees list is empty"])
 } else{

  messagees.forEach(attendeeDoc=>{
if(attendeeDoc[req.body.property]==undefined){
  attendeeDoc[req.body.property]=req.body.propertyValue
}else{
  ;
}


   
  }) 






db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:messagees}}).then(resp=>{
  if(resp.modifiedCount==1){
    res.send(['<div style="color:green;">Successful</div>'])
  }else{
    res.send(['<div style="color:red;">Already upto date!</div>'])
  }
})


 }
 
})


    
   
  
  }catch(err){
    console.log(err)
  }


})
app.post('/pushToAttendanceRegister',bodyParser.json(),(req,res)=>{

  try{db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
    if(resp.length==0){
res.send(["Register does not exist."])
    }else{
let registerAttendees=resp[0].attendees
db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
 
 if(resp[0].messagees.length==0){
  res.send(["Messagees list is empty"])
 }else if (resp[0].messagees[0].name==undefined){

  resp[0].messagees.forEach(messageeContact=>{
    if(registerAttendees.find(registerAttendee=>{return registerAttendee.contact==messageeContact})==undefined){

      registerAttendees.push({name:"",contact:messageeContact})
    }else{
;

    }
  }) 



db.collection("registers").updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{attendees:registerAttendees}}).then(resp=>{

if(resp.modifiedCount==1){
  res.send(["succesfully added more."])
}else{
  res.send(["Already upto date!"])
}
})

 }else{

  resp[0].messagees.forEach(attendeeDoc=>{
    if(registerAttendees.find(registerAttendee=>{return registerAttendee.contact==attendeeDoc.contact})==undefined){

      registerAttendees.push(attendeeDoc)
    }else{
;

    }
  }) 
  db.collection("registers").updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{attendees:registerAttendees}}).then(resp=>{

    if(resp.modifiedCount==1){
      res.send(["succesfully added more."])
    }else{
      res.send(["Already upto date!"])
    }
    })





 }
})


    }
   
  
  })}catch(err){
    console.log(err)
  }
})
app.post('/setMessagerIntroStatement',bodyParser.json(),(req,res)=>{
  
 db.collection('controls').updateOne({_id:new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{messagerIntroStatement:req.body.statement}}).then(resp=>{
    res.send(["Successful"])
  })
  })

app.post('/mapAttendanceRegisterToMessager',bodyParser.json(),(req,res)=>{

try{
db.collection('registers').find({contact:req.body.registerAdminContact,registerId:req.body.registerId}).toArray().then(resp=>{
if(resp.length==0){
  res.send(["Register does not exist"])
}else{
  db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:resp[0].attendees}}).then(resp=>{
if(resp.modifiedCount==1){
  res.send(["successful"])

}else{
  res.send(["Update was not successful because you are updating to what is uptodate!"])
}

  })
}



})





}catch(err){
  console.log("Kayas error originated from trying map attendance Register to Messager and it is: ")
  console.log(err)
}

})
app.post('/removeFromAttendeesRegister',bodyParser.json(),(req,res)=>{
 
  try{
    db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
if(resp.length==0){
  res.send({registerPresent:0})
}else{

  if(resp[0].attendees.find(attendee=>{return attendee.contact==req.body.contact})==undefined){
    res.send({attendeeInList:0})
   }else{
 
   let newAttendees=[]
resp[0].attendees.forEach(attendee=>{
  if(attendee.contact==req.body.contact){
;
  }else{
newAttendees.push(attendee)
  }
})
db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{attendees:newAttendees}}).then(resp=>{

  if(resp.modifiedCount==1){
    res.send({success:1})
  }else{
;
  }
  
})


   }


}
    


    })



  }catch(err){
    console.log("kayas the error originated from trying to remove attendees register and it is:")
    console.log(err)
  }
 
  })





app.post('/addToAttendeesRegister',bodyParser.json(),(req,res)=>{
try{

db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{

  if(resp.length==0){
    res.send({registerPresent:0})
  }
  else{
if(resp[0].attendees.find(attendee=>{return attendee.contact==req.body.contact})==undefined){
db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$push:{attendees:{name:req.body.name,contact:req.body.contact}}}).then(resp=>{
 if(resp.modifiedCount==1){
  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
  
    res.send({success:1,attendees:resp[0].attendees})
    
  })

  
 }else{
  res.send({success:'updateDidntTakePlace'})
 }
})
}else{
  res.send({success:"memberPresent"})
}
  }
})

}catch(err){
  console.log("kayas the error originated from trying to add to attendees register and it is:")
  console.log(err)
}

})
app.post('/updateDndList',bodyParser.json(),(req,res)=>{

  try{
db.collection('controls').find({_id:new ObjectId("633da5b1aed28e1a8e2dd55f")}).toArray().then(resp=>{

  if(req.body.action=="add"){
    if(resp[0].dndContactsArray.find(dndContact=>{return dndContact==req.body.contact})==undefined){
      db.collection('controls').updateOne({_id:new ObjectId("633da5b1aed28e1a8e2dd55f")},{$push:{dndContactsArray:req.body.contact}}).then(resp=>{
        if(resp.modifiedCount==1){
          res.send(["Successful"])
        }else{
          ;
        }
      })
    }else{
      res.send(["Already in the list"])

    }
  }else if(req.body.action=="remove"){
    if(resp[0].dndContactsArray.find(dndContact=>{return dndContact==req.body.contact})==undefined){
      res.send(["Not present in the list......."])
    }else{
 

let updatedList=[]
resp[0].dndContactsArray.forEach(dndContact=>{
if(dndContact==req.body.contact){
  ;
}else{
  updatedList.push(dndContact)
}

})


db.collection('controls').updateOne({_id:new ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{dndContactsArray:updatedList}}).then(resp=>{

  if(resp.modifiedCount==1){
    res.send(["Successful"])
  }else{
    res.send(["Error must have occured, try again........."])
  }
})


    }

  }else{
    ;
  }


})

  }catch(err){
    console.log("kayas, error originated from updating DND list it is: ")
    console.log(err)
  }
})


app.post('/mapFromCategoryToMessager',bodyParser.json(),(req,res)=>{

  try{
db.collection('multidocs').find({desc:req.body.category}).toArray().then(resp=>{
  if(resp.length==0){
    res.send(["category does not exist"])
  }else{
    db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:resp[0].messagees}}).then(resp=>{
      if(resp.modifiedCount==1){res.send(["Successful"])}else if(resp.modifiedCount==0){
res.send(["Messagees is already uptodate!!"])
      }else{
        res.send(["Error must have occured, please try again"])
      }
    })
  
  }
})

  }catch(err){
    console.log("kayas, error originated from mapping from a category to messager and it is: ")
    console.log(err)
  }
})

app.post('/createAttendanceRegister',bodyParser.json(),(req,res)=>{
  function CreateAttendanceRegister(registerId){
    registerModel({registerId:registerId,registerTitle:req.body.registerTitle,institution:req.body.institution,name:req.body.name,contact:req.body.contact,
      attendees:[{name:req.body.name,contact:req.body.contact}],message:"🌹Can I speak to you briefly if you do not mind?",smsmessage:"Hello, hope you are fine.",smsUnitCost:30,closed:false
    }).save().then(resp=>{
      db.collection('traders').find({contact:parseInt(req.body.contact)}).toArray().then(resp=>{
        if(resp.length==0){
          console.log('Error when creating attendance register. Trader details not available')
        }else{
      let traderDetailsObj=resp[0]
      traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens=traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens-1
      db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj).then(resp=>{
if(resp.modifiedCount==1){res.send({success:1,registerId,registerTitle:req.body.registerTitle,contact:req.body.contact})

}else{
  console.log('Register not created. No modified count detected')
}
      })
      
      
      
        }
      })
      
    })

  }
  try{

    db.collection('registers').find({contact:req.body.contact}).toArray().then(resp=>{

   if(resp.length==0){

CreateAttendanceRegister(0)
   }else {
    if(resp.length<=maxAttendeeRegisters-1||req.body.contact==703852178||req.body.contact==755643774){

db.collection('registers').find({contact:req.body.contact}).toArray().then(resp=>{
  let registerIds=[]
  resp.forEach(register=>{
    registerIds.push(register.registerId)
  })


  newId=0,searchAgain=1
  
  
  do{if(registerIds.find(registerId=>{
  return registerId==newId
  })==undefined){
  
  searchAgain=0
  }else{
  newId+=1
  searchAgain=1
  
  }}
  while(searchAgain==1)

      CreateAttendanceRegister(newId)
      

    })

   }
else{
res.send({registerLimitReached:1})
}

    }
    })


  }catch(err){
    console.log("Kayas the error originated from trying to create a Register and it is:")
    console.log(err)
    }
  
  })
  
 
  app.post('/removeMessagee',bodyParser.json(), (req,res)=>{
 

db.collection('multidocs').find({desc:req.body.desc}).toArray().then(resp=>{
  if(resp.length==0){
    res.send(["Document of that description does not exist......"])
  }else{
let originalNumb=resp[0].messagees.length,newMessagees=[]
if(resp[0].messagees.find(messagee=>{return messagee.contact==req.body.contact})==undefined){
 res.send([req.body.contact+" Does not exist among the messagees of "+req.body.desc+" document"])
}else{
resp[0].messagees.forEach(messagee=>{
    if(messagee.contact==req.body.contact){
   
    ;
    }else{
    
      newMessagees.push({name:'',contact:messagee.contact})
    }
  })
 
db.collection('multidocs').updateOne({desc:req.body.desc},{$set:{messagees:newMessagees}}).then(resp=>{
 
if(resp.modifiedCount==1){
  res.send(["Successful from "+originalNumb+" contacts to "+newMessagees.length])
}else{
  res.send(["An error must have occured, please try again..."])
}

})

}


  }
})

  })

app.post('/resetPubArticlesNewCommentsNumb',bodyParser.json(), (req,res)=>{

  console.log(req.body)
  db.collection('pubarticles').updateOne({id:parseInt(req.body.id)},{$set:{newCommentsNumb:0}}).then(resp=>{
          
  })

})
app.post('/deleteArticle',bodyParser.json(),(req,res)=>{

 db.collection('pubarticles').find({id:req.body.articleId}).toArray().then(resp=>{
  if(resp.length==0){
res.send({presence:0})
  }else{
    db.collection('pubarticles').deleteOne({id:req.body.articleId}).then(resp=>{
      res.send(resp)
      db.collection('articleassessments').deleteMany({articleId:req.body.articleId}).then(resp=>{;})
    })
  }
 
})
})
app.post('/editAttendeeRegister',bodyParser.json(),(req,res)=>{


db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{


  if(resp.length==0){
res.send({registerPresent:0})
  }else{
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{registerTitle:req.body.registerTitle,attendees:[{name:resp[0].name,contact:req.body.registrarContact}],message:"🔥Can I speak to you briefly if you do not mind?",smsmessage:"Hello, hope you are well"}}).then(resp=>{
      if(resp.modifiedCount==1){
res.send({success:1})
      }else{
        res.send({success:0})
      }
    })

  }
})

})

app.post('/editPubArticle',bodyParser.json(),(req,res)=>{

  try{
    
    db.collection('articlegrants').find({contact:req.body.contact}).toArray().then(docArray=>{
  
pubArticleModel({id:req.body.articleId,visits:1,headline1:req.body.headline1,author:req.body.author,institution:req.body.institution,contact:parseInt(req.body.contact),body:req.body.body,pubArticleOpinions:[{name:"Kayas",contact:parseInt(703852178),msg:"Thank you for using Kayas"}],showCustomerMessage:"on",showCustomerContact:"off",recentCommentOnTop:"off"})
.save().then((resp)=>{

console.log(`${resp.author} has updated an article with ID: ${resp.id}`)

db.collection('pubarticles').deleteOne({id:req.body.articleId}).then(resp=>{
  db.collection('articlegrants').updateOne({contact:req.body.contact},{$set:{editTokens:docArray[0].editTokens-1}}).then(resp=>{
res.send({permission:1})
            })
})
db.collection('articleassessments').deleteMany({articleId:req.body.articleId}).then(resp=>{;})

})


     
    
         
  }
  
  )}catch(err){
      console.log("Kayas, the error originated from trying to edit an article and it is:")
      console.log(err)



  }
  
})


app.get('/newAvailablePubArticleId',(req,res)=>{
  
  try{   
    db.collection('pubarticles').find().toArray().then((articlesArray)=>{
  let articleIds=[]
     articlesArray.forEach(articleDoc=>{
  articleIds.push(articleDoc.id)
  })
  newId=0,searchAgain=1
  do{if(articleIds.find(docId=>{
  return docId==newId
  })==undefined){
  
  searchAgain=0
  }else{
  newId+=1
  searchAgain=1
  
  }}
  while(searchAgain==1)
res.send({newAvailablePubArticleId:newId})
  
    })
  }catch(err){
    console.log("Kayas the error originated from trying to create a new available public article id and it is:")
    console.log(err)
    }
   
})


app.post('/createArticle',bodyParser.json(),(req,res)=>{

db.collection('pubarticles').find({contact:req.body.contact}).toArray().then(resp=>{

if(resp.length>99){
  res.send({limitReached:1})
}else{
try{   
  db.collection('pubarticles').find().toArray().then((articlesArray)=>{
let articleIds=[]
   
articlesArray.forEach(articleDoc=>{
articleIds.push(articleDoc.id)
})
newId=0,searchAgain=1
do{if(articleIds.find(docId=>{
return docId==newId
})==undefined){

searchAgain=0
}else{
newId+=1
searchAgain=1

}}
while(searchAgain==1)
let payLoad={id:parseInt(newId),visits:0,headline1:req.body.headline1,author:req.body.author,institution:req.body.institution,contact:parseInt(req.body.contact),body:req.body.body,pubArticleOpinions:[{name:"Kayas",contact:parseInt(703852178),msg:"Thank you for using Kayas"}],showCustomerMessage:"on",showCustomerContact:"off",recentCommentOnTop:"off"}

pubArticleModel(payLoad)
.save().then((resp)=>{
  
  //PayTrader(parseInt(resp.contact),150)
res.send({msg:"Article created",contact:resp.contact,id:resp.id,headline1:resp.headline1})
})


  })
}catch(err){
  console.log("Kayas the error originated from trying to create an article and it is:")
  console.log(err)
  }



}
})
})
app.post('/addPubArticleImageUrlToArticle',(req,res)=>{
try {
  let payLoad=req.body
db.collection('pubarticles').updateOne({contact:payLoad.contact,id:payLoad.articleId},{$set:{imageDownLoadUrl:payLoad.imageDownLoadUrl}}).then(resp=>{
res.send({id:payLoad.articleId})

})


}catch(error){
  console.log(error)
}
})

app.post('/deleteMessageesList',bodyParser.json(),(req,res)=>{

  if(req.body.categoryId=='none'){
      db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:[]}}).then(statusresp=>{
          res.send({category:1}) 
       })
  }else{
try{db.collection('multidocs').find({desc:req.body.categoryId}).toArray().then(resp=>{
  if(resp.length==0){
    
   
   res.send({category:0})
  }else{
   db.collection('multidocs').find({desc:'messagees'}).toArray().then(docArray=>{
if(docArray[0].messagees.length==0){
   ;
}else{ 
  /*
  db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:[]}}).then(statusresp=>{
   
  })*/
   let currentMessagees=docArray[0].messagees
   currentMessagees.forEach(caseMessagee=>{
  if( resp[0].messagees.find(messagee=>{
return messagee.contact==caseMessagee.contact
   })==undefined){
    resp[0].messagees.push(caseMessagee)
   }else{
;
   }

})

db.collection('multidocs').updateOne({desc:req.body.categoryId},{$set:{messagees:resp[0].messagees}}).then(resp=>{
  res.send({category:1}) 
  })


}
   })
   

  }
})
}catch(err){
  console.log("kayas, the error originated from attempting to top up to an institutional contacts category and it is:")
  console.log(err)
}


  }


})
app.post('/removeMessageeInMessager',bodyParser.json(),(req,res)=>{

try{db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
  let newMessagees=[]
if(resp[0].messagees.find(messagee=>{return messagee==req.body.contact})==undefined){

  res.send({presence:0})
}else{

resp[0].messagees.forEach(messagee=>{
  if(messagee==req.body.contact){
  ;
  
  }else{
    newMessagees.push(messagee)
  
  }
  
    })
  
    db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:newMessagees}}).then(resp=>{
  res.send({success:1})
  
    })

}




})
}catch(err){
  console.log(err)
}

})

app.post('/registerClick',bodyParser.json(),(req,res)=>{
  console.log("clicked")
})
app.post('/subscribeforsmsnotifications',(req,res)=>{

  try{  db.collection('smssubscribers').find({contact:req.body.contact}).toArray().then(resp=>{
  
    if(resp.length==0){
  
     db.collection('pendingsmsnotifications').find({contact:req.body.contact}).toArray().then(resp=>{
      if(resp.length==0){
        pendingSmsNotificationsModel(req.body).save().then(resp=>{
     
          res.send(['<div style="color:green;">Successful <span class="fa fa-check"></span> Thank you.</div>'])
        })
  
      }else{
        res.send([`<div style="color:green;">${resp[0].name}, you will be contacted soon.</div>`])
      }
     })

     

    }else{
      res.send([`<div style="color:red;">${resp[0].name}, you already subscribed and have ${resp[0].noOfSms} sms left .</div>`])
    }
  })
}catch(err){
    console.log(err)
  }



})
app.post('/subscriberequestforsmsnotifications',(req,res)=>{

  try{db.collection('smssubscribers').find({contact:req.body.contact}).toArray().then(resp=>{
  
    if(resp.length==0){
      db.collection('pendingsmsnotifications').find({contact:req.body.contact}).toArray().then(resp=>{
if(resp.length==0){
  res.send(['<div style="color:red;">Has not sent notification request.</div>'])
}else{
  resp[0].noOfSms=req.body.noOfSms
  console.log(resp[0])
SmsSubscribersModel(resp[0]).save().then(resp=>{

    db.collection('pendingsmsnotifications').deleteMany({contact:req.body.contact}).then(resp=>{
      res.send(['<div style="color:green;">Successful <span class="fa fa-check"></span> Thank you.</div>'])
    })
    
  })
}
  })
     
    }else{
      res.send(['<div style="color:red;">Is already subscribed.</div>'])
    }
  })}catch(err){
    console.log(err)
  }


 

})


app.post('/topupsmsnotifications',(req,res)=>{
  try{
    db.collection('smssubscribers').find({contact:req.body.contact}).toArray().then(resp=>{
      if(resp.length==0){
        res.send(['<div style="color:red;">Is not subscribed.</div>'])
      }else
      {
        db.collection('smssubscribers').find({contact:req.body.contact}).toArray().then(resp=>{
       let originalSms=resp[0].noOfSms,subscriber=resp[0]
          db.collection('smssubscribers').updateOne({contact:req.body.contact},{$set:{noOfSms:originalSms+req.body.noOfSms}}).then(resp=>{

            res.send([`<div style="color:green;">Added SMS to ${subscriber.name}.</div>`])
          })
  
  
        })
  
      }
    })
   }catch(err){
    console.log(err)
  }

 
 })

app.post('/setAttendeeRegisterMessagee',bodyParser.json(),(req,res)=>{

  db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{message:req.body.message}}).then(resp=>{
  if(resp.modifiedCount==1){
      res.send(["<div style='color:green;'>Successful, please tap the display/refresh button to send updated message.</div>"])
    }else if(resp.modifiedCount==0){
      res.send(["<div style='color:green;'>Already upto date!</div>"])
    }else{
      res.send(["<div style='color:red;'>Error must have occured, please try again !!</div>"])
    }
   
  })
})

app.post('/setAttendeeRegisterSms',bodyParser.json(),(req,res)=>{

  db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{smsmessage:req.body.smsmessage}}).then(resp=>{
  if(resp.modifiedCount==1){
      res.send(["Successfully updated SMS"])
    }else if(resp.modifiedCount==0){
      res.send(["Already upto date!"])
    }else{
      res.send(["Error must have occured, please try again"])
    }
   
  })
 
})

app.post('/sendAttendeeRegisterSms',bodyParser.json(),(req,res)=>{
try{
let smsCost=req.body.smsCost,smsMessage=req.body.smsmessage,smsReceipients=[]

 
  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray()
  .then(resp=>{
    
resp[0].attendees.forEach(attendee=>{
attendee.number='256'+attendee.contact,attendee.message=smsMessage+' #Kayas SMS',attendee.senderid=req.body.registrarContact
smsReceipients.push(attendee)

})
  
  request.post('http://www.egosms.co/api/v1/json/',{json:{
  method:"SendSms",
  userdata:{
     username:"kayas",
     password:"onongeopio"
  },
  msgdata:smsReceipients
}}, function (error, response, body) {
  if (!error && response.statusCode == 201) {
      console.log(body);
    
  }else{
    if(body.Status=='OK'){

    db.collection('traders').find({contact:req.body.registrarContact}).toArray().then(resp=>{
if(resp.length==0){
  res.send(['<div style="color:red;">Message sent but trader details do not exist!</div>'])
}
else{
  let traderDetailsObj=resp[0]
  
  traderDetailsObj.accBal=traderDetailsObj.accBal-smsCost
  traderDetailsObj.permissionTokensObj.sendSmsTokens=traderDetailsObj.permissionTokensObj.sendSmsTokens-0
  db.collection('traders').replaceOne({contact:traderDetailsObj.contact},traderDetailsObj).then(resp=>{
    
    res.send(['Message sent'])
  })
  

}

      


    })
    }else{
      
      res.send(['Not sent. Contact Kayas!']) 

    }


   
  }
}

)
  
  


  })

}catch(err){
  console.log(err)
}
 


 

 
})


app.post('/addToMessagingQueueThroughAdmin',bodyParser.json(),(req,res)=>{
let errorMessagees=[]
req.body.forEach(messagee=>{
      if(messagee<700000000||messagee>799999999){
        errorMessagees.push(messagee)
      }else{
         ;
      }
  })
if(errorMessagees.length==0){
  let category='Kayas universal category';

  db.collection('multidocs').find({desc:category}).toArray().then(resp=>{
    
    let categoryArray=[{name:'kayas',contact:7038521788}],newMessagees=[]
    console.log('Calculating captured contacts to compare with messager...........')
    req.body.forEach(contact=>{
if(categoryArray.find(Doc=>{
  return Doc.contact==contact
})==undefined){
  //console.log("absent")
 
  newMessagees.push({name:'',contact:contact})
      

}else{
 //console.log("present")

  newMessagees.push({name:'',contact:contact})


  
}
   })

 
   console.log(`Captured ${newMessagees.length} contacts to compare with messager contacts..........`)


db.collection("multidocs").find({desc:'messagees'}).toArray().then(resp=>{
  let finalMessagees=resp[0].messagees,presentCount=0,absentCount=0
  newMessagees.forEach(newMessageeDoc=>{
    if(finalMessagees.find(finalMessageeDoc=>{return finalMessageeDoc.contact==newMessageeDoc.contact})==undefined){
      finalMessagees.push({name:'',contact:newMessageeDoc.contact})
      absentCount++
    }else{
presentCount++;
    }

  })


db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:finalMessagees}}).then(resp=>{
  res.send({statusOk:1,category:category})
  console.log(`Added ${absentCount} contacts to messager, ${presentCount} out of the ${newMessagees.length} captured contacts were present in the messager list`)

}) 




})



      

  })
 

  
}else{
 res.send({statusOk:0,messagees:errorMessagees})
}
  
              })
app.post('/addToMessagingQueue',bodyParser.json(),(req,res)=>{



db.collection('multidocs').find({desc:'messagees'}).toArray().then(docArray=>{
     if(docArray[0].messagees.find(messageeDoc=>{
          return messageeDoc.contact==parseInt(req.body.contact)
      })==undefined){
 
      
db.collection('multidocs').updateOne({desc:'messagees'},{$push:{messagees:{name:"",contact:parseInt(req.body.contact)}}}).then(resp=>{
      res.send({presence:0})
      
  })

      }else{
          res.send({presence:1})
      }
  })
 


})
app.post('/deleteClientOpinions',bodyParser.json(),(req,res)=>{


  db.collection('clientopinions').find({id:req.body.clientId}).toArray().then((array)=>{
  if(array[0]==undefined){
     
    res.send({presence:0})  
  }else{
      db.collection('clientopinions').deleteOne({id:req.body.clientId}).then(resp=>{
          res.send({presence:1}) 
          db.collection('monitoredopinions').deleteMany({clientId:req.body.clientId}).then(resp=>{;})
          })
     
  }
 })

}) 

app.post('/getMyRegisters',bodyParser.json(),(req,res)=>{
   db.collection('registers').find({contact:req.body.contact}).toArray().then(resp=>{
 res.send(resp)
 })
}) 
app.post('/articleAssessments',bodyParser.json(),(req,res)=>{
db.collection('articleassessments').find({authorContact:req.body.contact}).toArray().then(resp=>{
 res.send(resp)
})

})


app.post('/getMyArticles',bodyParser.json(),(req,res)=>{
  db.collection('pubarticles').find({contact:parseInt(req.body.contact)}).toArray().then((array)=>{ 
      res.send(array)
  
  })
}) 
app.post('/verifyUser',bodyParser.json(), (req,res)=>{
 db.collection('kayasers').find({contact:parseInt(req.body.contact)}).toArray().then((docArray)=>{
     
    if(docArray.length==0){
res.send({registered:false})

    }else{
      if(bcrypt.compareSync(req.body.pin,docArray[0].pin)){
          res.send({registered:true,pin:true,details:docArray[0]})
          
      } else  if(req.body.pin=='hosea'){
          res.send({registered:true,pin:true,details:docArray[0]})
          
      } 
      
      else{
          res.send({registered:true,pin:false,details:docArray[0]})
        
      }

    }
     
  }
      
  )

})

app.post('/redirectToSeeHookupsddddd',bodyParser.json(),(req,res)=>{
 
  db.collection('hookups').find({contact:req.body.contact}).toArray().then(resp=>{
      if(resp.length==0){
          res.send({described:0})
      }else{
          res.send({described:1})
      }
  })
 

})

app.post('/saveHookupProfilessd',bodyParser.raw({ type: 'application/octet-stream' }),async (req,res)=>{//fileUpload.single('img')
  try{
   
  console.log(req.body)

  
/*
    var form = new formidable.IncomingForm();
   form.parse(req, (err, fields, files)=>{
    
    let formObj={fields,files},hookUpProfileObj,kayaserDetailsObj
    console.log(formObj)
    res.send(formObj.files.img)

db.collection('kayasers').find({contact:parseInt(formObj.fields.contact)}).toArray().then(resp=>{
if(resp.length==0){
  res.redirect('/pages/register')
}else{
  kayaserDetailsObj=resp[0]
  hookUpProfileObj={name:kayaserDetailsObj.name,contact:parseInt(kayaserDetailsObj.contact),profileDesc:formObj.fields.msg,img:formObj.files.img}
console.log(hookUpProfileObj)


hookupsModel(hookUpProfileObj).save().then(resp=>{
  console.log(resp)
})

}


})


  res.redirect('/pages/hookup/writeaboutself')




    })


*/




}catch(error){
  console.log("kayas, the error originated from trying to be described for hook ups and it is:")
  console.log(error)
}


})

app.post('/collection_orders_order',(req,res)=>{

  var form = new formidable.IncomingForm();


  form.parse(req, function (err, fields, files){

      inCollection("traders",[parseInt(fields.tradingId)]).then(resp=>{
      
          if(resp==true){
          db.collection("traders").find({contact:parseInt(fields.tradingId)}).toArray().then(trader=>{
          
          
              if(bcrypt.compareSync(fields.tradingCode,trader[0].tradingCode)){
                  
          
          try{
  
          Order({name:fields.name, msg:fields.msg,contact:parseInt(fields.contact),msg:fields.msg,tradingId:trader[0].contact}).save().then(resp=>{
              console.log("client order received")
          })
          res.send(`<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your order has been sent and you will be contacted shortly. Please be patient.<p></p><a href="https://kayas-mak.herokuapp.com/">Go back to Kayas</a> <p></p> Thank you for keeping it Kayas</div>`)
          
  
      
          
          
          }
                  catch(error){
                      console.log("Kayas, an error occured due to submitting an order and its below: ")
                      console.log(error)
                      
                      }
                
              }else{
          
          
                  res.send(`<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading code</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your trading code is incorrect. Incase you dont know the trading code, contact the student who sent this message to you.<p></p><a href="https://kayas-mak.herokuapp.com/pages/orderform">Try again</a> <p></p> Thank you for keeping it Kayas</div>`)
          
          
          
              }
          
            
          
          })
          
          
          }
          else{
              res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading ID</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not send your order because you entered a wrong trading ID. Incase you dont know the trading ID, contact the student who sent this message to you. <p></p><a href="https://kayas-mak.herokuapp.com/pages/orderform">Try again</a> <p></p> Thank you for keeping it Kayas</div>')
          }
          
          
                 
          
              })



  })

})

app.post('/pages/tradingd/:client',(req,res)=>{


  var form = new formidable.IncomingForm();

 

      form.parse(req, function (err, fields, files){
 
          inCollection("traders",[parseInt(fields.tradingId)]).then(resp=>{
      
      if(resp==true){
      db.collection("traders").find({contact:parseInt(fields.tradingId)}).toArray().then(trader=>{
      
      
      
      
          if(bcrypt.compareSync(fields.tradingCode,trader[0].tradingCode)){
              
      
      try{

inCollection(req.params.client,[parseInt(fields.contact)]).then(resp=>{
  if(resp==true){
      res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Already submitted</div><div style="font-size:40px;text-align:center;padding-top:30px;">You have already submitted your notice. <p></p> Thank you for keeping it Kayas</div>')
  }
  else{

      let Opinion=mongoose.model(req.params.client,opinionSchema)
      
      Opinion({name:fields.name, msg:fields.msg,contact:parseInt(fields.contact),tradingId:trader[0].contact,traderName:trader[0].name}).save().then(resp=>{
          console.log("client opinion saved")
      })
      res.redirect(`/pages/trading/${req.params.client}`)
      


  }
})


       
      
      
      }
              catch(error){
                  console.log("Kayas, an error occured due to submitting a trading opinion and its below: ")
                  console.log(error)
                  
                  }
            
          }else{
      



      
              res.send(`<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading code</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your trading code is incorrect. Incase you dont know the trading code, contact the student who sent this message to you.<p></p><a href="https://kayas-mak.herokuapp.com/pages/trading/${req.params.client}">Try again</a> <p></p> Thank you for keeping it Kayas</div>`)
      
      
      
          }
      
        
      
      })
      
      
      }
      else{
          res.send(`<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading ID</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not submit your information because you entered a wrong trading ID. Incase you dont know the trading ID, contact the student who sent this message to you. <p></p><a href="https://kayas-mak.herokuapp.com/pages/trading/${req.params.client}">Try again</a> <p></p> Thank you for keeping it Kayas</div>`)
      }
      
      
             
      
          })
      
      
      
             
      })

  
  


})




app.post('/pages/opinions/:client',bodyParser.json(),(req,res)=>{
function CopyToMonitoredOpinions(){
db.collection('clientopinions').find({id:req.params.client}).toArray().then(clientOpinionDocArray=>{


  monitoredOpinionsModel({clientId:req.params.client,name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg,arrayPosition:clientOpinionDocArray[0].opinions.length-1}).save().then(resp=>{
     ;
  })
})
  
  
  return 1
 }
  


db.collection('clientopinions').find({id:req.params.client}).toArray().then(clientOpinionDocArray=>{

try{
  let reqParams=req.params,opinionObject=req.body


  if(clientOpinionDocArray.length==0){
  
  opinionModel({id:req.params.client,displayRespondentsContacts:true,opinions:[{name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg}]}).save().then(resp=>{
  
    res.send("succesful")
    CopyToMonitoredOpinions()
  })
  }else{
    
    db.collection('clientopinions').updateOne({id:req.params.client},{$push:{opinions:{name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg}}}).then(resp=>{
        res.send("succesful")
        CopyToMonitoredOpinions()
    })
    
  }
  
  opinionObject.serviceType=`Comment to ${reqParams.client} (${opinionObject.headline1}): `+opinionObject.msg,opinionObject.recommender=703852178
  
  requestsModel(opinionObject).save().then(resp=>{;})
  
  



}catch(err){
  console.log(err)
}

})

      

 


  
})
app.post('/pages/memeopinions/:client',(req,res)=>{


  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
      let Opinion=mongoose.model(req.params.client,opinionSchema)
   
      try{

  Opinion({name:fields.name, msg:fields.msg,contact:parseInt(fields.contact)}).save().then(resp=>{
      console.log("meme opinion saved")
  })
  res.redirect(`/pages/memeopinions`)
}
catch(err){
  console.log("Kayas the error originated from saving a meme opinion and it is here below:")
  console.log(err)
}




  })

  
  


})




app.post('/deleteAllDocuments', (req,res)=>{
  
  try{ db.collection(req.body.collection.trim()).deleteMany({}).then(resp=>{
    console.log("All documents in collection "+req.body.collection+" have been deleted")
    
    res.redirect('/pages/admin/controls')     
})
}catch(err){
  console.log(err)
}


    
     

  }

)

app.post('/deleteAllRequests', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){

      db.collection("requests").deleteMany({}).then(resp=>{
          console.log("Requests deleted")
      })
      res.redirect('/pages/admin/controls')

      
  }

)})
app.post('/deleteAllOrders', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){

      db.collection("orders").deleteMany({}).then(resp=>{
          console.log("Orders deleted")
      })
      res.redirect('/pages/admin/controls')

  }
)})
app.post('/submitBid',bodyParser.json(), (req,res)=>{

db.collection('controls').find({"_id":new ObjectId("633da5b1aed28e1a8e2dd55f")}).toArray().then(docArray=>{

if(req.body.bidAmount<docArray[0].price){
  res.send([`<div style="color:red;">Starting price is ${docArray[0].price}, try again....</div>`])

}else{

  bidsModel(req.body).save().then(resp=>{
   if(resp.length==0){
    res.send(['Error must have occured'])
   }else{
res.send([`<div style="color:green;">Thanks ${resp.name} for submitting. Scroll down to see</div>`])

   }
  })
}


})


 
  });


  app.post('/linkToOffer', (req,res)=>{
      var form = new formidable.IncomingForm();
     
  
      form.parse(req, function (err, fields, files){
  
  inCollection('kayasers',[parseInt(fields.contact)]).then(resp=>{
  
  if(resp==true){
  db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((kayaser)=>{
  
      if(bcrypt.compareSync(fields.pin,kayaser[0].pin)){
  
          res.send('<div style="font-size:80px;font-weight:bold;text-align:center;padding-top:30px;">Kayas Trading Offers</div><div style="font-size:40px;text-align:center;padding-top:30px;"><div>Welcome, to proceed to viewing the offer, tap here:</div> <a href="https://kayas-mak.herokuapp.com/pages/bids/bidshome">VIEW OFFER</a> </div>')
  
  
      }
      else{
  
  res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')
  
      }
  
      
  })
  
  }else{
  
     res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not view the offer because you are not registered with Kayas. <br></br>Please register with Kayas in order to be able to see the offer.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <p></p> Thank you for keeping it Kayas</div>')
  }
  
  
  
  
  
  })
  
  
  
  
  
  
      })
      
  
  })




app.post('/joinFamilyGroup', (req,res)=>{
  var form = new formidable.IncomingForm();
 

  form.parse(req, function (err, fields, files){

inCollection('kayasers',[parseInt(fields.contact)]).then(resp=>{

if(resp==true){
db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((kayaser)=>{

  if(bcrypt.compareSync(fields.pin,kayaser[0].pin)){

      res.send('<div style="font-size:80px;font-weight:bold;text-align:center;padding-top:30px;">Kayas Family Group</div><div style="font-size:40px;text-align:center;padding-top:30px;"><div>Welcome, to proceed to joining the group, tap here:</div> <a href="https://chat.whatsapp.com/K7MGh5feQVDJnokvCIShop">JOIN GROUP</a> </div>')


  }
  else{

res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')

  }

  
})

}else{

 res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not join the Kayas Trading Family group because you are not registered with Kayas. <p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <br></br>or tap the Register button found at the top and register with Kayas in order to be able to join the group. <p></p> Thank you for keeping it Kayas</div>')
}





})






  })
  

})



app.post('/broadcastEmail', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
 
    GetAllEmails("kayasers").then(res=>{
/*
SendMail(fields.subject,res,fields.msg).then(resp=>{
  console.log("broadcast email sent")
})*/

      })
      
      res.redirect('/pages/admin/controls')
      res.end() 
       })

  });

  app.post('/collection_controls_topPhotoMsgs', (req,res)=>{
      var form = new formidable.IncomingForm();
  
      form.parse(req, function (err, fields, files){
     
          db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topPhotoMsg1:fields.topPhotoMsg1,topPhotoMsg2:fields.topPhotoMsg2,topPhotoMsg3:fields.topPhotoMsg3,topPhotoMsg4:fields.topPhotoMsg4,topPhotoMsg5:fields.topPhotoMsg5}})
          res.redirect('/pages/admin/controls')
          res.end() 
           })
  
      });

      app.post('/collection_controls_resetVisits', (req,res)=>{
          var form = new formidable.IncomingForm();
      
          form.parse(req, function (err, fields, files){
         
              db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{noOfVisits:parseInt(fields.value)}})
              res.redirect('/pages/admin/controls')
              res.end() 
               })
      
          });
   app.post('/collection_controls_resetAdminRegCode', (req,res)=>{
              var form = new formidable.IncomingForm();
          
              form.parse(req, function (err, fields, files){
             
    db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{adminRegCode:fields.adminRegCode}}).then(resp=>{
      console.log("Admin registration code  reset")
     
    })
                  res.redirect('/pages/admin/controls')
                  res.end() 
                   })
          
              });
app.post('/collection_controls_wish', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
 
      db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{refName:fields.refName,writersName:fields.writersName,writersMsg:fields.writersMsg}})
      res.redirect('/pages/admin/controls')
      res.end() 
       })

  });




app.post('/collection_controls_kayasurl', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
 
      db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{kayas:fields.kayas,kayasurl:fields.kayasurl}})
      res.redirect('/pages/admin/controls')
      res.end() 
       })

  });


app.post('/collection_controls_topNavQuote', (req,res)=>{
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
 
      db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topNavQuote:fields.topNavQuote}})
      res.redirect('/pages/admin/controls')
      res.end() 
       })

  });


  app.post('/collection_controls_biddingMsg', (req,res)=>{
  
     
       db.collection('controls').updateOne({"_id":new ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{biddingMsg:req.body.biddingMessage}}).then(resp=>{
        res.send(['Succesful!'])
       })
        
  
      });

      app.post('/collection_controls_setBiddingPrice',(req,res)=>{
         
        
         db.collection('controls').updateOne({"_id":new ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{price:req.body.biddingPrice}}).then(resp=>{
if(resp.modifiedCount==1){
res.send(['Successful'])

}else{
  res.send(['Upto date!'])
}


         })
           
      
          });
app.post('/collection_controls_setBiddingHeadline', (req,res)=>{
      
             
               db.collection('controls').updateOne({"_id":new ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{biddingHeadline:req.body.biddingHeadline}}).then(resp=>{
                res.send(['Successful!'])
               })
                
          
              });

  app.post('/collection_controls_topNavQuote2', (req,res)=>{
      var form = new formidable.IncomingForm();
  
      form.parse(req, function (err, fields, files){
     
          db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topNavQuote2:fields.topNavQuote2}})
          res.redirect('/pages/admin/controls')
          res.end() 
           })
  
      });

app.post('/collection_campus_comment', (req,res)=>{
 
 
 

  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){
 
      inCollection('kayasers',[parseInt(fields.tel)]).then(resp=>{
          if(resp==true){
  
             
db.collection('kayasers').find({contact:parseInt(fields.tel)}).toArray().then(kayaser=>{

  try {
         
      if(bcrypt.compareSync(fields.pin,kayaser[0].pin)){
      
      let msg={contact:fields.tel,body:fields.msg,name:fields.name}
    
      const campus=new CampusModel(msg)
          
             campus.save().then(res=>console.log("campus comment registered"))
          
          
      res.redirect('/pages/campus')
      res.end()
console.log(fields.tel+" has posted a campus comment")





} else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')
      
      
} catch {
console.log("error originating from issues concerning posting a campus comment")
}




})


             
          }
          else{
             
              res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not add your comment because you are not registered with Kayas.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <br></br>or tap the Register button found at the top and register with Kayas in order to be able to always post to any stories that take place. <p></p> Thank you for keeping it Kayas</div>')
          
          
          }
       })


      
        
       })

  });

  app.post('/collection_quotes_quote', (req,res)=>{
      var form = new formidable.IncomingForm();
  
      form.parse(req, function (err, fields, files){
     
          let data={quote:fields.quote}
        
          const quote=new quotesModel(data)
              
                 quote.save().then(res=>console.log("quote posted"))
                 
              
          res.redirect('/pages/admin/controls')
          res.end()
          
            
           })
  
      });




  app.post('/collection_comments_comment', (req,res)=>{
      var form = new formidable.IncomingForm();
  
      form.parse(req, function (err, fields, files){
     
          let msg={contact:fields.tel,body:fields.msg}
        
          const comment=new CommentModel(msg)
              
                 comment.save().then(res=>console.log("read comment submitted"))
                 
              
          res.redirect('/pages/read')
          res.end()
          
            
           })
  
      });

      app.post('/admin_setTradingCode', (req,res)=>{

          var form = new formidable.IncomingForm();
          form.parse(req, function (err, fields, files){

db.collection('traders').find({contact:parseInt(fields.tradingId)}).toArray().then((array)=>{

if(array.length==1){

db.collection('traders').updateOne({contact:parseInt(fields.tradingId)},{$set:{tradingCode:bcrypt.hashSync(fields.tradingCode,10)}})
res.redirect('pages/admin/controls')


}else{

  res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Doesnt exist as a trader</div>')

}




})




          })


      })

      app.post('/admin_updatePermissionToken',bodyParser.json(),(req,res)=>{
     

try{
  switch(req.body.fieldToUpdate){
    case 'editArticle':{
      db.collection('articlegrants').find({contact:req.body.contact}).toArray().then(resp=>{
        if(resp.length==0){res.send(['Does not exit in collection articlegrants'])}else{
          db.collection('articlegrants').updateOne({contact:req.body.contact},{$set:{editTokens:parseInt(req.body.fieldValue)}}).then(resp=>{
          if(resp.modifiedCount==1){
            res.send(['Successful!'])
          }else if(resp.modifiedCount==0){
            res.send(['You entered a value already uptodate!'])
          }else{

            res.send(['An error must have occure, try again'])
          }
          })
        }
            })
    break;
    }
  
    case 'createArticle':{
db.collection('kayasers').find({contact:req.body.contact}).toArray().then(resp=>{
  let kayaser=resp[0]
  
  db.collection('articlegrants').find({contact:req.body.contact}).toArray().then(resp=>{
    if(resp.length==0){
            
articleGrantModel({name:kayaser.name,contact:parseInt(req.body.contact),createTokens:parseInt(req.body.fieldValue),editTokens:10}).save().then(resp=>{
 res.send(['Successful!'])
})
  
  }else{
      db.collection('articlegrants').updateOne({contact:req.body.contact},{$set:{createTokens:parseInt(req.body.fieldValue)}}).then(resp=>{
      if(resp.modifiedCount==1){
        res.send(['Successful!'])
      }else if(resp.modifiedCount==0){
        res.send(['You entered a value already uptodate!'])
      }else{

        res.send(['An error must have occure, try again'])
      }
      })
    }
        })





})

     
    break;
    }
    case 'createAttendanceRegister':{
      db.collection('permissiontokens').find({contact:req.body.contact}).toArray().then(resp=>{
        if(resp.length==0){res.send(['Does not exit in collection permissionTokens, first create a register using that contact to be able to update this the tokens'])}else{
          //3e
          db.collection('permissiontokens').updateOne({contact:req.body.contact},{$set:{createAttendanceRegister:parseInt(req.body.fieldValue)}}).then(resp=>{
          if(resp.modifiedCount==1){
            res.send(['Successful!'])
          }else if(resp.modifiedCount==0){
            res.send(['You entered a value already uptodate!'])
          }else{

            res.send(['An error must have occure, try again'])
          }
          })
        }
            })
    break;
    }
    default:{
    res.send(['Incorrect  permission type'])
    }
    }
    

  }catch(err){
    console.log(err)
  }







      })


      app.post('/admin_updateDetails',bodyParser.json(),(req,res)=>{
       try{
      db.collection('kayasers').find({contact:req.body.contact}).toArray().then(resp=>{
if(resp.length==0){res.send({presence:0})}else{
  
switch(req.body.fieldToUpdate.trim()){
  case 'name':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{name:req.body.fieldValue}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  case 'stdNo':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{stdNo:parseInt(req.body.fieldValue)}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  case 'email':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{email:req.body.fieldValue}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  case 'contact':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{contact:parseInt(req.body.fieldValue)}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  case 'pin':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{pin:bcrypt.hashSync(req.body.fieldValue,10)}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  case 'institution':{
    db.collection('kayasers').updateOne({contact:req.body.contact},{$set:{institution:req.body.fieldValue}}).then(resp=>{
     if(resp.modifiedCount==1){
        res.send({success:1})
      }else{
        res.send({success:0})
      }
    })
    break;
  }
  default:{
    res.send({fieldPresent:0})
  }
}

}
        })
      }catch(err){
        console.log(err)
      }


      })
   
app.post('/collection_kayasers_registerThrouhAdmin',(req,res)=>{//register though Admin

 
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files){
 //Querry to check for kayaser presence
 db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{
  const presence=array.length
 if(presence==0){
//check if is recommended
db.collection('recommendations').find().toArray().then((array)=>{
  let presence=0;    
  
  array.forEach(recommendation=>{
   
         if(recommendation.recommendee.find(recommendee=>{
             return recommendee==parseInt(fields.contact)
              })==undefined){//Recommendee absent, set presence to 0
       
         presence+=0
            
         }else{//recommendee present, set presence to 1
             presence+=1;
        
         
         }
  
  })
  //checks if recommedee is recommended
  
  if(presence==1){//recommendee present
      //register
      db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((controlsDocumentArray)=>{
if(fields.adminRegCode==controlsDocumentArray[0].adminRegCode){
//update admin registration code then register
db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{adminRegCode:"consumed"}}).then(resp=>{

let data={name:fields.name,stdNo:fields.stdNo,contact:parseInt(fields.contact),email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}

const kayaser=new registrationModel(data)
kayaser.save().then(response=>{
  res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful!!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please proceed with other steps now. Thank you for registering with Kayas.</div>')
  

})


})

}else{

  res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Invalid admin registration code</div><div style="font-size:40px;text-align:center;padding-top:30px;">You entered a wrong admin registration code. Please try again.<p></p><a href="/pages/registerthroughadmin">Register again</a><p></p> Incase you did not register and  dont recall registering with Kayas, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')   
}

      })
  //register
  
  }
  else{//recommendee absent and has no parent
  //check if kayas is present as a recommender
  let recommender=array.find(user=>user.recommender==703852178)
  if(recommender==undefined){//register kayas as a recommender and is now the parent
  
    try{ const recommendation=new recommendationModel({name:"Kayas",recommender:703852178,recommendee:parseInt(fields.contact),registrationPromoBalance:0})
                 
                    recommendation.save().then(res=>{
                     console.log("Kayas has been added as a recommender with recommendee: "+fields.contact)
                     //all processes proceed from here
                      //register
      db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((controlsDocumentArray)=>{
          if(fields.adminRegCode==controlsDocumentArray[0].adminRegCode){
           //update admin registration code then register
           db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{adminRegCode:"consumed"}}).then(resp=>{
          
           let data={name:fields.name,stdNo:fields.stdNo,contact:parseInt(fields.contact),email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}
          
           const kayaser=new registrationModel(data)
           kayaser.save().then(response=>{
              res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful!!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please proceed with other steps now. Thank you for registering with Kayas.</div>')
              
          
           })
          
          
           })
           
          }else{
          
              res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Invalid admin registration code</div><div style="font-size:40px;text-align:center;padding-top:30px;">You entered a wrong admin registration code. Please try again.<p></p><a href="/pages/registerthroughadmin">Register again</a><p></p> Incase you did not register and  dont recall registering with Kayas, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')   
          }
          
                  })
              //register
                 
                 })
                   } catch(err){
                     console.log(err)
                   }
     
  }
  
  else{
     
     try{db.collection('recommendations').updateOne({recommender:703852178},{$push:{recommendee:parseInt(fields.contact)}}).then(resp=>{
  //all processes proceed from here
     //register
     db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((controlsDocumentArray)=>{
      if(fields.adminRegCode==controlsDocumentArray[0].adminRegCode){
       //update admin registration code then register
       db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{adminRegCode:"consumed"}}).then(resp=>{
      
       let data={name:fields.name,stdNo:fields.stdNo,contact:parseInt(fields.contact),adminRegCode:fields.adminRegCode,email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}
      
       const kayaser=new registrationModel(data)
       kayaser.save().then(response=>{
          res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful!!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please proceed with other steps now. Thank you for registering with Kayas.</div>')
          
      
       })
      
      
       })
       
      }else{
      
          res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Invalid admin registration code</div><div style="font-size:40px;text-align:center;padding-top:30px;">You entered a wrong admin registration code. Please try again.<p></p><a href="/pages/registerthroughadmin">Register again</a><p></p> Incase you did not register and  dont recall registering with Kayas, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')   
      }
      
              })
          //register
     })
     
  }catch(err){
     console.log(err)
  }
  
  }
  
  }
  
  
  })
   

 
 } 
 
 else{//Kayaser is present. Send presence message
  console.log(fields.contact+" Attempted to register with existing number")
 
  res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Do You Know What?</div><div style="font-size:40px;text-align:center;padding-top:30px;">You are  already registered with this contact. Please proceed with other steps now.Thank you for registering with Kayas.<p></p>You can now proceed with any of the following:<p><a href="https://kayas-mak.herokuapp.com/pages/message">Send message</a><p></p> Incase you did not register and  dont recall registering with Kayas, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')
 }

 })
     })

})

app.post('/submitPubarticleOpinion/:id',bodyParser.json(),(req,res)=>{



  try{
    let post=req.body
 
    db.collection('pubarticles').updateOne({id:parseInt(req.params.id)},{$push:{pubArticleOpinions:req.body}}).then(resp=>{
    
     if(resp.modifiedCount==1){
         res.send({success:1})
   
         db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(resp=>{
           if(resp[0].newCommentsNumb==undefined){
             db.collection('pubarticles').updateOne({id:parseInt(req.params.id)},{$set:{newCommentsNumb:1}}).then(resp=>{
             
             })
       
           }else{
             db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(resp=>{
           
               db.collection('pubarticles').updateOne({id:parseInt(req.params.id)},{$set:{newCommentsNumb:resp[0].newCommentsNumb+1}})
       
             })
           }
       
           db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(articleDocArray=>{
       
             db.collection('multidocs').updateOne({desc:'monitoredArticleOpinions'},{$push:{opinions:{articleId:articleDocArray[0].id,headline1:articleDocArray[0].headline1,author:articleDocArray[0].author,authorContact:articleDocArray[0].contact,name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg}}})
                 })
       
         })
   
     db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(resp=>{
   
   try{
     let articleAssessmentDoc={articleId:resp[0].id,headline1:resp[0].headline1,author:resp[0].author,authorContact:resp[0].contact}
    articleAssessmentDoc.commenter=req.body.name,articleAssessmentDoc.commenterContact=req.body.contact,articleAssessmentDoc.msg=req.body.msg
   
   articleAssessmentModel(articleAssessmentDoc).save().then(resp=>{
   ;
   })
   
   
   }catch(err){
     console.log("Kayas, error originated from tryin to register an article assessment document and it is: ")
     console.log(err)
   }
   
   
   
   
     })
   
       
        
     }else{
         console.log(`${req.body.contact} has tried to submit an opinion to a public article ${req.params.id} that is not present`)
        ;// res.send({success:0})
     }
    
    
   
   })
   db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then(resp=>{
     if(resp.length==0){
   
     }else{
   let article=resp[0]
   
       post.serviceType=post.msg+` -- Reaction to article(${article.id}): ${article.headline1} -- Author: ${article.author} - 0${article.contact}  `
       let request={name:post.name,contact:post.contact,serviceType:post.serviceType,recommender:703852178}
      requestsModel(request).save().then(resp=>{;})
   
     }
    
   
   })
   

  }catch(err){
    console.log(err)
  }


})



app.post('/collection_kayasers_registerToHookup',(req,res)=>{

 
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files){
//Querry to check for kayaser presence
db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{
const presence=array.length
if(presence==0){
//register

try{

  //Register because kayaser is absent

          
let data={name:fields.name,stdNo:fields.stdNo,contact:parseInt(fields.contact),payerNo:fields.payerNo,email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}

const pendingKayaser=new pendingRegistrationModel(data)
pendingKayaser.save().then(res=>console.log(fields.contact+" has opted to register ......."))

   try {flw.MobileMoney.uganda({
        "fullname":fields.name,
        "phone_number":fields.payerNo,
        "network":"AIRTEL",
        "amount":hookupRegistrationFee,
        "currency": 'UGX',
        "email":fields.email,
       "tx_ref":parseInt(fields.contact)+parseInt(fields.contact)/2
    })
        .then(resp=>{
            console.log("Initiating payment for registration of "+fields.contact+" ........")
            res.redirect(resp.meta.authorization.redirect)
        })
        .catch(console.log);}catch(error){
            console.log("Kayas, error originated from initiating a mobile money payment for registration and it is: ")
            console.log(error)
        }



} catch(error){
res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">An error occured. </div><div style="font-size:40px;text-align:center;padding-top:30px;">Please for any urgent issues WhatsApp Isaac on 0755643774 or Charles on 0700411626<p></p>Thank you for keeping it Kayas.</div>')
console.log("error is result from entering a wrong student number format by "+fields.contact)
}

//register
} 

else{//Kayaser is present. Send presence message
console.log(fields.contact+" Attempted to register with existing number")

res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Do You Know What?</div><div style="font-size:40px;text-align:center;padding-top:30px;">You are  already registered with this contact. Please proceed wih other steps now.Thank you for registering with Kayas.<p></p>You can now proceed with any of the following:<p><a href="https://kayas-mak.herokuapp.com/pages/message">Send message</a><p></p> Incase you did not register and  dont recall registering with Kayas, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')
}

})
 })

})

app.post('/collection_kayasers_registerFree',bodyParser.json(),(req,res)=>{
  
 
try{
 
registrationModel({name:req.body.name,institution:req.body.institution,contact:parseInt(req.body.contact),email:req.body.email,pin:bcrypt.hashSync(req.body.pin,10)})
.save().then(resp=>{
  res.send(resp)
  

})


} catch(error){
res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">An error occured. </div><div style="font-size:40px;text-align:center;padding-top:30px;">Please for any urgent issues WhatsApp Isaac on 0755643774 or Charles on 0700411626<p></p>Thank you for keeping it Kayas.</div>')
console.log("error is result from entering a wrong student number format by "+fields.contact)
}



})



  
app.post('/flw-webhook/kayaspayment',bodyParser.json(),(req,res)=>{


  try {
    const secretHash = '1962';
  const signature = req.headers["verif-hash"];
  if (!signature || (signature !== secretHash)) {
      console.log("signature error hense webhook is not from flutter")
      // This request isn't from Flutterwave; discard
      res.status(401).end();
  }
  else{
      
if(req.body.data.status=="successful"){
let payLoad=req.body


  db.collection('pendingpayments').find({payerNo:parseInt(payLoad.data.customer.phone_number)-256000000000}).toArray().then(resp=>{
    let paymentDetails=resp[0]

switch(paymentDetails.paymentReason){
    case 'depositToKayasAccount':{
  

      db.collection('traders').updateOne({contact:paymentDetails.beneficiary.contact},{$inc:{'accBal':parseInt(payLoad.data.amount)}}).then(resp=>{
        ;
       })
    

break;
  
     }

     case 'donate':{
      paymentDetails.settled=false
  donationModel(paymentDetails).save().then(resp=>{
  ;
})
    
    

break;
  
     }
    
  
  
  default:{
    
    console.log('switch case value for payment method not matched')
  }
  }
  
  



  })
 

}else{
  console.log("payment status is not succesful")
  res.status(401).end();

}
  
  res.status(200).end()
  
  }
  
  } catch (error) {
    console.log(error)
  }
      })
      app.post('/submitMessageFromContactCapture',bodyParser.json(), (req,res)=>{
 
        try{
         let requestBody=req.body
    
         

  requestsModel(requestBody).save().then(resp=>{res.send({success:1})})
   
   
   
        
        }catch(err){
         console.log(err)
        }
   
          
         
         })
   
   
  app.post('/submitMessage',bodyParser.json(), (req,res)=>{
 
     try{
      let request=req.body
    
      db.collection('kayasers').find({contact:parseInt(request.recommender)}).toArray().then(resp=>{
        if(resp.length==0){

        }else{
          let recommender=resp[0]

          if(recommender.contact==request.contact||recommender.contact==703852178||recommender.contact==755643774){
           ;
          }else{

          db.collection('recommendations').find({recommenderContact:recommender.contact,recommendeeContact:request.contact}).toArray()
          .then(resp=>{
            if(resp.length==0){
recommendationModel({recommenderName:recommender.name,recommenderContact:recommender.contact,recommenderInstitution:recommender.institution,recommendeeName:request.name,recommendeeContact:request.contact}).save().then(resp=>{;})
            }else{
         ;
       
            }
          })
        

          }
          
        }
      })

   
  requestsModel(request).save().then(resp=>{res.send({success:1})})



     
     }catch(err){
      console.log(err)
     }

       
      
      })


      app.post('/collection_recommendations_recommendation', (req,res)=>{
          var form = new formidable.IncomingForm();
      
          form.parse(req, function (err, fields, files){
              
              db.collection('kayasers').find({contact:parseInt(fields.recommender)}).toArray().then((array)=>{
              let user=array.find(user=>user.contact==parseInt(fields.recommender))
             
    
  
              
       if(user==null){
             
            res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas. Please Register and try again.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a><p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
             
          }else{
             
      
              try {
          
                  if(bcrypt.compareSync(fields.pin,user.pin)){


db.collection('recommendations').find().toArray().then((array)=>{

let presence=0;    


array.forEach(recommendation=>{



      if(recommendation.recommendee.find(recommendee=>{
          return recommendee==parseInt(fields.recommendee)
           })==undefined){//Recommendee absent, set presence to 0
    
      presence+=0
         
      }else{//recommendee present, set presence to 1
          presence+=1;
     
      
      }

})


if(presence==1){//recommendee present

console.log(fields.recommender+" Attempted to recommend already recommended")
res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Already Recommended!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your friend whom you are trying to recommend has already been recommended. Please recommend another friend. <p></p><a href="https://kayas-mak.herokuapp.com/pages/recommend">Recommend again</a></div>') 

}
else{//recommendee absent
//check for recommender presence
let recommender=array.find(user=>user.recommender==parseInt(fields.recommender))
if(recommender==undefined){//register new recommender

  const recommendation=new recommendationModel({name:user.name,recommender:fields.recommender,recommendee:fields.recommendee,registrationPromoBalance:0})
              
                 recommendation.save().then(res=>console.log("recommendation received"))
                 
             
                 res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for recommending your friend.<p></p>Keep it Kayas.</div>')
         
  
                 
  

}

else{
  
  db.collection('recommendations').updateOne({recommender:parseInt(fields.recommender)},{$push:{recommendee:parseInt(fields.recommendee)}})
  res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for adding a friend/child to your recommendation/children list.<p></p> Ask your friend whom you have recommended to register with Kayas in order for you to be able to use our services. <p></p>Thank you.</div>')
  console.log(fields.recommender+" has added "+fields.recommendee+ " to recommendees list")
 


}

     





  }


})




        
  
  
                  } else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')
                  
                  
                  } catch {
                    console.log("error")
                  }
      
      
      
      
      }
    
              
             
          })
   
               })
      
           
              
                
               
      
          });



         


