const express = require("express");
const app = express();
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
