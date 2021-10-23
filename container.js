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
    objectsArray = [];
    item = 1;

    constructor (nameFile) {
        this.nameFile = nameFile;
    }

    save(data) {
        //object - Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
        console.log('item: ', this.objectsArray.length);
        
        data.id = (this.objectsArray.length + 1);
        console.log("NewData: ", data);
        this.objectsArray.push(data);
        console.log("ARREGLO DE  OBJETOS: ", this.objectsArray);
        
        fs.writeFileSync(`${this.nameFile}`, JSON.stringify(this.objectsArray),'utf-8');
        console.log("el id asignado: ", data.id, data.detail);
    } 
    
    getById(id) {
        //Number - Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
        this.objectsArray.forEach(element => {
            if (element.id === id) {
                console.log(element.detail);
            }
        });
        
    }

    getAll() {
        // Object[] Devuelve un array con los objetos presentes en el archivo.
        console.log("Todos los Objetos: ", JSON.stringify(this.objectsArray) );
    } 

    deleteById(id) {
        //Number void - Elimina del archivo el objeto con el id buscado.

        this.objectsArray.forEach(element => {
            if (element.id === id) {
                console.log("el id a eliminar: ", element);
                this.objectsArray.splice(id-1,1);
            }
        });

        fs.writeFileSync(`${this.nameFile}`, JSON.stringify(this.objectsArray),'utf-8');
    }

    deleteAll() {
        //void - Elimina todos los objetos presentes en el archivo.
        this.objectsArray.splice(0);
        
        fs.writeFileSync(`${this.nameFile}`, JSON.stringify(this.objectsArray),'utf-8');
        console.log("Borrando Todo", this.objectsArray);
    }
}


//Manejo de Errores


const object1 = new element('','pasta', 3);
const object2 = new element('','Arroz', 15);
const object3 = new element('','Frijol',9);


const name1 = new Contenedor('file01.txt');
const name2 = new Contenedor('file02.txt');

try {

    name1.save(object1);
    
    name2.save(object3);

    name1.save(object2);
    name1.save(object3);

    name2.save(object1);
    name2.save(object2);

    name1.getById(2);
    name1.getById(1);

    name2.getById(3);

    name1.getAll();

    name2.deleteById(1);

    name1.deleteById(2);

    name1.deleteAll();

    name1.getAll();
    name2.getAll();


} catch (error) {
    //throw new Error ("Error: " + error);
    console.log(error);
    
}