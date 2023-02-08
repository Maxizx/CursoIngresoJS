function mostrar()
	{
		let edad;
		let numeroedad;
		let mensaje;
		let estadoCivil;
	
	
	edad = document.getElementById("txtIdEdad").value;
	numeroedad = parseInt(edad);
	
	estadoCivil = document.getElementById("estadoCivil").value;
	
	
	if ( numeroedad < 17 && estadoCivil != "Soltero")
	{
	
	mensaje = "Es muy pequeño para NO ser soltero"
	
	}
	

	
	alert(mensaje);
	
	}//FIN DE LA FUNCIÓN


	//https://onlinegdb.com/VTQN1kR2j