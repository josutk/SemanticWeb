# SemanticWeb

## Ambiente de Desenvolvimento

Esse projeto utiliza a plataforma [Docker](https://www.docker.com/what-docker) para isolamento, criação e automação do ambiente de desenvolvimento para evitar problemas de compatibilidade. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

1. Instale o [docker](https://docs.docker.com/engine/installation/)
2. Instale o [docker compose](https://docs.docker.com/compose/install/)
3. Clone o repositório usando o comando:
  ```
  git clone https://github.com/josutk/SemanticWeb.git
  ```
4. Crie e inicie os containers para os serviços:
  ```
  docker-compose up
  ```
5. Acesse a aplicação na porta `3000` do seu `localhost`: [http://localhost](http://localhost:3000) para visualizar a aplicação funcionando.

5. Caso queira acessar o ambiente do fuseki. Acesse a aplicação na porta `3030` do seu `localhost`: [http://localhost](http://localhost:3030)

**Obs**: A senha do administrador do fuseki está localizada no arquivo docker-compose.yml. Essa senha pode ser alterado, caso ache necessário.
