/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let primerNumero;
	let respuesta = "si";

	numeroIngresado = prompt("Ingrese el primer numero")
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado))
	{
		numeroIngresado = prompt("No es un numero. Ingrese un valor valido:")
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	primerNumero = numeroIngresado;
	numeroMaximo = primerNumero;
	numeroMinimo = primerNumero;

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese otro numero")
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("No es un numero. Ingrese un valor valido:")
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if (numeroIngresado <= numeroMinimo)
			{ 
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = prompt("Quiere ingresar otro numero? 'si' para hacerlo"); 
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

		------
CON NAN:

	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let primerNumero;

	numeroIngresado = prompt("Ingrese un numero")
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado))
	{
		numeroIngresado = prompt("No es un numero. Ingrese un valor valido:")
		numeroIngresado = parseInt(numeroIngresado);
	}

	primerNumero = numeroIngresado;
	numeroMaximo = primerNumero;
	numeroMinimo = primerNumero;

	while (!isNaN(numeroIngresado))
	{	
		numeroIngresado = prompt("Ingrese otro numero si desea");
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
		}
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;	
*/