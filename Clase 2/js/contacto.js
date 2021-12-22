function validarInputsContacto(e){
    

    let elemento = e.target;
	
	let nombre = e.children[1].value;
	let email = e.children[3].value;
    let asunto = e.children[5].value;
    let mensaje = e.children[7].value;

    if(nombre !== null){
        if(email !== null){
            if(asunto !== null){
                if(mensaje !== null){
                    console.log("Asdsad")
                    $("#modal").prepend(`
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">BULLCOIN</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    Transaccion realizada con exito.
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)
                }
            }
        }
    }
}


validarInputsContacto();