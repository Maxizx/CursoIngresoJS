/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {

    let largoTerreno;
    let anchoTerreno;
    let multiplicacion;
    let cantidadHilos;
    
    let numeroLargoTerreno;
    let numeroAnchoTerreno;
    let alambreTotal;
    let mensaje;

largoTerreno= document.getElementById('txtIdLargo').value;
numeroLargoTerreno=parseInt(largoTerreno);

anchoTerreno= document.getElementById('txtIdAncho').value;
numeroAnchoTerreno=parseInt(anchoTerreno);

multiplicacion= (numeroAnchoTerreno * 2) + (numeroLargoTerreno* 2);

cantidadHilos= 3;
alambreTotal = multiplicacion * cantidadHilos;

mensaje= "la cantidad de alambre que se debe comprar es: " + alambreTotal;

alert(mensaje);

}
function Circulo () 
{
    let radioTerreno;
    let pi;
    let cantidadHilos;

    let alambreTotal;
    let perimetroCirculo;
    let mensaje;

    radioTerreno= document.getElementById('txtIdRadio').value;
numeroRadioTerreno=parseInt(radioTerreno);

cantidadHilos= 3;
pi= 3.14;

perimetroCirculo = 2 * pi* numeroRadioTerreno;
alambreTotal = cantidadHilos * perimetroCirculo;

mensaje= "la cantidad de alambre que se debe comprar es: " + alambreTotal;

alert(mensaje);

}
function Materiales () {
    let largoTerreno;
    let anchoTerreno;
    let multiplicacion;
    let bolsasCemento;
    let bolsasCal;


    let numeroLargoTerreno;
    let numeroAnchoTerreno;
    let bolsasTotalCemento;
    let bolsasTotalCal;

    let mensaje;

largoTerreno= document.getElementById('txtIdLargo').value;
numeroLargoTerreno=parseInt(largoTerreno);

anchoTerreno= document.getElementById('txtIdAncho').value;
numeroAnchoTerreno=parseInt(anchoTerreno);

multiplicacion= (numeroAnchoTerreno * 2) + (numeroLargoTerreno* 2);//saber cuanto mide el rectangulo


bolsasCal= 3;
bolsasCemento= 2;
bolsasTotalCal = multiplicacion * bolsasCemento;
bolsasTotalCemento = multiplicacion * bolsasCal;

mensaje= "la cantidad de Bolsas de cal que se debe comprar es: " + bolsasTotalCal + " y la cantidad de Bolsas de cemento que se debe comprar es: " + bolsasTotalCemento;

alert(mensaje)

    
}