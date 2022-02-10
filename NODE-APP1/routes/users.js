const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.send('You are in users')
})


router.get('/Stelios', (req,res)=>{
    res.send('You are in Stelios home page')
})

module.exports = router