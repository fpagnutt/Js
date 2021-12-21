
$("#cartel").prepend(`
					<div style="text-align: right; padding-right: 60px;">
						
						<ul style="display:none; font-family: 'Space Mono', monospace; font-size:15px;">
							<h6><b>PROXIMOS ENLISTAMIENTOS</b></h6>
							<li>Enjin Coin</li>
							<li>Wax</li>
							<li>Bora</li>
							<li>Atari Token</li>
							<li>Verasity</li>
						</ul>
						<div class="paddingTop"></div>
						<button id="news"class="btn btn-primary comprar boton">NOVEDADES</button>
					</div>`)


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

let bep = 0;
$("#inputWallet").click(() => {
    
    if(bep === 0){
        $("#bep20").append(`<div class="paddingTop"></div>
        <div><h5>Recuerde utilizar la red <b>BEP20</b></h5></div>`)
        bep++;
    }
    
   
})