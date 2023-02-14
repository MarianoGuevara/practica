function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "falta pal frio manijaaaa";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Que lindooo";
			break;
		default:
			mensaje = "CALOR LPMMM Q FEO";
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN

/* CON IF

		if (mesDelAño == "Julio" || mesDelAño == "Agosto")
	{
		mensaje = "Invierno";
	}
	else
	{
		if (mesDelAño == "Septiembre" || mesDelAño == "Octubre" ||mesDelAño == "Noviembre" ||mesDelAño == "Diciembre")
		{
			mensaje = "Ya paso el frio, ahora calor";
		}
		else
		{
			mensaje = "Falta para el invierno";
		}
	}
	alert(mensaje);

*/