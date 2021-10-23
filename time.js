// Ejercicio para mostrar mensaje de acuerdo a la Hora

const Http = require('http');
const Port = 3000;

//Tiempo Actual
let moment = require('moment');
let currentTime = moment().format('HH');

//Creando la peticion la Servidor
const server = Http.createServer((req, res) => {
    let response = "";
    if (currentTime >= 6 && currentTime <= 12) {
        response = "Buenos Dìas";
    }else if(currentTime >= 13 && currentTime <= 19){
        response = "Buenas Tardes";
    } else {
        response = "Buenas Noches";
    }
    res.end(`Hola Mundo, mi primer Servidor, ${response}`);
})

// Creamos el listen
const connectServer = server.listen(Port, ()=> {
    console.log(`Servidor Http escuchando en el puerto ${connectServer.address().port}`)
})