let bnb = 630;
let stock = 500000;
let dolar = 195;
let usdt = dolar;
let paseDolar;
let paseBnb;
let datosComprador = [];
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

class Compradores{
	constructor(nombre, apellido, edad){
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido.toUpperCase();
		this.edad = edad.toString();
	}
}

let nombre = prompt("Por favor, ingrese su nombre");
let apellido = prompt ("Por favor, ingrese su apellido");
let edad = prompt("Por ultimo, ingrese su edad");
if (edad >= 18){
	let comprador = new Compradores(nombre, apellido, edad);
	datosComprador.push(comprador); 
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
			console.log("Operacion exitosa. Ha realizado una compra de "+paseBnb+" BNB");
			stock = stock - paseBnb;
		}else{
			console.log("Operacion cancelada.");
		}
	}else {
		console.log("La cantidad que usted desea comprar ("+paseBnb+") es superior a lo que tenemos disponible en este momento. Nuestra disponibilidad es de " + stock + " BNB");
	}
}else{
	console.log("Disculpe, este tipo de transaccion requiere que sea mayor de edad");
}


	





