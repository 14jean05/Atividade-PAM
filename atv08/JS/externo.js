window.onload = function() {
	let Ad = document.getElementsByTagName("button")[0];
	//Aplicar evento (click)
	Ad.onclick = function() {
		n_1 = document.getElementById("n_1").value;
		n_2 = document.getElementById("n_2").value;
		let resultado = parseInt(n_1) + parseInt(n_2);
		let ps = document.getElementsByTagName("p")[0];
		ps.innerHTML = resultado;
		document.getElementById("n_1").value = "";
		document.getElementById("n_2").value = "";
	}
}
