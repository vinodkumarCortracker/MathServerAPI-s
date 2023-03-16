const express = require('express')
const router = express.Router()
const { det, diag, sum, dot,transpose, multiply } = require('mathjs')

console.log('in matrix')

router.post('/diag', (req, res) => {
    try {
        
        let matrx = req.body.matrix
        let result = diag(matrx)

        res.send({ result }) 
    } catch (err) {
        res.send(err.message)
     }
})

router.post('/det', (req, res) => {
    try {
        
        let matrx = req.body.matrix
        let result = det(matrx)

        res.send({ result }) 
    } catch (err) {
        res.send(err.message)
     }
})

router.post('/sum',(req,res)=>{
    try{
        let matrix1 = req.body.matrix1
        let result = sum(matrix1)

        res.send({result})
    }catch(err){res.send(err.message)}
})

router.post('/mult',(req,res)=>{
    try{
        let matrix1 = req.body.matrix1
        let matrix2 = req.body.matrix2
        let result = multiply(matrix1,matrix2)

        res.send({result})
    }catch(err){res.send(err.message)}
})

router.post('/trans',(req,res)=>{
    try{
        let matrix1 = req.body.matrix1
        let result = transpose(matrix1)

        res.send({result})
    }catch(err){res.send(err.message)}
})

module.exports = router