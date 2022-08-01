
const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const app=express()
var formidable = require('formidable');
const path=require('path')
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000

const {db} = require('./models/models').comments;


const LoansModel = require('./models/models').loans;
const CommentModel = require('./models/models').comments;
const CampusModel = require('./models/models').campus;
const registrationModel = require('./models/models').registration;

const { ObjectId } = require('mongodb');



const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{

    console.log("Listening on port")
    console.log(port)
}))


app.use(express.static(path.join(__dirname,'/build')))


app.get('/guildps',async (req,res)=>{
   
    res.sendFile(path.join(__dirname,'/build/index.html'))
  
    
    })

app.get('/read', async (req,res)=>{
  
    res.sendFile(path.join(__dirname,'/build/index.html'))
  
    
    })

app.get('/campus',async (req,res)=>{
  
        res.sendFile(path.join(__dirname,'/build/index.html'))
      
        
        })


app.get('/readComments',async (req,res)=>{
  


     db.collection('comments').find().toArray().then((array)=>{

    res.send(array)
   
  
})

}) 

app.get('/visits',async (req,res)=>{

db.collection('counts').find({"_id":ObjectId("62e6994c1ad04843511ddb42")}).toArray().then((array)=>{
    let no=array[0].noOfVisits+1;
    db.collection('counts').updateOne({"_id":ObjectId("62e6994c1ad04843511ddb42")},{$set:{noOfVisits:no}})

    res.send(array)

    })
   

}) 




app.get('/campusComments',async (req,res)=>{

     db.collection('campus').find().toArray().then((array)=>{

        res.send(array)
       
       
    })
 
 })
 

app.post('/campus',async (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        let msg={contact:fields.tel,body:fields.msg,date:fields.date,name:fields.name}
      
        const campus=new CampusModel(msg)
            
               campus.save().then(res=>console.log("Submitted"))
            
            
        res.redirect('/campus')
        res.end()
        
          
         })

    });

app.post('/comment',async (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        let msg={contact:fields.tel,body:fields.msg}
      
        const comment=new CommentModel(msg)
            
               comment.save().then(res=>console.log("Submitted"))
               
            
        res.redirect('/read')
        res.end()
        
          
         })

    });

 app.post('/kayasers/register',  async (req,res)=>{

        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
   
            let data={name:fields.name,contact:fields.contact,pin:bcrypt.hashSync(fields.pin,10),year:fields.year}
          
           const kayaser=new registrationModel(data)
                
                   kayaser.save().then(res=>console.log("Submitted"))
                   
                
            res.redirect('/read')
                     
              
             })
  
    })
   

    app.post('/kayasers/auth',  async (req,res)=>{

        var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){
            db.collection('kayasers').find({contact:fields.contact}).toArray().then((array)=>{
            let user=array.find(user=>user.contact==fields.contact)
           


            
     if(user==null){
            console.log("no user")
          res.status(400).send('<div style="font-size:20px;">Your Contact is not Registered with Kayas Makerere University. Please Register and try again.<p></p>Incase of any detailed problems, WhatsApp Charles on 0700411626</div>')
           
        }else{
           
    
            try {
        
                if(bcrypt.compareSync(fields.pin,user.pin)){
                   
                    const loan=new LoansModel({contact:fields.contact})
            
               loan.save().then(res=>console.log("Received loan"))
               
            
               res.send('<div style="font-size:20px;">Your request has been submitted. Please be patient as you will be contacted in not more than 30 minutes. <p></p>Please note that incase you are not contacted, it means you did not save our contact (0703852178). Save our contact and send your loan request again. Thank you for keepin it Kayas</div>')
       




                } else res.send('<div style="font-size:20px;">Your PIN is incorrect. Incase you have forgotten your PIN, WhatsApp Charles on 0700411626.<p></p> Thank you for keeping it Kayas</div>')
                
                
                } catch{
                  
                }
    
    
    
    
    }
  



            
           
           
        })
 
      
        
        
  
     
  
             })
    
    })