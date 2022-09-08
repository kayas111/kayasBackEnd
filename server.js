
/*const nodemailer = require('nodemailer');
require('dotenv').config()
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
let receipient=['isaacopio16@gmail.com','kayaso.ikayas@gmail.com','onongeisaac@gmail.com']

receipient.forEach(receipient=>{
    sgMail.send({to:receipient,
    from:"kayas.makerere@gmail.com",
    subject:"Upgrading",
    text:"Sending multiple"}).then(res=>console.log("email sent")).catch(err=>{
        console.log("error is: "+ err)
    })
}
    
)*/


const nodemailer = require('nodemailer');
require('dotenv').config()
const sgMail=require("@sendgrid/mail")
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
const servicesRouter=require('./routers/services')
const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');
//serve static index file
app.use(express.static(path.join(__dirname,'/build')))
//pages router
app.use(pagesRouter)
//services router
app.use(servicesRouter)
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
   
        let msg={contact:fields.tel,body:fields.msg,date:fields.date,name:fields.name}
      
        const campus=new CampusModel(msg)
            
               campus.save().then(res=>console.log("campus comment submitted"))
            
            
        res.redirect('/pages/campus')
        res.end()
        
          
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
  if(resp.valid==true){
   
    const kayaser=new registrationModel(data)
    kayaser.save().then(res=>console.log("New Kayaser registered"))

    sgMail.send({to:fields.email,
        from:"kayas.makerere@gmail.com",
        subject:"Welcome To Kayas Makerere",
        text:"You will now be able to trade with us and make money remotely as well as acquire items from us at cheaper offers. All you need to do is recommend a friend and ask your friend to register with us so that your messages will be successfully sent through the Message Form that you will always use to request for our services like loans, purchase items as well as sell your items. Thank you for keeping it Kayas."}).then(res=>console.log("email sent")).catch(err=>{
            console.log("error is: "+ err)
        })


res.redirect('/pages/services')


}
else{
    console.log("Attempt to register with wrong email address"),
    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Wrong E-mail Address</div><div style="font-size:40px;text-align:center;padding-top:30px;">The E-mail address you have tried to register with is wrong. <p></p>Please register with your correct E-mail address<p></p>Thank you for keeping it Kayas.</div>')
   
    


}


    })
  

        }
        else{

            res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Student Number Already Registered</div><div style="font-size:40px;text-align:center;padding-top:30px;">The Student number you entered is already registered.<p></p>Incase you are sure that the student number you are trying to register with is yours, WhatsApp Isaac on 0755643774 for assistance.<p></p>Thank you for keeping it Kayas.</div>')
        }

        }




        )
   
       } else{//Kayaser is present. Send presence message
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
               
              res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
               
            }else{
               
        
                try {
            
                    if(bcrypt.compareSync(fields.pin,user.pin)){
//Check if kayaser has recommended
db.collection('recommendations').find({recommender:user.contact}).toArray().then((array)=>{
    const recommended=array.length
    if(recommended==1){//has recommended
//check if recommendee is registered i.e present in kayasers
db.collection('kayasers').find({contact:array[0].recommendee}).toArray().then((array)=>{
//if present, send request else ask user to ask recomendee to register
const presence=array.length
if(presence==1){//present, send request

                        const request=new requestsModel({name:user.name,contact:fields.contact,stdNo:user.stdNo,serviceType:fields.serviceType})
                
                   request.save().then(res=>console.log("request received"))
                   
               
                   res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  soon.<p></p><div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')
           



}else{
    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Contact Your Friend</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your message can not be sent because the friend you recommended is not registered with Kayas Makerere. Ask your friend you recommended to register with Kayas Makerere and then resend your message and it will be delivered successfully.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774 to help you out.<p></p>Thank you for keeping it Kayas.</div>')
}





})



    

         
    } else{//Ask user to recommend before sending request
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

                        db.collection('recommendations').find({recommendee:parseInt(fields.recommendee)}).toArray().then((array)=>{
                            let user2=array.find(user=>user.recommendee==parseInt(fields.recommendee))
                           
                  
                
                            
                     if(user2==null){
                           
                                      
                        const recommendation=new recommendationModel({name:user.name,recommender:fields.recommender,recommendee:fields.recommendee})
                
                   recommendation.save().then(res=>console.log("recommendation received"))
                   
               
                   res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Successful !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Thank you for recommending your friend.<p></p> Ask your friend whom you have recommended to register with Kayas Makerere in order for you to be able to use our services. <p></p>Thank you.</div>')
           
    
    
                        }else{res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Already Recommended!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your friend whom you are trying to recommend has already been recommended. Please recommend another friend.</div>') }})

          
    
    
                    } else res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Incorrect PIN !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Charles on 0700411626 or Isaac on 0755643774<p></p> Thank you for keeping it Kayas</div>')
                    
                    
                    } catch {
                      console.log("error")
                    }
        
        
        
        
        }
      
                
               
            })
     
                 })
        
             
                
                  
                 
        
            });



