const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')


router.get('/', function(req,res){
    // const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-11-01,2020-12-01&platforms=18,1,7`
    const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search='cyberpunk'`
    axios.get(url)
    .then(data =>{ 
        console.log(data.data.results)
        console.log('hello1')
        res.send(data.data.results)
    })
    // console.log('hello')
    // .then(res => {
    //     console.log(res.data)
    //     res.render('main',{gData : res.data})
    // })
    // console.log('hello')
    .catch(error => res.json(error))
    console.log('hello')
})

module.exports= router

