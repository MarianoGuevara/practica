/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;	//pedis 2 variables por ID

	alert ("Usted se llama " + nombre + " y tiene " + edad + " años"); 
	//mostras en alert las 2 variables y TEXTO (strings; caracteres) separado en comillas y CONCATENADO (unido) por el +
}

