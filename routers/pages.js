const express=require('express')

const router =express.Router()
const path=require('path')
const {db} = require('../models/models').comments;

router.get('/pages/guildps', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))}) 
router.get('/pages/campus', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})

router.get('/pages/read', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })
router.get('/pages/devs', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html'))})

router.get('/pages/admin/controls', (req,res)=>{res.sendFile(path.join(__dirname,'../build/index.html')) })









module.exports=router











