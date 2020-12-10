const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const db = require('../../models')
const isLoggedIn = require('../../middleware/isLoggedIn');

// router.post('/',(req,res) =>{
//     console.log('here hoe')
//     db.favorites.findOrCreate({
//         game: req.body.name
//     }).then(() => res.render('faves',{game}))
// })


router.get('/',isLoggedIn,(req,res)=>{
    console.log('im here')
    console.log(req.user)
    userID = req.user.dataValues.id
    db.user.findOne({where : {id : userID}}).then(allFaves =>{
        console.log('im now')
        console.log(allFaves)
        res.render('faves', {allFaves})
    })
  })

// console.log('here hoe')

module.exports=router 