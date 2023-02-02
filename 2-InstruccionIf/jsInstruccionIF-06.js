function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;

	if (edad < 13){

		alert("sos un niño")

	}else if (edad >= 13 && edad <= 17 ) {

		alert("sos adolescente")

	}else if (edad >= 18){

		alert("sos mayor de edad")
	}
}