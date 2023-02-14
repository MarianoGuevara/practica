/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	let numero;
	
	numero = prompt("Ingrese un numero entre 0 y 9")
		
	while (numero < 0 || numero > 9)
	{
		numero = prompt("Numero fuera del rango deseado, ingrese otro");
	}
	document.getElementById("txtIdNumero").value = numero;
}