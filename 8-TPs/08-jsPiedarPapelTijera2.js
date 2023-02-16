let seleccionMaquina;
let piedraOpcion;
let papelOpcion;
let tijeraOpcion;
let mensaje;
let ganados;
let perdidos;
let empatados;

piedraOpcion = 1;
papelOpcion = 2;
tijeraOpcion = 3;

ganados = 0;
perdidos = 0;
empatados = 0;

function comenzar()
{
	seleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);
}

function piedra()
{
	if (seleccionMaquina == piedraOpcion)
    {
        mensaje = "Empató";
		empatados++;
    }
    else
    {
        if (seleccionMaquina > piedraOpcion && seleccionMaquina < tijeraOpcion)
        {
            mensaje = "Perdió";
			perdidos++;
        }
        else
        {
            mensaje = "Ganó";
			ganados++;
        }
    }
	alert(mensaje);

	document.getElementById("txtIdGanadas").value = ganados;
	document.getElementById("txtIdPerdidas").value = perdidos;															
	document.getElementById("txtIdEmpatadas").value	= empatados;
}

function papel()
{
	switch (seleccionMaquina)
    {
        case 1:
            mensaje = "Ganó";
			ganados++;
            break;
        case 2: 
            mensaje = "Empató";
			empatados++;
            break;
        case 3:
            mensaje = "Perdió";
			perdidos++;
            break;
    }
	alert(mensaje);

	document.getElementById("txtIdGanadas").value = ganados;
	document.getElementById("txtIdPerdidas").value = perdidos;															
	document.getElementById("txtIdEmpatadas").value	= empatados;
}

function tijera()
{
	switch (seleccionMaquina)
    {
        case 1:
            mensaje = "Perdió";
			perdidos++;
            break;
        case 2: 
            mensaje = "Ganó";
			ganados++;
            break;
        case 3:
            mensaje = "Empató";
			empatados++;
            break;
    }
	alert(mensaje);

	document.getElementById("txtIdGanadas").value = ganados;
	document.getElementById("txtIdPerdidas").value = perdidos;															
	document.getElementById("txtIdEmpatadas").value	= empatados;
}

function mostrarResultado()
{
	
}