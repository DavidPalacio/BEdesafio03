
const Http = require('http');
const express = require('express');

const Port = 3000;
let app = express();
let counterPage = 0;

//Tiempo Actual
let moment = require('moment');
let currentTime = moment().format('LLL');

app.get('/',(req, res) => {
    let response = `<h1 style="color:blue">Bienvenidos al Servidor Express de David Palacio</h1>`;
    res.status(200).send(response);
})

app.get('/visitas',(req, res) => {
    counterPage++;
    let response = `<h2>La cantidad de Visitas: ${counterPage}</h>`;
    res.status(200).send(response);
})

app.get('/fyh',(req, res) => {
    
    let response = `<h1>Bienvenidos al Servidor Express de David Palacio</h1> <p>Fecha y hora: ${currentTime}<p>`;
    res.status(200).send(response);
})

// Creamos el listen
app.listen(Port, ()=> {
    console.log(`Servidor Http escuchando en el puerto ${Port}`)
})

// (async function() {
//     const url = await ngrok.connect(Port);
//     console.log("Mi URL", url, "--> portServer:", Port);
// })();

app.on('error',err => console.log("fallo la conexion al servidor", err));
