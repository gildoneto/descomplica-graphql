<h1 align="center">
	<img src="https://camo.githubusercontent.com/4f83b4c2b667216dbd8102ee8068831644ce6ed037016e182ddf1179f08953a9/68747470733a2f2f7777772e7265696e6465782e696f2f626c6f672f6275696c64696e672d612d6772617068716c2d7365727665722d776974682d6e6f64652d6a732d616e642d73716c2f4772617068514c5f4e6f64654a532e706e67"  alt="Logo"  width="240"><br><br>
    Título do seu Projeto / Title of your Project
</h1>

<div>
    <p align="center">
        <a href="#">
            <img src="https://img.shields.io/static/v1?label=Language&message=Javascript&color=yellow&style=for-the-badge&logo=JavaScript" alt="Language: Javascript">
        </a>
        <br>
        <a href="#">
        <img src="https://img.shields.io/static/v1?label=Language&message=Typescript&color=blue&style=for-the-badge&logo=Typescript" alt="Language: Typescript">
    </a>
    </p>
</div>

## Tabela de Conteúdo

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#features">Features</a> •
 <a href="#Instalação">Instalação</a> • 
 <a href="#getting-started">Get Started</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
</p>

## 📌Sobre

<div>
    <p align="center">
        Construção de API em NodeJS GraphQL com BD em MySQL.
    </p>
</div>

## 🚀Features

- Criação de aluno
- Select de Aluno específico
- Select de todos os alunos
- Update de Aluno [EM BREVE]
- Delete de Aluno [EM BREVE]

## 📕Instalação

**O que já precisa ter instalado na máquina:**
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [MySQL](https://dev.mysql.com/downloads/)

**Recomendações**
-   É recomendado que você tenha instalado um navegador Google Chrome or Edge
-   É recomendado usar o VSCode como IDE de desenvolvimento

**Vamos dividir em etapas:**
1. Clone esse repositório
2. Instale as dependências
3. Inicialize o BackEnd
  ---
### 1. Clone this repository
```
git clone https://github.com/gildoneto/descomplica-graphql
```
---
### 2. Instale as dependências
```
npm install
```
ou
```
yarn
```

*Verifique se sua conexão está estável, o download pode demorar um pouco* 

### 3. Inicializando o projeto

Crie na instância local do ***MySQL Workbench*** um schema com o nome *graphql*, e certifique-se a senha e usuario seja o padrão. user: "root" password: "root"

Se você tem o ***Docker*** instalado corretamente

## 🎮Getting Started

1. No arquivo `src/config/database.js` descomente o trecho entre a linha 4 e 8 para subir aplicação já com um usuário.

2. Se você conseguiu configurar o docker

3. No CLI digite os comandos abaixo para instalar o knex globalmente, os outros pacotes, criar a tabela de alunos e depois rodar o projeto via Docker
```
npm install -g knex
knex migrate:latest
npm install
docker-compose up
```
4. Agora, abra o browser e navegue para: http://localhost:4000/api

5. Se não conseguiu configurar o Docker na máquina não tem problema

6. No CLI digite os comandos abaixo para instalar o knex globalmente, os outros pacotes, criar a tabela de alunos e depois rodar o projeto sem Docker
```
npm install -g knex
knex migrate:latest
npm install
npm start
```
7. Agora, abra o browser e navegue para: http://localhost:4000/api

8. Teste o Read e o Create de aluno no GraphiQL. Exemplo:
```javascript
//Listando todos os alunos com todos os campos
{
  getAlunos{
    id nome cpf email
  }
}
// Listando um aluno especifico trazendo só id e nome
{
  getAluno(id:1){
    id nome
  }
}
// Adicionando um novo aluno e retornando apenas o id
mutation {
	createAluno(input: {
  	nome: "Ronaldo Santiago"
    email: "ronaldo.santiago@descomplica.com.br"
    cpf: "04765496784"
  }){
    id
  }
}
```

## 🌐Tecnologias

- [Grahql](https://graphql.org/)
- [NodeJS](https://nodejs.org/en/)
- [Knex](https://knexjs.org/)
- [Express]()


##  Links Úteis

<p align="center">
    <em>
        Vou deixar alguns links que podem ser úteis para você criar os ReadMes dos seus projetos:<br>
        I'll leave some links that might be useful for you to create the ReadMes of your projects:<br>
    </em>
</p>

- [Shields.io](https://shields.io/) | Para criar as Badges 
- [StackEdit](https://stackedit.io/app#) | Para ajudar a criar os ReadMe
- [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/) | Guia de Markdown