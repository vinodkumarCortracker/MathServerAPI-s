// Only one api with all functionalites.

const express = require('express');
const router = express.Router();
const math = require('math')


console.log('in arithmetic')

router.get('*', function (req, res) {
    const url = req.originalUrl;
    let arth = url.split('/').slice(-3)[0]
    let a = Number(url.split('/').slice(-3)[1]);
    let b = Number(url.split('/').slice(-3)[2]);
    // console.log(url,' ',arth,'vv')
    try {
        switch (arth) {
            case 'sub':
                let sub = a - b
                res.send({ sub })
                break;
            case 'add':
                let add = a + b
                res.send({ add })
                break;
            case 'mult':
                let mult = a * b
                res.send({ mult })
                break;
            case 'div':
                if (b == 0) {
                    res.send('Division not possible');
                    break;
                }
                let div = a / b
                res.send({ div })
                break;
            case 'mod':
                let mod = a % b
                res.send({ mod })
                break;
            case 'pow':
                let powr = a ** b
                res.send({ powr })
                break;
            case 'inc':
                let aInc = ++a
                let bInc = ++b
                res.send({ aInc, bInc })
                break;
            case 'dec':
                let aDec = --a
                let bDec = --b
                res.send({ aDec, bDec })
                break;
            
            default:
                console.log('keywords allowed :- add,sub,mult,div,pow,mod')
                res.send('keywords allowed in URL path :- add,sub,mult,div,pow,mod,inc,dec')
        }
    } catch (e) {
        console.log(e.message)
        res.send({ e:e.message })
    }
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