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
app.get('/collection_counts_visits', (req,res)=>{

    db.collection('counts').find({"_id":ObjectId("62e6994c1ad04843511ddb42")}).toArray().then((array)=>{
        let no=array[0].noOfVisits+1;
        db.collection('counts').updateOne({"_id":ObjectId("62e6994c1ad04843511ddb42")},{$set:{noOfVisits:no}})
    
        res.send(array)
    
        })
       
    
    }) 

app.get('/collection_comments_comments', (req,res)=>{db.collection('comments').find().toArray().then((array)=>{res.send(array)})}) 
app.get('/collection_campus_comments', (req,res)=>{
db.collection('campus').find().toArray().then((array)=>{
res.send(array)})})
//posts to the database

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
       db.collection('kayasers').find({contact:fields.contact}).toArray().then((array)=>{
        const presence=array.length
       if(presence==0){//Register because kayaser is absent
    let data={name:fields.name,stdNo:fields.stdNo,contact:fields.contact,pin:bcrypt.hashSync(fields.pin,10)}
         const kayaser=new registrationModel(data)
         kayaser.save().then(res=>console.log("Submitted"))
    res.redirect('/pages/services')
            
       } else{//Kayaser is present. Send presence message
        res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Do You Know What?</div><div style="font-size:40px;text-align:center;padding-top:30px;">The WhatsApp contact you tried to register with has already been registered by another student.<p></p>Please register with another WhatsApp contact <p></p>Thank you for keeping it Kayas.</div>')
       }
    
       })
           })
      
        })
       
    
    app.post('/collection_requests_service', (req,res)=>{
     
            var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
                db.collection('kayasers').find({contact:fields.contact}).toArray().then((array)=>{
                let user=array.find(user=>user.contact==fields.contact)
               
      
    
                
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
                   
               
                   res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Success !!</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your request has been submitted. Please be patient as you will be contacted  with your reward of the free 10 airtel voice minutes. <p></p><div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Please Note !</div> Incase you are not contacted, it means you did not save our contact (0703852178). Save our contact as soon as possible as you wait to be contacted. <p></p> Thank you for keeping it Kayas</div>')
           



}else{
    res.send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Contact Your Friend</div><div style="font-size:40px;text-align:center;padding-top:30px;">The friend you recommended has not registered with Kayas Makerere. Ask your friend to register with Kayas Makerere so that your request is sent successfully <p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774 to help you out.<p></p>Thank you for keeping it Kayas.</div>')
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
                db.collection('kayasers').find({contact:fields.recommender}).toArray().then((array)=>{
                let user=array.find(user=>user.contact==fields.recommender)
               
      
    
                
         if(user==null){
               
              res.status(400).send('<div style="font-size:90px;font-weight:bold;text-align:center;padding-top:30px;">Not Registered !</div><div style="font-size:40px;text-align:center;padding-top:30px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626 or Isaac on 0755643774. <p></p>Thank you for keeping it Kayas.</div>')
               
            }else{
               
        
                try {
            
                    if(bcrypt.compareSync(fields.pin,user.pin)){

                        db.collection('recommendations').find({recommendee:fields.recommendee}).toArray().then((array)=>{
                            let user2=array.find(user=>user.recommendee==fields.recommendee)
                           
                  
                
                            
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

