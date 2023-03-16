const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 8080
console.log('hai')

// to read values from the document.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/home',(req,res)=>{
    console.log('hai')
    const cars=['bmw','volvo']
    res.send({cars})
})

try {
    let route = require('./router');
    app.use('/mathServer', route);
}
catch (e) {
    console.log(e.message)
}

app.listen(port, (err) => {
    if (err) {
        console.log(`Error eccoured ${err.message}`)
    }
    else {
        console.log(`server running on port ${port}`)
    }
})