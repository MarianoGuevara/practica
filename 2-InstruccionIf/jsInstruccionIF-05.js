function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;

	if (!(edad >= 13 && edad <= 17))
	{
		alert("no sos adolescente");
	}
}

/*	ERROR!! NO SE PUEDE DEJAR UN IF VACIO!!
	if (edad >= 13 && edad <= 17){
		
	}else{
		alert("no sos adolescente")
	}

*/