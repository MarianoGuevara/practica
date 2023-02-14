function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.floor(Math.random() * (11 - 1) + 1);

	numeroRandom = Math.round(Math.random() * 10); 

	alert(numeroRandom);
}

// Math.floor(Math.random() * (11 - 1) + 1);		//El numero mas grande entre parentesis no será incluido.
													//El minimo, sí.