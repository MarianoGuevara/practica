/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	let numeroDividendo;
	let numeroDivisor;
	let resultado;

	numeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
	numeroDivisor = document.getElementById("txtIdNumeroDivisor").value;

	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);

	resultado = numeroDividendo % numeroDivisor // el % hace una division, pero en vez de fijarse en el resultado,
												// se fija en el resto; 10 / 3 = 3,33, pero 10 % 3 = 0,66
	alert ("el resto es: " + resultado)
}
