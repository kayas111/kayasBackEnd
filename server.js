



require('dotenv').config()
const sgMail=require("@sendgrid/mail")
const { ReturnDocument } = require('mongodb')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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

const {db} = require('./models/models').comments;
const quotesModel = require('./models/models').quotes;
const recommendationModel = require('./models/models').recommendation;
const requestsModel = require('./models/models').requests;
const CommentModel = require('./models/models').comments;
const CampusModel = require('./models/models').campus;
const registrationModel = require('./models/models').registration;
const { ObjectId } = require('mongodb');
const pagesRouter=require('./routers/pages')

const { kMaxLength } = require('buffer');
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





//functions end


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


app.get('/collection_controls', (req,res)=>{db.collection('controls').find().toArray().then((array)=>{res.send(array)})})
    
app.get('/collection_comments_comments', (req,res)=>{db.collection('comments').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_quotes_quotes', (req,res)=>{db.collection('quotes').find().toArray().then((array)=>{res.send(array)})}) 
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

//posts to the database






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





} else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Charles on 0700411626 or Isaac on 0755643774<p></p> Thank you for keeping it Kayas</div>')
        
        
} catch {
console.log("error originating from issues concerning posting a campus comment")
}




})

  
               
            }
            else{
               
                res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">You can not add your comment because you are not registered with Kayas Makerere. <br></br>Please tap the Register button found at the top and register with Kayas Makerere in order to be able to always post to any stories that take place. <p></p> Thank you for keeping it Kayas</div>')
            
            
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
         
        //Register because kayaser is absent
    let data={name:fields.name,stdNo:fields.stdNo,contact:fields.contact,email:fields.email,pin:bcrypt.hashSync(fields.pin,10)}
  //if e-mail is valid, register 
   emailValidator.validate(fields.email).then((resp)=>{
    
  if(resp.valid==true||resp.valid==false){
   
    const kayaser=new registrationModel(data)
    kayaser.save().then(res=>console.log(fields.contact+" New Kayaser registered"))

    sgMail.send({to:fields.email,
        from:"kayas.makerere@gmail.com",
        subject:"Welcome To Kayas Makerere",
        html:"Thank you for registering with Kayas. You are now eligible to buy cheaper student items from us and also receive our Don't Sleep Hungry Loans payable with an interest of 1,000/= only.<p></p><h2 style='color:green;'>How To Earn With Us</h2>You will always be given a working period of only 1 hour per day on the days that payment offers are given. We will always give you the opportunity to test your circle of friends market and also give you the opportunity to widen your market for higher payments. This offer is only present to the first 500 students who register for it with Kayas Makerere. <p></p>NB:Please Recommend a friend whom you wish to benefit from Kayas Makerere.<h2 style='color:green;'>How To Send Messages to Kayas</h2>Sending messages to Kayas is only possible when you have:<br></br>1. Registered with Kayas Makerere <br></br>2. Recommended a friend to Kayas Makerere and <br></br>3. That friend has also registered with Kayas Makerere. <p></p>The Recommendation Form is found immediately below the Registration Form and the form used for sending messages i.e. the Message Form is found immediately below the Recommendation Form.<h2 style='color:green;'>How To Join</h2>To join the Kayas Trading Team in order to receive trade updates, Just send the  message 'I wish to Join the Trade Team' through the Message Form found on our website.<p></p>For any other inquiries or help, WhatsApp Isaac on 0755643774 or Charles on 0700411626. Thank you for keeping it Kayas. "}).then(res=>console.log("email sent")).catch(err=>{
            console.log("error is: "+ err)
        })


        res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Great !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please go and check your E-mail address for details about how to earn with us as well as the offers we have for you.  <p></p>Thank you for registering with Kayas Makerere<p></p>Thank you for keeping it Kayas.</div>')


}
else{
    
    console.log(fields.contact+" Attempt to register with wrong email address")
    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Wrong E-mail Address</div><div style="font-size:40px;text-align:center;padding-top:30px;">The E-mail address you have tried to register with is wrong. <p></p>Please register with your correct E-mail address<p></p>Thank you for keeping it Kayas.</div>')
   
    


}


    })
  

        }
        else{
            console.log(fields.contact+" Attempt to register with already used student number")
            res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Student Number Already Registered</div><div style="font-size:40px;text-align:center;padding-top:30px;">The Student number you entered is already registered.<p></p>Incase you are sure that the student number you are trying to register with is yours, WhatsApp Isaac on 0755643774 for assistance.<p></p>Thank you for keeping it Kayas.</div>')
        }

        }




        )
   
       } else{//Kayaser is present. Send presence message
        console.log("Attempt to register with existing number")
        res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Do You Know What?</div><div style="font-size:40px;text-align:center;padding-top:30px;">The WhatsApp contact you tried to register with is already registered. Please proceed wih other steps.<p></p>Incase you face any further challenges or can not remeber anything, contact Isaac on 0755643774 for help.<p></p>Thank you for keeping it Kayas.</div>')
       }
    
       })
           })
      
        })
       
    
    app.post('/collection_requests_service', (req,res)=>{
     
            var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){


                db.collection('kayasers').find({contact:parseInt(fields.contact)}).toArray().then((array)=>{
                let user=array.find(user=>user.contact==parseInt(fields.contact))
               
      
    
                
         if(user==null){
            console.log(fields.contact+" Attempted to request when is not registered")
               
              res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
               
            }else{
               
        
                try {
            
                    if(bcrypt.compareSync(fields.pin,user.pin)){
//Check if kayaser has recommended
db.collection('recommendations').find({recommender:user.contact}).toArray().then((array)=>{
    const recommended=array.length
    if(recommended==1){//has recommended, check if recommendees are registered i.e present in kayasers
      
       

     inCollection('kayasers',array[0].recommendee).then(resp=>{
        if(resp==true){

            const request=new requestsModel({name:user.name,contact:fields.contact,stdNo:user.stdNo,serviceType:fields.serviceType})
                
            request.save().then(res=>console.log("request received from "+ user.contact))
            
        
            res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  soon.<p></p><div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')
    


        }
        else{
            console.log(user.contact+" Attempted to request when friends are not registered")
            res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Contact Your Friends</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your message can not be sent because the friend or friends you recommended have not all registered with Kayas Makerere. Ask your friends you recommended to register with Kayas Makerere and then resend your message and it will be delivered successfully.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774 to help you out.<p></p>Thank you for keeping it Kayas.</div>')
        
        
        }
     })









   



   



    }
   
else{//Ask user to recommend before sending request
        console.log(user.contact+" Attempted to request without recommending")
     res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Recommend</div><div style="font-size:40px;text-align:center;padding-top:30px;">Please recommend a friend by filling in the recommendation Form before sending your request.<p></p> Ask the friend you have recommended to register with Kayas Makerere so that your request is delivered successfully <p></p>Thank you for keeping it Kayas.</div>')
    }


}

)

    
 } else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Charles on 0700411626 or Isaac on 0755643774<p></p> Thank you for keeping it Kayas</div>')
                    
                    
    } catch {
    console.log("error")
    }
        
        
        
        
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
               
              res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
               
            }else{
               
        
                try {
            
                    if(bcrypt.compareSync(fields.pin,user.pin)){


db.collection('recommendations').find().toArray().then((array)=>{

let presence=0;    
array.forEach(recommendation=>{
if(recommendation.recommendee.find(recommendee=>{
    return recommendee==fields.recommendee
})==undefined){//Recommendee absent, set presence to 0

presence=0
   
}
else{//recommendee present, set presence to 1
    presence=1;
 
}

})

if(presence==1){//recommendee present

console.log(fields.recommender+" Attempted to recommend already recommended")
res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Already Recommended!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your friend whom you are trying to recommend has already been recommended. Please recommend another friend.</div>') 


}
else{//recommendee absent
//check for recommender presence
let recommender=array.find(user=>user.recommender==parseInt(fields.recommender))
if(recommender==undefined){//register new recommender

    const recommendation=new recommendationModel({name:user.name,recommender:fields.recommender,recommendee:fields.recommendee})
                
                   recommendation.save().then(res=>console.log("recommendation received"))
                   
               
                   res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for recommending your friend.<p></p> Ask your friend whom you have recommended to register with Kayas Makerere in order for you to be able to use our services. <p></p>Thank you.</div>')
           
    
    console.log(fields.recommender+" has registered as a new recommender")
}
else{
    
    db.collection('recommendations').updateOne({recommender:parseInt(fields.recommender)},{$push:{recommendee:parseInt(fields.recommendee)}})
    console.log(fields.recommender+" has added "+fields.recommendee+ " to recommendees list")
   


}

       





    }


})




          
    
    
                    } else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Charles on 0700411626 or Isaac on 0755643774<p></p> Thank you for keeping it Kayas</div>')
                    
                    
                    } catch {
                      console.log("error")
                    }
        
        
        
        
        }
      
                
               
            })
     
                 })
        
             
                
                  
                 
        
            });



