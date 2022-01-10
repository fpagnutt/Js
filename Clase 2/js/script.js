class Criptomonedas{
	constructor(id, cripto, logo, precio, stock, equivalente, cantidad){
		this.id = id;
		this.cripto = cripto;
		this.logo = logo;
		this.precio = precio;
		this.stock = stock;
		this.equivalente = equivalente;
		this.cantidad = cantidad || 0;
		
	}
	aumentarCantidad(){
        this.cantidad++;
    }
}

$.getJSON(URL, (data, _estado) => {
	//recorro y almaceno en el array monedas.
	for (const cripto2 of data) {
		monedas.push(new Criptomonedas(cripto2.id, cripto2.cripto, cripto2.logo, cripto2.precio, cripto2.stock, cripto2.equivalente, cripto2.cantidad));
	}
	verificarUsuario();
});

if(contador2 === 0){
	contador = 0;
}else{
	contador = localStorage.getItem("contador", contador)
}

if(storageContador === null){
	localStorage.setItem("contador", contador);
	storageContador = localStorage.getItem("contador", contador)
}


if(cod1){
	let none = document.getElementById("formulario2")
	none.setAttribute('style', 'display: none;')
	let mensaje = document.getElementById("giftcode")
	mensaje.setAttribute('style', 'display: none;')
	cargarLocalStorage()
	
}

let hayUsuario = localStorage.getItem("usuario");
if (hayUsuario){
	$("#code").click(() => validarCodigo())
}
