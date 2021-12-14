$(() => {
    let carro = [];
    dataCarrito = localStorage.getItem("ventaCripto");
    if(dataCarrito){    
    
      carro = JSON.parse(dataCarrito)

    }
    
    for(const data of carro){
        let totalCripto = data.cantidad * data.equivalente
        $("#mainCompra").append( `
                <div id="probando" class="card-body paddingTop">
                    <h4 class="card-title">${data.cripto}</h4>
                    <p id="${data.id}total" class="card-text" style="font-size: 17px">Total de <b>${data.logo}</b> adquirido: ${totalCripto}</b></p>
                    <p style="font-size: 15px"> Cada <b>Bullcoin</b> equivale: <b> ${data.equivalente} ${data.logo}<b></p>
                    <div class="paddingTop"></div>
                    <button id="${data.id}" class="btn btn-primary comprar boton">Eliminar</button>
                </div>
        `
        )

        

        $(`#${data.id}`).click (() => eliminarCompra());

       
    }


    function eliminarCompra (){


        let xxx = document.getElementById("probando")
        let padre = xxx.parentNode;
        padre.removeChild(xxx);

        contador = localStorage.getItem("contador")
        contador--;
        localStorage.setItem("contador", contador);

        let bullcoin2 = JSON.parse(localStorage.getItem("bullcoin"))
        bullcoin = bullcoin2.monto;
        bullcoin++;
        localStorage.setItem("bullcoin", JSON.stringify({"monto": bullcoin}));

        
    } 



    $("#finalizar").click( () => finalizarCompra())
    
    function finalizarCompra(){
        alert("Su compra ha sido finalizada con exito");
        contador = localStorage.getItem("contador")
        contador = 0;
        localStorage.setItem("contador", contador);

        bullcoin = JSON.parse(localStorage.getItem("bullcoin"))
        bullcoin = 0;
        localStorage.setItem("bullcoin", JSON.stringify({"monto": bullcoin}));

        let yyy = document.getElementById("mainCompra")
        let padre = yyy.parentNode;
        padre.removeChild(mainCompra);

        ventaCripto = [];
        localStorage.setItem("ventaCripto", ventaCripto);

    }


    }
)





