/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar()
{
    let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultadoSuma = precio1 + precio2 + precio3;

    alert("el resultado de la suma entre los 3 numeros es: " + resultadoSuma);
}

function Promedio()
{
    let precio1;
    let precio2;
    let precio3;
    let precioPromedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    precioPromedio = (precio1 + precio2 + precio3) / 3;
    precioPromedio = Math.round(precioPromedio); // CON ESA FUNCION, REDONDEAS EL PROMEDIO. Para que no de con ","

    alert("el promedio entre los 3 precios es de: " + precioPromedio);
}

function PrecioFinal()
{
    let precio1;
    let precio2;
    let precio3;
    let precioSumado;
    let precioConIva;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    precioSumado = precio1 + precio2 + precio3;

    precioConIva = precioSumado + (precioSumado * 0,21);

    alert("El precio final de sus 3 productos es de: " + precioSumado + "   + IVA: " + precioConIva);
}