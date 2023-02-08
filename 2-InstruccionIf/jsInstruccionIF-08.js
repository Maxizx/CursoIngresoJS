function mostrar()
	{
		let edad;
		let numeroedad;
		let mensaje;
		let estadoCivil;
	
	
	edad = document.getElementById("txtIdEdad").value;
	numeroedad = parseInt(edad);
	
	estadoCivil = document.getElementById("estadoCivil").value;
	
	
	if ( numeroedad < 18 && estadoCivil != "Soltero")
	{
		
	} 
	else 
	{
		if(estadoCivil == "Soltero")
		{
			mensaje = "Es soltero y no es menor"
		}
	
	}
	

	
	alert(mensaje);
	
	}//FIN DE LA FUNCIÓN


	//https://onlinegdb.com/9qjaUoRim