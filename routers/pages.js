const express=require('express')

const router =express.Router()
const path=require('path')


router.get('/pages/:page', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))}) 

//router.get('/pages/:part/:page', (req,res)=>{res.render(<div>Hello world</div>) })


router.get('/pages/:part/:page', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })

module.exports=router











