
const Http = require('http');
const express = require('express');

const Port = 3000;
let app = express();

app.get('/',(req, res) => {
    res.send("Mi primer Servidor con Express")
})

// Creamos el listen
app.listen(Port, ()=> {
    console.log(`Servidor Http escuchando en el puerto ${Port}`)
})

app.on('error',err => console.log("fallo la conexion al servidor", err));