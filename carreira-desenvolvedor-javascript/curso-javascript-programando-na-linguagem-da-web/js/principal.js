// Calcular o peso do primeiro paciente
var paciente = document.querySelector('#primeiro-paciente'),
    tdPeso = paciente.querySelector('.info-peso'),
    tdAltura = paciente.querySelector('.info-altura'),
    tdImc = paciente.querySelector('.info-imc'),
    peso = tdPeso.textContent,
    altura = tdAltura.textContent;

// Validações
var alturaEhValida = true;
var pesoEhValido = true;

if( altura <= 0 || altura >= 3.00 ) {
    tdImc.textContent = 'Altura inválida!';
    alturaEhValida = false;
}

if( peso <= 0 || peso >= 350 ) {
    tdImc.textContent = 'Peso inválido!';
    pesoEhValido = false;
}

if( alturaEhValida && pesoEhValido ) {
    tdImc.textContent = peso / (altura * altura);
}