/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let valorUnoIngresado;
	let valorDosIngresado;
	
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	
	valorUnoIngresado=document.getElementById('txtIdNumeroDividendo').value;
	valorDosIngresado= document.getElementById('txtIdNumeroDivisor').value;
	
	numeroUno= parseInt(valorUnoIngresado);
	numeroDos= parseInt(valorDosIngresado);
	resultado= numeroUno % numeroDos;


	mensaje= "El resto es " + resultado;
	
	alert(mensaje);
}
