function mostrar()
{
	let mensaje;
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

switch(destinoIngresado)
{

	case "Bariloche":
	mensaje = "Está al Oeste de Argentina";
	break;

	case "Ushuaia":
	mensaje = "Está al Sur de Argentina";
	break;

	case "Cataratas":
	mensaje = "Está al Norte de Argentina";
	break;

	case "Mar del plata":
	mensaje = "Está al Este de Argentina";
	break;


}

alert(mensaje);
}//FIN DE LA FUNCIÓN