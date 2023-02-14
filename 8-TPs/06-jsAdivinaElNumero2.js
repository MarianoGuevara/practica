/*En esta oportunidad el juego evaluará tus
aptitudes a partir de la cantidad de intentos, 
por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
    let mensajeIntentos;

    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
 
    intentos ++;
    document.getElementById("txtIdIntentos").value = intentos;

    if (numeroIngresado > 100 || numeroIngresado < 1)
    {
    	mensaje = "Ese numero está fuera del rango deseado (1 a 100)";
    }
    else
    {
		if (numeroIngresado > numeroSecreto)
		{
			mensaje = "Se pasó...";
		}
		else
		{
			if (numeroIngresado < numeroSecreto)
			{
			mensaje = "Falta...";
			}
			else
			{
				mensaje = "Usted es el ganador!! Y en solo: " + intentos  + " intentos!.";

				switch (intentos)
				{
					case 1:
						mensajeIntentos = "Usted es un psiquico";
						break;
					case 2: 
						mensajeIntentos = "excelente percepción";
						break;
					case 3:
						mensajeIntentos = "Esto es suerte";
						break;
					case 4:
						mensajeIntentos = "Excelente técnica";
						break;
					case 5:
						mensajeIntentos = "usted está en la media";
						break;
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
						mensajeIntentos = "falta técnica";
						break;
					default:
						mensajeIntentos = "afortunado en el amor!!";
				}
				alert(mensajeIntentos);
			}
		}		
	}
	
    alert(mensaje);

}