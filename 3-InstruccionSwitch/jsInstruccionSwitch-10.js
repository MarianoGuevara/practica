function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				mensaje = "Se viaja";
			}
			else
			{
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
			}
			break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
			}
			break;
		default:
			mensaje = "Se viaja";
	}
	alert(mensaje);
}

/* DESTINO E IF.

	if(destinoIngresado == "Bariloche")
	{
		if(estacionIngresada == "Invierno" || estacionIngresada == "Otoño")
		{
			mensaje = "Se viaja perriiiii";
		}
		else
		{
			mensaje = "No se viaja perri ;(";
		}
	}
	else
	{
		if (destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
		{
			if(estacionIngresada == "Verano" || estacionIngresada == "Otoño" || estacionIngresada == "Primavera")
			{
				mensaje = "Se viaja perriiiii";
			}
			else
			{
				mensaje = "No se viaja perri ;(";
			}
		}
		else
		{
			if (estacionIngresada == "Verano" || estacionIngresada == "Invierno")
			{
				mensaje = "No se viaja perri ;(";
			}
			else
			{
				mensaje = "Se viaja perriiiii";
			}
		}
	}
	alert(mensaje);
*/