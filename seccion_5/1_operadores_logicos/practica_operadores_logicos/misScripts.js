function calcular(){
    let elementoRespuesta1 = document.getElementById("respuesta1");
    let elementoRespuesta2 = document.getElementById("respuesta2");
    let elementoRespuesta3 = document.getElementById("respuesta3");

    let elementoComparar = document.getElementById("textoComparar");
    let edad = elementoComparar.value;

    let puedeBeber = edad >= 10;
    elementoRespuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >= 0 && edad <= 10;
    elementoRespuesta2.textContent = puedeIngresar;

}