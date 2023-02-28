/*

Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/


/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Se sabe que el precio de cada pasaje vendido dentro del paquete de viaje es de 10000 pesos.
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor. *
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. *
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. *
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert*
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/



function mostrar ()
{
	let seguir;
    let nombreVendedor;
    let nombreComprador;
    let cantidadPasajes;
    let precioPorPasaje;
    let precioPasajes;
    let tipoAsiento;
    let escalaIngresada;
    let destinoIngresado;
    let acumuladorPepeposo;
    let acumuladorQuinoto;
    let acumuladorHuesos;
    let mejorVendedor;
    let mejorVendedorAcum;
    let contadorPasajero;
    let porcentaje;
    let precioFinalViaje;
    let porcentajeNacional;
    let porcentajeInternacional;
    let contadorNacional;
    let contadorInternacional;
    let contadorInternacionalYSinEscalas;
    let claseBajaContador;
    let claseBajaAcumulador;
    let claseMediaCon;
    let claseMediaAcu;
    let claseAltaCon;
    let clasaAltaAcu;
    let promedioClaseB;
    let promedioClaseM;
    let promedioClaseA;

    claseBajaContador = 0;
    claseBajaAcumulador = 0;
    claseAltaCon = 0;
    clasaAltaAcu = 0;
    claseMediaAcu = 0;
    claseMediaCon = 0;
    acumuladorHuesos = 0;
    acumuladorPepeposo = 0;
    acumuladorQuinoto = 0;
    contadorPasajero = 0;
    contadorNacional = 0;
    contadorInternacional = 0;
    contadorInternacionalYSinEscalas = 0;

    do
    {
        do
        {
            nombreVendedor = prompt("Ingrese el nombre del vendedor: ");
        } while(nombreVendedor != "Pepepeposo" && nombreVendedor != "Quinoto" && nombreVendedor != "Huesos");

        do
        {
            nombreComprador = prompt("Nombre del comprador: ");
        } while(!(isNaN(nombreComprador)));

        do
        {
            cantidadPasajes = prompt("Cant pasajes: ");
            cantidadPasajes = parseInt(cantidadPasajes);
        } while(isNaN(cantidadPasajes) || (cantidadPasajes < 1 || cantidadPasajes > 5))

        do
        {
            precioPorPasaje = prompt("Ingrese el precio por pasaje: ");
            precioPorPasaje = parseInt(precioPorPasaje);
        } while (isNaN(precioPorPasaje) || precioPorPasaje < 1)

        do 
        {
            tipoAsiento = prompt("Tipo asiento: ");
        } while(tipoAsiento != "clase economica" && tipoAsiento != "clase ejecutiva" && tipoAsiento != "primera clase")

        do
        {
            escalaIngresada = prompt("Su vuelo tiene escala?");
        } while(escalaIngresada != "si" && escalaIngresada != "no")

        do
        {
            destinoIngresado = prompt("Nacional o inter? ");
        } while (destinoIngresado != "nacional" && destinoIngresado != "internacional");

        contadorPasajero ++;

        precioPasajes = cantidadPasajes * precioPorPasaje;

        switch (tipoAsiento)
        {
            case "clase economica":
                porcentaje = 0;
                claseBajaAcumulador += cantidadPasajes;
                claseBajaContador ++;
                break;
            case "clase ejecutiva":
                porcentaje = 0.20;
                claseMediaAcu += cantidadPasajes;
                claseMediaCon ++;
                break;
            case "primera clase":
                porcentaje = 0.35;
                claseAltaCon ++;
                clasaAltaAcu += cantidadPasajes;
                break;
        }
        
        if (porcentaje == 0)
        {
            precioFinalViaje = precioPasajes;
        }
        else
        {
            if (porcentaje == 20)
            {
                precioFinalViaje = precioPasajes + (precioPasajes * porcentaje);
            }
            else
            {
                precioFinalViaje = precioPasajes + (precioPasajes * porcentaje);
            }
        }

        switch(nombreVendedor)
        {
            case "Pepepeposo":
                acumuladorPepeposo += precioFinalViaje;
                break;
            case "Quinoto":
                acumuladorQuinoto += precioFinalViaje;
                break;
            case "Huesos":
                acumuladorHuesos += precioFinalViaje;
                break;
        }

        switch (destinoIngresado)
        {
            case "nacional":
                contadorNacional ++;
                break;
            case "internacional":
                contadorInternacional ++;
                if (escalaIngresada == "no")
                {
                    contadorInternacionalYSinEscalas ++;
                }
                break;
        }

        alert("El precio de tu viaje final con aumento es de: " + precioFinalViaje);

        seguir = confirm("Otro pasajero?: ");
    } while(seguir == true);

    if (acumuladorPepeposo > acumuladorHuesos && acumuladorPepeposo > acumuladorQuinoto)
    {
        mejorVendedor = "Pepeprposo";
        mejorVendedorAcum = acumuladorPepeposo;
    }
    else
    {
        if (acumuladorHuesos > acumuladorPepeposo && acumuladorHuesos > acumuladorQuinoto)
        {
            mejorVendedor = "Huesos";
            mejorVendedorAcum = acumuladorHuesos;
        }
        else
        {
            if (acumuladorQuinoto > acumuladorHuesos && acumuladorQuinoto > acumuladorPepeposo)
            {
                mejorVendedor = "Quinoto";
                mejorVendedorAcum = acumuladorQuinoto;
            }
            else
            {
                mejorVendedor = "No hay";

            }
        }
    }

    promedioClaseB = claseBajaAcumulador / claseBajaContador;
    promedioClaseM = claseMediaAcu / claseMediaCon;
    promedioClaseA = clasaAltaAcu / claseAltaCon;

    porcentajeNacional = (contadorNacional * 100) / contadorPasajero; 
    porcentajeInternacional = (contadorInternacional * 100) / contadorPasajero;

    document.write("El total de pesos recaudados de cada vendedor: Pepepeposo: " + acumuladorPepeposo + ". Quinoto: " + acumuladorQuinoto + ". Huesos:" + acumuladorHuesos + "<br>");
    if (mejorVendedor == "No hay")
    {
        document.write("NO HAY MEJOR VENDEDOR" + "<br>")
    }
    else
    {
        document.write("El vendedor que mas recaudo: " + mejorVendedor + " Total pesos: " + mejorVendedorAcum + "<br>");
    }  
    document.write("Porcentaje NACIONAL: " + porcentajeNacional + ". INTENRACIONAL: " + porcentajeInternacional + "<br>");
    document.write("Cantidad viajes internacionales y sin escala: " + contadorInternacionalYSinEscalas + "<br>");
    document.write("PROMEDIO: CLASE BAJA" + promedioClaseB + ". CLASE MEDIA: " + promedioClaseM + ". CLASE ALTA: " + promedioClaseA);
}