const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

let contador = 0;

clickButton.addEventListener('click', function() {
  contador++;
  clickCount.textContent = contador;
});
