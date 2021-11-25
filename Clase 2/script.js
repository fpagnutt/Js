let bnb = 630;
let stock = 500000;
let dolar = 195;
let usdt = dolar;
let paseDolar;
let paseBnb;
let cantidad;
let compra;

class Conversion{
	constructor (cantidad, stock){
	this.cantidad = parseFloat(cantidad);
	this.stock = stock;
	}
	conversionDolar(){
		paseDolar = cantidad / dolar; 
	}
	conversionBnb(){
		paseBnb = paseDolar / bnb;
	}
	cantidadBnb (){
		console.log("Usted comprara una suma de "+ paseDolar +" dolares en BNB. Equivalentes a " + paseBnb + " BNB");
	}
}



let nombre = prompt("Ingrese su nombre");
let mensajeSaludo = document.getElementById("saludo");
mensajeSaludo.innerHTML = "Bienvenidx " + nombre;

let edad2 = prompt("Ingrese su edad");

if (edad2 >= 18){	
	cantidad = parseInt(prompt("Ingrese en pesos($) la cantidad que desea comprar"));
	if (cantidad > 0){
		compra = new Conversion(cantidad, stock);
		compra.conversionDolar();
		compra.conversionBnb();
	}
	if (stock >= paseBnb){
		compra.cantidadBnb();
		let continuar = prompt("Desea continuar? Escriba si o no, segun corresponda.");
		if (continuar === "si") {
			let mensajeExito = document.getElementById("exito");
			mensajeExito.innerHTML = "Operacion exitosa. Ha realizado una compra de "+paseBnb+" BNB"
			stock = stock - paseBnb;
		}else{
			console.log("Operacion cancelada.");
		}
	}else {
		let mensajeStock = document.getElementById("exito");
		mensajeStock.innerHTML = "La cantidad que usted desea comprar es superior a lo que tenemos disponible en este momento. Nuestra disponibilidad es de " + stock + " BNB";
	}
}else{
	let mensajeEdad = document.getElementById("edad");
	mensajeEdad.innerHTML = "Debes ser mayor de edad para realizar transacciones en este sitio";
}






