# CRUD-JAVASCRIPT
## Como usar
### Dependências
Dependências necessárias para rodar o servidor e suas versões recomendadas.
 * `node v12.22.12` ou superior.
 * `npm 6.14.16` ou superior.
 * `docker 20.10.16` ou superior.
 * `docker-compose 1.25.0` ou superior.
 * `psql 14.3` ou superior.
 * `insomnia`

### Como executar a aplicação
Para poder executar este programa, primeiro deve clonar este repositório, para isso execute

    git clone https://github.com/Gabriel-Grechuk/crud-javascript.git
    cd crud-javascript

#### Configurando
Logo depois, é necessário rodar o script de configuração, que é o responsável por instalar todas as dependências do `node` via `npm`, subir um container do `docker` com uma imagem do `postgresql` instalada, realizar a primeira migration do `prisma` e baixar, extrair e inserir o arquivo contendo 10mi de registro de usuários em formato CSV com o `psql`. Para isso basta rodar o script

    chmod 775 ./configure.sh
    ./configure.sh

Este script, dentro de alguns instantes, solicitará que você entre a senha configurada para a comunicação do `psql` com o `postgresql`. Basta digitar a senha `123123` e pressionar enter e ele imediatamente estará carregando os registros para dentro do banco de dados. Posteriormente, informará que o banco de dados já está configurado e já é possível proceguir com a execução.

**Este script leva em torno de 10 a 20 minutos para concluir a sua execução, dependendo da configuração da máquina sendo utilizada.**

#### Rodando aplicação.
Com a execução do `./configure.sh` concluída, já é possível executar o servidor do CRUD, para isto, basta executar

    chmod 775 ./run.sh
    ./run.sh

Durante a execução, ele estará usando um servidor `postgresql` no `docker-compose` em segundo plano, e mostrará o prompt do `node`, informando em qual porta a aplicação está sendo executada. Para finalizar a execução, basta pressionar `Ctrl + c` no terminal que o servidor `node` será encerrado. Para parar a execução da instância do `docker-compose`, basta rodar

    chmod 775 ./stop-composer.sh
    ./stop-composer.sh

#### Removendo container `postgresql` do `docker`
Quando não for mais necessário executar a aplicação, os containers e suas configurações podem ser facilmente removidas. Para isso, basta executar o script

    chmod 775 ./remove-docker.sh
    ./remove-docker.sh

e pronto, os containers `docker` foram removidos. Caso deseje usar a aplicação com sua base de dados novamente, é necessário executar o `./configure.sh` novamente.

### Fazendo requisições e CRUD
Para este fim, recomendo usar o `insomnia`, assim pode importar o arquivo `requests-Insomnia.json` para dentro dele e já ter configurados exemplos de requests para facilitar o teste das operações.

#### Listar cadastros
A listagem dos cadastros é paginada de 20 em 20 registros, e pode ser feita através de uma simples requisição `GET` para a rota

    http://localhost:8080/users

Para avançar as páginas de registros, deve usar a query

    http://localhost:8080/users?page=<index>

Onde `<index>` é o número da página que deseja acessar. Ex:

    http://localhost:8080/users?page=55

#### Consultando usuário pelo `id`
Para consultar um usuário pelo seu `id`, precisa executar uma requisição `GET` para rota

    http://localhost:8080/users/<id>
    
Onde `<id>` é o uuid do usuário. Ex:

    http://localhost:8080/users/00047e76-1a43-45e6-8113-e5b9d9d259a6
    
#### Cadastrando um novo usuário
Para cadastrar um novo usuário, é necessário fazer uma requisição `POST` para a seguinte rota

    http://localhost:8080/users

e o corpo da requisição precisa ter os campos `name`, `email` e `phone`. Ex:

    {
      "name": "Roberto Carlos Jr.",
      "phone": "+55 (12) 99623-1234",
      "email": "Roberto.Carlos2@bol.com.br" 
    }
    
#### Modificando um usuário
Para modificar um usuário, é necessário fazer uma requisição `PUT` para a rota

    http://localhost:8080/users/<id>
    
onde o campo `<id>` indica o `id` do usuário que deseja editar. E o corpo da requisição dever conter os novos campos `name`, `email` e `phone`. Ex:
Requisição `PUT`:

    http://localhost:8080/users/00047e76-1a43-45e6-8113-e5b9d9d259a6

corpo da requisição:

    {
  	  "name": "Srta. Hélio Batista",
	  "email": "Isabel_outro-email@gmail.com",
	  "phone": "+55 (44) 9 8448-1500"
    }
    
#### Deletando usuário
Para deletar um usuário, basta realizar uma requisição `DELETE` para a rota

    http://localhost:8080/users/<id>

onde o campo `<id>` se refere ao `id` do usuário que deseja excluir. Ex:

    http://localhost:8080/users/000002a9-1fe6-4f8a-a0c7-17cbe5666b4f

