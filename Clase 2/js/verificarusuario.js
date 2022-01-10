function verificarUsuario(){
	if(!local){
		formulario.addEventListener("submit", validar);
	}else{
		if(local.edad < 18){
			//sweetalert
			Swal.fire({
				icon: 'error',
				title: 'Ha ocurrido un error.',
				text: 'Debes ser mayor de edad para realizar transacciones en este sitio!',
			})
		}else{
			cargarHtml()
			let borraForm = document.getElementById("formulario");
			let padre = borraForm.parentNode
			padre.removeChild(formulario)
			
						
		}
	}
}