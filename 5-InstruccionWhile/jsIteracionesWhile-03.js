/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	let contraseñaIngresada;
	let clave;
	
	clave = "utn750";

	contraseñaIngresada = prompt("Ingresa la contraseña: ")
	 
	while (contraseñaIngresada != clave)
	{
		contraseñaIngresada = prompt("ERROR, ingrese la contraseña nuevamente");

	}
	alert("Bienvenido!");
}

