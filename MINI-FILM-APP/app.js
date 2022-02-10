const express = require('express')
const app = express()

const mongoose = require('mongoose')

const filmsRoute = require('./routes/films')

app.use('/films',filmsRoute)

app.get('/', (req,res)=>{
    res.send('Homepage')
})

const MURL = 'mongodb+srv://student:Dcs13153946@cluster0.2oyjy.mongodb.net/MiniFilms?retryWrites=true&w=majority'

mongoose.connect(MURL, ()=>{
    console.log('Your MongoDB connector is on ...')
})

app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})


