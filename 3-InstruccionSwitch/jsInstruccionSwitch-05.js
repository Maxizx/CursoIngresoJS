function mostrar()
{
	let mensaje;
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia= parseInt(horaDelDia);
	alert(horaDelDia);
	
switch(horaDelDia)
{
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:

	mensaje= "Es de mañana.";
	break;

}

alert(mensaje);

}//FIN DE LA FUNCIÓN