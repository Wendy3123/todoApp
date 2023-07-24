require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride =require('method-override')
const data= require('./models/data')

const{PORT=3000} = process.env

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.render('index', data)
})

app.get('/todos',(req,res)=>{
    res.render('index', data)
})

app.post('/todos',(req,res)=>{
    data.tasks.push(req.body.name)
    res.redirect('/todos')
})

app.put('/todos/:id',(req,res)=>{
    data.complete.push(
        ...data.tasks.splice(req.params.id,1)
    )
    res.redirect('/todos')
})


app.listen(PORT)