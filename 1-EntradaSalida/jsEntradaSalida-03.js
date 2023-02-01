/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	let nombreIngresado;
	//en vez de tomarlo de un prompt lo toma desde un cuadro de texto de html
	//nombreIngresado=txtIdNombre.value;
	//nombreIngresado= document.getElementById('txtIdNombre');
	//alert("Hola "+nombreIngresado+" ¿cómo estás?");
	
	nombreIngresado= document.getElementById('txtIdNombre').value;
	alert(nombreIngresado);

}


