const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/api', (req, res)=>{
    res.json({
        message: 'This API'
    })
})

app.po
app.listen(5000)