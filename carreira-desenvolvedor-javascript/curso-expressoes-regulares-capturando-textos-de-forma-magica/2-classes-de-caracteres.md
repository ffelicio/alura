# Classes de Caracteres

## Entendendo classes de caracteres

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