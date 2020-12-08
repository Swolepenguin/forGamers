const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const { Router } = require('express')


router.get('/',function(req,res){
    console.log('hello from synopsis controller')
    const url3= `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    axios.get(url3)
    .then((res) => {
        console.log(res.data)
        res.render('synopsis', {
            games: res.data.results
        })
    })
    .catch(error => res.json(error))
    console.log('hello')
    
})

module.exports=Router