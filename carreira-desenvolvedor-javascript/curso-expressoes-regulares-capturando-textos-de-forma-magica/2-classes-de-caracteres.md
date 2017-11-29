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

## Caracteres opcionais

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