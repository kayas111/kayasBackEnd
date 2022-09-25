const express=require('express')

const router =express.Router()
const path=require('path')
const {db} = require('../models/models').comments;

router.get('/pages/guildps', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))}) 
router.get('/pages/campus', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})
router.get('/pages/brocode', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})
router.get('/pages/quotes', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})
router.get('/pages/read', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/devs', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})
router.get('/pages/services', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))}) 

router.get('/pages/:part/:page', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })

/*
router.get('/pages/admin/requests', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })

router.get('/pages/admin/recommendations', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/admin/kayasers', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/part1/part1home', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/cu/cuhome', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/part2/part2home', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/part3/part3home', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })

router.get('/pages/admin/controls', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })

*/







module.exports=router











