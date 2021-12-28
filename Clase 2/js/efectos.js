//creacion html de novedades y contacto en el index
$("#cartel").prepend(`
					<ol style= "width: 100%; height: 80px; display: flex; justify-content: space-between; list-style: none;">
						<li style="padding-left: 40px;"><button id="news"class="btn btn-primary comprar boton">NOVEDADES</button></li>
						<li style="padding-left: 420px;"><a href="html/bullcoin.html"><img id="giftcard" src="img/gifcard.png" style="width: 15%;"></a></li>
						<li style="padding-right: 40px;"><a href="html/contacto.html"<button id="contacto"class="btn btn-primary comprar boton">CONTACTO</button></a></li>
					</ol>
					<ul style="display:none; font-family: 'Space Mono', monospace; font-size:15px; padding-left: 40px;">
						<h6><b>PROXIMOS ENLISTAMIENTOS</b></h6>
						<li>Enjin Coin</li>
						<li>Wax</li>
						<li>Bora</li>
						<li>Atari Token</li>
						<li>Verasity</li>
					</ul>
						`)


//cartel de novedades animacion					
let a2;
$("#news").click(() => {
	if(!a2){
		$("ul").show();
		a2 = !a2;
	}else{
		$("ul").hide();
		a2 = !a2;
	}
	
})


//animacion para el carrito - mensaje informando que utilices red
let bep = 0;
$("#inputWallet").click(() => {
    
    if(bep === 0){
        $("#bep20").append(`<div class="paddingTop"></div>
        <div><h5>Recuerde utilizar la red <b>BEP20</b></h5></div>`)
        bep++;
    }
    
   
})

