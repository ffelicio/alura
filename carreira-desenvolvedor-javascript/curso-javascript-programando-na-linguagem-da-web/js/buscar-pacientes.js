var btnBuscarPacientes = document.querySelector('#buscar-pacientes');

btnBuscarPacientes.addEventListener('click', function() {
    /**
     * Um objeto do javascript responsável por fazer requisições http. 
     * Apesar de ter o XML no nome, hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML,
     * este nome só se manteve devido a um legado histórico.
     */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function() {
        var erroAjax = document.querySelector('#erro-ajax');

        if( xhr.status == 200 ) {
            erroAjax.classList.add('invisivel');

            /**
             * O JSON.parse faz a conversão do retorno em texto para objeto json
             */
            var pacientes = JSON.parse(this.responseText);
        
            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});