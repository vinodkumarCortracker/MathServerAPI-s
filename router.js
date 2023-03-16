const express = require('express');
const router = express.Router();

// router.get('/home', (req, res) => {
//     console.log('hai1')
//     const cars = ['bmw1', 'volvo1']
//     res.send({ cars })
// })

let arithmetic = require('./controller/arithmetic')
router.use('/arth', arithmetic)

let arithmetics = require('./controller/arithmeticSwitchCase')
router.use('/arths', arithmetics)

let bitwise = require('./controller/Bitwise')
router.use('/bit',bitwise)

let trigonometry = require('./controller/trigonometry')
router.use('/trigonometry',trigonometry)

let matrx = require('./controller/matrix')
router.use('/matrix',matrx)

console.log('inrouter')



module.exports = router;