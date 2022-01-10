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