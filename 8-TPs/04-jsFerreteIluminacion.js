/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let precioLamparas;
    let porcentaje;
    let descuento;
    let precioConDescuento;
    let precioFinal;
    let iibb;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;

    precioLamparas = 35 * cantidadLamparas;

    switch (cantidadLamparas)
    {
        case 0:
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.15;
            }
            else
            {
                if (marca == "FelipeLamparas")
                {
                    porcentaje = 0.10;
                }
                else
                {
                    porcentaje = 0.05;
                }
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 0.25;
                    break;
                default:
                    porcentaje = 0.20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.40;
            }
            else
            {
                porcentaje = 0.30;
            }
            break;
        default:
            porcentaje = 0.50;
    }

    descuento = precioLamparas * porcentaje;
    precioConDescuento = precioLamparas - descuento;

    if (precioConDescuento >= 120)
    {
        iibb = precioConDescuento * 0.10;
        precioFinal = precioConDescuento + iibb;   
        alert("IIBB: " + iibb); 
    }

    alert(precioConDescuento);
}



/*
    	let lamparasPrecio;
    let cantidadLamparas;
    let precioLamparas;
    let descuentoPorcentaje;
    let marca;
    let descuentoTotal;
    let precioMenosDescuento;
    let ingresosBrutos;

    lamparasPrecio = 35;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioLamparas = lamparasPrecio * cantidadLamparas;

    marca = document.getElementById("Marca").value;

    if (marca == "ArgentinaLuz") 
    {
        if (cantidadLamparas >= 6)
        {
            descuentoPorcentaje = 50
        }
        else
        {
            if (cantidadLamparas == 5)
            {
                descuentoPorcentaje = 40;
            }
            else
            {
                if (cantidadLamparas == 4)
                {
                    descuentoPorcentaje = 25;
                }
                else
                {
                    if (cantidadLamparas == 3)
                    {
                        descuentoPorcentaje = 15;
                    }
                    else
                    {
                        descuentoPorcentaje = 0
                    }
                } 
            }  
        }
    }
    else
    {   
        if (marca == "FelipeLamparas")
        {
            if (cantidadLamparas >= 6)
            {
                descuentoPorcentaje = 50;
            }
            else
            {
                if (cantidadLamparas == 5)
                {
                    descuentoPorcentaje = 30;
                }
                else
                {
                    if (cantidadLamparas == 4)
                    {
                        descuentoPorcentaje = 25;
                    }
                    else
                    {
                        if (cantidadLamparas == 3) 
                        {
                            descuentoPorcentaje = 10;
                        }
                        else
                        {
                            descuentoPorcentaje = 0;
                        }
                    }
                }
            }
        }
        else
        {
            if (cantidadLamparas >= 6)
            {
                descuentoPorcentaje = 50;
            }
            else
            {
                if (cantidadLamparas == 5)
                {
                    descuentoPorcentaje = 30;
                }
                else
                {
                    if (cantidadLamparas == 4)
                    {
                        descuentoPorcentaje = 20;
                    }
                    else
                    {
                        if (cantidadLamparas == 3)
                        {
                            descuentoPorcentaje = 5;
                        }
                        else
                        {
                            descuentoPorcentaje = 0;
                        }
                    }
                }
            }
        }
    } 
    
    descuentoTotal = precioLamparas / 100 * descuentoPorcentaje;

    precioMenosDescuento = precioLamparas - descuentoTotal;

    if (precioMenosDescuento >= 120)
    {   
        ingresosBrutos = precioMenosDescuento * 0.10;
        precioMenosDescuento = precioMenosDescuento + ingresosBrutos;

        alert("En IIBB Usted pago: " + ingresosBrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = precioMenosDescuento;

*/