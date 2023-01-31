/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let resultado; 

	importe = document.getElementById("txtIdSueldo").value;

	importe = parseInt(importe);

	resultado = importe + importe / 100 * 10	//TENGO QUE SUMARLE A IMPORTE UN 10%, entonces, importe + su 10%, que se
												//calcula dividiendo importe por 100 y multiplicandolo x10; mates básicas

	document.getElementById("txtIdResultado").value = resultado 
// En vez de mostrar resultado por alert, lo mostras en la casilla de texto ID de abajo, poniendolo antes del =, 
// MUESTRA dato en vez de pedir
}
