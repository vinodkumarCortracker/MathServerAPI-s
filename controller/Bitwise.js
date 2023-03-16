const express = require('express')
const router = express.Router()

console.log('in Bitwise')

router.get('/and/:a/:b', (req, res) => {
    try {
        let a = Number(req.params.a)
        let b = Number(req.params.b)

        let result = a + b

        res.send({result})
    }
    catch (e) { res.send({ e: e.message }) }

})

router.get('/or/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a|b
        res.send({result})

    }
    catch(e){res.send({e:e.message})}
})

router.get('/not/:a',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let result = ~a
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/xor/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a^b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/lft/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a<<b
        res.send({result})
    }catch(err){console.log(err.message)}
})

router.get('/rit/:a/:b',(req,res)=>{
    try{
        let a = Number(req.params.a)
        let b = Number(req.params.b)
        let result = a>>b
        res.send({result})
    }catch(err){console.log(err.message)}
})

module.exports = router