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

            var existeTexto = filter.byRegex(valorDigitado, nome);
            // var existeTexto = filter.bySubstr(valorDigitado, nome);

            if( ! existeTexto ) {
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

var filter = {
    byRegex: function(valorDigitado, nomePaciente) {
        /**
         * Para utilização da expressão regular no javascript
         * basta utilizar o objeto 'RegExp'.
         * Esse objeto aceita 2 parâmetros:
         * 1 - O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado).
         * 2 - O segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).
         * Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag 'i'.
         */
        var expressao = new RegExp(valorDigitado, 'i');
    
        /**
         * Para analisar o conteúdo é utilizada a função 'test'.
         * Ele irá testar se no conteúdo digitado contém pelo menos um pedaço do que existe
         * na coluna info-nome(primeira coluna da tabela).
         * Essa função retorna 'true' ou 'false'
         */
        return expressao.test(nomePaciente);
    },
    bySubstr: function(valorDigitado, nomePaciente) {
        var comparavel = nomePaciente.substr(0, valorDigitado.length);
        var comparavelMinusculo = comparavel.toLowerCase();
        var valorDigitadoMinusculo = valorDigitado.toLowerCase();

        return (valorDigitadoMinusculo == comparavelMinusculo);
    }
}