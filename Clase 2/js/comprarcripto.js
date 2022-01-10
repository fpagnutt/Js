function comprarCripto(producto){
	let edadComprador = JSON.parse(localStorage.getItem("edad"))
	if(edadComprador >= 18){
		let compra = carrito.find(el=> el.id === producto.id)
		let bullDisponible = JSON.parse(localStorage.getItem('bullcoin'))
		if(bullDisponible.monto !== 0 && bullDisponible.monto > 0){
			if(compra){
				if(compra.cantidad < producto.stock){
					compra.aumentarCantidad();
					contador++;
					localStorage.setItem("contador", contador);
					storageContador = localStorage.getItem("contador", contador);
					let totalCripto = compra.cantidad * compra.equivalente
					$("#carrito").html(  `
							<a href="html/carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`
						);
																		
					bullcoin--;
					localStorage.setItem('bullcoin', JSON.stringify({"monto": bullcoin}))
					
				}else{
					document.getElementById(`${producto.id}`).className='disabled'
				}
			}else{
				let produc = producto 
				produc.aumentarCantidad()
				carrito.push(produc)
				let totalCripto = produc.cantidad * produc.equivalente
				contador++;
				localStorage.setItem("contador", contador);
				storageContador = localStorage.getItem("contador", contador);
				$("#carrito").html(  `
							<a href="html/carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`);
				bullcoin--;
				localStorage.setItem('bullcoin', JSON.stringify({"monto": bullcoin}))
			}
		}else{
			//sweetalert
			Swal.fire({
				icon: 'error',
				title: 'Maximo alcanzado',
				text: 'Has utilizado el maximo disponible',
				
			  })
		
		}
		localStorage.setItem('ventaCripto', JSON.stringify(carrito))
	}else{
		//sweetalert
		Swal.fire({
			icon: 'error',
			title: 'Ha ocurrido un error.',
			text: 'Debes ser mayor de edad para realizar transacciones en este sitio!',
			
		  })
	}
	storageContador = localStorage.getItem("contador", contador);
	
}	