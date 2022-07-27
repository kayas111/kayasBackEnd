
const express=require('express')
const mongoose=require('mongoose')
const app=express()
var formidable = require('formidable');
const path=require('path')
const dbURI="mongodb+srv://isaac:onongeopio@cluster0.xjf8j.mongodb.net/mydb?retryWrites=true&w=majority"
const port=process.env.PORT || 4000
const fs=require('fs');
const {db} = require('./models/comment');



const Comment = require('./models/comment');
const Campus = require('./models/campus');



const StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf-8');

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>app.listen(port,()=>{

    console.log("Listening on port")
    console.log(port)
}))


app.use(express.static(path.join(__dirname,'/build')))


app.get('/guildps',(req,res)=>{
   
    res.sendFile(path.join(__dirname,'/build/index.html'))
  
    
    })

app.get('/read',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'/build/index.html'))
  
    
    })

app.get('/campus',(req,res)=>{
  
        res.sendFile(path.join(__dirname,'/build/index.html'))
      
        
        })


app.get('/readComments',(req,res)=>{
   let data=""
db.collection('comments').find().forEach(comment=>{
    data+=comment.contact+"-"+comment.body+" "+"|| "

    
    }).then(()=>{res.send(data)})


}) 






app.get('/campusComments',(req,res)=>{
    let data=""
 db.collection('campus').find().forEach(comment=>{
     data+=comment.contact+"-"+comment.date+"-"+comment.body+" "+"|| "
 
     }).then(()=>{res.send(data)})
 
 
 })


app.post('/campus',(req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        let msg={contact:fields.tel,body:fields.msg,date:fields.date}
      
        const campus=new Campus(msg)
            
               campus.save().then(res=>console.log("Submitted"))
               
            
        res.redirect('/campus')
        res.end()
        
          
         })

    });





app.post('/comment',(req,res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files){
   
        let msg={contact:fields.tel,body:fields.msg}
      
        const comment=new Comment(msg)
            
               comment.save().then(res=>console.log("Submitted"))
               
            
        res.redirect('/read')
        res.end()
        
          
         })

    });



