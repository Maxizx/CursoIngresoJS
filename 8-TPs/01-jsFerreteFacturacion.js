/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
	let precioUno;
    let precioDos;
    let precioTres;
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let suma;


    precioUno= document.getElementById('txtIdPrecioUno').value;
    numeroUno =parseFloat(precioUno);
    
    precioDos= document.getElementById('txtIdPrecioDos').value;
    numeroDos =parseFloat(precioDos);
    
    precioTres= document.getElementById('txtIdPrecioTres').value;
    numeroTres =parseFloat(precioTres);

    suma= numeroUno +  numeroDos + numeroTres;
    
    alert(suma);

}
function Promedio () {
	let precioUno;
    let precioDos;
    let precioTres;
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let promedio;


    precioUno= document.getElementById('txtIdPrecioUno').value;
    numeroUno =parseFloat(precioUno);
    
    precioDos= document.getElementById('txtIdPrecioDos').value;
    numeroDos =parseFloat(precioDos);
    
    precioTres= document.getElementById('txtIdPrecioTres').value;
    numeroTres =parseFloat(precioTres);

    promedio= (numeroUno + numeroDos + numeroTres) / 3 ;

    alert(promedio);

}
function PrecioFinal () {
	let precioUno;
    let precioDos;
    let precioTres;
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let suma;
    let iva;
    let porcentajeConIva;
    let totalConIva;

    precioUno= document.getElementById('txtIdPrecioUno').value;
    numeroUno= parseInt(precioUno);

    precioDos= document.getElementById('txtIdPrecioDos').value;
    numeroDos= parseInt(precioDos);

    precioTres= document.getElementById('txtIdPrecioTres').value;
    numeroTres= parseInt(precioTres);

    suma= numeroUno + numeroDos + numeroTres;

    iva=21
    porcentajeConIva= (suma * iva) / 100;
    totalConIva= porcentajeConIva + suma;

    alert(totalConIva);


}