require('dotenv').config({path:'dot.env'})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')




const routes = require('./routes')
const server = express()
 server.use(cors()) 
 
 server.use('/',routes);


 server.use(bodyParser.urlencoded({extended:false}))
 server.listen(process.env.PORT, ()=>{
 
    console.log('servidor rodando 14:11')


 })