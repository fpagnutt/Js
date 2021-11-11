let montoPrestamo = parseInt(prompt("Ingrese el monto de prestamo que desea obtener"));
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea financiar"));
let intereses = 0;
let sumaIntereses = 0;
let cuotaTotal = 0;
let interesCuota = 0;

function financiacion(){
	intereses = 3 * cantidadCuotas;
	sumaIntereses = montoPrestamo + ((montoPrestamo * intereses) / 100);
}
function cuotas(){
	cuotaTotal = sumaIntereses / cantidadCuotas;
	interesCuota = ((montoPrestamo * intereses) / 100) / cantidadCuotas;
}
function mostrar (){
	console.log("Su prestamo tendra " + intereses + "% de interes. Dando asi un total de interes de $" + interesCuota + " por cuota.");
	console.log("El valor de cada cuota sera de $" + cuotaTotal);
}

financiacion (montoPrestamo, cantidadCuotas);
cuotas();
mostrar();


/*
let montoPrestamo = parseInt(prompt("Ingrese el monto de prestamo que desea obtener"))
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea financiar"))

function financiacion(){
	const intereses = 3 * cantidadCuotas;
	const sumaIntereses = montoPrestamo + ((montoPrestamo * intereses) / 100);
	const cuotaTotal = sumaIntereses / cantidadCuotas;
	const interesCuota = ((montoPrestamo * intereses) / 100) / cantidadCuotas;
	console.log("Su prestamo tendra " + intereses + "% de interes. Dando asi un total de interes de $" + interesCuota + " por cuota.");
	console.log("El valor de cada cuota sera de $" + cuotaTotal);
}

financiacion (montoPrestamo, cantidadCuotas);
*/



	
	





