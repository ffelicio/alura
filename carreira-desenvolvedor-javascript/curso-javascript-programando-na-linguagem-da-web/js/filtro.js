var filtrarTabela = document.querySelector('#filtrar-tabela');

/**
 * O 'input' serve para resgatar o que está sendo digitado no campo.
 */
filtrarTabela.addEventListener('input', function() {
    var valorDigitado = this.value;
    var pacientes = document.querySelectorAll('.paciente');

    /**
     * Caso seja digitado algum valor, seguirá o processo de filtro
     */
    if(valorDigitado.length > 0) {
        for( var i = 0; i < pacientes.length; i++ ) {
            var paciente = pacientes[i];

            // Coluna referente ao nome do paciente.
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;

            /**
             * Para utilização da expressão regular no javascript
             * basta utilizar o objeto 'RegExp'.
             * Esse objeto aceita 2 parâmetros:
             * 1 - O primeiro será o texto que queremos buscar, no caso, o termo digitado no campo de busca.
             * 2 - O segundo parâmetro será referente as características dos termos que devem ser buscados.
             * O parâmetro 'i' é para pesquisar com case insensitive
             */
            var expressao = new RegExp(valorDigitado, 'i');

            /**
             * Para analisar o conteúdo é utilizada a função 'test'.
             * Ele irá testar se no conteúdo digitado contém pelo menos um pedaço do que existe
             * na coluna info-nome(primeira coluna da tabela).
             * Essa função retorna 'true' ou 'false'
             */
            if( ! expressao.test(nome) ) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        }
    } else {
        // remove a classe de cada linha da tabela
        for( var i = 0; i < pacientes.length; i++ ) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});