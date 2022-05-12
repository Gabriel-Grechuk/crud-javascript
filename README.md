# crud-javascript
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

