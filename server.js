
const express=require('express')
const mongoose=require('mongoose')
const app=express()
var formidable = require('formidable');
const path=require('path')
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000

const {db} = require('./models/comment');



const Comment = require('./models/comment');
const Campus = require('./models/campus');
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
      
        const campus=new Campus(msg)
            
               campus.save().then(res=>console.log("Submitted"))
            
            
        res.redirect('/campus')
        res.end()
        
          
         })

    });





app.post('/comment',async (req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        let msg={contact:fields.tel,body:fields.msg}
      
        const comment=new Comment(msg)
            
               comment.save().then(res=>console.log("Submitted"))
               
            
        res.redirect('/read')
        res.end()
        
          
         })

    });



