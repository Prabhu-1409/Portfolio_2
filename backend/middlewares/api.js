const express=require('express')
const mongoose =require('mongoose')
const user=require('../models/model')
const cors =require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err);
})
const app=express()
app.use(express.json())
app.use(cors())

app.post('/message',(req,res)=>{
    user.create(req.body).then((queries)=>res.json(queries))
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(3001,()=>{
    console.log("Connected");
})