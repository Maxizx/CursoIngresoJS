function mostrar()
{
	let mensaje;
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
		mensaje ="si tiene 28 días.";
		break;
	
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		mensaje="si tiene 30 días.";
		break;


	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":	
		mensaje="si tiene 31 días.";
		break;
}
alert(mensaje)


}//FIN DE LA FUNCIÓN