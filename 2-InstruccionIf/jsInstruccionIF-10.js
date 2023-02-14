function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.floor(Math.random() * (11 - 1) + 1); 

	if (numeroRandom == 10 || numeroRandom == 9) //numeroRandom <= 10 && numeroRandom > 8 (otra forma)
	{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: excelente");
	}
	else
	{
		if (numeroRandom < 9 && numeroRandom > 3)
		{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: aprobó");
		}
		else
		{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: reprobó, suerte la proxima");
		}
	} 
}

/*	CON ELSE IF

	if (numeroRandom == 10 || numeroRandom == 9) //numeroRandom <= 10 && numeroRandom > 8 (otra forma)
	{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: excelente");
	}
	else if (numeroRandom <= 8 && numeroRandom > 4)
	{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: aprobó");
	}
	else
	{
		alert("NOTA: " + numeroRandom + "   CALIFICACION: reprobó, suerte la proxima");
	}

*/