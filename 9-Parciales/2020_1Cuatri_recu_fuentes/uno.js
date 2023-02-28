/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
    let vueltas = 0;
    let productoIngresado;
    let precioIngresado;
    let cantidadUnidadesIngresadas;
    let marca;
    let fabricante;

    let fabricanteJabonMasCaro;
    let cantUniJabonMasCaro;
    let jabonMasCaro;
    let banderaJabon = true;

    let acumuladorJabon = 0;
    let contadorJabon = 0;
    let acumuladorBarbijo = 0;
    let contadorBarbijo = 0;
    let acumuladorAlcohol = 0;
    let contadorAlcohol = 0;
    let maximoAcumulador;
    let promedioCompraMasUnidades;

    do
    {  
        do 
        {
            productoIngresado = prompt("Tipo de producto: ");
        } while(productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol");

        do
        {
            precioIngresado = prompt("Ingrese el precio del producto: ");
            precioIngresado = parseInt(precioIngresado);
        } while (isNaN(precioIngresado) || (precioIngresado < 100 || precioIngresado > 300));

        do
        {
            cantidadUnidadesIngresadas = prompt("Ingrese la cant de unidades q compró del producto: ");
            cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);
        } while (isNaN(cantidadUnidadesIngresadas) || cantidadUnidadesIngresadas < 1);

        marca = prompt("Ingrese marca: ");
        fabricante = prompt("Ingrese fabricante: ");

        switch (productoIngresado)
        {
            case "jabón":   // A
                acumuladorJabon += cantidadUnidadesIngresadas;
                contadorJabon ++;
                if (banderaJabon == true || precioIngresado < jabonMasCaro) 
                {
                    banderaJabon = false;

                    jabonMasCaro = precioIngresado;
                    cantUniJabonMasCaro = cantidadUnidadesIngresadas;
                    fabricanteJabonMasCaro = fabricante;
                }
                break;
            case "alcohol":
                acumuladorAlcohol += cantidadUnidadesIngresadas;
                contadorAlcohol ++;
                break;
            default:
                acumuladorBarbijo += cantidadUnidadesIngresadas;
                contadorBarbijo ++;

        }

        vueltas ++;
    } while(vueltas < 2);

    if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
    {
        maximoAcumulador = "Alcohol";
        promedioCompraMasUnidades = acumuladorAlcohol / contadorAlcohol;
    }
    else
    {
        if (acumuladorBarbijo > acumuladorJabon)
        {
            maximoAcumulador = "Barbijo";
            promedioCompraMasUnidades = acumuladorBarbijo / contadorBarbijo;
            
        }
        else
        {
            maximoAcumulador = "Jabon";
            promedioCompraMasUnidades = acumuladorJabon / contadorJabon;
        }
    }

    document.write("Del más caro de los jabones, la cantidad de unidades: " + cantUniJabonMasCaro + ". y el fabricante: " + fabricanteJabonMasCaro + "<br>");
    document.write("Del tipo de producto con más unidades en total de la compra, el promedio por compra: " + promedioCompraMasUnidades + "<br>");
    document.write("unidades de Barbijos que se compraron en total: " + contadorBarbijo);
}