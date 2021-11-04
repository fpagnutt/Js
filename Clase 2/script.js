let nombre = prompt("Ingrese su nombre");

if (nombre === ""){
	prompt("Por favor, ingrese su nombre");
}else{
	let color = prompt("Muy bien " + nombre + "! Adivine en que color estoy pensando... Ingreselo todo en minuscula");
	if (color === "azul"){
		console.log("Perfecto, ese era mi color");
	}else{
		console.log("Incorrecto! Mi color, era el azul.");
	}
}
