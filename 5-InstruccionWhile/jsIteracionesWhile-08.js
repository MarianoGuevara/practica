/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
    let numerosIngresados;
    let acumuladorPositivos;
    let acumuladorNegativos;

	acumuladorPositivos = 0;
	acumuladorNegativos = 1;

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
}