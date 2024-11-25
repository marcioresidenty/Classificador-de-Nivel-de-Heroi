/**
 * 
 */

function recuperaNome() {
	let nome = document.getElementById("nomeHeroi").value;
	let xp = document.getElementById("nivelHeroi").value;
	console.log(nome)
	
	console.log(xp)
	
	
	
	if (xp <= 1000 ){

	document.getElementById("nomeHeroi").value = "";
	document.getElementById("nivelHeroi").value = "";
	document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Ferro"
	
	} else
	if(xp >= 1001 & xp <=2000 ) {
	
	 document.getElementById("nomeHeroi").value = "";
	 document.getElementById("nivelHeroi").value = "";
	 document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Broze"
	}
	else 
		if(xp >= 5001 & xp <=7000) {
			document.getElementById("nomeHeroi").value = "";
			document.getElementById("nivelHeroi").value = "";
			document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Ouro"
	
		}else 
		 if(xp >= 7001 & xp <=8000) {
			document.getElementById("nomeHeroi").value = "";
			document.getElementById("nivelHeroi").value = "";
			document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Platina"
			}
		else 
			if(xp >= 8001 & xp <=9000) {
				document.getElementById("nomeHeroi").value = "";
				document.getElementById("nivelHeroi").value = "";
				document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Ascendente"
				}
		else 
			if(xp >= 9001 & xp <=10000) {
				document.getElementById("nomeHeroi").value = "";
				document.getElementById("nivelHeroi").value = "";
				document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Imortal"
				}
		else {
			document.getElementById("nomeHeroi").value = "";
			document.getElementById("nivelHeroi").value = "";
			document.getElementById("exibeMsg").innerHTML = "O Heroi de nome "+ nome + " esta no nivel - "+xp +" de Radiante"
			}
}

