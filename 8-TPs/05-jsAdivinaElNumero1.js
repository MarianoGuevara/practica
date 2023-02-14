/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let numeroSecreto;
let intentos;

intentos = 0;

function comenzar()
{
    numeroSecreto = Math.floor(Math.random() * (101 - 1) - 1);
   
    alert("Se ha generado un numero aleatorio entre 1 y 100. Intenta adivinar cual es, utilizando el botón 'verificar'");
}

function verificar()
{ 
    let numeroIngresado;
    let mensaje;
    
    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
 
    intentos ++;  // ++ para incrementarle 1 con cada vuelta a la variable.
    document.getElementById("txtIdIntentos").value = intentos;

    if (numeroIngresado > 100 || numeroIngresado < 1)
    {
      mensaje = "Ese numero está fuera del rango deseado (1 a 100)";
    }
    else
    {
      if (numeroIngresado == numeroSecreto)
      {
        mensaje = "Usted es el ganador!!";
      }
      else
      {
        if (numeroIngresado > numeroSecreto)
        {
          mensaje = "Se pasó...";
        }
        else
        {
          mensaje = "Falta...";
        }
      }
    }
    alert(mensaje);
}