function mostrar()
{
	let edad;
	let numeroedad;
	let mensaje;
	let etapaPersona;
	let mensajeFinal;

edad = document.getElementById("txtIdEdad").value;
numeroedad = parseInt(edad);



mensaje = "Eres un ";

 if(numeroedad > 17) 
{
	etapaPersona= "Mayor de edad";
	mensaje= "Ya sos ";


} else 
{

	if (numeroedad >13)
	{

		etapaPersona= "adolecente";
		
	}
	else
	{
		etapaPersona = "niño";
	}

}

mensajeFinal = mensaje + etapaPersona;

alert(mensajeFinal);

}//FIN DE LA FUNCIÓN


//no pregutnamos tanto