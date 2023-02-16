function mostrar()
{
	let contador;
    let numerosIngresados;
    let acumulador;
    let promedio;

    acumulador = 0;
    contador = 0;

    while (contador < 5)    //ES UNO MENOS XQ SI BIEN PIDE 5 NUMS, EL PRIMERO YA LO PIDIO ANTES DEL WHILE, SOLO FALTAN 4
    {
        numerosIngresados = prompt("Ingresa un numero:");
        numerosIngresados = parseInt(numerosIngresados);
    
        while (isNaN(numerosIngresados))
        {
            numerosIngresados = prompt("Eso no es un valor numerico:");
            numerosIngresados = parseInt(numerosIngresados);
        }

        contador++;
        acumulador += numerosIngresados;
    }

    document.getElementById("txtIdSuma").value = acumulador;

    promedio = acumulador / 5;
    document.getElementById("txtIdPromedio").value = promedio;
}