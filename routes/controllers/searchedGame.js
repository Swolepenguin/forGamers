const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')




router.get('/', function(req,res){
    const url3= `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.game}&page=1&page_size=25`
    axios.get(url3
        ).then(resArray =>{
            console.log('hello')
            res.render('games',{
                searchedGame: resArray.data.results.slice(0,13)
            })
        })
   })

   



module.exports= router