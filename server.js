require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride =require('method-override')
const data= require('./models/data')
const PORT=process.env.PORT

app.set('views',__dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const todosController=require('./controllers/todo_controller')
app.use('/todos',todosController)

app.get('/',(req,res)=>{
    res.render('index', data)
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}`)
})