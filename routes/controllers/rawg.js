const express = require('express')
const router = express.Router()
const req = require('request')
const axios = require('axios')

router.get('/main', function(req,res){
    const url =`https://api.rawg.io/api/games?key=${API_KEY}dates=2020-11-01,2020-12-01&platforms=18,1,7`
    axios.get(url)
    .then(data =>res.json(data))
    .then(data => res.send(data))
    .catch(error => res.json(error))
})

