let carro = [];
dataCarrito = localStorage.getItem("ventaCripto");
if(dataCarrito){    
    carro = JSON.parse(dataCarrito)
}

function cargarDom(){
    for(const data of carro){
        let totalCripto = data.cantidad * data.equivalente
        $("#mainCompra").append( `
                <div id="probando" class="card-body paddingTop" style="border: solid 2px;">
                    <h4 class="card-title">${data.cripto}</h4>
                    <p id="${data.id}total" class="card-text" style="font-size: 17px">Total de <b>${data.logo}</b> adquirido: ${totalCripto}</b></p>
                    <p style="font-size: 15px"> Cada <b>Bullcoin</b> equivale: <b> ${data.equivalente} ${data.logo}<b></p>
                    <div class="paddingTop"></div>
                    <button id="${data.id}" class="btn btn-primary comprar boton">Eliminar</button>
                </div>
        `
        )
        $(`#${data.id}`).click (() => eliminarCompra(data));
    }
}

cargarDom();


function eliminarCompra (cripto){
    const token = carro.find(el => el.id === cripto.id);
    if(token){
        if(token.cantidad > 1){
            token.cantidad--
        }else{
            carro = carro.filter(el => el.id !== cripto.id)
        }
    }

    localStorage.setItem('ventaCripto', JSON.stringify(carro))

    document.getElementById("mainCompra").innerHTML = ""

    contador = localStorage.getItem("contador")
    contador--;
    localStorage.setItem("contador", contador);

    let bullcoin = JSON.parse(localStorage.getItem("bullcoin")).monto;
    bullcoin++;
    localStorage.setItem("bullcoin", JSON.stringify({"monto": bullcoin}));

    cargarDom();
} 






let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validar);

$("#validarWallet").click(() => validar());



function validar (event){
	event.preventDefault();
	let elemento = event.target;
    
    let wallet = elemento.children[0].value;

    if (wallet.length === 42 && wallet.match(/^[0-9a-zA-Z]+$/)){
        let yyy = document.getElementById("contValidacion")
        let padre = yyy.parentNode;
        padre.removeChild(contValidacion); 

        let zzz = document.getElementById("msjValidacion")
        zzz.innerHTML = `<div class="paddingTop"></div>
                         <div class="paddingTop"></div>
                         <div><h4><b>La wallet address se ha validado correctamente<span style="color: green;"> ✓</b></span></h4></div>
                         <div class="paddingTop"></div>
                         <a id="finalizar"><button class="btn btn-primary boton" data-toggle="modal" data-target="#exampleModal">FINALIZAR TRANSACCION</button></a>`;
        
                         $("#finalizar").click( () => finalizarCompra()) 


   
        function finalizarCompra(){
            
            contador = localStorage.getItem("contador")
            contador = 0;
            localStorage.setItem("contador", contador);
        
            bullcoin = JSON.parse(localStorage.getItem("bullcoin"))
            bullcoin = 0;
            localStorage.setItem("bullcoin", JSON.stringify({"monto": bullcoin}));
        
            let yyy = document.getElementById("mainCompra")
            let padre = yyy.parentNode;
            padre.removeChild(mainCompra);

            let zzz = document.getElementById("msjValidacion")
            let valid = zzz.parentNode;
            valid.removeChild(msjValidacion);
        
            ventaCripto = [];
            localStorage.setItem("ventaCripto", ventaCripto);
        
        }
        
    }	
    
    
    
}

let bep = 0;
$("#inputWallet").click(() => {
    
    if(bep === 0){
        $("#bep20").append(`<div class="paddingTop"></div>
        <div><h5>Recuerde utilizar la red <b>BEP20</b></h5></div>`)
        bep++;
    }
    
   
})








