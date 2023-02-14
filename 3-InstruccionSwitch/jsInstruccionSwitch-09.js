function mostrar()
{	
	let estacion;
	let destino;
	let precioBase;
	let porcentaje;
	let porcentajeTotal;
	let precioConAumentoODescuento;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioBase = 15000;

	switch (destino)
	{
		case "Bariloche":
			switch (estacion)
			{
				case "Invierno":
					porcentaje = 0.20;
					break;
				case "Verano":
					porcentaje = -0.20;	
					break;
				default:
					porcentaje = 0.10;
			}
			break;
		case "Cataratas":
		case "Cordoba":
			switch (estacion)
			{
				case "Invierno":
					porcentaje = -0.10;
					break;
				case "Verano":
					porcentaje = 0.10;	
					break;
				default:
					porcentaje = 0.10;
			}
			break;
		default:
			switch (estacion)
			{
				case "Invierno":
					porcentaje = -0.20;
					break;
				case "Verano":
					porcentaje = 0.20;
					break;
				default:
					porcentaje = 0.10;
			}
	}
	
	porcentajeTotal = precioBase * porcentaje;

	precioConAumentoODescuento = precioBase + porcentajeTotal;

	alert("Su viaje, en total, saldrá: " + precioConAumentoODescuento);
	
}


/*
	if (estacion == "Invierno")
	{
		if (destino == "Bariloche")
		{
			porcentaje = 0.20;
		}
		else
		{
			if (destino == "Mar del plata")
			{
				porcentaje = -0.20;
			}
			else
			{
				porcentaje = -0.10;
			}
		}
	}
	else
	{
		if (estacion == "Verano")
		{
			if (destino == "Bariloche")
			{
				porcentaje = -0.20;
			}
			else
			{
				if (destino == "Mar del plata")
				{
					porcentaje = 0.20;
				}
				else
				{
					porcentaje = 0.10;
				}
			}
		}
		else
		{
			if (destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas")
			{
				porcentaje = 0.10;
			}
			else
			{
				porcentaje = 0
			}
		}
	}
	
*/