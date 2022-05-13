# CRUD-JAVASCRIPT
## Implementações da branch
Nesta branch eu criei uma implementação do servidor node, com as rotas configuradas e validação de entradas. Infelizmente, preciso recriar as configs do Docker, para poder subir uma instância do postgres, carregando um banco de dados já criado, e fazer a comunicação com o servidor node através do knex

### Rodando o servidor
Para rodar basta ter uma instalação do `node 10.19.0` e `npm 6.14.4` e executar:

    npm install

para instalar as dependências e

    npm start

para rodar o servidor.
Caso em seu terminal mostre a mensagem `Server rodando na porta 8080`, significa que a execução do servidor foi bem sucedida e está rodando em `localhost:8080`.

### Testando requisições
Para testar as rotas / requisiçẽos, recomenda-se usar o `insomnia` e realizar as chamadas.

#### Listar
Para listar, basta enviar um `GET` para a rota

    http://localhost:8080/users

#### Cadastrar
Para criar um cadastro, basta enviar um `POST` para  a rota

    http://localhost:8080/users

Contendo um json no corpo da requisição os dados de nome, email e telefone. Ex:

    {
      "name": "Roberto Carlos Jr.",
      "phone": "+55 (12) 92345-1234",
      "email": "Roberto.Carlos2@bol.com.br" 
    }

#### Atualizar
Para atualizar um registro, basta ter o `id` do usuário (que tem o formato de uuid) e enviar um `PUT` para a rota

    http://localhost:8080/users/<id>

Contendo um json no corpo da requisição os dado atualizados do cadastro. Ex:

Requsição `PUT`

    http://localhost:8080/users/400bac37-4aa4-41bf-ba53-9c02bf71aa58

Corpo da requisição:

    {
      "name": "Roberto Carlos Jr.",
      "phone": "+55 (44) 99845-1234",
      "email": "Roberto.Carlos2@gmail.com" 
    }


#### Deletar
Para deletar um registro, basta ter o `id` do usuário que quer excluir e enviar um `DELETE` para a rota

    http://localhost:8080/users/<id>

Ex:

    http://localhost:8080/users/400bac37-4aa4-41bf-ba53-9c02bf71aa58


## Objetivos
O projeto se consiste em criar um crud em Node, usando PostgreSQL.

Deve ser criado um banco de dados SQL, carregado um arquivo SVG contendo 10 milhões de usuários para uma tabela com os campos `id`, `nome`, `email` e `phone`, e criar um servidor que administre a listagem, a criação, a atualização e a exclusão destes registros.

TODO

- [x] PostgresSQL
  - [x] Subir uma instancia do postgresql e criar o servidor `cadastros` com uma tabela `usuarios`;
  - [x]   Carregar o arquivo `CSV` na tabela `usuario`;
  - [x]   Exportar dump do servidor como `SQL`, mantendo as querys de para iniciar o banco e carregar os dados;

- [ ] Docker
  - [x] Criar imagem de docker contendo o crud;
  - [x]   Usar `docker-compose` para subir uma instância do docker contendo o `postgresql`  e a imagem do crud;
  - [ ]   Carregar arquivo de dump em `SQL` na build do `docker-compose` e carregar os cadastros de usuários;

- [ ] Crud
  - [x] Criar servidor node com `express` na porta `8080`;
  - [x] Configurar `routes`;
  - [ ] API
    - [ ] listar (GET localhost:8080/users);
      - [x] Criar protótipo;
      - [ ] Dados paginados;
    - [ ] cadastrar (POST localhost:8080/users) ;
      - [x] Criar protótipo;
      - [x] Validação dos dados;
      - [ ] Registro no postrgres;
    - [ ] atualizar (PUT localhost:8080/users/<id>);
      - [x] Criar protótipo;
      - [x] Validar `id`;
      - [ ] Atualizar no postres;
    - [ ] deletar (DELETE localhost:8080/users/<id>);
      - [x] Criar protótipo;
      - [x] Validar `id`;
      - [ ] Deletar do postgres;

