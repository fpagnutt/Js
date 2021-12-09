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

//declaraciones
const monedas = [];
const carrito = [];
let bullcoin;
let storageContador;





//carga de criptomonedas en los array
const moneda1 = new Criptomonedas(1, "Binance Coin", "BNB", 600, 5, (100/600));
const moneda2 = new Criptomonedas(2, "Ethereum", "ETH", 4500, 5, (100/4500) );
const moneda3 = new Criptomonedas(3, "Bitcoin", "BTC", 56000, 5, (100/56000));
const moneda4 = new Criptomonedas(4, "Litecoin", "LTC", 200, 5, (100/200));
const moneda5 = new Criptomonedas(5, "Solana", "SOL", 220, 5, (100/220));
const moneda6 = new Criptomonedas(6, "Avalanche", "AVAX", 115, 5, (100/115));
const moneda7 = new Criptomonedas(7, "Oasis Network", "ROSE", 0.36, 5, (100/0.36));
const moneda8 = new Criptomonedas(8, "Sand Box", "SAND", 6.25, 5, (100/6.25));
const moneda9 = new Criptomonedas(9, "Gala", "GALA", 0.60, 5, (100/0.6));
const moneda10 = new Criptomonedas(10, "Cardano", "ADA", 1.6, 5, (100/1.6));
const moneda11 = new Criptomonedas(11, "Terra", "LUNA", 66, 5, (100/66));
const moneda12 = new Criptomonedas(12, "Shiba Inu", "SHIB", 0.000042, 5, (100/0.000042));


//se cargan las distintas cripto en el array
monedas.push(moneda1, moneda2, moneda3, moneda4, moneda5, moneda6, moneda7, moneda8, moneda9, moneda10, moneda11, moneda12);


//Validacion de los datos de input
let formulario = document.getElementById("formulario");
let local = JSON.parse(localStorage.getItem("usuario"))
let mensajeSaludo = document.getElementById("saludo");

let contador = 0;
if(storageContador === null){
	localStorage.setItem("contador", contador);
	storageContador = localStorage.getItem("contador", contador)
}




if(!local){
	formulario.addEventListener("submit", validar);
}else{
	if(local.edad < 18){
		console.log('entro')
		mensajeSaludo.innerHTML = "Bienvenidx " + local.nombre + ". Debes ser mayor para realizar transacciones en este sitio";
	}else{
		mensajeSaludo = document.getElementById("saludo");
		mensajeSaludo.innerHTML = "Bienvenidx " + local.nombre + ". Te damos 5 BULLCOIN equivalentes a usd500, para que distribuyas a eleccion";
	}
}

function validar (event){
	event.preventDefault();
	let elemento = event.target;
	
	let nombre = elemento.children[0].value;
	let edad = elemento.children[1].value;

	if(edad < 18){
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Debes ser mayor para realizar transacciones en este sitio";
		
	}else{
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Te damos 5 BULLCOIN equivalentes a usd500, para que distribuyas a eleccion";
		if(!localStorage.getItem("usuario")){
			localStorage.setItem("usuario", JSON.stringify({nombre,edad}));
			localStorage.setItem("edad", edad);
		}
	}

		
}


const mainIndex = document.getElementById('main');

//creacion html con las cripto
for (const moneda of monedas){
	const contenedor = document.createElement("div");
	contenedor.className = "card2";
	contenedor.innerHTML = `
					<img src="./img/${moneda.id}.png" class="imgMain" alt=${moneda.logo}>
					<div class="card-body paddingTop">
						<h4 class="card-title">${moneda.cripto}</h4>
						<p class="card-text">${moneda.logo}</p>
						<p class="card-text" style="font-size: 17px">Precio: <b>${moneda.precio}</b></p>
						<p style="font-size: 15px"> Cada <b>Bullcoin</b> equivale: <b> ${moneda.equivalente} ${moneda.logo}<b></p>
						<div class="paddingTop"></div>
						<button id=${moneda.id} class="btn btn-primary comprar boton">COMPRAR</button>
					</div>
					`
	mainIndex.append(contenedor);
	$(`#${moneda.id}`).click (() => comprarCripto(moneda));
		
}





//Compra de cripto - suma total y muestra imagen de cripto comprada
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
					$("#mainCompra").html(  `
							<a href="carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`
						);
											
													
					bullcoin--
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

				$("#mainCompra").html(  `
							<a href="carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`
						);
				
				bullcoin--;
				localStorage.setItem('bullcoin', JSON.stringify({"monto": bullcoin}))
			}
		}else{
			//sweetalert
			alert('Has alcanzado la compra maxima de 5 BULLCOINS');
			const botonComprar = document.querySelectorAll(".comprar");
			for (let i = 0; i < botonComprar.length; i++) {
				botonComprar[i].disabled = true;	
			}
		}
		localStorage.setItem('ventaCripto', JSON.stringify(carrito))
	}else{
		mensajeSaludo.innerHTML = "Deberas ingresar tu nombre y edad para poder comenzar";
	}
	storageContador = localStorage.getItem("contador", contador);
}	

function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('ventaCripto'))
	let bullDisponible = JSON.parse(localStorage.getItem('bullcoin'))
	
	//declaramos cuantas criptos tenemos almacenadas
	if(!bullDisponible){
		bullcoin = 5;
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
			$("#mainCompra").html(  `
							<a href="carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`
						);
			
		}
	}
}



cargarLocalStorage()

