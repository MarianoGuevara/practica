/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
    let vueltas;
    let tipoIngresado;
    let precioIngresado;
    let cantUnidadesIngresado;
    let marcaIngresada;
    let fabricanteIngresado;
    let banderaAlcohol;
    let fabriAlcohol;
    let cantUniAlcoholBarato;
    let masBaratoAlco;
    let contadorAlcohol;
    let acumuladorAlcohol;
    let contadorJabon;
    let acumuladorJabon;
    let contadorBarbi;
    let acumuladorBarbi;
    let maximoAcumUnidadesNombre;
    let promedioUnidadesMaximo;

    vueltas = 0;
    banderaAlcohol = true;
    contadorAlcohol = 0;
    acumuladorAlcohol = 0;
    contadorBarbi = 0;
    acumuladorBarbi = 0;
    contadorJabon = 0;
    acumuladorJabon = 0;

    do
    {
        do 
        {
            tipoIngresado = prompt("Tipo de producto: ");
        } while(tipoIngresado != "barbijo" && tipoIngresado != "jabón" && tipoIngresado != "alcohol");

        do
        {
            precioIngresado = prompt("Ingrese el precio del producto: ");
            precioIngresado = parseInt(precioIngresado);
        } while (isNaN(precioIngresado) || (precioIngresado < 100 || precioIngresado > 300));

        do
        {
            cantUnidadesIngresado = prompt("Ingrese la cant de unidades q compró del producto: ");
            cantUnidadesIngresado = parseInt(cantUnidadesIngresado);
        } while (isNaN(cantUnidadesIngresado) || (cantUnidadesIngresado < 1 || cantUnidadesIngresado > 1000));

        marcaIngresada = prompt("Ingrese marca:");
        fabricanteIngresado = prompt("Ingrese el fabri:");

        switch (tipoIngresado)
        {
            case "alcohol":
                if (banderaAlcohol == true || precioIngresado < masBaratoAlco) //A
                {
                    banderaAlcohol = false;
                    masBaratoAlco = precioIngresado;
                    fabriAlcohol = fabricanteIngresado;
                    cantUniAlcoholBarato = cantUnidadesIngresado;
                }
                contadorAlcohol ++;
                acumuladorAlcohol += cantUnidadesIngresado;
                break;
            case "barbijo":
                contadorBarbi ++;
                acumuladorBarbi += cantUnidadesIngresado;
                break;
            case "jabón":
                contadorJabon ++;
                acumuladorJabon += cantUnidadesIngresado;
                break;
        }

        vueltas ++;
    } while(vueltas < 5);
    
    if (acumuladorAlcohol > acumuladorBarbi && acumuladorAlcohol > acumuladorJabon)
    {
        maximoAcumUnidadesNombre = "Alcohol";
        promedioUnidadesMaximo = acumuladorAlcohol / contadorAlcohol;
    }
    else
    {
        if (acumuladorBarbi > acumuladorJabon)
        {
            maximoAcumUnidadesNombre = "Barbijo";
            promedioUnidadesMaximo = acumuladorBarbi / contadorBarbi;
        }
        else
        {
            maximoAcumUnidadesNombre = "Jabon";
            promedioUnidadesMaximo = acumuladorJabon / contadorJabon;
        }
    }
	
    document.write("Del más barato de los alcohol, la cantidad de unidades: " + cantUniAlcoholBarato + ". Fabricante: " + fabriAlcohol + "<br>");
    document.write("Del tipo con mas unidades: " + maximoAcumUnidadesNombre +  ". Promedio unidades por compra: " + promedioUnidadesMaximo +"<br>");
    document.write("Unidades de jabon: " + acumuladorJabon);
}
