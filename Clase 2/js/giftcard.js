$("#gift3").click ( () => correo3())


$("#gift5").click ( () => correo5())


$("#gift15").click ( () => correo15())



async function correo3 (){
    const { value: email } = await Swal.fire({
        title: 'GIFT CARD RED',
        input: 'email',
        inputLabel: 'Recibiras un correo electronico para finalizar el pago.',
        inputPlaceholder: 'Ingrese su correo electronico'
      })
      
    if (email) {
        Swal.fire(`SU CODIGO DE GIFT CARD: 333`)
    }
}

async function correo5 (){
    const { value: email } = await Swal.fire({
        title: 'GIFT CARD GOLD',
        input: 'email',
        inputLabel: 'Recibiras un correo electronico para finalizar el pago.',
        inputPlaceholder: 'Ingrese su correo electronico'
      })
      
    if (email) {
        Swal.fire(`SU CODIGO DE GIFT CARD: 555`)
    }
}

async function correo15 (){
    const { value: email } = await Swal.fire({
        title: 'GIFT CARD BLACK',
        input: 'email',
        inputLabel: 'Recibiras un correo electronico para finalizar el pago.',
        inputPlaceholder: 'Ingrese su correo electronico'
      })
      
    if (email) {
        Swal.fire(`SU CODIGO DE GIFT CARD: 151515`)
    }
}