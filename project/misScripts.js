const formulario = document.getElementById('formulario')
const descripcion =  document.getElementById('descripcion')
const ingresos1 = document.getElementById('ingreso')
const opcion1 = document.getElementById('opcion')
const dinero2 = document.getElementById('dinero')
const transacciones = document.getElementById('lista')

let balance = 0;

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const descripcionTexto = descripcion.value.trim();
    const monto = parseFloat(ingresos1.value);
    const dinero3 = parseFloat(dinero2.textContent);
    const tipo = opcion1.value

    if (!descripcionTexto || isNaN(monto) || monto <= 0 ) {
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${descripcionTexto}</span>
    <span class="${tipo}">${tipo === 'gasto' ? '-' : '+'}${monto.toFixed(2)} </span>
    <button class="editar">Editar</button>
    `;

    const nuevoBoton = li.querySelector('.editar');
    nuevoBoton.addEventListener('click', arguments.callee)

    transacciones.appendChild(li);

    balance += opcion1.value === 'ingreso' ? monto : -monto;
    dinero2.textContent = (dinero3 + (tipo === 'ingresos' ? monto : -monto)).toFixed(2);

    formulario.reset();

    li.addEventListener('click', function () {
  const nuevaDescripcion = prompt("Editar descripción:", descripcionTexto);
  const nuevoMontoTexto = prompt("Editar cantidad:", monto);

  const nuevoMonto = parseFloat(nuevoMontoTexto);
  if (!nuevaDescripcion || isNaN(nuevoMonto)) {
    alert("no hay informacion");
    return;
  }

  balance -= tipo === 'ingresos' ? monto : -monto;

  balance += tipo === 'ingresos' ? nuevoMonto : -nuevoMonto;

  li.innerHTML = `
    <span>${nuevaDescripcion}</span>
    <span class="${tipo}">${tipo === 'gastos' ? '-' : '+'}${nuevoMonto.toFixed(2)}</span>
  `;

  dinero2.textContent = balance.toFixed(2);
});
});