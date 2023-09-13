const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser'); // or express.json() for newer Express versions
const authUser = require('./routes/authentication')
const app = express()

mongoose.connect('mongodb+srv://612:abcd@612.sjbodgv.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('DB connected')
})
.catch(err =>{
    console.log(err);
});


app.use(bodyParser.json());

app.use('',)
app.listen(3000,()=>{
    console.log('Server running on 3000')
})