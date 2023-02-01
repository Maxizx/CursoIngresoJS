/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;
	//de string a int
	//numeroUno= parseInt(numeroUno);
	//numeroDos= parseInt(numeroDos);

	/*Numeros decimales
	 
	numeroUno= parseFloat(numeroUno);
	numeroDos= parseFloat(numeroDos);
	*/

	resultado= numeroUno+numeroDos;
	
	alert(resultado);
}

