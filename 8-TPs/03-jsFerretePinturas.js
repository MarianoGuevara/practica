/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados()
{
    let temperaturaIngresada;
    let temperaturaInvertida;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    temperaturaInvertida = (temperaturaIngresada - 32) * 5 / 9;

    alert(temperaturaIngresada + " grados f. son: " + temperaturaInvertida + " grados c");
}

function CentigradosFahrenheit ()
{
    let temperaturaIngresada;
    let temperaturaInvertida;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    temperaturaInvertida = (temperaturaIngresada * 9 / 5) + 32;

    alert(temperaturaIngresada + " grados c. son: " + temperaturaInvertida + " grados f");
}