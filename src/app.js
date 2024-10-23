/* eslint-disable */
import "bootstrap";
import "./style.css";

const paloUp = document.querySelector("paloUp");
const cardValue = document.querySelector("cardValue");
const paloDown = document.querySelector("paloDown");

const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const cardSymbols = [
  { name: "diamonds" },
  { name: "hearts" },
  { name: "spades" },
  { name: "clubs" }
];

// Función para que determinemos el color según el palo

function getSymbolColor(symbol) {
  if (symbol === "diamonds" || symbol === "hearts") {
    return "red";
  } else if (symbol === "spades" || symbol === "clubs") {
    return "black";
  }
}

// Función para que generemos una carta aleatoria

function generateRandomCard() {
  const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
  const randomSymbol =
    cardSymbols[Math.floor(Math.random() * cardSymbols.length)].name;

  const color = getSymbolColor(randomSymbol);

  // Actualizamos el valor de la carta
  document.getElementById("cardValue").textContent = randomValue;

  // Actualizamos los símbolos en la carta
  const topSymbol = document.querySelector(".palo-up");
  const bottomSymbol = document.querySelector(".palo-down");

  topSymbol.className = `palo-up ${randomSymbol}`;
  bottomSymbol.className = `palo-down ${randomSymbol}`;

  // Aplicamos el color de la carta (rojo o negro)
  const cardElements = document.querySelectorAll(
    ".palo-up, .card-value, .palo-down"
  );
  cardElements.forEach(el => {
    el.classList.remove("red", "black"); // Limpiamos clases anteriores
    el.classList.add(color); // Añadimos la clase del color correspondiente
  });
}

// Función para que ajustemos el tamaño de la carta
function adjustCardSize() {
  const card = document.getElementById("card");
  const width = document.getElementById("width").value || "200px";
  const height = document.getElementById("height").value || "300px";
  card.style.width = width;
  card.style.height = height;
}

// Evento para que generemos una nueva carta al presionar el botón
document
  .getElementById("generateCardBtn")
  .addEventListener("click", function() {
    generateRandomCard();
    adjustCardSize();
  });

// Temporizador para que generemos una carta nueva cada 10 segundos
setInterval(() => {
  generateRandomCard();
}, 10000);

// Ejecutamos la función cada vez que la página se cargue
window.onload = function() {
  generateRandomCard();
  adjustCardSize();
};
