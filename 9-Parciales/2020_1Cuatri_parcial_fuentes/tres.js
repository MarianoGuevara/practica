/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
    let seguir;
    let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let estCivilIngresado;
    let tempCorpoIngresada;
    let banderaTempe = true;
    let mayorTemper;
    let nombreMayorTemper;
    let contadorHombreSoltOViudo = 0;
    let contadorViejosFiebre = 0;
    let contadorHombresSolteros = 0;
    let acumuladorHombresSolteros = 0;
    let promedioHombresSoltero;
    let contadorMayorYViudo = 0;

    do
    {
        nombreIngresado = prompt("Ingrese su nombre");

        do
        {
            edadIngresada = prompt("Ingrese edad: ");
            edadIngresada = parseInt(edadIngresada);
        } while (isNaN(edadIngresada) || edadIngresada < 0);
        
        do 
        {
            sexoIngresado = prompt("sexo: ");
        } while(sexoIngresado != "f" && sexoIngresado != "m");

        do 
        {
            estCivilIngresado = prompt("estado civil: ");
        } while(estCivilIngresado != "soltero" && estCivilIngresado != "casado" && estCivilIngresado != "divorciado" && estCivilIngresado != "viudo");

        do
        {
            tempCorpoIngresada = prompt("Ingrese temp corporal: ");
            tempCorpoIngresada = parseInt(tempCorpoIngresada);
        } while (isNaN(tempCorpoIngresada) && tempCorpoIngresada < 0);
        
        if (banderaTempe == true || tempCorpoIngresada > mayorTemper) //A
        {
            banderaTempe = false;
            mayorTemper = tempCorpoIngresada;
            nombreMayorTemper = nombreIngresado;
        }
            
        if (edadIngresada >= 18)   //B
        {   
            if (estCivilIngresado == "viudo")
            {
                contadorMayorYViudo ++;
                
            }

            if (edadIngresada >= 65) // D
            {
                if (tempCorpoIngresada > 38)
                {
                    contadorViejosFiebre ++;
                }
            }
        }

        if (sexoIngresado == "m")   // C
        {
            switch (estCivilIngresado)
            {
                case "soltero":
                    contadorHombreSoltOViudo ++
                    contadorHombresSolteros ++;
                    acumuladorHombresSolteros += edadIngresada;
                    break;
                case "viudo":
                    contadorHombreSoltOViudo ++;
                    break;
            }
        }

        seguir = confirm("Desea inngresar otro pasajero?: ");
    } while(seguir == true);

    if(promedioHombresSoltero == undefined)
    {
        promedioHombresSoltero = "No hay hombres solteros";
    }
    else
    {
        promedioHombresSoltero = acumuladorHombresSolteros / contadorHombresSolteros;    
    }
    
    document.write("El nombre de la persona con mas temperatura: " + nombreMayorTemper + "<br>"); // A
    document.write("Cuantos mayores de edad estan viudos: " + contadorMayorYViudo + "<br>"); // b
    document.write("La cantidad de hombres que hay solteros o viudos: " + contadorHombreSoltOViudo + "<br>"); //c
    document.write("cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: " + contadorViejosFiebre + "<br>"); // d
    document.write("El promedio de edad entre los hombres solteros es de: " + promedioHombresSoltero); // e
}
