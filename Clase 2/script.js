let bnb = 630;
let stock = 500000;
let dolar = 195;
let usdt = dolar;
let paseDolar;
let paseBnb;
let cantidad = parseInt(prompt("Ingrese en pesos($) la cantidad que desea comprar"));

class conversion{
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
		console.log("Usted comprara una suma de "+ paseDolar +" dolares en BNB. Equivalentes a " + paseBnb + "BNB");
	}
}
if (cantidad > 0){
	const compra = new conversion (cantidad, stock);
	compra.conversionDolar();
	compra.conversionBnb();
	if (stock >= paseBnb){
		compra.cantidadBnb();
		let continuar = prompt("Desea continuar? Escriba si o no, segun corresponda.");
		if (continuar === "si") {
			console.log("Operacion exitosa. Ha realizado una compra de "+paseBnb+"BNB");
			stock = stock - paseBnb;  
		}else{
			console.log("Operacion cancelada.");
		}
	}else {
		console.log("La cantidad que usted desea comprar ("+paseBnb+") es superior a lo que tenemos disponible en este momento. Nuestra disponibilidad es de " + stock + " BNB");
	}
}	





