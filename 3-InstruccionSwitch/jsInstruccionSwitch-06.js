function mostrar()
{
	let horaIngresada;
	let mensaje;

	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);

	switch (horaIngresada)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:		
		case 6:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			mensaje = "noche loboo";
			break;
		case 7:
		case 8:
		case 9:
		case 10: 
		case 11:
			mensaje = "Mañanitas";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Tardex";
			break;
		default:
			mensaje = "No existttt";
	}
	alert(mensaje);
}

/*	IF

	if(horaIngresada > -1 && horaIngresada < 7 || horaIngresada > 19 && horaIngresada < 25)
	{
		mensaje = "Noche";
	}
	else
	{
		if (horaIngresada > 6 && horaIngresada < 12)
		{
			mensaje = "Mañana";
		}
		else
		{
			if (horaIngresada > 11 && horaIngresada < 20)
			{
				mensaje = "Tarde";
			}
			else
			{
				mensaje = "No existe";
			}
		}
	}
	alert(mensaje);
*/