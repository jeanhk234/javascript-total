function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch(genero) {
        case 'drama':
            if (edad < 13) {
                recomendacion.textContent = "casa blanca";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "the shawshank redemption";
                } else {
                    recomendacion.textContent = "taxi driver";
                }
        }
            break;
        case 'comedia':
            if (edad < 13) {
                recomendacion.textContent = "back to the future";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "the truman Show";
                } else {
                    recomendacion.textContent = "the wolf of wall street";
                }
        }
            break;
        case 'musical':
            if (edad < 13) {
                recomendacion.textContent = "la la land";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "los miserables";
                } else {
                    recomendacion.textContent = "the rocky horror picture show";
                }
        }
            break;
        case 'crimen':
            if (edad < 13) {
                recomendacion.textContent = "no hay opciones para esta edad";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "el secreto de tus ojos";
                } else {
                    recomendacion.textContent = "the godfather";
                }
         }
            break;
    }
}