/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno + numeroDos
	alert ("La suma es " + resultado)	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno - numeroDos
	alert ("La suma es " + resultado)	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno * numeroDos
	alert ("La suma es " + resultado)	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno / numeroDos
	alert ("La suma es " + resultado)	
}

/*
	Acá, pedis numeros por id, con parse te aseguras que sean numeros enteros, y luego segun el botón que se apriete
	(suma, resta, mult, div) el resultado va a ser el numeroUno sumado, restado, est, al otro.
	SIGNOS: (suma +) (resta-) (multip *) (division /)
*/