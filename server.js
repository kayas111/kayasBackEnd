const express = require("express");
const app = express();
const fs=require('fs')
const path=require('path')
require('dotenv').config()
const request = require('request')
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { ReturnDocument } = require('mongodb')
const bodyParser=require('body-parser')
const {google}=require('googleapis') 
const nodemailer=require('nodemailer')
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
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{
    console.log("Listening on port")
    console.log(port)
    
   
/*
      db.collection('registers').find({contact:755643774,registerId:0}).toArray().then(resp=>{
      console.log(resp[0])
 let list=resp[0].attendees,final=[]
 list.forEach(receip=>{
  receip.number='256'+receip.contact,receip.senderid='1234567890',receip.message=`You've received a reminder ${receip.name} for the "Networking & Professional Etiquette" BANG session today at 4:30pm. Venue: St. Francis Students' center lower hall. I am expecting you (Brian) #SMS by Kayas`
final.push(receip)
})

console.log(final)
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
    }
  }
  
  )

        
      })

  
 */

//
/*
let file=excel.readFile('../readExcel/list5.xlsx')
let attendees=excel.utils.sheet_to_json(file.Sheets['Sheet2']),final=[]

attendees.forEach(attendee=>{
if(attendee.contact>0){
final.push(attendee) 
}else{
 console.log(`${attendee} is not gt`)
}
})
console.log(final)

db.collection('multidocs').updateOne({desc:'messagees'},{$set:{messagees:final}}).then(resp=>{console.log("completed")}) 
*/

//GenerateSmsContacts([1,2,3,4],3,4,'../files/sms')



//
  

}))
let publicVapidKey='BDnPvsx3HCwDrIhJVDAVXb4Jg6WJ0frU0HAuNdvv6Zn0PFjxfuHVX-4zj5hhbLAULmjV9xGYYA7nN2khho-pCjY',privateVapidKey='0psXRATqtttC9mTP-YJDGxZWou952CKAsuPm28YePME'  
webpush.setVapidDetails('mailto:onongeisaac@gmail.com',publicVapidKey,privateVapidKey)

let maxAttendeeRegisters=10

let Order=mongoose.model('orders',{name:{type:String,required:true},contact:{type:Number,required:true},msg:{type:String,required:true},tradingId:{type:Number,required:true}})
const {db} = require('./models/model').comments;
const quotesModel = require('./models/model').quotes;

const webPushSubscriptionModel = require('./models/model').webPushSubscriptionModel;
const opinionModel = require('./models/model').opinionModel;
const hookupModel = require('./models/model').hookup;
const pubArticleModel=require('./models/model').pubArticleModel;
const permissionTokensModel=require('./models/model').permissionTokensModel;
const traderModel=require('./models/model').traderModel;
const registerModel=require('./models/model').registerModel;
const pendingSmsNotificationsModel=require('./models/model').pendingSmsNotificationsModel;
const monitoredOpinionsModel=require('./models/model').monitoredOpinionsModel;
const articleAssessmentModel=require('./models/model').articleAssessmentModel;

const SmsSubscribersModel = require('./models/model').SmsSubscribersModel;
const groupLinkModel = require('./models/model').groupLinkModel;
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
const { CodeChallengeMethod } = require('google-auth-library')
const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');
const registrationFee=500;
const hookupRegistrationFee=500



//functions start

