/*
    Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*/

function mostrar()
{
    let bodegaAvellaneda;
    let bodegaCaba;
    let bodegaLanus;

    let seguir;
    let bodegaIngresada;
    let descripcionIngresada;
    let pesoIngresado;

    let banderaPeso;
    let contadorAve;
    let acumuladorAve;
    let contadorCaba;
    let acumuladorCaba;
    let contadorL;
    let acumuladorL;
    let masPesado;
    let bodegaDelMasPesado;
    let promedioMasPesado;
    let descProductoMasPesado;
    let bodegaMasIngresos;
    let bodegaQueMenosLeQueda;
    let porcentajeAve;
    let porcentajeCaba;
    let porcentajeL;

    bodegaAvellaneda = 20000;
    bodegaCaba = 25000;
    bodegaLanus = 15000;
    banderaPeso = true;
    masPesado;
    contadorAve = 0;
    acumuladorAve = 0;
    contadorCaba = 0;
    acumuladorCaba = 0;
    contadorL = 0;
    acumuladorL = 0;

    do
    {
        do 
        {
            bodegaIngresada = prompt("A que bodega guarda el producto?: ");
        } while(bodegaIngresada != "Avellaneda" && bodegaIngresada != "Caba" && bodegaIngresada != "Lanus");

        descripcionIngresada = prompt("Describa el producto: ");

        do
        {
            pesoIngresado = prompt("Ingrese la cant de unidades q compró del producto: ");
            pesoIngresado = parseInt(pesoIngresado);
        } while (isNaN(pesoIngresado) || pesoIngresado <= 0);

        switch (bodegaIngresada)  // Si no está llena, acumulo y cuento ingreso en bodega correspondiente // B
        {
            case "Avellaneda":
                if ((pesoIngresado + acumuladorAve) > bodegaAvellaneda)
                {
                    pesoIngresado = "No se pudo";
                    alert("LA BODEGA ESTÁ LLENA. Deposite el producto en otro lado");
                }   
                else
                {
                    contadorAve ++;
                    acumuladorAve += pesoIngresado;
                }
                break;
            case "Caba":
                if ((pesoIngresado + acumuladorCaba) > bodegaCaba)
                {
                    pesoIngresado = "No se pudo";
                    alert("LA BODEGA ESTÁ LLENA. Deposite el producto en otro lado");
                }   
                else
                {
                    contadorCaba ++;
                    acumuladorCaba += pesoIngresado;
                }
                break;
            case "Lanus":
                if ((pesoIngresado + acumuladorL) > bodegaAvellaneda)
                {
                    pesoIngresado = "No se pudo";
                    alert("LA BODEGA ESTÁ LLENA. Deposite el producto en otro lado");
                }   
                else
                {
                    contadorL ++;
                    acumuladorL += pesoIngresado;
                }
                break;
        }

        bodegaAvellaneda = bodegaAvellaneda - acumuladorAve; // C reformulacion
        bodegaCaba = bodegaCaba - acumuladorCaba;
        bodegaLanus = bodegaLanus - acumuladorL;

        if (bodegaAvellaneda < bodegaCaba && bodegaAvellaneda < bodegaLanus) // C
        {
            bodegaQueMenosLeQueda = "Avellaneda";
        }
        else
        {
            if (bodegaCaba < bodegaLanus )
            {
                bodegaQueMenosLeQueda = "Caba";
            }
            else
            {
                bodegaQueMenosLeQueda = "Lanus";
            }
        }

        if (pesoIngresado != "No se pudo")
        {
            if (banderaPeso == true || pesoIngresado > masPesado)   // A
            {
                banderaPeso = false;
                masPesado = pesoIngresado;
                bodegaDelMasPesado = bodegaIngresada;
                descProductoMasPesado = descripcionIngresada;
            }
        }
         
        seguir = confirm("Quiere ingresar otro producto?: ");
    } while (seguir == true);   


    if (bodegaDelMasPesado == "Avellaneda") // A parte 2
    {   
        promedioMasPesado = acumuladorAve / contadorAve;
    }
    else
    {
        if (bodegaDelMasPesado == "Caba")
        {
            promedioMasPesado = acumuladorCaba / contadorCaba;
        }
        else
        {
            promedioMasPesado = acumuladorL / contadorL;
        }
    }

    if (contadorAve > contadorCaba && contadorAve > contadorL)  // B
    {
        bodegaMasIngresos = "Avellaneda";
    }
    else
    {
        if (contadorCaba > contadorL)
        {
            bodegaMasIngresos = "Caba";
        }
        else
        {
            bodegaMasIngresos = "Lanus";
        }
    }

    porcentajeAve = (bodegaAvellaneda * 100) / 20000;   // D
    porcentajeCaba = (bodegaCaba * 100) / 25000;
    porcentajeL = (bodegaLanus * 100) / 15000; 

    document.write("Cual fue el producto con mas peso entre las tres bodegas:" + descProductoMasPesado + ". Promedio: " + promedioMasPesado +"<br>");
    document.write("la bodega con mas ingresos fue: " + bodegaMasIngresos + "<br>");
    document.write("La bodega mas llena es: " + bodegaQueMenosLeQueda + "<br>");
    document.write("Porcentaje disponible de cada bodega. Avella: " + porcentajeAve + ". Caba: " + porcentajeCaba + ". Lanus: " + porcentajeL);
}


/*  RESOLUCION DEL PROFE
    function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//B:
	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
*/