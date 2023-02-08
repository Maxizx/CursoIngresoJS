function mostrar()
{
	let edad;
	let numeroedad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	numeroedad =parseInt(edad);


	mensaje = "Tiene  "+ numeroedad+ " años";

	if(numeroedad == 15){

		mensaje= "niña bonita"

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN