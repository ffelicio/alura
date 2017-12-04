# Classes de Caracteres

## 1 - Entendendo classes de caracteres

Na apresentação referente ao módulo [Começando com Regex](https://github.com/ffelicio/alura/blob/master/carreira-desenvolvedor-javascript/curso-expressoes-regulares-capturando-textos-de-forma-magica/1-comecando-com-regex.md), vimos nossa primeira expressão para encontrar o cpf no padrão **000.000.000-00** com a expressão abaixo:

```
\d{3}\.\d{3}\.\d{3}-\d{2}
```

Para uma variação do mesmo cpf seguindo o padrão **00000000000** ou **000.000.00.00**, a nossa regex falha e não **enxerga** esses CPFs. Para fazê-la funcionar, devemos nos basear com os recursos das classes de caracteres.

Anteriormente foi apresentada a classe de caracter

```
\d (se refere ao atalho para qualquer dígito entre 0 e 9 [0-9])
```

Nos cpfs mencionados (observar a partir da 12ª posição), pode-se reparar que o caracter ponto (**.**) não foi escapado. Opcionalmente, a referência do cpf pode vir ponto **OU** hífen, que podemos declarar com

```
[.-] (ou [-.] - a ordem não importa)
```

### Caracteres opcionais

A quantidade de vezes que essa classe de caracteres deve aparecer é definida por um **quantifier**, por exemplo:

- `[.-]` - ponto ou hífen, zero, uma ou mais vezes
- `[.-]{1}` - ponto ou hífen, zero ou uma vez

No nosso caso `[.-]` é opcional, pode ter ou não ter, mas uma vez apenas. Dentro da regex, isso é declarado através do meta-char ponto de interrogação **(?)**. O ponto de interrogação **(?)**, que significa zero ou uma vez, é mais um **quantifier**. Assim podemos combinar a classe `[.-]` com o quantifier `?`:

- `[.-]?` - ponto ou hífen zero ou uma vez.

Aplicando a regex `\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}`, atenderá os 2 formatos apresentados.

Sabendo disso poderíamos reescrever a regex com

```
[0123456789]{3}[.-]?[0123456789]{3}[.-]?[0123456789]{3}[.-]?[0123456789]{2}
ou
[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}
```

## 2 - Mãos na massa: Ajudando Alura

Verificando a ocorrência das divs no html abaixo.

```html
<div>Teste 1</div>
<div>Teste 2</div>
```

- `<?div>` - Expressão regular

Repare que usamos o meta-char **?** para sinalizar que o **/** é opcional.

## 3 - Qual é a classe ?

Qual é a classe correta para definir os números entre **1** e **3** E **6** e **9**?

- [ ] [1-3-6-9]
- [x] [1-36-9]
- [ ] {1-36-9}
- [ ] [\1-\3\6-\9]

1. 123456789 - **123**45**6789**
2. 123456 - **123**45**6**
3. 3456 - **3**45**6**
4. 123456778899 - **123**45**6778899**

## 4 - Praticando classes e quantifier

Verificando a data **01 de Janeiro de 2017**

O início é bem simples e poderíamos fazer com:

```
\d\d
```

Mas por ser uma data, essa regex é muito generalista e então poderíamos torná-la mais específica com:

```
[0-3]?\d
```

Essa regex pega os dias com um ou dois digítos. Dentro da classe, poderíamos torná-la mais específica ainda com:

```
[0123]?\d
```

Depois do dia, vem um espaço e a sílaba **de**. Como poderíamos definir um espaço dentro de uma regex? E se não for o espaço e sim um tab? Felizmente já existe uma classe predefinida, a **\s** (significa **whitespace**). A definição do **\s** pode variar um pouco entre as implementações, mas normalmente é um atalho para **[\t\r\n\f]**, onde:

- O primeiro caractere é um espaço branco.
- **\t** é um tab.
- **\r** é carriage return.
- **\n** é newline.
- **\f** é form feed.

Isso pode ser muita coisa para se lembrar, então a melhor alternativa seria utilizar **\s** como mostrado abaixo:

```
[0123]?\d\s{1,}
```

Nos colchetes colocamos **1**, que significa **um** ou **mais**.
Novamente existe um atalho, já que isso é muito comum:

```
[0123]?\d\s+
```

O símbolo **+** é outro atalho para definir quantidade. Abaixo segue uma lista:

```
? - zero ou uma vez.
* - zero ou mais vezes.
+ - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no mínimo n vezes.
{n,m} - no mínimo n vezes, no máximo m vezes.
```

Agora podemos continuar com o valor literal **de**. Fazendo a junção de tudo até agora. temos:

```
[0123]?\d\s+de\s+ - Match em: 01 de
```

Para descrever os meses, deveremos utilizar uma nova classe. Abaixo segue alguns exemplos:

- **[A-Z]** significa de A até Z, sempre maiúscula.
- **[a-z]** significa de a até z, sempre minúscula,
- **[A-Za-z]** significa A-Z ou a-z.
- **[abc]** significa a, b ou c.

Podemos fazer a junção com um **quantifier**. Vamos começar com uma letra maiúscula ,seguida por uma quantidade de letras minúsculas, adicionando ainda a letra **ç** (do mês **março**):

```
[A-Z][a-zç]+ - Descrição do mês iniciando com letra maiúscula e o restante com letra minúscula
ou
[A-Za-z][A-ZÇa-zç]+ - Todas as letras do mês estejam maiúsculas ou minúsculas
```

Até aqui temos:

```
[0123]?\d\s+de\s+[A-Z][a-zç]+ - Match em: 01 de Janeiro
```

Poderíamos deixar mais restritivo ainda, como um mês escrito tem no máximo 8 caracteres (depois da primeira letra), temos:

```
[0123]?\d\s+de\s+[A-Z][a-zç]{1,8} - Match em: 01 de Janeiro
```

Continuando, tem mais uma vez a sílaba **de**, repetindo a expressão anterior:

```
[0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+ - Match em: 01 de Janeiro de
```

Por fim podemos declarar o ano que é composto por quatro dígitos:

```
[0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+\d\d\d\d - Match em 01 de Janeiro de 2017
```

Poderia haver uma melhoria na expressão, deixando claro que o ano deve começar com **1** ou **2** seguido por **3** dígitos:

```
[0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+[12]\d{3} - Match em: 01 de Janeiro de 2017
```

Por fim, não podemos esquecer de mencionar a classe de **word char**.
Um **word char** é apresentado com **\w** e é um atalho para **[A-Za-z0-9_]**.

```
[0123]?\d\s+de\s+\w{1,9}\s+de\s+[12]\d{3} - Match em: 01 de Janeiro de 2017
```

## 5 - Trabalhando com horários

Qual expressão regular podemos usar para encontrar o padrão **19h32min16s**?

- [ ] .{2}h.{2}min.{2}s
- [ ] \[0-9]{2}h\[0-9]{2}min\[0-9]{2}s
- [ ] \.{2}h\.{2}min\.{2}s
- [x] \d{2}h\d{2}min\d{2}s

Como não precisamos limitar os números nesse padrão, podemos utilizar a classe padrão \d para trabalhar com dígitos.

Tem uma regex parecida nas respostas, no entanto ela usa uma \ na frente de cada classes de digitos:

```
\[0-9]{2}h\[0-9]{2}min\[0-9]{2}s
```

Sem essa barra a regex também funcionaria:

```
[0-9]{2}h[0-9]{2}min[0-9]{2}s
```

## 6 - Validando a placa

Como seria a expressão regular que devemos usar para validarmos a placa de um carro?

Exemplo de placa: **KMG-8089**

```
[A-Z]{3}-\d{4}
```

## 7 - A favor dos alunos

Gilberto é professor de física em um colégio cuja média para passar é **8**. Aliás, uma média bem alta. Contudo, este professor é amigo dos alunos, e costuma aprovar aqueles que conseguem notas de **7.2** a **7.9**.
Ajude Gilberto e, claro, seus alunos, separando os nomes e as notas dos alunos que tiraram de **7.2** a **7.9** para que o professor possa aprová-los!

```html
9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cinério
```

1. Queremos pegar todo mundo que comece com a nota **7**

```
7\. (escapando o ponto por ser um meta char)
```

2. Nela precisamos aceitar números entre **2** e **9**

```
7\.[2-9]
```

Com isso temos as possibilidades **7.2**, **7.3**, **7.4**, **7.5**, **7.6**, **7.7**, **7.8** e **7.9**.

3. Sabendo que existe um espaço após o número, temos:

```
7\.[2-9]\s+-\s+
```

Por fim, depois do hífen queremos pegar qualquer quantidade de caracteres, por isso usaremos o atalho de classe **\w** que pega qualquer dígito, seja ele letra ou número:

```
7\.[2-9]\s+-\s+\w+
```

## 8 - Uma expressão regular incorreta pode prejudicar alguém

Laudilene, é professora de filosofia, amiga de Gilberto, professor de física. Ambos dão uma "colher de chá" para seus alunos. No caso de Laudi, ela dá até meio ponto para que seus alunos atinjam a média **8** para serem aprovados.
Depois de calcular as médias das provas dos alunos, Laudi, muito cansada, lançou todas as médias em um arquivo texto:

```html
10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety
```

Para extrairmos a nota e o nome de alunos elegíveis para receberem até meio ponto podemos usar a expressão.

```
[7]\.[5-9] - \w+
```

Contudo, a expressão acima dá "match" apenas em

```
7.5 - Bety
```

Explique por que a nota e o nome de Bob não entrou na seleção.

```html
A nota de Bob não foi encontrada, devido a espaços que não estavam sendo considerados.
A expressão que considera o resultado é:
```

```
[7]\.[5-9]\s+-\s\w+
```

## 9 - Separando joio do trigo

Temos a seguinte linha:

```html
BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO
```

Definir uma expressão regular que faça **match** apenas com as palavras **GARROTE**, **SERROTE** e **ROTEIRO**.

```
[A-Z]*ROT[A-Z]+
```

Usamos a classe de caracteres **[A-Z]** porque queremos lidar apenas com todos as letras em maiúsculo.
Além disso, na primeira parte da expressão temos **[A-Z]***, usamos o **quantifier** *, que indica zero ou mais vezes. Por fim temos **[A-Z]*ROT[A-Z]+**.

# 10 - Mais sobre classes

As classes são uma das partes mais importantes de expressões regulares.
Não podemos esquecer é, quando definimos uma classe, a grande maioria dos **meta-chars** são interpretados como caracteres literais, ou seja, não são mais **meta-chars**!

Vamos analisar a classe **[a+]** Ela é composta dos chars **a** e **+** e dentro dos colchetes o char **+** não é um **quantifier**.

Para entender melhor, faça o teste com o alvo a+a+ aplicando a regex [a+]:

Foram dados 4 matches. A regex engine selecionou cada caracter da classe separadamente (**a** ou **+**), apenas um caractere por vez. Consequentemente achou 4 matches.

Tentando a regex **[a+]+** com o mesmo alvo **a+a+**

Foi dados apenas um match! A regex engine aplicou o caractere **a** ou **+**, uma ou mais vezes no alvo!

Sabendo disso e dado o seguinte alvo: 

```
?classes+poderosas*
```

Qual regex seleciona o alvo inteiro apenas em um match?

- [ ] [a-z]?+*
- [x] [a-z?*+]+
- [ ] [a-z?*+] - Nesse caso, dá match 19 vezes
- [ ] a-z?+*

A grande maioria de **meta-chars** são valores literais na definição da classe (dentro de **[]**). Por exemplo, a classe abaixo define apenas valores literais:

```
[.?+*{}]
```

Apenas os caracteres \ (barra invertida), - (hífen) e ^ (circunflexo) realmente são **meta-chars** dentro de uma classe. O hífen e a barra invertida já foram mostrados, por exemplo na classe:

```
[a-z\d] - Definimos uma classe com letras minúsculas e dígitos.
```

O circunflexo **(^)** significa negação dentro dos colchetes.

## 11 - Validando a entrada do usuário

Como poderíamos validar o campo para considerar as informações abaixo:

- O limite é de 10 caracteres;
- O primeiro caractere deve ser uma letra do alfabeto, não pode ser um número;
- A partir do segundo caractere podemos ter letras maiúsculas, minúsculas e números.

```
[a-zA-Z][a-zA-Z0-9]{0,9}
```

## 12 - Melhorando a legibilidade

Anteriormente, para encontrar a regex para dar match na data **01 de Janeiro de 2017** utilizamos o padrão abaixo:

```
[0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+[12]\d{3}
```

Uma forma fácil de melhorar a legibilidade seria usar algumas variáveis auxiliares, que deixam claro o que estamos definindo, por exemplo no JavaScript podemos criar 4 variáveis:

```javascript
var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-zç]{1,8}";
var ANO  = "[12]\d{3}";
```

Repare que cada variável representa uma parte da regex. Depois disso é só concatenar esses variáveis para ter a expressão final:

```javascript
var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;
```

Essa string passamos para a regex engine do JavaScript:

```javascript
var objetoRegex  = new RegExp(stringRegex, 'g');
```

## 13 - O que aprendemos?

- Podemos definir facilmente a classe de qualquer caractere com o [A-Z].
- Conhecemos todos os quantifiers como ?, +, * e {n}.
- **\s** significa **whitespace** e é um atalho para **[\t\r\n\f]**.
- **\w** significa **word char** e é um atalho para **[A-Za-z0-9_]**.