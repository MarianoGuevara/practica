/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let numeros; 

	numeros = 11;

	while (numeros > 1)
	{
		numeros -= 1;
		alert(numeros);
	}
//otra forma
	numeros = 10

	while (numeros > 0)
	{
		console.log(numeros--);
		
	}
}//