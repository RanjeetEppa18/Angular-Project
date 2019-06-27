const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

const url = 'mongodb://localhost:27017/Udemy'
mongoose.connect(url,{useNewUrlParser: true})

var MyModel = mongoose.model('Courses',({ 
    item: String,
    qty: Number
 }))

const port = process.env.port || 3001

var data = []
// MyModel.insertMany([{item:'apple',qty:50},{item:'Mango',qty:60}],()=>{})

MyModel.find((err,res)=>{
    data = res
})

app.post('/api/getcourses',(req,res)=>{
    res.send(data)
})

app.post('/api/getcourse/:id',(req,res)=>{
    let pos = data.indexOf(data.find(c=> c.item === req.params.id))
    var d = []
    d["data"] = data.find(c=> c === data[pos])
    if(pos > 0) d["prev"] = data[pos-1].course
    if(pos < (data.length)-1 && pos >-1) d["next"] = data[pos+1].course
    var obj = {...d}
   return res.send(obj)
})

app.listen(port,() => {
    console.log('Listening on port '+port)
})