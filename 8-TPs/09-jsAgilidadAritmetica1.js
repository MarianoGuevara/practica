/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

let numeroRandomUno;
let numeroRandomDos;
let operadorRandom;
let operador;
let resultado;

function comenzar()
{
    numeroRandomUno = Math.floor(Math.random()*(11 - 1) + 1);
    numeroRandomDos = Math.floor(Math.random()*(11 - 1) + 1);

    operadorRandom = Math.floor(Math.random()*(5 - 1) + 1);
    switch (operadorRandom)
    {
        case 1:
            operador = "+";
            resultado = numeroRandomUno + numeroRandomDos;
            break;
        case 2:
            operador = "-";
            resultado = numeroRandomUno - numeroRandomDos;
            break;
        case 3:
            operador = "*";
            resultado = numeroRandomUno * numeroRandomDos;
            break;
        case 4:
            operador = "/";
            resultado = numeroRandomUno / numeroRandomDos;
            break;
    }

	document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;
    document.getElementById("txtIdOperador").value = operador;
}

function Responder()
{  
	let respuestaIngresada;
    let mensajeResultado;

    respuestaIngresada = document.getElementById("txtIdRespuesta").value;
    respuestaIngresada = parseInt(respuestaIngresada);

    if (isNaN(respuestaIngresada))
    {   
        alert("Eso no es un número. Ingrese un valor numerico");
    }
    else
    {
        if (respuestaIngresada == resultado)
        {
            mensajeResultado = "El resultado es correcto!";
        }
        else
        {
            mensajeResultado = "El resultado NO es correcto, inténtelo de nuevo";
        }
        alert(mensajeResultado);
    }
}//
