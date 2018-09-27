/*Traigame un id del html llamado lista_mercado*/
var lista= document.getElementById('lista_mercado');
/*crea el contenido*/
var leche=document.createElement("li");
var texto=document.createTextNode("Leche Alqueria");
leche.appendChild(texto);
lista.appendChild(leche);
/*
console.log(leche);
console.log(texto);
*/
/*Con este procedimiento me permite agregar elementos de JS a HTML*/

function agregar(){

	var producto= document.getElementById('producto').value;
	var lista= document.getElementById('lista_mercado');
	var item=document.createElement("li");
	var texto=document.createTextNode(producto);
	item.appendChild(texto);
	lista.appendChild(item);
}