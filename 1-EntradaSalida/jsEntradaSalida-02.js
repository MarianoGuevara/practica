/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/


function mostrar()
{
	let variable1	//	la palabra let indica variable, y el "variable1" es el nombre de la variable en si
	variable1 = "Valor asignado";	//	a la variable de nombre "variable1" le asignas el valor "valor asignado" con el=

	alert (variable1);	//	con el alert mostras la variable1
}

//LA UNICA FUNCIÓN QUE TENDRÁ VALIDEZ EN EL CÓDIGO SERÁ LA QUE SEA ESCRITA ÚLTIMA, YA QUE EL PROGRAMA SE EJECUTA EN 
//ORDEN Y LA ULTIMA FUNCION ES LA DEFINITIVA

function mostrar ()
{
	let nombre = prompt("Escribe tu nombre");	//	prompt es una ventana emergente que pide datos al usuario
	alert (nombre);

	//aca estoy diciendo que el valor de mi variable nombre es prompt (lo que ingrese el usuario) 
	//y con el alert, ejecutas la variable nombre, que ahora equivale al dato ingresado por el usuario gracias a prompt
}

