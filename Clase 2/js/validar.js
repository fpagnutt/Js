//validacion de edad y creacion del html
function validar (event){
	event.preventDefault();
	let elemento = event.target;
	
	let nombre = elemento.children[1].value;
	let edad = elemento.children[3].value;

	if(edad < 18){
		//sweetalert
		Swal.fire({
			icon: 'error',
			title: 'Ha ocurrido un error.',
			text: 'Debes ser mayor de edad para realizar transacciones en este sitio!',
			
		  })
	}else{
		if(!localStorage.getItem("usuario")){
			localStorage.setItem("usuario", JSON.stringify({nombre,edad}));
			localStorage.setItem("edad", edad);
			
			
		}
		let display = document.getElementById("formulario2")
		display.setAttribute('style', 'display: on;')
		cargarHtml()
		let borraForm = document.getElementById("formulario");
		let padre = borraForm.parentNode
		padre.removeChild(formulario)
		$("#code").click(() => validarCodigo())
	}
}