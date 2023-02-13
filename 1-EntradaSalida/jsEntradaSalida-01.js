/*
if extra 
A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
necesitamos pedir los nombre s de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados con 150 kilos”
 al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
 “ con el peso actual de 280 kilos , ustedes no pueden viajar”

B-Al algoritmo anterior agregarle otro mensaje (otro alert), que indique el precio del viaje.
los pasajes salen 2500 cada uno.
si los pasajeros suman entre 200 y 220 .No tienen descuento
si tiene entre 220 y 249 se les suma un 20% de incremento.
si pesas entre 180 y 199 se hace un descuento del 15% ,
si pesas entre 161 y 179 se hace un descuento del 25% ,
y si pesan entre los dos menos de 160 kilos el descuento es del 30%

C-Al algoritmo anterior se le debe agregar la carga de si las personas son argentinos o no, de ser argentino el precio es de 2000 y sino es de 2500.

si los pasajeros suman entre 200 y 220 .No tienen descuento
si tiene entre 220 y 249 se les suma un 20% de incremento.si es argentino el incremento es del 10% el incremento.
si pesas entre 180 y 199 se hace un descuento del 15% ,(un 20% si sos argentino) 
si pesas entre 161 y 179 se hace un descuento del 25% ,(un 40% si sos argentino) 
y si pesan entre los dos menos de 160 kilos el descuento es del 30%(un 50% si sos argentino)
*/
function mostrar()
{
	//Datos que se pide
	let nombreParejaUno;
	let nombreParejaDos;
	let pesoUno;
	let pesoDos;
	//Peso a numeros
	let numeroPesoUno;
	let numeroPesoDos;
	//Datos fijos
	let limitePeso;
	let precioInicial;
	let cantidadPersonas;
	let nacionalidad;
	//totales a calcular
	let precioFinal;
	let precioConPorcentaje;
	let totalPeso;

	//
	let mensaje;
	let incremento;
	let descuento;
	let mensajeFinal;
	let mensajePrecio;
	let porcentaje;

	incremento = 0;
	descuento = 0;
	limitePeso=280;
	cantidadPersonas= 2;
	
	
	nombreParejaUno = prompt("ingrese su nombre", "Ingrese su nombre aquí");
	nombreParejaDos = prompt("ingrese el nombre de su pareja", "Ingrese su nombre aquí");

	pesoUno = prompt("ingrese su peso aquí","ingrese aqui su peso");
	numeroPesoUno = parseInt(pesoUno);

	pesoDos = prompt("ingrese el; peso de su pareja","ingrese aqui su peso");
	numeroPesoDos = parseInt(pesoDos);

	nacionalidad = prompt("Son de nacionalidad Argentina?","Si/No");


	totalPeso= numeroPesoUno + numeroPesoDos;

	

	if(totalPeso <= limitePeso)
	{


		mensaje="bienvenidos a Space x " +nombreParejaUno+ " y " +nombreParejaDos+ ", sus pesos son de "+numeroPesoUno +" y "+ numeroPesoDos+  " kilos cada uno , y sumados con " + totalPeso + " kilos";

		if(nacionalidad== "Si" || nacionalidad == "si")
		{	
			precioInicial= 2000 * cantidadPersonas;

			if(totalPeso > 219 )
			{
				porcentaje= 10;
			}
			else
			{
				if(totalPeso > 199 )
				{
					porcentaje= 0
				}
				else
				{
					if(totalPeso > 179 )
					{
						porcentaje = -20;
					}
					else
					{
						if(totalPeso > 160 )
						{
							porcentaje= -40;
						}
						else
						{
							porcentaje= -50;
						}
					}
				}
				
			}

		}
		else
		{
			precioInicial= 2500 * cantidadPersonas;

			if(totalPeso > 219 )
			{
				porcentaje= 20;
			}
			else
			{
				if(totalPeso > 199 )
				{
					porcentaje= 0
				}
				else
				{
					if(totalPeso > 179 )
					{
						porcentaje = -15;
					}
					else
					{
						if(totalPeso > 160 )
						{
							porcentaje= -25;
						}
						else
						{
							porcentaje= -30;
						}
					}
				}
				
			}
		}
	
	
		precioConPorcentaje= (precioInicial * porcentaje ) / 100;
		precioFinal = precioInicial + precioConPorcentaje;


	mensajePrecio= " .El precio total del pasaje es de " + precioFinal;

	mensajeFinal = mensaje + mensajePrecio;

	}
	else
	{
		mensajeFinal= "con el peso actual de " +totalPeso+ " kilos , ustedes no pueden viajar";

	}

	

	alert(mensajeFinal);
}



















