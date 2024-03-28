function converterParaMaiusculas() {
    let inputElement = document.getElementById("inputString");
    let inputString = inputElement.value;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = converterStringParaMaiusculas(inputString);
}

function converterStringParaMaiusculas(string) {
    return string.toUpperCase();
}
