const express = require('express')
const router = express.Router()
// const req = require('request')
const axios = require('axios')
require('dotenv').config()
const ejslayouts = require('express-ejs-layouts')


router.get('/', function(req,res){
    const url =`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-11-01,2020-12-01&platforms=18,1,7`
    const url2 = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2020-01-01,2020-12-31&ordering=-rating`
    axios.all([
        axios.get(url),
        axios.get(url2)
    ])
   .then(resArray => {
       console.log(resArray[1].data)
       res.render('main', {
           newGames: resArray[1].data.results.slice(0,3),
           topRated: resArray[0].data.results.slice(0,3)
       })
   })
    // .then(res => res.json(res.data.results))
    // .then(data =>{ 
    //     // console.log(data.data.results)
    //     console.log(data.data.results)
    //     res.render('main' , {newGames : data.data.results.slice(0,3)})
    // })
    // console.log('hello')
    // .then(res => {
    //     console.log(res.data)
    //     res.render('main',{gData : res.data.results})
    // })
    // console.log('hello')
    .catch(error => res.json(error))
    console.log('hello')
})




module.exports= router

