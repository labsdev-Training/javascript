var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição para Profissionais de Tecnologia";

var paciente = document.querySelector("#primeiro-paciente");
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
