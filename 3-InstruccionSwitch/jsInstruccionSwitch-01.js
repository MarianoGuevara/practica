function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
			mensaje = "Q arranques bien el año";
			break;
		case "Marzo":
			mensaje = "Abominacion; clases";
			break;
		case "Julio":
			mensaje = "Vacas invie";
			break;
		case "Diciembre":
			mensaje = "Fin de año";
			break;
		default:
			mensaje = "no pasa nada en este mes :v";
	}
	alert (mensaje);


	alert(mensaje);
}

/*	IF
	
	if (mes == "Enero")
	{
		mensaje = "Arranca la tortura";
	}
	else
	{
		if(mes == "Marzo")
		{
			mensaje = "Me compadezco de vos";
		}
		else
		{
			if (mes == "Julio")
			{
				mensaje = "A mitad de camino, soldado";
			}
			else
			{
				if(mes == "Diciembre")
				{
					mensaje = "Hora de descansar, cabo";
				}
				else 
				{
					mensaje = "Este mes no existe paaa";
				}
			}
		}
	}
	alert(mensaje);
*/