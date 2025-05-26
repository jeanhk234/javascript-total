class animalitos {
    constructor(nombre, patas){
        this.nombre = nombre;
        this.patas = patas;
    }
}   

let perro = class extends animalitos {
    constructor(nombre, patas, raza) {
        this.nombre = nombre;
        this.patas = patas;
        this.raza = raza
    }
}

let gato = class extends animalitos {
    constructor(nombre, patas, raza) {
        this.nombre = nombre;
        this.patas = patas;
        this.raza = raza
    }
}

let conejo = class extends animalitos {
    constructor(nombre, patas, raza) {
        this.nombre = nombre;
        this.patas = patas;
        this.raza = raza
    }
}

let perro2 = new perro(toyota, 4, chihuahua)
let gato2 = new gato(toyota, 4, chihuahua)
let conejo2 = new conejo(toyota, 4, chihuahua)


function listaAnimales() {


    document.write(perro2)
    


}




