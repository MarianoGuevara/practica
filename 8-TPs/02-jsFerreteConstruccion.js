/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo()
{
    let largoTerreno;
    let anchoTerreno;
    let unaVueltaDeAlambre;
    let totalAlambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    unaVueltaDeAlambre = (largoTerreno * 2) + (anchoTerreno * 2);

    totalAlambre = unaVueltaDeAlambre * 3;

    alert("TOTAL DE ALAMBRE NECESARIO PARA TERRENO RECTANGULAR: " + totalAlambre);
}

function Circulo()
{
    let radioTerreno;
    let perimetroCirculo;
    let unaVueltaDeAlambre; 
    let alambreNecesario;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseInt(radioTerreno);

    perimetroCirculo = radioTerreno * 2;

    unaVueltaDeAlambre = Math.PI * perimetroCirculo;
    
    alambreNecesario = unaVueltaDeAlambre * 3;

    alert("TOTAL DE ALAMBRE NECESARIO PARA TERRENO CIRCULAR: " + alambreNecesario);
}

function Materiales()
{
    let largoTerreno;
    let anchoTerreno;
    let areaTerreno;
    let unMetroCemento; //ESTAS VARIABLES PUEDEN SER REEMPLAZADAS DIRECTAMENTE POR UN "* 2 Y * 3, PERO BUENOO"
    let unMetroCal;     //
    let totalCemento;
    let totalCal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    areaTerreno = largoTerreno * anchoTerreno;

    unMetroCemento = 2;
    unMetroCal = 3;

    totalCemento = areaTerreno * 2;
    totalCal = areaTerreno * 3;

    alert("NECESITARÁ: " + totalCemento + " BOLSAS DE CEMENTO Y:" + totalCal + " BOLSAS DE CAL");
}
