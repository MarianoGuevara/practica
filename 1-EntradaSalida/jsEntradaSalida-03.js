/*
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil
*/

function mostrar()
{
    let seguir;
    let nombre;
    let lugarIngresado;
    let temporadaIngresada;
    let cantDiasIngresado;
    let importeViajeIngresado;
    let altura;
    let peso;
    let sexo;
    let equipajeMano;
    let metodoPago;
    let contadorViajerosTotal = 0;
    let acumuladorPesoGessel = 0;
    let diasGeselAcu = 0;
    let diasMadrynAcu = 0;
    let diasCordobaAcu = 0;
    let contadorViajerosGessel = 0;
    let contadorViajerosMadryn = 0;
    let contadorViajerosCordoba = 0;
    let lugarConMasDiasAcu;
    let lugarConMasViajantes;
    let acumuladorImporte = 0;
    let banderaPeso = true;
    let masFlaco;
    let masGordo;
    let nombreMasFlaco;
    let nombreMasGordo;
    let banderaPago = true;
    let mayorImporte;
    let nombreLugarMayorImporte;
    let banderaMujerAltura = true;
    let mujerMasAlta;
    let nombreMujerMasAlta;
    let contadorMp = 0;
    let contadorTarjeta = 0;
    let contadorEfectivo = 0;
    let formaMasUsada;
    let contadorTempAlta = 0;
    let contadorTempBaja = 0;
    let temporadaQueMasSeViajo;
    let contadorManoSi = 0;
    let porcentajeManoSi;
    let contadorM = 0;
    let contadorF = 0;
    let contadorNb = 0;
    let porcentajeM;
    let porcentajeF;
    let porcentajeNb;

    do
    {
        nombre = prompt("Nombre: ");

        do 
        {
            lugarIngresado = prompt("Lugar de viaje: ");
        } while(lugarIngresado != "cordoba" && lugarIngresado != "puerto madryn" && lugarIngresado != "villa gessel");

        do 
        {
            temporadaIngresada = prompt("Temporada alta o baja: ");
        } while(temporadaIngresada != "alta" && temporadaIngresada != "baja");

        do
        {
            cantDiasIngresado = prompt("Ingrese la cant de dias: ");
            cantDiasIngresado = parseInt(cantDiasIngresado);
        } while (isNaN(cantDiasIngresado));

        do
        {
            importeViajeIngresado = prompt("Ingrese importe del viaje: ");
            importeViajeIngresado = parseInt(importeViajeIngresado);
        } while (isNaN(importeViajeIngresado));

        do
        {
            altura = prompt("Ingrese altura: ");
            altura = parseInt(altura);
        } while (isNaN(altura) || altura < 0);

        do
        {
            peso = prompt("Ingrese altura: ");
            peso = parseInt(peso);
        } while (isNaN(peso) || peso < 0);

        do 
        {
            sexo = prompt("sexo: ");
        } while(sexo != "m" && sexo != "f" && sexo != "nb");

        do 
        {
            equipajeMano = prompt("Equipaje de mano? si o no: ");
        } while(equipajeMano != "si" && equipajeMano != "no");

        do 
        {
            metodoPago = prompt("metodo de pago: ");
        } while(metodoPago != "mercado pago" && metodoPago != "efectivo" && metodoPago != "tarjeta");

        contadorViajerosTotal ++;   // A
        acumuladorImporte += importeViajeIngresado;

        switch (lugarIngresado)
        {
            case "villa gessel":
                contadorViajerosGessel ++;
                diasGeselAcu ++;
                acumuladorPesoGessel += peso;   // B
                break;
            case "puerto madryn":
                contadorViajerosMadryn ++;
                diasMadrynAcu ++;
                break;
            default:
                contadorViajerosCordoba ++;
                diasCordobaAcu ++;
        }

        if (banderaPeso == true)    // e
        {
            banderaPeso = false;
            masFlaco = peso;
            masGordo = peso;
            nombreMasGordo = nombre;
            nombreMasFlaco = nombre;
        }
        else
        {
            if (peso > masGordo)
            {
                masGordo = peso
                nombreMasGordo = nombre;
            }
            else
            {
                if (peso < masFlaco)
                {
                    masFlaco = peso;
                    nombreMasFlaco = nombre;
                }
            }
        }

        if (banderaPago == true || importeViajeIngresado > mayorImporte) 
        {
            banderaPago = false;

            mayorImporte = importeViajeIngresado;
            nombreLugarMayorImporte = nombre;
        }

        if (sexo == "f")
        {
            if (banderaMujerAltura == true || altura > mujerMasAlta) 
            {
                mujerMasAlta = false;
    
                mayorImporte = altura;
                nombreMujerMasAlta = nombre;
            } 
        }
        
        switch (metodoPago) // H
        {
            case "mercado pago":
                contadorMp ++;
                break;
            case "tarjeta":
                contadorTarjeta++;
                break;
            case "efectivo":
                contadorEfectivo++;
                break;
        }

        switch (temporadaIngresada) // I
        {
            case "alta":
                contadorTempAlta++;
                break;
            case "baja":
                contadorTempBaja++;
        }

        switch (equipajeMano)
        {
            case "si":
                contadorManoSi++;
                break;
        }

        switch (sexo)
        {
            case "f":
                contadorF++;
                break;
            case "m":
                contadorM++;
                break;
            default:
                contadorNb++;
        }

        seguir = confirm("Desea ingresar otro?: ");
    } while(seguir == true)

    if (diasCordobaAcu > diasGeselAcu && diasCordobaAcu > diasMadrynAcu)
    {
        lugarConMasDiasAcu = "Cordoba";
    }
    else
    {
        if (diasGeselAcu > diasMadrynAcu)
        {
            lugarConMasDiasAcu = "Gessel";
        }
        else
        {
            lugarConMasDiasAcu = "Madryn"
        }
    }

    if (contadorEfectivo > contadorMp && contadorEfectivo > contadorTarjeta)
    {
        formaMasUsada = "Efectivo";
    }   
    else
    {
        if (contadorTarjeta > contadorMp)
        {
            formaMasUsada = "Tarjeta";
        }
        else
        {
            formaMasUsada = "Mercado Pago"
        }
    }

    if (contadorTempAlta > contadorTempBaja)
    {
        temporadaQueMasSeViajo = "Alta";
    }   
    else
    {
        temporadaQueMasSeViajo = "Baja";
    }

    if (contadorViajerosCordoba > contadorViajerosGessel && contadorViajerosCordoba > contadorViajerosMadryn)
    {
        lugarConMasViajantes = "Cordoba";
    }
    else
    {
        if (contadorViajerosGessel > contadorViajerosMadryn)
        {
            lugarConMasViajantes = "Gessel";
        }
        else
        {
            lugarConMasViajantes = "Madryn"
        }
    }

    porcentajeManoSi = (contadorManoSi * 100) / contadorViajerosTotal;

    porcentajeM = (contadorM * 100) / contadorViajerosTotal;
    porcentajeF = (contadorF * 100) / contadorViajerosTotal; 
    porcentajeNb = (contadorNb * 100) / contadorViajerosTotal;

    document.write("cantidad de personas que viajan en cada temporada: " + contadorViajerosTotal + "<br>");
    document.write("el peso acumulado de todos los que viajan a villa gessel: " + acumuladorPesoGessel + "<br>");
    document.write("el lugar con la mayor cantidad de días acumulados" + lugarConMasDiasAcu + "<br>");
    document.write("la suma de todos los importes: " + acumuladorImporte +"<br>");

    document.write("el nombre del más pesado de los pasajeros: " + nombreMasGordo + ". y el del más liviano: " + nombreMasFlaco + "<br>");
    document.write("el lugar donde se pagó el mayor importe: " + nombreLugarMayorImporte + "<br>");
    document.write("el nombre de la mujer más alta: " + nombreMujerMasAlta + "<br>");

    document.write("Cuál fue la forma de pago más utilizada: " + formaMasUsada + "<br>");
    document.write("en qué temporada se viajó más: " + temporadaQueMasSeViajo + "<br>");
    document.write("qué lugar tuvo más pasajeros: " + lugarConMasViajantes + "<br>");

    document.write("qué porcentaje usa equipaje de mano: " + porcentajeManoSi + "<br>");
    document.write("que porcentaje hay de cada sexo. M:" + porcentajeM + ". F: " + porcentajeF + ". NB: " + porcentajeNb);
}
