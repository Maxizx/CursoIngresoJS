
function CalcularPrecio () 
{
    let calcularDescuento;
    let cantidadDeLamparitas;
    let precioLamparitas;
    let precioFinal;
    let descuento;
    let marca;
    let precioFinalConingresosBrutos;
    let ingresosBrutos;
    let calcularIngresoBruto;

    precioLamparitas= 35;
    

    cantidadDeLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);

    marca = document.getElementById("Marca").value;



    if(cantidadDeLamparitas > 6)
    {
        descuento= 50;
    }
    else
    {
        if(cantidadDeLamparitas == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuzr":
                    descuento= 40;
                    break;

                default:
                    descuento= 30;
                    break;
            }
        }
        else
        {
            if(cantidadDeLamparitas == 4)
            {
                    switch(marca)
                    {
                        case "FelipeLamparas":
                        case "ArgentinaLuz":
                            descuento = 25;
                            break;

                        default:
                            descuento = 20;
                            break;

                    }
            }
            else
            {
                if(cantidadDeLamparitas == 3)
                {
                        switch(marca)
                        {
                            case "ArgentinaLuz":
                                descuento= 15;
                                break;

                            case "FelipeLamparas":   
                                descuento= 10;
                                break;

                            default:
                                descuento= 5;
                                break;
                        }
                }
                else
                {   
                descuento= 0;
                }
                
            }
        }
    }


precioLamparitas= cantidadDeLamparitas * precioLamparitas; 

calcularDescuento = (precioLamparitas * descuento) / 100;

precioFinal = precioLamparitas - calcularDescuento;

    if(precioFinal > 119)
    {
        ingresosBrutos= 10;
        
    }
    else
    {
        ingresosBrutos= 0;
    }

calcularIngresoBruto = (precioFinal * ingresosBrutos) / 100;
precioFinalConingresosBrutos= calcularIngresoBruto + precioFinal;

document.getElementById("txtIdprecioDescuento").value = precioFinalConingresosBrutos;

}

 
