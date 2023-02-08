function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let numeroMaximo;
	let numeroEntero;
	let mensaje;

	numeroMaximo= 10;

	numero = Math.random() * numeroMaximo;  
	numeroEntero = Math.round(numero)
	

	if (numeroEntero > 8){
	
		mensaje= "EXCELENTE";

	} 
	else 
	{
		if( numeroEntero > 3)
		{
			mensaje= "APROBÓ";
		}
		else
		{
			mensaje= "Vamos, la proxima se puede";
		}
		

	} 


	alert(mensaje);	

}//FIN DE LA FUNCIÓN


