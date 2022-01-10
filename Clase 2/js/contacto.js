const boton = document.getElementById("button").addEventListener('click', (e) => validarInputsContacto(e))

//validacion de inputs y modificaciones de css
function validarInputsContacto(e){
    e.preventDefault();
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var msj = document.getElementById("msj").value;
    if(name){
        let name2 = document.getElementById("nombre");
        name2.setAttribute('style', 'border: solid 2px green; width: 220px;')
        if(email){
            let email2 = document.getElementById("email");
            email2.setAttribute('style', 'border: solid 2px green; width: 300px;')
            if(asunto){
                let asunto2 = document.getElementById("asunto");
                asunto2.setAttribute('style', 'border: solid 2px green; width: 400px;')
                if(msj){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Solicitud enviada correctamente'
                    })
                    name2.setAttribute('style', 'width: 220px;')
                    name2.value = ""
                    email2.setAttribute('style', "width: 300px;")
                    email2.value = ""
                    asunto2.setAttribute('style', "width: 400px;")
                    asunto2.value = ""
                    let msj2 = document.getElementById("msj")
                    msj2.value = ""
                }
            }
        }
    }
}

