# FinanceApp Backend

Este é o backend do projeto FinanceApp, construído com NestJS, Docker Compose e Prisma.

## Pré-requisitos

- Docker
- Docker Compose

## Configuração do Projeto

2. Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente como no .env-example


## Executando o Projeto Localmente

1. Inicie os containers com Docker Compose:

  ```bash
  docker-compose up -d db
  ```

2. Instale a aplicação:

  ```bash
  yarn
  ```

3. Execute as migrações do Prisma:

  ```bash
  yarn run migrate:dev
  ```

4. Inicie a aplicação:

  ```bash
  yarn run start:dev
  ```

## Acessando a Aplicação

- A aplicação estará disponível em `http://localhost:8000`.

## Comandos Úteis

- Parar os containers:

  ```bash
  docker-compose down
  ```

- Verificar logs dos containers:

  ```bash
  docker-compose logs -f
  ```