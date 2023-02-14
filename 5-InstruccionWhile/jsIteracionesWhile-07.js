/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
    let numerosIngresados;
    let acumulador;
    let promedio;

    acumulador = 0;
    contador = 0;

    numerosIngresados = prompt("Ingresa un numero:");
    numerosIngresados = parseInt(numerosIngresados);
	
    while (!(isNaN(numerosIngresados)))
    {
        contador++;
        acumulador = acumulador += numerosIngresados;

        numerosIngresados = prompt("Ingresa un numero:");
        numerosIngresados = parseInt(numerosIngresados);
    }

    document.getElementById("txtIdSuma").value = acumulador;

    promedio = acumulador / contador;
    document.getElementById("txtIdPromedio").value = promedio;

}