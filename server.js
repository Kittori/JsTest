//const http = require('http');

//const server = http.createServer((req,res) => {
    //console.log('run request . . .')
    //res.setHeader('Content-Type', 'text/html');
    //res.write('<h3>Hello World!</h3>');
    //res.write('<h2>Xin chao moi nguoi</h2>');
    //res.end;
//})

//server.listen(3000,'localhost', () =>{
    //console.log('Dang chay tren server: 3000');
//})

const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Le Nguyen Hoai An')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})