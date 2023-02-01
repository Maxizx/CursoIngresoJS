/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let numero
	let descuento;
	let total;
	let importeTotal;


	importe= document.getElementById('txtIdImporte').value;
	numero= parseInt(importe);
	descuento= 0.25;

	total= importe * descuento;

	importeTotal= importe - total;
	document.getElementById('txtIdResultado').value = importeTotal;




}
