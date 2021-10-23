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
const fs = require('fs'); 

const container = require('./container');

const Port = 8080;
let app = express();


app.get('/',(req, res) => {
    let response = `<h1>DESAFIO 3 - Servidor Express de David Palacio</h1>`;
    res.status(200).send(response);
})

app.get('/productos',(req, res) => {
    let productos = fs.readFileSync(`file01.txt`, 'utf-8');
    let response = `<h2>Estos son todos los productos: </h2><p>${productos}</p>`;

    res.status(200).send(response);
})

app.get('/productoRandom',(req, res) => {
    let response;
    let productos = JSON.parse(fs.readFileSync(`file01.txt`, 'utf-8'));
        // console.log(productos);
    let id = Math.ceil(Math.random() * (productos.length));
        // console.log(id);
    productos.forEach(element => {
        if (element.id === id) {
            console.log('Un Producto Aleatorio:' , JSON.stringify(element));
            element = JSON.stringify(element);
            response = `<h2>Un producto aleatorio: </h2><p>${element}</p>`;
        }
    });
    // let response = `<h2>Un producto aleatorio: </h2>${element}<p>`;
    res.status(200).send(response);
})

// Creamos el listen
app.listen(Port, ()=> {
    console.log(`Servidor Http escuchando en el puerto ${Port}`)
})

app.on('error',err => console.log("fallo la conexion al servidor", err));
