function mostrar()
{
	let edad;
	let numeroedad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	numeroedad =parseInt(edad);

	mensaje= "Eres menor de edad"

	if(numeroedad >= 18){

		mensaje= "Eres mayor de edad"

	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN