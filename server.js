



require('dotenv').config()
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { ReturnDocument } = require('mongodb')

const {google}=require('googleapis')
const nodemailer=require('nodemailer')
const oAuth2Client= new google.auth.OAuth2(process.env.mailerId, process.env.mailerSecret, process.env.redirectURI)
oAuth2Client.setCredentials({refresh_token:process.env.refreshToken})



const emailValidator = require('deep-email-validator');

const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const app=express()
var formidable = require('formidable');
const path=require('path')
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{
    console.log("Listening on port")
    console.log(port)
}))
let opinionSchema=new mongoose.Schema({name:String,msg:String,contact:Number},{strict:false})
let Order=mongoose.model('orders',{name:{type:String,required:true},contact:{type:Number,required:true},msg:{type:String,required:true},tradingId:{type:Number,required:true}})
const {db} = require('./models/models').comments;
const quotesModel = require('./models/models').quotes;
const traderModel = require('./models/models').trader;
const recommendationModel = require('./models/models').recommendation;
const requestsModel = require('./models/models').requests;

const CommentModel = require('./models/models').comments;
const CampusModel = require('./models/models').campus;
const bidsModel = require('./models/models').bid;
const registrationModel = require('./models/models').registration;
const { ObjectId } = require('mongodb');
const pagesRouter=require('./routers/pages')

