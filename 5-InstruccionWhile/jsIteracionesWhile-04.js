/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	let numero;

	numero = prompt("Ingrese un numero entre 0 y 9")
	numero = parseInt(numero);

	while (isNaN(numero) || (numero < 0 || numero > 9))
	{
			numero = prompt("Ese valor no es el deseado (0 a 9. Ingrese un nuevo valor:)");
	}
	document.getElementById("txtIdNumero").value = numero;
}