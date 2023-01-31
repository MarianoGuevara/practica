/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() //dice SUMAR, por lo que la accion se realizará cuando se presione el botón "sumar"
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value; //pedis datos por ID
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

/*	Con el "parseInt", decimos que las variables numeroUno y numeroDos, tienen valor numérico, es decir,
	que si el usuario ingresa texto u otra cosa, quedará invalido (NaN).

	Entonces, las variables numeroUno y numeroDos, = a los datos id que ingrese el usuario y tambien = a parrseInt,
	o sea que se transforman si o si en números.
*/
	resultado = numeroUno + numeroDos;
	alert (resultado);
//	La varible resultado = a la suma de los 2 numeros, que ahora son SI o SI numeros.
}



/*
	QUÉ PASABA SI NO USABA EL parseInt?? Pasaba que aunque el dato que el usuario ingrese sean números, javascript, los
	hubiera interpretado como strings, entre "", por lo que el +, los hubiera concatenado (unido), en vez de sumarlos;
	"10" + "10" = 1010  EN CAMBIOO, CON parseInt 10 + 10 = 20
*/

