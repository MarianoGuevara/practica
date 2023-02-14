/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let primerNumero;

	numeroIngresado = prompt("Ingrese un numero")
	numeroIngresado = parseInt(numeroIngresado);

	primerNumero = numeroIngresado;
	numeroMaximo = primerNumero;

	while (!(isNaN(numeroIngresado)))
	{	
		numeroIngresado = prompt("Ingrese otro numero si desea")
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else 
		{
			if (numeroIngresado < primerNumero)
			{
				
				numeroMinimo = numeroIngresado;
			}
			else 
			{
				numeroMinimo = primerNumero;
			}
		}
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;	
}

/*
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;

*/