/**
 * Adicionando event ao clicar no botão
 */
var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
botaoAdicionarPaciente.addEventListener('click', function(event) {
    /**
     * Essa função previne os comportamentos padrões dos usuários do browser.
     */
    event.preventDefault();

    var form = document.querySelector('#form');
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    var ulMensagemErro = document.querySelector('#mensagens-erro');

    // A função innerHTML permite controlar o conteúdo interno de um elemento. No caso abaixo, a ul.
    ulMensagemErro.innerHTML = '';

    // Se retornou erro
    if(erros.length > 0) {
        exibeMensagensDeErro(erros, ulMensagemErro);
        return;
    }

    adicionarPacienteNaTabela(paciente);

    // Limpa os dados do formulário.
    form.reset();
});

function adicionarPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tbody = document.querySelector('#tabela-pacientes');
    // Incluíndo na tabela os dados formatados
    tbody.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    // Cria um objeto paciente e seus atributos
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

// Criando os elementos para incluir na tabela
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    // Colocando as informações na tr
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

/**
 * Essa função cria a td já inserindo os valores e a classe css respectiva. 
 */
function montaTd(dado, classeCss) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classeCss);
    return td;
}

// Retorna uma lista com as informações dos erros.
function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push('Preencha o nome do paciente.');
    }

    if(!validaPeso(paciente.peso)) {
        erros.push('Peso inválido.');
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura inválida.');
    }

    if(paciente.gordura.length == 0) {
        erros.push('Preencha o percentual de gordura do paciente.');
    }

    return erros;
}

function exibeMensagensDeErro(erros, ulMensagemErro) {
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ulMensagemErro.appendChild(li);
    });
}