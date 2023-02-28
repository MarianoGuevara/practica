/*
Realizar el algoritmo que permita ingresar los datos de una compra de 
productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/

function mostrar()
{
    let seguir;
    let tipoIngresado;
    let cantidadBolsas;
    let precioPorBolsa;

    let precioSinDescuento;
    let porcentaje;
    let precioConDescuento;
    let acumuladorPrecio = 0;
    let acumuladorBolsas = 0;
    let acumuladorBolsasArena = 0;
    let acumuladorBolsasCal = 0;
    let acumuladorBolsasCemento = 0;
    let mayorAcumuladorBolsas;

    let precioMasCaro;
    let nombreTipoMasCaro;
    let banderaCaro = true;

    do
    {
        do 
        {
            tipoIngresado = prompt("Tipo de producto: ");
        } while(tipoIngresado != "arena" && tipoIngresado != "cemento" && tipoIngresado != "cal");


        do
        {
            cantidadBolsas = prompt("Ingrese la cant de bolsas q compró del producto: ");
            cantidadBolsas = parseInt(cantidadBolsas);
        } while (isNaN(cantidadBolsas) || cantidadBolsas < 0);

        do
        {
            precioPorBolsa = prompt("Ingrese precio de bolsas q compró del producto: ");
            precioPorBolsa = parseInt(precioPorBolsa);
        } while (isNaN(precioPorBolsa) || precioPorBolsa < 0);

         
        acumuladorBolsas += cantidadBolsas;
        acumuladorPrecio += precioPorBolsa;

        switch(tipoIngresado)
        {
            case "arena":
                acumuladorBolsasArena += cantidadBolsas;
                break;
            case "cemento":
                acumuladorBolsasCemento += cantidadBolsas;
                break;
            default:
                acumuladorBolsasCal += cantidadBolsas;
                break;
        }

        if (banderaCaro == true || precioPorBolsa > precioMasCaro) 
        {
            banderaCaro = false;

            precioMasCaro = precioPorBolsa;
            nombreTipoMasCaro = tipoIngresado;
        }

        seguir = confirm("Desea ingresar otro?: ");
    } while(seguir == true)

    if (acumuladorBolsas > 29)
    {
        porcentaje = 0.25;
    }
    else
    {
        if (acumuladorBolsas > 9)
        {
            porcentaje = 0.15;
        }
        else
        {
            porcentaje = 0;
        }
    }

    if (acumuladorBolsasArena > acumuladorBolsasCemento && acumuladorBolsasArena > acumuladorBolsasCal)
    {
        mayorAcumuladorBolsas = "Arena";
    }
    else
    {
        if (acumuladorBolsasCemento > acumuladorBolsasCal)
        {
            mayorAcumuladorBolsas = "Cemento";
            
        }
        else
        {
            mayorAcumuladorBolsas = "Cal";
            
        }
    }

    precioSinDescuento = acumuladorBolsas * acumuladorPrecio;
    precioConDescuento = precioSinDescuento - (precioSinDescuento * porcentaje);

    document.write("El importe total a pagar , bruto sin descuento: " + precioSinDescuento + "<br>");
    if (porcentaje != 0)
    {
        document.write("!! USTED OBTUVO DESCUENTO. el importe total a pagar con descuento: " + precioConDescuento + "<br>");
    }
    document.write("Informar el tipo con mas cantidad de bolsas en el total de la compra: " + mayorAcumuladorBolsas + "<br>");
    document.write("El tipo mas caro es: " + nombreTipoMasCaro);
}
