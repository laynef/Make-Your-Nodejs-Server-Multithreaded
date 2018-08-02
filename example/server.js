const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello World</h1></body></html>')
})

app.listen(8080, () => {
    console.log(`Listen to http://localhost:8080`)
});