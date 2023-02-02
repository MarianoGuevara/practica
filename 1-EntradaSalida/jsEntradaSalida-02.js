/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar ()
{
	let nombre;
	
	nombre = prompt("Escribe tu nombre");	//	prompt es una ventana emergente que pide datos al usuario

	alert (nombre);

	//aca estoy diciendo que el valor de mi variable nombre es prompt (lo que ingrese el usuario) 
	//y con el alert, ejecutas la variable nombre, que ahora equivale al dato ingresado por el usuario gracias a prompt
}