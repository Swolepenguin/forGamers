const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')
const fetch = require('node-fetch')

router.get('/', function(req,res){
    // const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-11-01,2020-12-01&platforms=18,1,7`
    const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search='cyberpunk'`
    // axios.get(url)
    fetch(url)
    // .then(data =>res.json(data))
    .then(res => res.send())
    .catch(error => res.json(error))
})

module.exports= router

