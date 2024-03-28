//onfocus
function mostrarMensagem() {
		alert("O campo está em foco!");
	}
	
//onmouseover
function mudarCor() {
		document.getElementById("meuBotao").style.backgroundColor = "blue";
    }
	
//onchange
function mostrarValorSelecionado() {
		var selecionado = document.getElementById("meuSelect").value;
		alert("Opção selecionada: " + selecionado);
	}
