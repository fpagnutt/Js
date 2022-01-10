function validarCodigo(){
	let cod = document.getElementById("codigo").value;
	if(cod === "333"){
		alert("Has adquirido: 3 BLC")
		localStorage.setItem("codigo", 3);
        bullcoin = 3;
		cargarLocalStorage();
	}
	if(cod === "555"){
		alert("Has adquirido: 5 BLC")
		localStorage.setItem("codigo", 5);
		bullcoin = 5;
		cargarLocalStorage();
	}
	if(cod === "151515"){
		alert("Has adquirido: 15 BLC")
		localStorage.setItem("codigo", 15);
		bullcoin = 15;
		cargarLocalStorage();
	}
}