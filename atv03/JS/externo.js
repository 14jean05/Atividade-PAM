//document.getElementById(): Retorna o primeiro elemento que possui o ID especificado.
var elemento = document.getElementById("exemplo");
elemento.innerHTML = "Conteúdo alterado";

//document.getElementsByTagName(): Retorna uma lista de todos os elementos com o nome da tag especificada.
var paragrafos = document.getElementsByTagName("p");
for (var i = 0; i < paragrafos.length; i++) {
    paragrafos[i].innerHTML = "Conteúdo alterado";
}

//document.getElementsByClassName(): Retorna uma lista de todos os elementos que têm a classe especificada.
var elementos = document.getElementsByClassName("exemplo");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = "Conteúdo alterado";
}

//document.querySelector(): Retorna o primeiro elemento dentro do documento que corresponde ao seletor especificado.
var elemento = document.querySelector("#exemplo");
elemento.innerHTML = "Conteúdo alterado";

//document.querySelectorAll(): Retorna uma lista de elementos dentro do documento que correspondem ao seletor especificado.
var elementos = document.querySelectorAll(".exemplo");
elementos.forEach(function(elemento) {
    elemento.innerHTML = "Conteúdo alterado";
});
