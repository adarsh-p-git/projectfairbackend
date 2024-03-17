// loads .env file contents into process.env by default
const express = require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./Router/router')

require('./DB/connection')
//create express server

const pfServer=express()

pfServer.use(cors()) //use cors

pfServer.use(express.json()) //parse json
pfServer.use(router)

const PORT=4000 || process.env.PORT
pfServer.listen(PORT,()=>{
    console.log(`Project Fair started running  at PORT:${PORT} and waiting for the client request!!!`)
})

pfServer.get('/',(req,res)=>
{
    res.send(`<h1>Project Fair started and waiting for cleint request </h1>`)
})
