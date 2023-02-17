/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. -
2-Suma de los positivos. -
3-Cantidad de positivos. -
4-Cantidad de negativos. -
5-Cantidad de ceros. -
6-Cantidad de números pares. -
7-Promedio de positivos. -
8-Promedios de negativos. -
9-Diferencia entre positivos y negativos, (positvos-negativos). */ 

function mostrar()
{
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadNegativos=0;
	let cantidadPositivos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;
	let respuesta;

	do 
	{
		do
		{
			numeroIngresado = prompt("Ingrese un valor numérico");
			numeroIngresado = parseInt(numeroIngresado);
		} while(isNaN(numeroIngresado));

		if ((numeroIngresado % 2) == 0)
		{
			cantidadPares ++;
		}

		if (numeroIngresado == 0)
		{
			cantidadCeros ++;
			cantidadPares ++;
		}
		else
		{
			if (numeroIngresado > 0)
			{
				cantidadPositivos ++;
				sumaPositivos += numeroIngresado;
			}
			else
			{
				cantidadNegativos ++;
				sumaPositivos += numeroIngresado;
			}
		}
		
		respuesta = confirm("Desea ingresar otro numero?");
	} while(respuesta == true);

	promedioPositivos = sumaNegativos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: "+ sumaNegativos);
	document.write("La suma de los positivos es: " + sumaPositivos);
	document.write("Cantidad positivos: " + cantidadPositivos);
	document.write("Cantidad negativos: " + cantidadNegativos);
	document.write("Cantidad ceros: " + cantidadCeros);
	document.write("Cantidad pares: " + cantidadPares);
	document.write("Promedio de positivos: " + promedioPositivos);
	document.write("Promedio de positivos: " + promedioPositivos);
	document.write("Promedio de negativos: "+ promedioNegativos);
	document.write("La resta de los positivos por los negativos es: " + diferencia);
	
}

// while (!(isNaN(numeroIngresado)))

/*	SIN DO WHILE

	let numeroIngresado;
	let sumaNegativos;
	let cantidadNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let ceros;
	let numerosPares;
	let promedioNegativo;
	let promedioPositivo;
	let restaPositivosNegativos;
	let respuesta = "si";

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	numerosPares = 0;
	ceros = 0;



	while (respuesta == "si")
	{		
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("El carácter ingresado no es numérico. Inténtelo de nuevo:");
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		switch (numeroIngresado % 2)
		{
			case 0:
				numerosPares ++;
		}

		if (numeroIngresado == 0)
		{
			ceros ++;
			cantidadPositivos ++;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				sumaNegativos += numeroIngresado;
				cantidadNegativos ++;

			}
			else
			{
				sumaPositivos += numeroIngresado;
				cantidadPositivos ++;
			}
		}	
			
		respuesta = prompt("Desea continuar ingresando numeros? 'si' para continuar:")
	}

	promedioNegativo = sumaNegativos / cantidadNegativos;
	promedioPositivo = sumaPositivos / cantidadPositivos;
	restaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es :" + sumaNegativos + ". La suma de positivos es: " + sumaPositivos + ". La cantidad de positivos es:" + cantidadPositivos + ". La cantidad de negativos es: " + cantidadNegativos);
	document.write(". La cantidad de 0 es: " + ceros + ". La cantidad de numeros pares: " + numerosPares);
	document.write(". El promedio de positivos: " + promedioPositivo + ". El promedio de negativos: " + promedioNegativo + ". La resta de positivos y negativos: " + restaPositivosNegativos);
*/