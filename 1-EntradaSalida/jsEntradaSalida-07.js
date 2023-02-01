/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	let numeroUnoingresado;
	let numeroDosingresado;
	
	numeroUnoingresado= document.getElementById('txtIdNumeroUno').value;
	numeroDosingresado= document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUnoingresado);
	numeroDos = parseInt(numeroDosingresado);
	resultado= numeroUno + numeroDos;

	alert(resultado);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	let numeroUnoingresado;
	let numeroDosingresado;
	
	numeroUnoingresado= document.getElementById('txtIdNumeroUno').value;
	numeroDosingresado= document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUnoingresado);
	numeroDos = parseInt(numeroDosingresado);
	resultado= numeroUno - numeroDos;

	alert(resultado);	

}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;

	let numeroUnoingresado;
	let numeroDosingresado;
	
	numeroUnoingresado= document.getElementById('txtIdNumeroUno').value;
	numeroDosingresado= document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUnoingresado);
	numeroDos = parseInt(numeroDosingresado);
	resultado= numeroUno * numeroDos;

	alert(resultado);	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	let numeroUnoingresado;
	let numeroDosingresado;
	
	numeroUnoingresado= document.getElementById('txtIdNumeroUno').value;
	numeroDosingresado= document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUnoingresado);
	numeroDos = parseInt(numeroDosingresado);
	resultado= numeroUno / numeroDos;

	alert(resultado);	
}

