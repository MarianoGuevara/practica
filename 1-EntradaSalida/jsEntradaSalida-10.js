/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	resultado = importe - importe / 100 * 25;

	document.getElementById("txtIdResultado").value = resultado;
}
/*
	Aca hice algo parecido; pedis valor de importe al id, lo haces num. a traves de parseInt, y el resultado =
	importe - el 25% de importe. El valor de la 2da casilla id = resultado
*/
