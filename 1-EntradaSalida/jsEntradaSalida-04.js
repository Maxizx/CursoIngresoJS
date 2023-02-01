/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	let nombreIngresado; 
	nombreIngresado = prompt("Escribir su nombre", "Tu nombre aquí");
	document.getElementById('txtIdNombre').value=nombreIngresado;
	


}