const { kMaxLength } = require('buffer');
const { CodeChallengeMethod } = require('google-auth-library')
const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');
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

        async function SendMail(Subject,Receipients,msg){
            try
             
            {
           
               let accessToken =await oAuth2Client.getAccessToken()
               const transport=nodemailer.createTransport({
           
           service:'gmail',
           auth:{
           type:'OAuth2',
           user:'kayas.makerere@gmail.com',
           clientId:process.env.mailerId,
           clientSecret:process.env.mailerSecret,
           refreshToken:process.env.refreshToken,
           accessToken:accessToken
           
           
           },
           tls:{rejectUnauthorized:false}
           
               })
           
           
           
           
           const result=await transport.sendMail({
               from:'kayas.makerere@gmail.com',
               to:Receipients,
               subject:Subject,
               text:msg
               
               
                })
           
           return result
           
            }
            catch(error){
           
           
               return error
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


app.get('/collection_controls', (req,res)=>{db.collection('controls').find({_id:ObjectId('630e1d743deb52a6b72e7fc7')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_biddingControls', (req,res)=>{db.collection('controls').find({_id:ObjectId('633da5b1aed28e1a8e2dd55f')}).toArray().then((array)=>{res.send(array)})})
app.get('/collection_bids_bids', (req,res)=>{db.collection('bids').find().sort({amount:-1}).toArray().then((array)=>{res.send(array)})})     
app.get('/collection_comments_comments', (req,res)=>{db.collection('comments').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_quotes_quotes', (req,res)=>{db.collection('quotes').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_orders_orders', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_traders_number', (req,res)=>{db.collection('traders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_orders_number', (req,res)=>{db.collection('orders').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/opinions/:client', (req,res)=>{db.collection(req.params.client).find().toArray().then((array)=>{res.send(array)})}) 

app.get('/collection_campus_comments', (req,res)=>{
db.collection('campus').find().toArray().then((array)=>{
res.send(array)})})

app.get('/collection_recommendations_recommendations', (req,res)=>{
    db.collection('recommendations').find().sort({"recommender":1}).toArray().then((array)=>{
    res.send(array)})})

    app.get('/collection_kayasers_kayasers', (req,res)=>{
        db.collection('kayasers').find().sort({"contact":1}).toArray().then((array)=>{
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
            
 





//posts to the database

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

app.post('/pages/trading/:client',(req,res)=>{
  

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
            res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading ID</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not post your amount because you entered a wrong trading ID. Incase you dont know the trading ID, contact the student who sent this message to you. <p></p><a href="https://kayas-mak.herokuapp.com/pages/bids/bidshome">Try again</a> <p></p> Thank you for keeping it Kayas</div>')
        }
        
        
               
        
            })
        
        
        
               
        })

    
    


})



app.post('/pages/opinions/:client',(req,res)=>{
  

    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
        let Opinion=mongoose.model(req.params.client,opinionSchema)
        
        Opinion({name:fields.name, msg:fields.msg,contact:parseInt(fields.contact)}).save().then(resp=>{
            console.log("client opinion saved")
        })
        res.redirect(`/pages/opinions/${req.params.client}`)

    })

    
    


})



app.post('/deleteAllBids', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){

        db.collection("bids").deleteMany({}).then(resp=>{
            console.log("Bids deleted")
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
app.post('/collection_bids_bid', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
    inCollection("traders",[parseInt(fields.tradingId)]).then(resp=>{

if(resp==true){
db.collection("traders").find({contact:parseInt(fields.tradingId)}).toArray().then(trader=>{




    if(bcrypt.compareSync(fields.tradingCode,trader[0].tradingCode)){
        

try{
    let data={contact:fields.contact,amount:parseInt(fields.bidAmount),tradingId:parseInt(fields.tradingId)}
    const bid=new bidsModel(data)
    bid.save().then(res=>console.log(fields.contact+" has submitted a bid"))
   
    res.redirect('/pages/bids/bidshome')
    res.end() 



}
        catch(error){
            console.log("Kayas, an error occured due to submitting a bid and its below: ")
            console.log(error)
            
            }
      
    }else{


        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading code</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your trading code is incorrect. Incase you dont know the trading code, contact the student who sent this message to you.<p></p><a href="https://kayas-mak.herokuapp.com/pages/bids/bidshome">Try again</a> <p></p> Thank you for keeping it Kayas</div>')



    }

  








})


}
else{
    res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong trading ID</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not post your amount because you entered a wrong trading ID. Incase you dont know the trading ID, contact the student who sent this message to you. <p></p><a href="https://kayas-mak.herokuapp.com/pages/bids/bidshome">Try again</a> <p></p> Thank you for keeping it Kayas</div>')
}


       

    })



       
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
    
       res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not view the offer because you are not registered with Kayas Makerere. <br></br>Please register with Kayas Makerere in order to be able to see the offer.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <p></p> Thank you for keeping it Kayas</div>')
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

   res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not join the Kayas Trading Family group because you are not registered with Kayas Makerere. <p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <br></br>or tap the Register button found at the top and register with Kayas Makerere in order to be able to join the group. <p></p> Thank you for keeping it Kayas</div>')
}





})






    })
    

})



app.post('/broadcastEmail', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
      GetAllEmails("kayasers").then(res=>{

SendMail(fields.subject,res,fields.msg).then(resp=>{
    console.log("broadcast email sent")
})

        })
        
        res.redirect('/pages/admin/controls')
        res.end() 
         })

    });

    app.post('/collection_controls_topPhotoMsgs', (req,res)=>{
        var form = new formidable.IncomingForm();
    
        form.parse(req, function (err, fields, files){
       
            db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topPhotoMsg1:fields.topPhotoMsg1,topPhotoMsg2:fields.topPhotoMsg2,topPhotoMsg3:fields.topPhotoMsg3,topPhotoMsg4:fields.topPhotoMsg4}})
            res.redirect('/pages/admin/controls')
            res.end() 
             })
    
        });

        app.post('/collection_controls_resetVisits', (req,res)=>{
            var form = new formidable.IncomingForm();
        
            form.parse(req, function (err, fields, files){
           
                db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{noOfVisits:parseInt(fields.value)}})
                res.redirect('/pages/admin/controls')
                res.end() 
                 })
        
            });

app.post('/collection_controls_wish', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{refName:fields.refName,writersName:fields.writersName,writersMsg:fields.writersMsg}})
        res.redirect('/pages/admin/controls')
        res.end() 
         })

    });




app.post('/collection_controls_kayasurl', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{kayas:fields.kayas,kayasurl:fields.kayasurl}})
        res.redirect('/pages/admin/controls')
        res.end() 
         })

    });


