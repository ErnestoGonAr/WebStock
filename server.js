var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')

var app = express()
mongoose.connect('mongodb://localhost/webstock',{
    useMongoClient=true
})

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

//Archivos estaticos
app.use(express.static(path.join(__dirname,'public/dist')))

app.listen(3000,()=>{
    console.log("Server on port 3000")
})