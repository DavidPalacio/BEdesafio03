// Contenedor de los objetos

const fs = require('fs'); 

class element{
    constructor (id, detail, qty) {
        this.id = '';
        this.detail = detail;
        this.qty = qty;
    }
}

class Contenedor {

    constructor (nameFile) {
        this.nameFile = nameFile;
    }

    getById() {
        //Number - Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
        let productos = JSON.parse(fs.readFileSync(`${this.nameFile}`, 'utf-8'));
        // console.log(productos);
        let id = Math.ceil(Math.random() * (productos.length));
        // console.log(id);
        productos.forEach(element => {
            if (element.id === id) {
                console.log('Un Producto Aleatorio:' , JSON.stringify(element));
            }
        });
        
    }

    getAll() {
        // Object[] Devuelve un array con los objetos presentes en el archivo.
        let productos = JSON.parse(fs.readFileSync(`${this.nameFile}`, 'utf-8'));
        console.log("Todos los Productos: ", JSON.stringify(productos));
    } 

}

const name1 = new Contenedor('file01.txt');

//Manejo de Errores
try {
    
    // name1.getById();
    // name1.getAll();

} catch (error) {
    //throw new Error ("Error: " + error);
    console.log(error);
}