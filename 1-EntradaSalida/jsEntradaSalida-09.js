/*
al ejercicio nueve (9), se  debe cambiar el porcentaje, 
debe ser ingresado por prompt el porcentaje ,
puede ser un numero del 1 al 100 de porcentaje de aumento.*/
function mostrarAumento()
{
	let valorUnoingresado;
	

	let sueldo;
	let resultado;
	let incremento;
	let sumaIncremeneto;

	
valorUnoingresado= document.getElementById('txtIdSueldo').value;
sueldo = parseInt(valorUnoingresado);
incremento= prompt("Escribe el porcentaje (de 1 hasta 100)", "ingrese aquí");

resultado = (sueldo * incremento) / 100
sumaIncremeneto= resultado + sueldo


document.getElementById('txtIdResultado').value = sumaIncremeneto;


}
