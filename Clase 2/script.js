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

//creacion array
const monedas = [];
const carrito = [];


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

formulario.addEventListener("submit", validar);

function validar (event){
	event.preventDefault();

	let elemento = event.target;

	nombre = elemento.children[0].value;
	edad = elemento.children[1].value;

	if(edad < 18){
		let mensajeSaludo = document.getElementById("saludo");
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Debes ser mayor para realizar transacciones en este sitio";
	}else{
		mensajeSaludo = document.getElementById("saludo");
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Te damos 5 BULLCOIN equivalentes a usd500, para que distribuyas a eleccion";
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
		document.getElementById(`${moneda.id}`).addEventListener('click', () => comprarCripto(moneda));
		
	}




//Compra de cripto 
function comprarCripto(producto){
	
	let compra = carrito.find(el=> el.name === producto.name)
	if(compra){
		if(compra.cantidad < producto.stock && producto.stock > 0){
			carrito.push(producto);
			compra.aumentarCantidad();
								
		}else{
		alert("Alcanzaste el maximo disponible");
		}
	}else{
		carrito.push(producto);	
		producto.aumentarCantidad();
		
	}
	let total = 0;
 
	for(let i=0; i<carrito.length;i++){
		total++;
    
		
	}

	const contador = document.getElementById('contador');
	contador.innerHTML = "Total 🛒 " + total;
	localStorage.setItem('carrito', JSON.stringify(carrito));
	const contador2 = document.getElementById("contador2");
	contador2.innerHTML = "BULLCOIN Restantes: " + (5 - total);
	localStorage.setItem('carrito', JSON.stringify(carrito));
	const prueba = document.getElementById("mainCompra");
	prueba.innerHTML = `
		<img src="./img/${producto.id}.png" class="imgMain" alt=${producto.logo}>
		<div class="card-body paddingTop">
			<h4 class="card-title">${producto.cripto}</h4>
			<p class="card-text">${producto.logo}</p>
			
		</div>

	`
}

function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('carrito'))
    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Criptomonedas(carro[i].id, carro[i].cripto, carro[i].logo, carro[i].precio, carro[i].stock, carro[i].equivalente, carro[i].cantidad ))
        }
    }
}	


