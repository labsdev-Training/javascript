var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição para Profissionais de Tecnologia";
// calculo o IMC do primeiro paciente
var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");

var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {
  console.log("Peso inválido!");
  tdPeso.textContent = "Peso inválido!";
  pesoEhValido = false;
}

if (altura <= 0 || altura >= 3) {
  console.log("Altura inválida!");
  tdAltura.textContent = "Altura inválida!";
  alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
} else {
  tdImc.textContent = "Altura e/ou peso inválidos!";
}

// fim calculo primeiro paciente

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
  console.log("Peso inválido");
  pesoEhValido = false;
  tdImc.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3.0) {
  console.log("Altura invalida");
  alturaEhValida = false;
  tdImc.textContent = "Altura invalida";
}

if (alturaEhValida && pesoEhValido) {
  var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>25
  tdImc.textContent = imc;
}
