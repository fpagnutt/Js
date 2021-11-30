class Criptomonedas{
	constructor(id, cripto, logo, precio, stock, cantidad){
		this.id = id;
		this.cripto = cripto;
		this.logo = logo;
		this.precio = precio;
		this.stock = stock;
		this.cantidad = cantidad || 0;
		
	}
	aumentarCantidad(){
        this.cantidad++
    }
}

//creacion array
const monedas = [];
const carrito = [];

//carga de criptomonedas en los array
const moneda1 = new Criptomonedas(1, "Binance Coin", "BNB", 1, 5);
const moneda2 = new Criptomonedas(2, "Ethereum", "ETH", 1, 5);
const moneda3 = new Criptomonedas(3, "Bitcoin", "BTC", 1, 5);
const moneda4 = new Criptomonedas(4, "Litecoin", "LTC", 1, 5);
const moneda5 = new Criptomonedas(5, "Solana", "SOL", 1, 5);
const moneda6 = new Criptomonedas(6, "Avalanche", "AVAX", 1, 5);
const moneda7 = new Criptomonedas(7, "Oasis Network", "ROSE", 1, 5);
const moneda8 = new Criptomonedas(8, "Sand Box", "SAND", 1, 5);
const moneda9 = new Criptomonedas(9, "Gala", "GALA", 1, 5);
const moneda10 = new Criptomonedas(10, "Cardano", "ADA", 1, 5);
const moneda11 = new Criptomonedas(11, "Terra", "LUNA", 1, 5);
const moneda12 = new Criptomonedas(12, "Shiba Inu", "SHIB", 1, 5);


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
		mensajeSaludo.innerHTML = "Bienvenidx " + nombre + ". Te damos 5 BULLCOIN equivalentes a usd 200, para que distribuyas en un maximo de 5 monedas a eleccion (puede ser 5 veces la misma)."
	}
		
}


const mainIndex = document.getElementById('main');

//creacion html con las cripto
for (const moneda of monedas){
		const contenedor = document.createElement("div");
		contenedor.className = "card";
		contenedor.innerHTML = `
						<div class="paddingTop"></div>
						<img src="C:/Users/pagnu/OneDrive/Desktop/Javascript/Clase 2/Js/Clase 2/img/${moneda.id}.png" class="card-img-top" alt= ${moneda.logo}>
                        <div class="card-body paddingTop">
                            <h4 class="card-title">${moneda.cripto}</h4>
                            <p class="card-text">${moneda.logo}</p>
                            <p class="card-text">Precio: ${moneda.precio}</p>
                            <div class="paddingTop"></div>
                            <button id=${moneda.id} class="btn btn-primary comprar boton">COMPRAR</button>
                        </div>
                        `
		mainIndex.append(contenedor);
		document.getElementById(`${moneda.id}`).addEventListener('click', () => comprarCripto(moneda));
		}


//Compra de cripto, suma de total 
function comprarCripto(producto){
    let compra = carrito.find(el=> el.name === producto.name)
    if(compra){
        if(compra.cantidad < producto.stock){
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
        total += carrito[i].cantidad;
        
    }
    const contador = document.getElementById('contador');
    contador.innerHTML = "Total 🛒 " + total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    const contador2 = document.getElementById("contador2");
    contador2.innerHTML = "BULLCOIN Restantes: " + (5 - total);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}


function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('carrito'))
    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Criptomonedas(carro[i].id, carro[i].name, carro[i].username, carro[i].stock, carro[i].cantidad))
        }
    }
}







/*
let paseDolar;
let paseBnb;
let cantidad;


class Conversion{
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
		console.log("Usted comprara una suma de "+ paseDolar +" dolares en BNB. Equivalentes a " + paseBnb + " BNB");
	}
} */

