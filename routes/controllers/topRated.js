const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')




router.get('/', function(req,res){
    const url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-01-01,2020-12-31&ordering=-rating`
    axios.get(url)
    // .then(res => res.json(res.data.results))
    .then(data =>{ 
        // console.log(data.data.results)
        // console.log(data.data.results)
        res.render('main' , {topGames : data.slice(0,3)})
    })
    // console.log('hello')
    // .then(res => {
    //     console.log(res.data)
    //     res.render('main',{gData : res.data.results})
    // })
    // console.log('hello')
    .catch(error => res.json(error))
    console.log('hello5')
})