var nombre = "gabi";
var altura = "180"; 
var concatenacion = nombre + " " + altura;
 
var datos = document.getElementById("datos")
datos.innerHTML = `
<h1>soy la caja de datos</h1>
<h2>me llamo es: ${nombre}</h2>
<h3>mido: ${altura}</h3>
`;

if(altura >= 180){datos.innerHTML += `<h1>eres una persona alta</h1>`}
for(var i = 0; i<=2022; i++){
    datos.innerHTML += "<h2> estamos en el año: "+i;
}