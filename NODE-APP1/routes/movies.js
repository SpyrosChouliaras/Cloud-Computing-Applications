const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('You are in movies (router)')
})

router.get('/hobbit', (req,res)=>{
    res.send('You are in hobbit movie!')
})


module.exports = router