const mongoose =require('mongoose')
const express=require('express')

const app=express()
mongoose.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>{
    console.log("Connected Successfully");
}).catch((err)=>{
    console.log(err);
})
const user=new mongoose.Schema({
    email:{
        type:String,
        requied:true
    },
    message:{
        type:String,
        required:true
    }
})
 
const data=new mongoose.model('queries',user)

module.exports=data