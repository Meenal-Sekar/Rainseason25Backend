
const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors')
const routerurl=require('./router/router')
app.use(express.json());//middleware
app.use(cors())
app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://meenal-sekar:VishuVishu1805@cluster0.vskqmqg.mongodb.net/final25?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log('database connected')
    }

app.listen(4000,()=>
    {
        console.log('server is up and run');
    })
    

    // 1. server connection   2. db connect  3. collection/schema  4.router

    //db-->collection--->router--->server-js