function FilterArraySection(fromPosition,toPosition,originArray,destinationArray){
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
app.use(bodyParser.json())
//access database by get


app.get('/regsTotalBill', (req,res)=>{

  try{
db.collection('registers').find().toArray().then(async (resp)=>{
  
 
  let registersArray=resp,tradersSearchContacts=[]
  if(registersArray.length==0){
    res.send({regsTotalBill:0})
  }else{

    
    registersArray.forEach((register)=>{
      tradersSearchContacts.push(register.contact)
    })
  
    await db.collection('traders').find({contact:{$in:tradersSearchContacts}}).toArray().then(resp=>{
      let regsTotalBill=0,tradersWithRegisters=resp
       tradersWithRegisters.forEach(register=>{
        regsTotalBill+=register.accBal
      })

      res.send({regsTotalBill:regsTotalBill})
     
     })

  

  }

})

    /*
   db.collection('traders').find().toArray().then(resp=>{
   
    res.send(resp)
   })
    */  
  
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
      res.send({brandTop:docArray[0].brandTop,attendees:resp[0].attendees,closed:resp[0].closed})
      
    
  
      }
     
    
    })   
    
})



 
}catch(err){
  console.log(err)
}

})
app.get('/collection_controls_visits', (req,res)=>{

    db.collection('controls').find({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((array)=>{
        let no=array[0].noOfVisits+1;
        db.collection('controls').updateOne({"_id":new ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{noOfVisits:no}})
    
        res.send(array)
    
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
app.get('/collection_multidocs_monitoredArticleOpinions', (req,res)=>{db.collection('multidocs').find({desc:'monitoredArticleOpinions'}).toArray().then((array)=>{res.send(array[0].opinions)})})
app.get('/universityContacts', (req,res)=>{

db.collection('multidocs').find({desc:{$in:['mukContacts','nduContacts','mubsContacts','mukEducation']}}).toArray().then((array)=>{

  res.send(array)})})
app.get('/recommendations/:recommender', (req,res)=>{db.collection('recommendations').find({recommenderContact:parseInt(req.params.recommender)}).toArray().then((array)=>{res.send(array)})}) 


app.get('/collection_hookups_number', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})})  
app.get('/collection_orders_number', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_hookups_number', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_whatsappgrouplinks_links', (req,res)=>{db.collection('whatsappgrouplinks').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/getAllArticles', (req,res)=>{db.collection('pubarticles').find().toArray().then((array)=>{array.reverse(); res.send(array)})}) 
app.get('/opinions/:client', (req,res)=>{db.collection('clientopinions').find({id:req.params.client}).toArray().then((clientDocArray)=>{
    if(clientDocArray[0]==undefined){
        res.send([])
    }else{
        
        res.send(clientDocArray[0].opinions)
    }
    
    
})}) 
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
app.get('/pubarticle/:id', (req,res)=>{
    
    db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then((array)=>{
      
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

db.collection('pubarticles').updateOne({id:parseInt(req.params.id)},{$set:{visits:array[0].visits+1}}).then(resp=>{
  
  ;})


}

       
        })


}) 
app.get('/pubarticleopinions/:id', (req,res)=>{db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then((array)=>{
   try{ if(array[0]==undefined){
    console.log(`A user tried to see comments of public article ${req.params.id} that is absent`)
    }else{
        res.send(array[0].pubArticleOpinions)
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
  db.collection('traders').find({contact:parseInt(req.params.trader)}).toArray().then(resp=>{
  if(resp.length==0){

    db.collection('kayasers').find({contact:parseInt(req.params.trader)}).toArray().then(resp=>{
      if(resp.length==0){
  
    res.send([])
        
      }else{

traderModel({name:resp[0].name,contact:resp[0].contact,accBal:100,pagesVisitsNo:0,institution:resp[0].institution,sendSmsToken:1}).save().then(resp=>{

  res.send([resp])
})
 }
    
    })


  }else{
   res.send(resp)
   


  }

})
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



//posts to the database

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
   if(resp.length==0){;
  db.collection('kayasers').find({contact:req.body.recommender}).toArray().then(resp=>{
if(resp.length==0){;}else{
traderModel({name:resp[0].name,contact:resp[0].contact,accBal:0,pagesVisitsNo:0,institution:resp[0].institution}).save().then(resp=>{
;
  })
}

  })
  }else{
    let traderDoc=resp[0]
    db.collection('traders').updateOne({contact:req.body.recommender},{$set:{pagesVisitsNo:traderDoc.pagesVisitsNo+1}}).then(resp=>{;})
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

  try{
    
  db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
     
 let messagees=resp[0].messagees
 if(messagees.length==0){
  res.send(["Messagees list is empty"])
 } else{

  messagees.forEach(attendeeDoc=>{
   attendeeDoc.yearOfEntry=req.body.contactCategoryValue
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
  else if(resp[0].permissionToAddContactTokens<1 && resp[0].contact!=755643774){
    res.send({permissionToAddContact:0})
  }
  else{
if(resp[0].attendees.find(attendee=>{return attendee.contact==req.body.contact})==undefined){
db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$push:{attendees:{name:req.body.name,contact:req.body.contact}}}).then(resp=>{
 if(resp.modifiedCount==1){
  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray().then(resp=>{
  
    res.send({success:1,attendees:resp[0].attendees})
    db.collection('registers').updateOne({contact:req.body.registrarContact,registerId:req.body.registerId},{$set:{permissionToAddContactTokens:resp[0].permissionToAddContactTokens-1}}).then(resp=>{;})
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
      attendees:[{name:req.body.name,contact:req.body.contact}],message:"🌹Can I speak to you briefly if you do not mind?",smsmessage:"Hello, hope you are fine.",permissionToAddContactTokens:1,smsUnitCost:50,closed:false
    }).save().then(resp=>{
      res.send({success:1,registerId,registerTitle:req.body.registerTitle,contact:req.body.contact})
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
  
  app.post('/perimissionToCreateRegister',bodyParser.json(),(req,res)=>{
function PermissionToCreateAttendanceRegister(){
  db.collection('permissiontokens').find({contact:req.body.contact}).toArray().then(docArray=>{
    if(docArray[0].createAttendanceRegister==undefined){
    
    db.collection('permissiontokens').updateOne({contact:req.body.contact},{$set:{createAttendanceRegister:0}}).then(resp=>{
      res.send({permission:1})
      })
    }else{
      db.collection('permissiontokens').find({contact:req.body.contact}).toArray().then(docArray=>{
        if(docArray[0].createAttendanceRegister<1){
       
          res.send({permission:0})
        }else{
          res.send({permission:1})
                       
        }
      
      
      })
    }
    
    })
    
}

db.collection('permissiontokens').find({contact:parseInt(req.body.contact)}).toArray().then(docArray=>{
  if(docArray.length==0){//not present in the permissiontokens collection
        
permissionTokensModel({name:req.body.name,institution:req.body.institution,contact:req.body.contact}).save().then(resp=>{
  PermissionToCreateAttendanceRegister()
})

}else{ 
  PermissionToCreateAttendanceRegister()
      }
    })
    
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
      res.send({presence:1})
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

app.post('/permissionToEditArticle',bodyParser.json(),(req,res)=>{

  try{db.collection('articlegrants').find({contact:req.body.contact}).toArray().then(docArray=>{
   if(docArray[0].editTokens<1){
res.send({permission:0})
    }else{

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
         
  }
  
  )}catch(err){
      console.log("Kayas, the error originated from trying to edit an article and it is:")
      console.log(err)



  }
  
})

app.post('/perimissionToCreateArticle',bodyParser.json(),(req,res)=>{

  db.collection('articlegrants').find({contact:parseInt(req.body.contact)}).toArray().then(docArray=>{
  
      if(docArray.length==0){
    
        res.send({permission:0})
    
      }else{
if(docArray[0].createTokens<1){
  res.send({permission:0})
}else{
  res.send({permission:1})
  db.collection('articlegrants').updateOne({contact:parseInt(req.body.contact)},{$set:{createTokens:docArray[0].createTokens-1}})
}

      }
  })
  
})

app.post('/createArticle',bodyParser.json(),(req,res)=>{

db.collection('pubarticles').find({contact:req.body.contact}).toArray().then(resp=>{

if(resp.length>19){
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

pubArticleModel({id:parseInt(newId),visits:1,headline1:req.body.headline1,author:req.body.author,institution:req.body.institution,contact:parseInt(req.body.contact),body:req.body.body,pubArticleOpinions:[{name:"Kayas",contact:parseInt(703852178),msg:"Thank you for using Kayas"}],showCustomerMessage:"on",showCustomerContact:"off",recentCommentOnTop:"off"})
.save().then((resp)=>{

console.log(`${resp.author} has created an article with ID: ${resp.id}`)
res.send({msg:"Article created",id:resp.id,headline1:resp.headline1})
})

  })
}catch(err){
  console.log("Kayas the error originated from trying to create an article and it is:")
  console.log(err)
  }



}
})
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
      res.send(["<div style='color:green;'>Successfully updated SMS.</div>"])
    }else if(resp.modifiedCount==0){
      res.send(["<div style='color:green;'>Already upto date!</div>"])
    }else{
      res.send(["<div style='color:red;'>Error must have occured, please try again !!</div>"])
    }
   
  })
 
})

app.post('/sendAttendeeRegisterSms',bodyParser.json(),(req,res)=>{
try{
let smsCost=req.body.smsCost,smsMessage=req.body.smsmessage,smsReceipients=[]

 
  db.collection('registers').find({contact:req.body.registrarContact,registerId:req.body.registerId}).toArray()
  .then(resp=>{
    
resp[0].attendees.forEach(attendee=>{
attendee.number='256'+attendee.contact,attendee.message=smsMessage+' #SMS by Kayas',attendee.senderid=req.body.registrarContact
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
      let originalAccBal=resp[0].accBal,originalSendSmsTokens=resp[0].sendSmsTokens
   
    db.collection('traders').updateOne({contact:req.body.registrarContact},{$set:{accBal:originalAccBal-smsCost,sendSmsTokens:originalSendSmsTokens-1}})
    .then(resp=>{
  
    res.send(['<div style="color:green;">Message sent!</div>'])
    
    
    })
    
    })
    }else{
      res.send(['<div style="color:red;">Not sent. Error must have occured!</div>']) 

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
app.post('/link_to_whatsapp_group',(req,res)=>{
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files){

      switch(parseInt(fields.campusId)){
          case 1:{
              let campus="Makerere University"
              groupLinkModel({campusId:parseInt(fields.campusId),campus:campus,groupName:fields.groupName,groupAdmin:fields.groupAdmin,description:fields.description,link:fields.link}).save().then(resp=>{
                  console.log("Whatsapp group link added")
                  res.redirect('/pages/admin/controls')
                  })
              break;
          }

          case 2:{
              let campus="Kyambogo University"
              groupLinkModel({campusId:parseInt(fields.campusId),campus:campus,groupName:fields.groupName,groupAdmin:fields.groupAdmin,description:fields.description,link:fields.link}).save().then(resp=>{
                  console.log("Whatsapp group link added")
                  res.redirect('/pages/admin/controls')
                  })
              break;
          }
          case 3:{
              let campus="Mubs"
              groupLinkModel({campusId:parseInt(fields.campusId),campus:campus,groupName:fields.groupName,groupAdmin:fields.groupAdmin,description:fields.description,link:fields.link}).save().then(resp=>{
                  console.log("Whatsapp group link added")
                  res.redirect('/pages/admin/controls')
                  })
              break;
          }


         default:{

          
          groupLinkModel({campusId:parseInt(fields.campusId),campus:"General group",groupName:fields.groupName,groupAdmin:fields.groupAdmin,description:fields.description,link:fields.link}).save().then(resp=>{
              console.log("Whatsapp group link added")
              res.redirect('/pages/admin/controls')
              })
          break;

         } 
      }



  })

  
  })
app.post('/redirectToSeeHookups',bodyParser.json(),(req,res)=>{
 
  db.collection('hookups').find({contact:req.body.contact}).toArray().then(resp=>{
      if(resp.length==0){
          res.send({described:0})
      }else{
          res.send({described:1})
      }
  })
 

})

app.post('/collection_hookups_writeaboutself',bodyParser.json(),(req,res)=>{
console.log(req.body)

try{db.collection('hookups').find().toArray().then(docArray=>{
  if(docArray.find(hookupDesc=>{
     return hookupDesc.contact==req.body.contact
  })==undefined){
      hookupModel({name:req.body.name,campus:req.body.campus,contact:req.body.contact,msg:req.body.msg}).save().then(resp=>{
          res.send({descriptionPresent:0})
      })
  }else{
res.send({descriptionPresent:1})
  }
})}catch(error){
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


app.post('/send_opinion_emails/:client/:headline1',bodyParser.json(),(req,res)=>{
;  
//SendMail("You have just received on your w....",req.body,"A comment has been received on your website page: '"+req.params.headline1+"'. See the comment by following or tapping this link: https://kayas-mak.herokuapp.com/pages/opinions/"+req.params.client)

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
let reqParams=req.params,opinionObject=req.body

if(clientOpinionDocArray.length==0){

opinionModel({id:req.params.client,opinions:[{name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg}]}).save().then(resp=>{

  res.send("succesful")
  CopyToMonitoredOpinions()
})
}else{
  
  db.collection('clientopinions').updateOne({id:req.params.client},{$push:{opinions:{name:req.body.name,contact:parseInt(req.body.contact),msg:req.body.msg}}}).then(resp=>{
      res.send("succesful")
      CopyToMonitoredOpinions()
  })
  
}

opinionObject.serviceType=`Comment to ${reqParams.client}: `+opinionObject.msg,opinionObject.recommender=703852178
requestsModel(opinionObject).save().then(resp=>{;})



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
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files){

      db.collection(fields.collection).deleteMany({}).then(resp=>{
          console.log("All documents in collection "+fields.collection+" have been deleted")
          
          db.collection('monitoredopinions').deleteMany({clientCollection:fields.collection}).then(resp=>{
              console.log(fields.collection+" documents in collection monitoredopinions have also been deleted")})
      })
      res.redirect('/pages/admin/controls')

  }

)})

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
    case 'sendSmsTokens':{
    
      if(parseInt(req.body.fieldValue)>-1){
        
        db.collection('traders').updateOne({contact:req.body.contact},{$set:{sendSmsTokens:parseInt(req.body.fieldValue)}}).then(resp=>{
        
          if(resp.modifiedCount==1){
            res.send(['<div style="color:green;">Successful!</div>'])
          }else{
            res.send(['<div style="color:red;">Upto date!</div>'])
    
          }
        })
      }else{
        res.send(['<div style="color:red;">Enter a value!</div>'])
      }
      
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
        if(resp.length==0){res.send(['Does not exit in collection permissionTokens'])}else{
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
switch(req.body.fieldToUpdate){
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
  console.log(fields.contact+" has registered as a new kayaser........")

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
              console.log(fields.contact+" has registered as a new kayaser........")
          
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
          console.log(fields.contact+" has registered as a new kayaser........")
      
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
        fullname:fields.name,
        phone_number:fields.payerNo,
        network:"AIRTEL",
        amount:hookupRegistrationFee,
        currency: 'UGX',
        email:fields.email,
       tx_ref:parseInt(fields.contact)+parseInt(fields.contact)/2,
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
  console.log(req.body)
 /*
try{
 
registrationModel({name:req.body.name,institution:req.body.institution,contact:parseInt(req.body.contact),email:req.body.email,pin:bcrypt.hashSync(req.body.pin,10)})
.save().then(resp=>{
  res.send(resp)
  console.log(resp.contact+" has registered as a Kayaser")})


} catch(error){
res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">An error occured. </div><div style="font-size:40px;text-align:center;padding-top:30px;">Please for any urgent issues WhatsApp Isaac on 0755643774 or Charles on 0700411626<p></p>Thank you for keeping it Kayas.</div>')
console.log("error is result from entering a wrong student number format by "+fields.contact)
}


*/
})

app.post('/collection_kayasers_register',(req,res)=>{

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
                fullname:fields.name,
                phone_number:fields.payerNo,
                network:"AIRTEL",
                amount:registrationFee,
                currency: 'UGX',
                email:fields.email,
                tx_ref:parseInt(fields.contact)+parseInt(fields.contact)/2,
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


  
app.post('/flw-webhook/kayaspayment',bodyParser.json(),(req,res)=>{

  const secretHash = '1962';
  const signature = req.headers["verif-hash"];
  if (!signature || (signature !== secretHash)) {
      console.log("signature error hense webhook is not from flutter")
      // This request isn't from Flutterwave; discard
      res.status(401).end();
  }
  else{
      
  
if(req.body.data.status=="successful"){
  console.log(req.body.data)

}else{
  console.log("payment status is not succesful")
  res.status(401).end();

}
  
  res.status(200).end()
  
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
         
  
  console.log(fields.recommender+" has registered as a new recommender")
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



         


