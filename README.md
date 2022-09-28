# Project Store Manager
Projeto desenvolvido no módulo de Back-end da [Trybe](https://www.betrybe.com/). 

## ✏ Sobre o projeto
O objetivo do projeto foi construir um sistema de gerenciamento de vendas no formato dropshipping sendo possível criar, visualizar, deletar e atualizar produtos e vendas!
</br>
A aplicação foi desenvolvida em <strong>Node.js</strong>, utilizando a <strong>arquitetura MSC</strong> - Model, Service, Controller -, juntamente ao banco de dados <strong>mySQL</strong> para realizar o CRUD dos produtos e vendas.

## 🛸 Principais tecnologias utilizadas: 
- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MYSQL](https://www.mysql.com/);
- [mysql2](https://www.npmjs.com/package/mysql2);
- [Docker](https://www.docker.com/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);

## ⚙ Como rodar o projeto na sua máquina

<strong>1. Faça o git clone na sua máquina e entre no diretório:</strong>
 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!
 ```
 git clone git@github.com:CarolinaKauark/Project-store-manager.git
 cd Project-store-manager
 ```
 
 <strong>2. Escolha por onde rodar a aplicação: Docker vs Local</strong>

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary> 
  </br>

  **:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  👉 <strong> 2.1 Rode os serviços `node` e `db` com o comando: </strong>
  ```
  docker-compose up -d --build
  ```

  :warning: Lembre-se de parar qualquer aplicação que estiver usando localmente na porta padrão (`3306`), seja docker ou mySQL, ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;

  - A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code;

  👉 <strong>2.2 Use o comando:</strong>
  ```
  docker exec -it blogs_api bash
  ```
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  👉 <strong>2.3 Instale as dependências dentro do container com:</strong>
  ```
  npm install
  npm run debug
  ```
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

</details>

<details>
  <summary><strong> 💻 Localmente</strong></summary> 
</br>

👉 <strong>2.1 Instale as dependências: </strong>
```
npm install
```

- **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  <br/>
 </details>
 
 ---
© Desenvolvido por [Carolina Kauark Fontes](https://www.linkedin.com/in/carolina-kauark-fontes/) 
