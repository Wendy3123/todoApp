const data=require('../models/data.js')
const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index',data)
})

router.post('/',(req,res)=>{
    data.tasks.push(req.body.name)
    res.redirect('/todos')
})

router.put('/:id',(req,res)=>{
    const foundTodo=data.tasks.splice(req.params.id,1)
    data.complete.push(foundTodo[0])
    res.redirect('/todos')
})

router.delete('/:id',(req,res)=>{
    const foundTodo=data.tasks.splice(req.params.id,1)
    res.redirect('/todos')
})

module.exports = router