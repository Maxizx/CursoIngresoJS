function mostrar()
{

	let mensajeFinal;
	let precioInicial;
	let precioConPorcentaje;
	let porcentaje;
	let precioFinal;

	precioInicial = 15000;

	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	alert(estacionIngresada);

switch(estacionIngresada)
{
	case "Invierno":

	switch(destinoIngresado)
	{
	
		case "Bariloche":
			porcentaje= 20;
			break;
	
		case "Mar del plata":
			porcentaje= -20;
			break;

		case "Cordoba":
		case "Cataratas":
			porcentaje= -10;
			break;
	
	}

	break;
	case "Verano":

	switch(destinoIngresado)
	{
		case "Bariloche":
			porcentaje= -20;
			break;

			
		case "Cordoba":
		case "Cataratas":
			porcentaje= 10;
			break;
		
		case "Mar del plata":
			porcentaje= 20;
			break;

	}


	break;

	default:

		switch(destinoIngresado)
		{
			case "Bariloche":
			porcentaje= 10;
			break;

			case "Mar del plata":
				porcentaje= 10;
				break;

			case "Cataratas":
				porcentaje= 10;
				break;
		}
	break;

	
}

precioConPorcentaje= (precioInicial * porcentaje ) / 100;
precioFinal = precioInicial + precioConPorcentaje;

mensajeFinal= "El precio total del pasaje es de " + precioFinal;

	
	alert(mensajeFinal);
	
	

}//FIN DE LA FUNCIÓN