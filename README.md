## Como subir

```shell
# Clonando o projeto
$ git clone https://github.com/matheussguerra/softtek_test

# Navegar até a pasta raiz do projeto
$ cd softtek_test

# Instalar dependências
$ npm install

# Iniciar servidor
$ npm run dev:server
```

A api rodará na porta 3000. (http://localhost:3000)

## Como testar

Na raiz do projeto existe uma collection para o postman, ao importar essa collection será observado que existem 3 requests:

- Create Entry (POST http://localhost:3000/entry)
- List Entry (GET http://localhost:3000/entry/list)
- Reports (GET http://localhost:3000/entry)

A request create entry é utilizada para realizar o lançamento, deve-se informar o valor (number) e a operação desejada ("D" ou "C"). O service se encarregará de atribuir um identificador único e a data do lançamento.
A request List Entry listara todas entradas realizadas, retornando um array com todas as informações dos lançamentos armazenados.
Por fim a request Reports retornará o saldo consolidado do dia.

## Solução

A API desenvolvida tem por finalidade controlar o lançamento de débitos e créditos diários. Além disso, disponibiliza relatórios de lançamentos.

## Services

Foram desenvolvidos dois serviços:
O serviço de entrada recebe os lançamentos e após validações o mesmo os armazena (nesse caso, em memória).
Exemplo de request body:

```
{
    "value": 249.99,
    "operation": "C"
}
```

O serviço de relatórios, obtém os lançamentos e realiza a soma dos mesmos (ou subtração dependendo da operação do lançamento) e retorna o saldo diário consolidado.
