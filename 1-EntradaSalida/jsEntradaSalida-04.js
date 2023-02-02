/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar() //cuando se aprete mostrar (el botón) sucederá la acción
{
	let nombreIngresado;
	nombreIngresado = prompt("ingresa tu nombre");	//pedis dato por prompt

	document.getElementById("txtIdNombre").value = nombreIngresado;
/*
	Aquí, la barra de texto Id de html, debe mostrar el nombre, por lo que su valor será la variable;
	Está mostrando el valor. SI EL ID ESTÁ ANTES DEL =, MUESTRA EL VALOR, SI ESTÁ DESPUES, PIDE VALOR
*/
}

