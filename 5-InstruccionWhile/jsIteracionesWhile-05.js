/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo");

	while (sexo != "f" && sexo != "m")	// '||' no va xq si solo una condicion es true, sale del while
	{
		sexo = prompt("sexo fuera de lo previsto, no somos progresistas aca. Ingresa sexo nuevamente");
	}

	document.getElementById("txtIdSexo").value = sexo;
}