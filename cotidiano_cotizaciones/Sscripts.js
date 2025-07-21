window.onload = function () {
    const lista = document.getElementById(lista_cotizaciones)

    const api = "https://api.exchangerate.host/latest";

    Promise.all([
        fetch(`${api}?base=EUR&symbols=USD`).then(r => r.json()),
        fetch(`${api}?base=CRC&symbols=USD`).then(r => r.json()),
        fetch(`${api}?base=BTC&symbols=USD`).then(r => r.json())
        
    ])
    .then(([eur, crc, btc]) => {
        lista.innerHTML = `
        <li>Euro a dolares: ${eur.rates.USD.toFixed(2)}</li>
        <li>colones a dolares: ${crc.rates.USD.toFixed(2)}</li>
        <li>Euro a dolares: ${btc.rates.USD.toLocalesString(undefined, {miniumFractionDigits: 2, maxiumFractionDigits: 2})}</li>`

    })
    .catch(error =>{
        lista.innerHTML = "<li>Error al obtener cotizaciones</li>"

        console.error(error)
    })
}