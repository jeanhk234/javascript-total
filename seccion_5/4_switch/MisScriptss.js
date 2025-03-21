function consultarPrecio() {
    let elementoRespuesta = document.getElementById("textoPrecio")

    let elementoFruta = document.getElementById("numeroFruta")
    let fruta = elementoFruta.value;

    switch (fruta) {
        case "manzana":
            elementoRespuesta.textContent = alert("el costo de la Manzana es de 50");
            break;
        case "naranja":
            elementoRespuesta.textContent = alert("el costo de la Naranja es de 25");
            break;
        case "banana":
            elementoRespuesta.textContent = alert("el costo de la Banana es de 23");
            break;

 
           }       }