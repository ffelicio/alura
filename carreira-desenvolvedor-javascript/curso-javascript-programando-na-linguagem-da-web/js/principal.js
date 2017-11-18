/**
 * querySelector = resgata somente um valor, mesmo que a informação passada no argumento, seja uma classe.
 * querySelectorAll = retorna uma lista de elementos, de acordo com a informação passada no argumento(id, classe, elemento html, ...)
 * 
 */

var pacientes = document.querySelectorAll('.paciente');
var totalPacientes = pacientes.length;
var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');

for(var i = 0; i < totalPacientes; i++) {
    var paciente = pacientes[i],
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
        // Inclusão de css via js
        // paciente.style.color = 'red';
        
        /*
         * Para palavras compostas de estilo, como por exemplo 'background-color', o javascript não aceita essa grafia.
         * A mesma deverá ser feita com o padrão camelCase, conforme o exemplo abaixo.
         */
        // paciente.style.backgroundColor = 'lightcoral';

        /*
         * Para alteração de elementos que afetam a visualização, a melhor maneira é fazer conforme descrito abaixo:
         * 1. Criar uma regra css para alteração do elemento(html);
         * 2. Realizar a inclusão via javascript no elemento.
         * 
         * Para inclusão da classe é utilizada a propriedade 'classList' no objeto. Esse atributo retorna uma lista(array) de classes
         * apontadas no elemento. O mesmo também nos dá suporte para alguns métodos, como o mostrado abaixo, onde é adicionada uma nova classe
         * no elemento(objeto).
         */
        paciente.classList.add('paciente-invalido');
    }

    if( peso <= 0 || peso >= 350 ) {
        tdImc.textContent = 'Peso inválido!';
        pesoEhValido = false;
        paciente.classList.add('paciente-invalido');
    }

    if( alturaEhValida && pesoEhValido ) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/**
 * Adicionando event ao clicar no botão
 */
botaoAdicionarPaciente.addEventListener('click', function(event) {
    /**
     * Essa função previne os comportamentos padrões dos usuários do browser.
     */
    event.preventDefault();

    var form = document.querySelector('#form');
    var tbody = document.querySelector('#tabela-pacientes');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Criando os elementos para incluir na tabela
    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    nomeTd.classList.add('info-nome');
    pesoTd.textContent = peso;
    pesoTd.classList.add('info-peso');
    alturaTd.textContent = altura;
    alturaTd.classList.add('info-altura');
    gorduraTd.textContent = gordura;
    gorduraTd.classList.add('info-gordura');
    imcTd.textContent = 0;
    imcTd.classList.add('info-imc');

    // Colocando as informações na tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    pacienteTr.classList.add('paciente');

    // Incluíndo na tabela os dados formatados
    tbody.appendChild(pacienteTr);
});

function calcularImc() {
    
}