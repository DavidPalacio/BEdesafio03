/**
 * Formato: link a un repositorio en Github y url de proyecto subido a glitchObservación: no incluir la carpeta node_modules
Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

 */


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
