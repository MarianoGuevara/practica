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
    let respuesta = "si";

    acumulador = 0;
    contador = 0;

   while (respuesta == "si")
   {
        numerosIngresados = prompt("Ingrese un número");
        numerosIngresados = parseInt(numerosIngresados);

        while(isNaN(numerosIngresados))
        {
            numerosIngresados = prompt("No es tan dificil pa, tenes q ingresar un número, no otra cosa");
            numerosIngresados = parseInt(numerosIngresados);
        }

        acumulador += numerosIngresados;
        contador ++

        respuesta = prompt("Ingrese 'si' para volver a introducir otro número");
   }   

    document.getElementById("txtIdSuma").value = acumulador;

    promedio = acumulador / contador;
    document.getElementById("txtIdPromedio").value = promedio;
}   


/* CON NaN

    numerosIngresados = prompt("Ingresa un numero: (cualquier otro caracter para terminar el programa)");
    numerosIngresados = parseInt(numerosIngresados);
	
    while (!(isNaN(numerosIngresados)))
    {
        contador++;
        acumulador = acumulador += numerosIngresados;

        numerosIngresados = prompt("Ingresa un numero: (cualquier otro caracter para terminar el programa)");
        numerosIngresados = parseInt(numerosIngresados);
    }

    document.getElementById("txtIdSuma").value = acumulador;

    promedio = acumulador / contador;
    document.getElementById("txtIdPromedio").value = promedio;
*/