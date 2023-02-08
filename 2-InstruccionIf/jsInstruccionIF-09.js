function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let numeroMaximo;
	let numeroEntero;

	numeroMaximo= 10;

	numero = Math.random() * numeroMaximo;  
	numeroEntero = Math.round(numero)
	
	alert(numeroEntero);	

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/0z6pbXNx0