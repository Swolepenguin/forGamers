const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const { Router } = require('express')


router.get('/:id',function(req,res){
    console.log('hello from synopsis controller')
    console.log(req.params.id)
    const url3= `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    axios.get(url3)
    .then((resultData) => {
        // console.log(resultData)
        res.render('synopsis', {
            game: resultData.data
        })
    })
    .catch(error => res.json(error))
    console.log('HEY OVER JERE')
    
})

module.exports=router