## O que é Regex?
Regex, ou expressões regulares, é uma linguagem para encontrar padrões de texto.

Extrair seções específicas de uma arquivo de texto

Validação de formatação de, por exemplo, e-mail ou telefone

Análise de arquivos de texto e extração de dados para, por exemplo, gravar no banco de dados

Substituir os valores de um texto para limpar, reformatar ou alterar o conteúdo

## O que é um Regex-Engine?
É um software para interpretar e aplicar a regex.

Uma expressão regular sozinha é apenas uma string. É preciso ter um software para interpretar a regex e aplicá-la no alvo. Esse software é o Regex Engine que existe para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python, Ruby ou PHP.

## Quais dos caracteres abaixo não representa um meta-char?

Asterisco: *
Chave: {
e comercial: & <= Não representa um meta-char
Ponto: .

## Exemplos:

###### Expressão regular para encontrar o CNPJ '00.000.000/0000-00'

\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}

###### Expressão regular para encontrar números ips:

'126.1.112.34'
'128.126.12.244'
'192.168.0.34'

\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}

###### Expressão regular para encontrar o cep a partir do texto abaixo:

'João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro'

\d{5}-\d{3}

###### Expressão regular para encontrar o número telefônico '(21) 3216-2345'

Dica: Os parênteses são meta-chars e precisam ser utilizados para capturar o valor literal: \(e \):

\(\d{2}\) \d{4}-\d{4}
