let nombre = prompt("Por favor, ingrese su nombre.");

if (nombre === ""){
	for (let i = 3; i > 0; i--){
		nombre = prompt ("Ingrese su nombre. Le quedan " + i + " intentos");
	}
}else{
	while (nombre !== ""){
		let color = prompt("Muy bien " + nombre + "! Adivine en que color estoy pensando... Ingreselo todo en minuscula");
		if (color === "azul"){
			console.log("Perfecto, ese era mi color");
		}else{
			console.log("Incorrecto! Mi color, era el azul.");
		}
		nombre = prompt("Ingrese su nombre");
	}
}




	
	





