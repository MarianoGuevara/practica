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
let numeroIngresado;

intentos = 0;

function comenzar()
{
    numeroSecreto = Math.floor(Math.random() * (101 - 1) + 1);

    alert("Se ha generado un nuevo numero aleatorio entre 1 y 100. Intenta adivinar cual es, utilizando el botón 'verificar'");
}

function verificar()
{ 

    if (numeroSecreto == undefined)
    {
        alert("NO HAY NUMERO SECRETO; presione el botón 'comenzar' antes de iniciar el juego")
    }
    else
    { 
      let mensaje;

      numeroIngresado = document.getElementById("txtIdNumero").value;
      numeroIngresado = parseInt(numeroIngresado);

      if (isNaN(numeroIngresado))
      {
        alert("Ingresa un valor numérico, si no, el juego no tiene gracia!!!");
      }
      else
      {
        intentos ++;  // ++ para incrementarle 1 con cada vuelta a la variable.
        
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
      
          numeroIngresado = document.getElementById("txtIdNumero").value;
          numeroIngresado = parseInt(numeroIngresado);
       
      
          document.getElementById("txtIdIntentos").value = intentos;
      
          
          alert(mensaje);
        }
        
      }
    }
}