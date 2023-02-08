/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let ingreseTemperatura;
	let Centígrados ;
    let Fahrenheit ;
    let mensaje;
    
    //let PasajeDeCentigradoaFahrenheit;

ingreseTemperatura= document.getElementById("txtIdTemperatura").value;
Fahrenheit = parseInt(ingreseTemperatura);

Centígrados= (Fahrenheit - 32) / 1.8;

mensaje= Fahrenheit + " Fahrenheit son " + Centígrados + " Centígrados";

alert(mensaje);


}

function CentigradosFahrenheit () 
{
    let ingreseTemperatura;
	let Centígrados ;
    let Fahrenheit ;
    let mensaje;
    
    //let PasajeDeCentigradoaFahrenheit;

ingreseTemperatura= document.getElementById("txtIdTemperatura").value;
Centígrados = parseInt(ingreseTemperatura);

Fahrenheit= (Centígrados * 1.8) + 32;

mensaje= Centígrados + " Centígrados son " + Fahrenheit + " Fahrenheit";

alert(mensaje);
}
