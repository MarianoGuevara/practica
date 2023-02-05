function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	
	if (edadIngresada < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}

/*
	if (edadIngresada < 18)
{
	if (estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}	
}
*/