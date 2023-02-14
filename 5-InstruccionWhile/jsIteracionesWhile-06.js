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
    while (contador < 4)    //ES UNO MENOS XQ SI BIEN PIDE 5 NUMS, EL PRIMERO YA LO PIDIO ANTES DEL WHILE, SOLO FALTAN 4
    {
        contador++;
        acumulador = acumulador += numerosIngresados;

        numerosIngresados = prompt("Ingresa un numero:");
        numerosIngresados = parseInt(numerosIngresados);
    }

    document.getElementById("txtIdSuma").value = acumulador;

    promedio = acumulador / 5;
    document.getElementById("txtIdPromedio").value = promedio;
}