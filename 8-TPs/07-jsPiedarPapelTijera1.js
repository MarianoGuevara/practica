/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

let seleccionMaquina;
let piedraOpcion;
let papelOpcion;
let tijeraOpcion;
let mensaje;

piedraOpcion = 1;
papelOpcion = 2;
tijeraOpcion = 3;

function comenzar()
{
	seleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);
}

function piedra()
{
   
	if (seleccionMaquina == piedraOpcion)
    {
        mensaje = "Empató";
    }
    else
    {
        if (seleccionMaquina > piedraOpcion && seleccionMaquina < tijeraOpcion)
        {
            mensaje = "Perdió";
        }
        else
        {
            mensaje = "Ganó";
        }
    }

alert(mensaje);
}

function papel()
{
    switch (seleccionMaquina)
    {
        case 1:
            mensaje = "Ganó";
            break;
        case 2: 
            mensaje = "Empató";
            break;
        case 3:
            mensaje = "Perdió";
            break;
    }
alert (mensaje);
}   

function tijera()
{
    switch (seleccionMaquina)
    {
        case 1:
            mensaje = "Perdió";
            break;
        case 2: 
            mensaje = "Ganó";
            break;
        case 3:
            mensaje = "Empató";
            break;
    }
alert(mensaje)
}               