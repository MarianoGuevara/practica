/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{
    let seguir;
    let nombre;
    let nacionalidad;
    let edad;
    let sexo;
    let estadoCivil;
    let temperaturaCorporal;

    let maximaTemperatura;
    let nacionalidadMasTemperatura;
    let banderaTemperatura = true;

    let contadorMayoresSolteros = 0;
    let contadorMujeresSoltOViudas = 0;

    let contadorMujeresCasadas = 0;
    let acumuladorEdadMujeresCasadas = 0;
    let promedioEdadMujeresCasadas;

    let contadorViejosFiebre = 0;

	do
    {
        nombre = prompt("Ingrese nombre: ");
        nacionalidad = prompt("Nacionalidad: ");

        do
        {
            edad = prompt("Ingrese edad: ");
            edad = parseInt(edad);
        } while (isNaN(edad) || edad < 0);

        do 
        {
            sexo = prompt("sexo: ");
        } while(sexo != "f" && sexo != "m");

        do 
        {
            estadoCivil = prompt("Estado civil: ");
        } while(estadoCivil != "soltero" && estadoCivil != "viudo" && estadoCivil != "casado");

        do
        {
            temperaturaCorporal = prompt("Ingrese temperatura corporal: ");
            temperaturaCorporal = parseInt(temperaturaCorporal);
        } while (isNaN(temperaturaCorporal) || temperaturaCorporal < 0);

        if (banderaTemperatura == true || temperaturaCorporal > maximaTemperatura) 
        {
            banderaTemperatura = false;

            maximaTemperatura = temperaturaCorporal;
            nacionalidadMasTemperatura = nacionalidad;
        }

        if (edad > 17)
        {
            if (estadoCivil == "soltero")
            {
                contadorMayoresSolteros ++;
            }

            if (edad > 60)
            {
                if (temperaturaCorporal > 38)
                {
                    contadorViejosFiebre ++;
                }
            }
        }
        
        if (sexo == "f")
        {
            switch (estadoCivil)
            {
                case "viudo":
                case "soltero":
                    contadorMujeresSoltOViudas ++;
                default:
                    acumuladorEdadMujeresCasadas += edad;
                    contadorMujeresCasadas ++;
            }
        }

        seguir = confirm("Desea ingresar otro?: ");
    } while(seguir == true)

    if (contadorMujeresCasadas == 0)
    {
        promedioEdadMujeresCasadas = "No hay";
    }
    else
    {
        promedioEdadMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;
    }
    
    document.write("la Nacionalidad de la persona con mas temperatura es: " + nacionalidadMasTemperatura + "<br>");
    document.write("Cuantos mayores de edad( más de 17) estan solteros: " + contadorMayoresSolteros + "<br>");
    document.write("La cantidad de Mujeres que hay solteras o viudas." + contadorMujeresSoltOViudas +"<br>");
    document.write("cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: " + contadorViejosFiebre + "<br>");
    document.write("El promedio de edad entre las mujeres casadas." + promedioEdadMujeresCasadas);
}
