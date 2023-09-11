const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://612:abcd@612.sjbodgv.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('DB connected')
})
.catch(err =>{
    console.log(err);
});



app.listen(3000,()=>{
    console.log('Server running on 3000')
})