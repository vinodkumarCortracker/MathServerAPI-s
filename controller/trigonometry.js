const express = require('express')
const router = express.Router()
const { sin, cos, tan, sec, csc, cot } = require('mathjs')


router.get('/sin/:a', (req, res) => {
    try {
        let a = Number(req.params.a)
    let result = sin(a)
    res.send({ result })
    }
    catch (err) { console.log(err.message) }
})

router.get('/cos/:a', (req, res) => {
    try {
        let a = Number(req.params.a)
        let result = cos(a)
        res.send({ result })
    }
    catch (err) { console.log(err.message) }
})

router.get('/tan/:a',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let result = tan(a)
        res.send({result})
    }
    catch (err){console.log(err.message)}
})

router.get('/sec/:a',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let result = sec(a)
        res.send({result})
    }
    catch (err){console.log(err.message)}
})

router.get('/csc/:a',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let result = csc(a)
        res.send({result})
    }
    catch (err){console.log(err.message)}
})

router.get('/cot/:a',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let result = cot(a)
        res.send({result})
    }
    catch (err){console.log(err.message)}
})
module.exports = router