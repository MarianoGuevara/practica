function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.round(Math.random()*10); 

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
}