function mostrar()
{
	let edad;
	let numeroedad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	numeroedad =parseInt(edad);

	if(numeroedad >= 13 && numeroedad <= 17){

		mensaje= "Sos Adolecente"

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN