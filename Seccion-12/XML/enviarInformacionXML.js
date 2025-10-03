function enviarFormulario() {
    const nombre = document.getElementById("nombre").value 
    const email = document.getElementById("email").value 
    const anio = document.getElementById("anio").value 

const xmlData = `
<usuario> 
    <nombre>${nombre}</nombre>
    <email>${email}</email>
    <anio>${anio}</anio>
</usuario>
`;
localStorage.setItem('usuarioXML', xmlData);
window.location.href = 'visualizar.html';
return false;
}