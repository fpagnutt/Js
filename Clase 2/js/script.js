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
let contador;

let URL = "./json/monedas.json"


$.getJSON(URL, (data, _estado) => {
	//recorro y almaceno en el array monedas.
	for (const cripto2 of data) {
		monedas.push(new Criptomonedas(cripto2.id, cripto2.cripto, cripto2.logo, cripto2.precio, cripto2.stock, cripto2.equivalente, cripto2.cantidad));
	}
	verificarUsuario();
});


//Validacion de los datos de input
let formulario = document.getElementById("formulario");
let local = JSON.parse(localStorage.getItem("usuario"))
let mensajeSaludo = document.getElementById("saludo");


//validaciones e inicializaciones
let contador2 = localStorage.getItem("contador", contador);
if(contador2 === 0){
	contador = 0;
}else{
	contador = localStorage.getItem("contador", contador)
}

if(storageContador === null){
	localStorage.setItem("contador", contador);
	storageContador = localStorage.getItem("contador", contador)
}


function verificarUsuario(){
	if(!local){
		formulario.addEventListener("submit", validar);
	}else{
		if(local.edad < 18){
			mensajeSaludo.innerHTML = "Bienvenidx " + local.nombre + ". Debes ser mayor para realizar transacciones en este sitio";
			
	
		}else{
			mensajeSaludo = document.getElementById("saludo");
			mensajeSaludo.innerHTML = `	<h2>Bienvenidx  ${local.nombre}.</h2>
										 <p>Tienes <b>5 BULLCOINS</b> (equivalentes a usd500) para distribuir a eleccion</p>`;
			cargarHtml()
			let borraForm = document.getElementById("formulario");
			let padre = borraForm.parentNode
			padre.removeChild(formulario)
		}
	}
}

//validacion de edad y creacion del html
function validar (event){
	event.preventDefault();
	let elemento = event.target;
	
	let nombre = elemento.children[1].value;
	let edad = elemento.children[3].value;

	if(edad < 18){
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Debes ser mayor para realizar transacciones en este sitio";
	}else{
		mensajeSaludo.innerHTML = `<h2>Bienvenidx  ${nombre}.</h2>
		<p>Tienes <b>5 BULLCOINS</b> (equivalentes a usd500) para distribuir a eleccion</p>`
		if(!localStorage.getItem("usuario")){
			localStorage.setItem("usuario", JSON.stringify({nombre,edad}));
			localStorage.setItem("edad", edad);
		}
		cargarHtml()
		let borraForm = document.getElementById("formulario");
			let padre = borraForm.parentNode
			padre.removeChild(formulario)
	}
}



const mainIndex = document.getElementById('main');

//creacion html con las cripto
function cargarHtml(){
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
}


//Compra de cripto 
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
				$("#carrito").html(  `
							<a href="html/carrito.html" id="${producto.id}total" class="cart">🛒${storageContador}</a>
									`);
				bullcoin--;
				localStorage.setItem('bullcoin', JSON.stringify({"monto": bullcoin}))
			}
		}else{
			//sweetalert
			alert('Has alcanzado la compra maxima de 5 BULLCOINS');
		
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
			$("#carrito").html(  `
							<a href="html/carrito.html" id="${producto.id}total" style="text-decoration: none; color: black;">🛒${storageContador}</a>
									`);
			
		}
	}
}
cargarLocalStorage()

