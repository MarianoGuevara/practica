/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
    let seguir;
    let tipoProducto;
    let precioPorBolsa;
    let cantidadBolsas;
    let precioCompraSinDescuento;
    let precioConDescuento;
    let porcentaje;
    let contadorArena = 0;
    let contadorCal = 0;
    let contadorCemento = 0;
    let mayorContador;
    let banderaCaro = true;
    let precioMasCaro;
    let tipoPrecioMasCaro;

    do
    {
        do 
        {
            tipoProducto = prompt("Tipo de producto: ");
        } while(tipoProducto != "cal" && tipoProducto != "arena" && tipoProducto != "cemento");

        do
        {
            cantidadBolsas = prompt("Ingrese la cantidad de bolsas: ");
            cantidadBolsas = parseInt(cantidadBolsas);
        } while (isNaN(cantidadBolsas) && cantidadBolsas < 0);

        do
        {
            precioPorBolsa = prompt("Ingrese el precio por bolsa: ");
            precioPorBolsa = parseInt(precioPorBolsa);
        } while (isNaN(precioPorBolsa) && precioPorBolsa < 0);

        precioCompraSinDescuento = cantidadBolsas * precioPorBolsa; // A

        if (cantidadBolsas >= 30)
        {
            porcentaje = 0.25;
        }
        else
        {
            if (cantidadBolsas >= 10)
            {
                porcentaje = 0.15;
            }
            else
            {
                porcentaje = 0;
            }
        }
        
        precioConDescuento = precioCompraSinDescuento - (precioCompraSinDescuento * porcentaje);

        switch (tipoProducto)
        {
            case "arena":
                contadorArena ++;
                break;
            case "cal":
                contadorCal ++;
                break;
            default:
                contadorCemento ++;
        }

        if (banderaCaro == true || precioConDescuento > precioMasCaro) //F
        {
            banderaCaro = false;
            precioMasCaro = precioConDescuento;
            tipoPrecioMasCaro = tipoProducto;
        }

        seguir = confirm("Quiere ingresar otro material?: ");
    } while (seguir == true)

    if (contadorArena > contadorCal && contadorArena > contadorCemento)
    {
        mayorContador = "Arena";
    }
    else
    {
        if (contadorCal > contadorCemento)
        {
            mayorContador = "Cal";
        }
        else
        {
            mayorContador = "Cemento";
        }
    }

    document.write("El importe total a pagar , bruto sin descuento: " + precioCompraSinDescuento + "<br>"); //A
    if (porcentaje != 0)  // B
    {
        document.write("el importe total a pagar con descuento: " + precioConDescuento + "<br>");
    }
    else
    {
        document.write("el importe con descuento es el mismo de antes, ya que no hay descuento" + "<br>");
    }
    document.write("el tipo con mas cantidad de bolsas: " + mayorContador + "<br>"); // D
    document.write("El tipo mas caro: " + tipoPrecioMasCaro); // F
}
