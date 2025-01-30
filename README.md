# Finance App Backend

## Visão Geral

Este é o backend para o Finance App, construído com Node.js, Express e Sequelize. Ele fornece APIs para registro de usuários, login e gerenciamento de despesas.

## Funcionalidades

- Registro e autenticação de usuários
- Operações CRUD para usuários
- Operações CRUD para despesas
- Autenticação baseada em JWT

## Começando

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/finance-app-backend.git
   cd finance-app-backend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` no diretório raiz e adicione o seguinte:
   ```properties
   PORT=8080
   JWT_SECRET=your_jwt_secret_key
   PGUSER=postgres
   PGPASSWORD=your_postgres_password
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=finance_app
   ```

4. Execute as migrações do banco de dados:
   ```sh
   npx sequelize-cli db:migrate
   ```

5. Inicie o servidor:
   ```sh
   npm start
   ```

## Endpoints da API

### Autenticação

- **Registrar Usuário**
  ```sh
  POST /api/register
  ```
  Corpo da Requisição:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

- **Login de Usuário**
  ```sh
  POST /api/login
  ```
  Corpo da Requisição:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### Usuários

- **Obter Todos os Usuários**
  ```sh
  GET /api/users
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

- **Obter Usuário por ID**
  ```sh
  GET /api/users/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

- **Atualizar Usuário**
  ```sh
  PUT /api/users/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```
  Corpo da Requisição:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

- **Deletar Usuário**
  ```sh
  DELETE /api/users/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

### Despesas

- **Criar Despesa**
  ```sh
  POST /api/expenses
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```
  Corpo da Requisição:
  ```json
  {
    "description": "string",
    "amount": "number"
  }
  ```

- **Obter Todas as Despesas**
  ```sh
  GET /api/expenses
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

- **Obter Despesa por ID**
  ```sh
  GET /api/expenses/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

- **Atualizar Despesa**
  ```sh
  PUT /api/expenses/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```
  Corpo da Requisição:
  ```json
  {
    "description": "string",
    "amount": "number"
  }
  ```

- **Deletar Despesa**
  ```sh
  DELETE /api/expenses/:id
  ```
  Cabeçalhos:
  ```sh
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

## Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.