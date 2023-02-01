/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
let nombreIngresado,edadIngresado;

nombreIngresado=document.getElementById('txtIdNombre').value;
edadIngresado=document.getElementById('txtIdEdad').value;
	
alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresado+ " años");

	/*
	entrada de datos es por
	variable=prompt();
	variable=document.getElementById('').value;

	//salida de datos 
	alert();
	document.getElementById('').value=variable;

	*/
}

