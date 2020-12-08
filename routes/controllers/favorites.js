const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const db = require('../../models')

router.post('/faves',(req,res) =>{
    db.favorites.findOrCreate({
        game: req.body.name
    }).then(() => res.render('faves'))
})