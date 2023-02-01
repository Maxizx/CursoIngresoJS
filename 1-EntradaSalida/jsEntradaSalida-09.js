/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let valorUnoingresado;
	

	let sueldo;
	let resultado;
	let incremento;
	let sumaIncremeneto;

valorUnoingresado= document.getElementById('txtIdSueldo').value;
sueldo = parseInt(valorUnoingresado);
incremento= 0.1;

resultado = sueldo * incremento
sumaIncremeneto= resultado + sueldo


document.getElementById('txtIdResultado').value = sumaIncremeneto;


}
