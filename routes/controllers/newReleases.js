const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')


router.get('/', function(req,res){
    const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-11-01,2020-12-01&platforms=18,1,7`
    const url2 = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-01-01,2020-12-31&ordering=-rating`
    const url3= `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.game}&page=1&page_size=25`
    axios.all([
        axios.get(url),
        axios.get(url2),
        axios.get(url3)
    ])
   .then(resArray => {
       console.log(resArray[1].data)
       res.render('main', {
           newGames: resArray[1].data.results.slice(0,3),
           topRated: resArray[0].data.results.slice(0,3),
           searchedGame: resArray[2].data.results.slice(0,13)
       })
   })

    .catch(error => res.json(error))
    console.log('hello')
})




module.exports= router

