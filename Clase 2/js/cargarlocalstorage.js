function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('ventaCripto'))
	let bullDisponible = JSON.parse(localStorage.getItem('bullcoin'))
	
	//declaramos cuantas criptos tenemos almacenadas
	if(!bullDisponible){

		localStorage.setItem("bullcoin", JSON.stringify({"monto": bullcoin}));
	}else{
		bullcoin = bullDisponible.monto
	}

    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Criptomonedas(carro[i].id, carro[i].cripto, carro[i].logo, carro[i].precio, carro[i].stock, carro[i].equivalente, carro[i].cantidad ))
			
		}
		storageContador = localStorage.getItem("contador", contador)
		for(const producto of carro){
			let totalCripto = producto.cantidad * producto.equivalente
			$("#carrito").html(  `
							<a href="html/carrito.html" id="${producto.id}total" style="text-decoration: none; color: black;">🛒${storageContador}</a>
									`);
			
		}
	}
}