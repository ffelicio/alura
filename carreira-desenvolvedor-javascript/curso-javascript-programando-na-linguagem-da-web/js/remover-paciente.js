
var tbody = document.querySelector('#tabela-pacientes');
tbody.addEventListener('dblclick', function(event){
    // O event.target se refere a qual coluna(td) da tabela foi clicada, ou seja, quem sofreu propriamente o evento.
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // tr -> pai da td clicada

    // Coloca uma transição de esmaecimento 5 segundos
    paiDoAlvo.classList.add('fadeOut');

    /**
     * O 'setTimeout' serve para aguardar um tempo na execução de uma função.
     * Aceita 2 parâmetros, sendo o 1º a função a ser executada e o 2º o tempo para acionamento da função do primeiro parâmetro.
     * O tempo é calculado em milissegundos, no caso abaixo, executará em meio segundo. 
     */
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

    // Podendo ser da forma reduzida abaixo.
    // event.target.parentNode.remove();
});

/**
 * A estrutura abaixo funcionaria caso houvesse somente a lista de dados sem o formulário.
 * Ao inserir um novo registro, a nova linha não receberia o evento.
 * Outra questão da não utilização é sobre a performance do DOM. Para cada linha o evento seria atribuído.
 * 
 * var pacientes = document.querySelectorAll('.paciente');
 *   pacientes.forEach(function(paciente) {
 *       paciente.addEventListener('dblclick', function() {
 *           // A palavra reservada 'this' se refere a linha do paciente clicado.
 *           if( confirm('Deseja remover o paciente selecionado?') ) {
 *               this.remove();
 *           }
 *       });
 *   });
 */