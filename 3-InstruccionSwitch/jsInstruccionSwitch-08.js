function mostrar()
{
	let mensaje;
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

switch(destinoIngresado)
{

	case "Bariloche":
	case "Ushuaia":
		mensaje = "Hace FRIO ";
		break

	case "Mar del plata":
	case "Cataratas":
		mensaje = "Hace CALOR ";
		break;

}

alert(mensaje);

}//FIN DE LA FUNCIÓN