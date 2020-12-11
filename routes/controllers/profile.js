const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const db = require('../../models')
const isLoggedIn = require('../../middleware/isLoggedIn');

router.get('/', isLoggedIn,(req,res)=>{
    // console.log(res)
    // console.log(req.user.dataValues.name)
    
    res.render('profile')
})

router.put('/', isLoggedIn,(req,res)=>{
    // console.log(res)
    console.log(req)
    console.log(req.user)
    console.log(req.user.dataValues.id)
    console.log(req.body.name)
    // console.log(req.params.id)
    // console.log(res.sessionStore)
    // console.log(res.sessionId)
    // console.log(res.complete)
    // console.log(res.writeable)
    db.user.update({
        name: req.body.name
    },{
        where:{
            id: req.user.dataValues.id
        }
    }).then(() => res.redirect('/profile'))
    
    
    
})



module.exports=router