app.post('/collection_controls_topNavQuote', (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topNavQuote:fields.topNavQuote}})
        res.redirect('/pages/admin/controls')
        res.end() 
         })

    });


    app.post('/collection_controls_biddingMsg', (req,res)=>{
        var form = new formidable.IncomingForm();
    
        form.parse(req, function (err, fields, files){
       
            db.collection('controls').updateOne({"_id":ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{biddingMsg:fields.biddingMsg}})
            res.redirect('/pages/admin/controls')
            res.end() 
             })
    
        });

        app.post('/collection_controls_setBiddingPrice', (req,res)=>{
            var form = new formidable.IncomingForm();
        
            form.parse(req, function (err, fields, files){
           
                db.collection('controls').updateOne({"_id":ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{price:fields.price}})
                res.redirect('/pages/admin/controls')
                res.end() 
                 })
        
            });
            app.post('/collection_controls_setBiddingHeadline', (req,res)=>{
                var form = new formidable.IncomingForm();
            
                form.parse(req, function (err, fields, files){
               
                    db.collection('controls').updateOne({"_id":ObjectId("633da5b1aed28e1a8e2dd55f")},{$set:{biddingHeadline:fields.biddingHeadline}})
                    res.redirect('/pages/admin/controls')
                    res.end() 
                     })
            
                });

    app.post('/collection_controls_topNavQuote2', (req,res)=>{
        var form = new formidable.IncomingForm();
    
        form.parse(req, function (err, fields, files){
       
            db.collection('controls').updateOne({"_id":ObjectId("630e1d743deb52a6b72e7fc7")},{$set:{topNavQuote2:fields.topNavQuote2}})
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
               
                res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not add your comment because you are not registered with Kayas Makerere.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a> <br></br>or tap the Register button found at the top and register with Kayas Makerere in order to be able to always post to any stories that take place. <p></p> Thank you for keeping it Kayas</div>')
            
            
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

        app.post('/admin_setPin', (req,res)=>{

            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files){

db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{

if(array.length==1){

db.collection('kayasers').updateOne({contact:parseInt(fields.contact)},{$set:{pin:bcrypt.hashSync(fields.pin,10)}})
res.redirect('pages/admin/controls')


}else{

    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Doesnt exist as a kayaser</div>')

}




})




            })


        })
        app.post('/collection_traders_register', (req,res)=>{
    
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files){
inCollection('kayasers',[parseInt(fields.tradingId)]).then(resp=>{

    if (resp==true){
inCollection('traders',[parseInt(fields.tradingId)]).then(resp=>{

if(resp==true){

res.send(`<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Already registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">You have already registered as a Kayas trader. Please proceed with the next steps. <p></p><a href=${familyTradingGroupLink}>Join Trading Group</a><p></p> Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>`)
}
else{

    try{

    db.collection('kayasers').find({contact:parseInt(fields.tradingId)}).toArray().then(kayaser=>{
        if(bcrypt.compareSync(fields.pin,kayaser[0].pin)){
            let data={name:kayaser[0].name,stdNo:kayaser[0].stdNo,contact:kayaser[0].contact,email:kayaser[0].email,tradingCode:bcrypt.hashSync(fields.tradingCode,10)}
            const trader=new traderModel(data)
            trader.save().then(res=>console.log(fields.tradingId+" has registered as a new trader"))
            res.send(`<div style="font-size:80px;font-weight:bold;text-align:center;padding-top:30px;">Welcome</div><div style="font-size:40px;text-align:center;padding-top:30px;"><div> To proceed to joining the group where you will be given an advertising card, tap here:</div> <a href=${familyTradingGroupLink}>JOIN GROUP</a> </div>`)

        }
        else{
res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. <p></p><a href="https://kayas-mak.herokuapp.com/pages/trading/tradingregistration">Try again</a><p></p> Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')
        }
    })



}
catch(err){
    console.log("Kayas, the error originated from registering a trader.")
}


}

        })

    }
    else{
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a><p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
    }
})



            })
        })
    
     app.post('/collection_kayasers_register', (req,res)=>{
    
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files){
       //Querry to check for kayaser presence
       db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{
        const presence=array.length
       if(presence==0){
        //querry for StdNo presence
        db.collection('kayasers').find({stdNo:parseInt(fields.stdNo)}).toArray().then((array)=>{
        const presence=array.length
      
        if(presence==0){
         try{
        //Register because kayaser is absent
    let data={name:fields.name,stdNo:fields.stdNo,contact:fields.contact,email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}
  //if e-mail is valid, register 
   emailValidator.validate(fields.email).then((resp)=>{
    
  if(resp.valid==true||resp.valid==false){
      
    const kayaser=new registrationModel(data)
    kayaser.save().then(res=>console.log(fields.contact+" New Kayaser registered"))

  SendMail("MAKE MONEY: KAYAS MAKERERE",[fields.email],"Thank you for registering with us. You are now eligible to purchase cheaper hostel room items from us. Please read details on how you can make money as well through Kayas Makerere by reading about the Kayas Family through this link: https://kayas-mak.herokuapp.com/pages/family/familyhome. For any detailed issues or problems, you can also WhatsApp Charles on 0700411626 or Isaac on 0755643774, they are also students of Makerere University. The Kayas Makerere WhatsApp line  is 0703852178. Thank you for keeping it Kayas.")
        .then(res=>console.log("email sent to new Kayaser")).catch(err=>{
            console.log("Dear Isaac, the error resulting from sending an email to a newly regsitered Kayaser is: "+ err)
        })
        //res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Kayas Trading Offers</div><div style="font-size:40px;text-align:center;padding-top:30px;"><div>Welcome, to proceed to viewing the offer, tap here:</div> <a href="https://kayas-mak.herokuapp.com/pages/bids/bidshome">VIEW OFFER</a> </div>')
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Great !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for registering with Kayas Makerere.<p></p>You can now proceed with any of your activities on Kayas Makerere. <p></p>Thank you for keeping it Kayas.</div>')


}
else{
    
    console.log(fields.contact+" Attempt to register with wrong email address")
    res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Wrong E-mail Address</div><div style="font-size:40px;text-align:center;padding-top:30px;">The E-mail address you have tried to register with is wrong. <p></p>Please register with your correct E-mail address<p></p>Thank you for keeping it Kayas.</div>')
   
    


}


    })
} catch(error){
    res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">An error occured. </div><div style="font-size:40px;text-align:center;padding-top:30px;">Please for any urgent issues WhatsApp Isaac on 0755643774 or Charles on 0700411626<p></p>Thank you for keeping it Kayas.</div>')
    console.log("error is result from entering a wrong student number format by "+fields.contact)
}

        }
        else{
            console.log(fields.contact+" Attempt to register with already used student number")
            res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Student Number Already Registered</div><div style="font-size:40px;text-align:center;padding-top:30px;">The Student number you entered is already registered.<p></p>Incase you are sure that the student number you are trying to register with is yours, WhatsApp Isaac on 0755643774 for assistance.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register again</a></div>')
        }

        }
  

        )
   
       } else{//Kayaser is present. Send presence message
        console.log(fields.contact+" Attempted to register with existing number")
       
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Do You Know What?</div><div style="font-size:40px;text-align:center;padding-top:30px;">You are  already registered with this contact. Please proceed wih other steps now.Thank you for registering with Kayas Makerere.<p></p>You can now proceed with any of the following:<p><a href="https://kayas-mak.herokuapp.com/pages/message">Send message</a><p></p> Incase you did not register and  dont recall registering with Kayas Makerere, whatsapp Isaac on 0755643774 or Charles on 0700411626 for help.</div>')
       }
    
       })
           })
      
        })
           
    app.post('/collection_requests_service', (req,res)=>{
     
            var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){


                db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{
                let user=array.find(user=>user.contact==parseInt(fields.contact))
               
         
                
         if(user!=null){

            
            try {
            
                if(bcrypt.compareSync(fields.pin,user.pin)){
//Check if kayaser has recommended
db.collection('recommendations').find({recommender:user.contact}).toArray().then((array)=>{
const recommended=array.length
if(recommended==1||recommended==0){//has recommended, check if recommendees are registered i.e present in kayasers
  
   

 inCollection('kayasers',array[0].recommendee).then(resp=>{//this first checks if all recomendees are registered.
    if(resp==true||resp==false){


try{

db.collection('recommendations').find().toArray().then((array)=>{

    let presence=0,parent=703852178,grandParent=703852178    
    
    //finds out if the user has a parent or not.
    array.forEach(recommendation=>{//this checks if the kayaser has a parent in recommendation collection
      
            if(recommendation.recommendee.find(recommendee=>{
                return recommendee==user.contact
                 })==undefined){//this means the kayaser doesnt appear as a child in this recommendation i.e has no parent
          
            presence+=0
            //parent is Kayas Makerere by default
               
            }else{//Kayas appears as a recommendee in this recommendation hence has a parent
                presence+=1;
                //set the parent of the kayaser
                parent=recommendation.recommender
           
            
            }

    
    }
  
    
    )
  //finds out if the user has a parent or not.
    


    if(presence==1){//The kayaser has a parent
       
     

//establishing grandParent

db.collection('recommendations').find().toArray().then((array)=>{

    let presence2=0,grandParent=703852178    
    
    //finds out if the user's parent has a parent or not.
    array.forEach(recommendation=>{//this checks if the kayaser has a grand parent in recommendation collection
      
            if(recommendation.recommendee.find(recommendee=>{
                return recommendee==parent
                 })==undefined){//this means the parent(Kayaser) doesnt appear as a child in this recommendation hence no grand parent for child
          
            presence2+=0
            //Grand parent is Kayas Makerere by default
               
            }else{//Kayas(Parent) appears as a recommendee in this recommendation hence chld has a grand parent
                presence2+=1;
                //set the parent of the kayaser
                grandParent=recommendation.recommender
           
            
            }

    
    }
  
    
    )
  //finds out if the user's parent has a parent or not.
   


    if(presence2==1){//The kayaser has a grand parent. Also has a parent remeber
        

        const request=new requestsModel({name:user.name,contact:fields.contact,stdNo:user.stdNo,serviceType:fields.serviceType,attachment:fields.attachment,parent:parent,grandparent:grandParent})
            
        request.save().then(res=>console.log("saved request from "+ user.contact))
        
    
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  soon. <p></p><a href="https://kayas-mak.herokuapp.com/">Go back to Kayas</a><p></p><div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')



    }else{//the kayaser has no grand parent
       
        console.log("grand parent is kayas "+grandParent)

        const request=new requestsModel({name:user.name,contact:fields.contact,stdNo:user.stdNo,serviceType:fields.serviceType,attachment:fields.attachment,parent:parent,grandparent:grandParent})
            
        request.save().then(res=>console.log("saved request from "+ user.contact))
        
    
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  soon. <p></p><a href="https://kayas-mak.herokuapp.com/">Go back to Kayas</a><p></p><div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')



    }

})

//establishing grandParent

    }else{//the kayaser has no parent, parent is kayas hence grand parent is kayas
        console.log("no parent")
        console.log("parent is kayas "+parent)
        console.log("grand parent is kayas "+grandParent)
        const request=new requestsModel({name:user.name,contact:fields.contact,stdNo:user.stdNo,serviceType:fields.serviceType,attachment:fields.attachment,parent:parent,grandparent:grandParent})
            
        request.save().then(res=>console.log("saved request from "+ user.contact))
        
    
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  soon. <p></p><a href="https://kayas-mak.herokuapp.com/">Go back to Kayas</a><p></p><div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')


    }

})

    }catch (error){

console.log("Kayas, error resulted from registering a request: "+error)




    }

       
    }
    else{
        console.log(user.contact+" Attempted to request when friends are not registered")
        res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Contact Your Friends</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your message can not be sent because the friend or friends you recommended have not all registered with Kayas Makerere. Ask your friends you recommended to register with Kayas Makerere and then resend your message and it will be delivered successfully.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774 to help you out.<p></p>Thank you for keeping it Kayas.</div>')
    
    
    }
 })

}

else{//Ask user to recommend before sending request
    console.log(user.contact+" Attempted to request without recommending")
 res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Recommend</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please recommend a friend by filling in the recommendation Form before sending your request.<p></p> Ask the friend you have recommended to register with Kayas Makerere so that your request is delivered successfully <p></p>Thank you for keeping it Kayas.</div>')
}


}

)


} else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Kayas on 0703852178<p></p> Thank you for keeping it Kayas</div>')
                
                
} catch {
console.log("error")
}
    
    
           


            }
            
            
            else{
               
                console.log(fields.contact+" Attempted to request when is not registered")
               
                res.status(400).send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a><p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
                 
        
        
        }
      
                
               
            })
     
                 })
        
        })


        app.post('/collection_recommendations_recommendation', (req,res)=>{
            var form = new formidable.IncomingForm();
        
            form.parse(req, function (err, fields, files){
                db.collection('kayasers').find({contact:parseInt(fields.recommender)}).toArray().then((array)=>{
                let user=array.find(user=>user.contact==parseInt(fields.recommender))
               
      
    
                
         if(user==null){
               
              res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p><a href="https://kayas-mak.herokuapp.com/pages/register">Register</a><p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
               
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

    const recommendation=new recommendationModel({name:user.name,recommender:fields.recommender,recommendee:fields.recommendee})
                
                   recommendation.save().then(res=>console.log("recommendation received"))
                   
               
                   res.send('<div style="font-size:70px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for recommending your friend. You can now proceed sending a message.<p></p><a href="https://kayas-mak.herokuapp.com/pages/message">Send message</a><p></p> <p></p>Thank you.</div>')
           
    
    console.log(fields.recommender+" has registered as a new recommender")
}

else{
    
    db.collection('recommendations').updateOne({recommender:parseInt(fields.recommender)},{$push:{recommendee:parseInt(fields.recommendee)}})
    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for adding a friend/child to your recommendation/children list.<p></p> Ask your friend whom you have recommended to register with Kayas Makerere in order for you to be able to use our services. <p></p>Thank you.</div>')
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



           

