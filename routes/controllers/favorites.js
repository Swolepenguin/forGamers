const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const db = require('../../models')
const isLoggedIn = require('../../middleware/isLoggedIn');

router.post('/',(req,res) =>{    
    db.favorites.findOrCreate({
      where:{
        Game: req.body.Title,
        userId: req.user.id
      }
    }).then(() => res.redirect('/faves'))
})


router.get('/',isLoggedIn,(req,res)=>{
    req.user.getFavorites().then((favorites)=>{
        res.render('faves',{favorites})
    })
  })
  
  router.delete('/',isLoggedIn,(req,res)=>{
    console.log('YOOOOOOOOOOO')
    // console.log(req)   
    db.favorites.destroy({
      where:{
        id: req.body.id
      }
    }).then(()=> res.redirect('/faves'))
    console.log('here ')
  })

// console.log('here hoe')

module.exports=router 