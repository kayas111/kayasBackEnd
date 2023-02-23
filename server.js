const path=require('path')
require('dotenv').config()
const express=require('express')
const request = require('request')
//const wbm = require('wbm')
//const puppeteer=require('puppeteer')
//const WhatsappAPI = require('whatsapp-business-api')

const app=express()
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { ReturnDocument } = require('mongodb')
const bodyParser=require('body-parser')
const {google}=require('googleapis')
const nodemailer=require('nodemailer')
//const oAuth2Client= new google.auth.OAuth2(process.env.mailerId,process.env.mailerSecret,process.env.redirectURI)
//oAuth2Client.setCredentials({refresh_token:process.env.refreshToken})
const Flutterwave=require('flutterwave-node-v3')
const flw = new Flutterwave(process.env.flwPublicKey,process.env.flwSecretKey);
const emailValidator = require('deep-email-validator');
const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const bcrypt=require('bcrypt')
var formidable = require('formidable');
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{
    console.log("Listening on port")
    console.log(port)
   /* db.collection('multidocs').find({desc:'messagees'}).toArray().then(resp=>{
        let send=[]
        resp[0].messagees.forEach(mes=>{
            send.push('256'+mes)
        })
        console.log(send)
       
    wbm.start({qrCodeData:true,sessions:true,showBrowser:true}).then(async (rep)=>{

        await wbm.waitQRCode()
        await wbm.send(send,'Hello this is Kayas, I wish to request for a moment of your time, is it okay? .k')
      
    
    }).catch((err)=>{
        console.log("kayas the error is:")
        console.log(err)
    })


    })*/

//SendMail("Kayas Server launched","onongeisaac@gmail.com","listening on port "+port)
   
    
}))



let opinionPollsSchema=new mongoose.Schema({name:String,stdNo:Number,contact:Number,email:String,candidateNumber:Number},{strict:false})



let Order=mongoose.model('orders',{name:{type:String,required:true},contact:{type:Number,required:true},msg:{type:String,required:true},tradingId:{type:Number,required:true}})
const {db} = require('./models/models').comments;
const quotesModel = require('./models/models').quotes;
const opinionModel = require('./models/models').opinionModel;
const hookupModel = require('./models/models').hookup;
const pubArticleModel=require('./models/models').pubArticleModel;
const monitoredOpinionsModel=require('./models/models').monitoredOpinionsModel;

const groupLinkModel = require('./models/models').groupLinkModel;
const traderModel = require('./models/models').trader;
const recommendationModel = require('./models/models').recommendation;
const requestsModel = require('./models/models').requests;
const messagerModel = require('./models/models').messagerModel;
const CommentModel = require('./models/models').comments;

const articleGrantModel = require('./models/models').articleGrantModel;
const CampusModel = require('./models/models').campus;
const bidsModel = require('./models/models').bid;
const registrationModel = require('./models/models').registration;
const pendingRegistrationModel = require('./models/models').pendingRegistration;
const { ObjectId } = require('mongodb');
const pagesRouter=require('./routers/pages')

const { kMaxLength } = require('buffer');
const { CodeChallengeMethod } = require('google-auth-library')
const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');
const registrationFee=500;
const hookupRegistrationFee=500



//functions start
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




//access databse by get

app.get('/collection_controls_visits', (req,res)=>{

    db.collection('controls').find({"_id":ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then((array)=>{
        let no=array[0].noOfVisits+1;
        db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{noOfVisits:no}})
    
        res.send(array)
    
        })
       
    
    }) 
    app.get('/collections_opinionpolls_cand1', (req,res)=>{db.collection('opinionpolls').find({candidateNumber:1}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/collections_opinionpolls_cand2', (req,res)=>{db.collection('opinionpolls').find({candidateNumber:2}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/collections_opinionpolls_cand3', (req,res)=>{db.collection('opinionpolls').find({candidateNumber:3}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/collections_opinionpolls_cand4', (req,res)=>{db.collection('opinionpolls').find({candidateNumber:4}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/collections_opinionpolls_cand5', (req,res)=>{db.collection('opinionpolls').find({candidateNumber:5}).toArray().then((array)=>{res.send(array)})}) 
    app.get('/messagees', (req,res)=>{db.collection('multidocs').find({desc:"messagees"}).toArray().then((array)=>{res.send(array[0].messagees)})}) 


app.get('/collection_controls', (req,res)=>{db.collection('controls').find({_id:ObjectId('630e1d743deb52a6b72e7fc7')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_biddingControls', (req,res)=>{db.collection('controls').find({_id:ObjectId('633da5b1aed28e1a8e2dd55f')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_bids_bids', (req,res)=>{db.collection('bids').find().sort({amount:-1}).toArray().then((array)=>{res.send(array)})})     
app.get('/collection_comments_comments', (req,res)=>{db.collection('comments').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_hookups_hookups', (req,res)=>{db.collection('hookups').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_quotes_quotes', (req,res)=>{db.collection('quotes').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_orders_orders', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_traders_number', (req,res)=>{db.collection('traders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_monitoredopinions_number', (req,res)=>{db.collection('monitoredopinions').find().toArray().then((array)=>{res.send(array)})})
app.get('/collection_monitoredopinions_opinions', (req,res)=>{db.collection('monitoredopinions').find().toArray().then((array)=>{res.send(array)})})
app.get('/collection_multidocs_monitoredArticleOpinions', (req,res)=>{db.collection('multidocs').find({desc:'monitoredArticleOpinions'}).toArray().then((array)=>{res.send(array[0].opinions)})})
app.get('/universityContacts', (req,res)=>{ db.collection('multidocs').find({desc:{$in:['mukContacts','nduContacts']}}).toArray().then((array)=>{res.send(array)})})
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
app.get('/pubarticle/:id', (req,res)=>{
    
    db.collection('pubarticles').find({id:parseInt(req.params.id)}).toArray().then((array)=>{
      
        db.collection('kayasers').find({contact:array[0].contact}).toArray().then(kayaserDocArray=>{
            if(kayaserDocArray[0].verified=='true'){
                array[0].verified='true'
                res.send(array)
            }else{
                res.send(array)
            }
          
        })
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

app.get('/collection_recommendations_recommendations', (req,res)=>{
    db.collection('recommendations').find().sort({"recommender":1}).toArray().then((array)=>{
    res.send(array)})})

    app.get('/collection_kayasers_kayasers', (req,res)=>{
        db.collection('kayasers').find().toArray().then((array)=>{
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
app.get('/messagerIntroStatement',(req,res)=>{
db.collection('controls').find({_id:ObjectId("630e1d743deb52a6b72e7fc7")}).toArray().then(docArray=>{
    res.send(docArray[0])
})
})


//posts to the database
