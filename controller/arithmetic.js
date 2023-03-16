const express = require('express');
const router = express.Router();
const math = require('math')


console.log('in arithmetic')

router.get('/add/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a+b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/sub/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a-b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/mult/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a*b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/div/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a/b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/pow/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a**b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/mod/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a%b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/inc/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let aInc = ++a
        let bInc = ++b
        res.send({aInc,bInc})
    }catch(err){console.log(err.message)}
})

router.get('/dec/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let aDec = --a
        let bDec = --b
        res.send({aDec,bDec})
    }catch(err){console.log(err.message)}
})

router.get('/home', (req, res) => {
    console.log('hai')
    const cars = ['bmw2', 'volvo2']
    res.send({ cars })
})

// router.get('/add/:a/:b', (req, res) => {
//     let a = Number(req.params.a);
//     let b = Number(req.params.b);
//     let sum = a + b;
//     res.send({ sum })
// })


module.exports = router