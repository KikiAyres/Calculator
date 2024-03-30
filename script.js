const visorInput = document.getElementById("tot");
const result = 0;
let currentOp = result;
let previousValue = null;

// Função JavaScript que será chamada quando o botão for clicado
function send(value) {
  console.log(value);

  if (value === "/" || value === "x") {
    currentOp = value;
  }

  // Obtendo o elemento de input pelo id
  const valueVisor = visorInput.value;

  console.log(valueVisor);
  // Definindo o value do input
  visorInput.value = valueVisor.toString() + value.toString();
}

function clearVisor() {
  visorInput.value = "";
}

function clean() {
  document.getElementById("tot").value = "";
}

function back() {
  const tot = document.getElementById("tot");
  document.getElementById("tot").value = tot.value.substring(
    0,
    tot.value.length - 1
  );
}

function calculate() {
  var tot = document.getElementById("tot").value;
  if (tot) {
    document.getElementById("tot").value = eval(tot);
  } else {
    document.getElementById("tot").value = "0";
  }
}

function percent() {
  var tot = document.getElementById("tot").value;
  if (tot) {
    document.getElementById("tot").value = eval(tot) / 100;
  }
}

showValues();

