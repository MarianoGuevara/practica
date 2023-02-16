/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
    let numerosIngresados;
    let acumuladorPositivos;
    let acumuladorNegativos;
	let respuesta = "si";
	
	acumuladorPositivos = 0;
	acumuladorNegativos = 1;

	while (respuesta == "si")
	{
		numerosIngresados = prompt("Ingresa un numero:");
		numerosIngresados = parseInt(numerosIngresados);

		while (isNaN(numerosIngresados))
		{
			numerosIngresados = prompt("!!! Eso no es un número. INGRESE UN NUMERO:");
			numerosIngresados = parseInt(numerosIngresados);
		}

		if (numerosIngresados >= 0)
		{	
			acumuladorPositivos += numerosIngresados;
		} 
		else
		{
			acumuladorNegativos *= numerosIngresados;
		}

		respuesta = prompt("Quere ingresar otro numero? 'si' para continuar: ")
	}
	if (acumuladorNegativos == 1)
	{
		acumuladorNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
}	

/*	CON NaN y acum. negativos == 1;

    numerosIngresados = prompt("Ingresa un numero:");
    numerosIngresados = parseInt(numerosIngresados);
	
    while (!(isNaN(numerosIngresados)))
    {	
		if (numerosIngresados < 0)
		{
			acumuladorNegativos *= numerosIngresados;
			document.getElementById("txtIdProducto").value = acumuladorNegativos;
		}
		else
		{
			acumuladorPositivos += numerosIngresados;
			document.getElementById("txtIdSuma").value = acumuladorPositivos;
		}

        numerosIngresados = prompt("Ingresa un numero:");
        numerosIngresados = parseInt(numerosIngresados);
    }
*/