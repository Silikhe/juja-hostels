const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path')

const app = express();

app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.listen(3000, ()=>{
    debug('listening..')
})