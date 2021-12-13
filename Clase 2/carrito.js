$(() => {
    let carro = [];
    dataCarrito = localStorage.getItem("ventaCripto");
    if(dataCarrito){    
    
      carro = JSON.parse(dataCarrito)

    }
    for(const data of carro){
        let totalCripto = data.cantidad * data.equivalente
        $("#mainCompra").append( `
                <div id="probando${data.id}" class="card-body paddingTop">
                    <h4 class="card-title">${data.cripto}</h4>
                    <p id="${data.id}total" class="card-text" style="font-size: 17px">Total de <b>${data.logo}</b> adquirido: ${totalCripto}</b></p>
                    <p style="font-size: 15px"> Cada <b>Bullcoin</b> equivale: <b> ${data.equivalente} ${data.logo}<b></p>
                    <div class="paddingTop"></div>
                    <button id="${data.id}" class="btn btn-primary comprar boton">Eliminar</button>
                </div>
        `
        )

        


        $(`#${data.id}`).click (() => eliminarCompra(carro));

        function eliminarCompra (){
            
        
        
        } 

       
    }
    

    }
)





