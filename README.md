<h1 align="center">NPS-NLW</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-configuração">Instalação e configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW&message=04&color=8257E5&labelColor=000000" alt="NLW 04" />
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/preview.png" width="100%">
</p>



## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)



## 💻 Projeto

O NPS-NLW é uma aplicação que consiste em calcular o NPS da empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS.

Esse projeto foi desenvolvido durante a trilha de NodeJS, na quarta edição da NLW. Aprendemos conceitos sobre o que é um API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail.



## 🔶 Diagrama
<img src="public/diagrama.png" alt="Diagrama da aplicação" />




## 🚀 Instalação e configuração
Primeiro você precisa clonar o repositório em uma pasta de sua preferência, já dentro da pasta execute o comando:
```sh
$ git clone https://github.com/jaovito/nps-search.git
```

Após clonar o repósitório você precisa acessar a pasta clonada e rodar o comando:
```sh
$ npm install # ou yarn install
```

Assim que todas as bibliotecas forem instaladas é só buscar pelo arquivo .env.example e substituir seu nome por ".env" apenas, além disso deve alterar o conteúdo de URL_EMAIL_API para sua URL local, como no exemplo abaixo:

                API_EMAIL_URL=http://localhost:3333/answers
                
Lembrando que o endpoint da url deve ser "answers" e que em desenvolvimento a rota e porta da api é http://localhost:3333.

Com todas as dependências instaladas e as variáveis ambiente configuradas, basta rodar o seguinte comando para iniciar o servidor em desenvolvimento:
```sh
$ npm run dev # ou yarn dev
```




## 🛣 Rotas

## Coleção de Usuários [/users]

### Criar um usuário para pesquisa [POST]

Você pode cadastrar um usuário para realizar a pesquisa com ele.

+ name (string) - Nome do usuário
+ email (string type email) - E-mail do usuário


+ Request (application/json)

```json
            {
                "name": "John Doe",
                "email": "johndoe@example.com"
            }
```
            
            
+ Response 201 (application/json)
    + Body

```json
                {
                    "id": "bf175178-659c-4d36-b307-59f502da47ea",
                    "name": "John Doe",
                    "email": "johndoe@example.com",
                }
```
               
               
               
               
                
## Coleção de enquetes [/surveys]

### Listar todas enquetes [GET]

+ Response 200 (application/json)
    + Body
    
```json
        [
          {
            "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
            "title": "Example title",
            "description": "Description example for NPS, are you liked that?",
            "created_at": "2021-02-28T00:21:23.788Z"
          }
          ...
        ]
```




### Criar uma nova enquete [POST]

Você pode criar uma nova enquete, colocando um título e descrição para enviar esta enquete para os usuários futuramente.

+ title (string) - Título da enquete
+ description (string) - Uma breve descrição sobre a enquete

+ Request (application/json)
    + Body

```json
            {
                "title": "Are you satisfied?",
                "description": "Are you satisfied with our application?"
            }
```
           
+ Response 201 (application/json)
    + Body

```json
            {
                "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
                "title": "Are you satisfied?",
                "description": "Are you satisfied with our application?"
            }
```





## Coleção de enquetes [/surveys]

### Listar todas enquetes [GET]

+ Response 200 (application/json)
    + Body
    
```json
        [
          {
            "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
            "title": "Example title",
            "description": "Description example for NPS, are you liked that?",
            "created_at": "2021-02-28T00:21:23.788Z"
          }
          ...
        ]
```



## Coleção para envio de e-mails [/sendMail]

### Envio de e-mail para usuário [POST]

Você pode através desta rota disparar o envio de e-mail, passando o survey_id para enviar a enquete ou pesquisa de satisfação do usuário.
Obs: usuário e pesquisa/enquete já devem ser criadas antes de enviar o e-mail.

+ email (string) - E-mail de um usuário
+ survey_id (string) - ID da entidade de pesquisa sobre satisfação ou enquete.

+ Request (application/json)
    + Body

```json
            {
                "email": "johndoe@example.com",
                "survey_id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c"
            }
```
           
+ Response 201 (application/json)
    + Body

```json
{
  "id": "93002b0b-c64a-442b-9326-e4e7f5496a58",
  "user_id": "0ec49d5e-373a-491e-a9e0-b2ade2ece37a",
  "survey_id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
  "value": null,
  "created_at": "2021-02-28T17:09:25.585Z",
  "user": {
    "id": "0ec49d5e-373a-491e-a9e0-b2ade2ece37a",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "created_at": "2021-02-28T02:52:24.151Z"
  },
  "survey": {
    "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
    "title": "Example title",
    "description": "Description example for NPS, are you liked that?",
    "created_at": "2021-02-28T00:21:23.788Z"
  }
}
```

## Rota para respostas do usuário [/answers/:value]

### Resposta do usuário [POST]

Essa rota é responsável pelo armazenamento da nota que usuário deu, que é disparada ao usuário clicar em uma nota no e-mail recebido

+ u (query) - ID do usuário
+ value (params) - Nota do usuário

+ Request (application/json)
    + params

                value: 8
                
    + query
                
                u: e3c1e0fd-4a2e-4606-b33d-81b24f17f62c


+ Response 201 (application/json)
    + Body

```json
{
  "id": "93002b0b-c64a-442b-9326-e4e7f5496a58",
  "user_id": "0ec49d5e-373a-491e-a9e0-b2ade2ece37a",
  "survey_id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
  "value": null,
  "created_at": "2021-02-28T17:09:25.585Z",
  "user": {
    "id": "0ec49d5e-373a-491e-a9e0-b2ade2ece37a",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "created_at": "2021-02-28T02:52:24.151Z"
  },
  "survey": {
    "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
    "title": "Example title",
    "description": "Description example for NPS, are you liked that?",
    "created_at": "2021-02-28T00:21:23.788Z"
  }
}
```


## Rota para calcular NPS [/nps/:survey_id]

### Calcular NPS [GET]

Enfim podemos calcular a NPS da nossa aplicação, essa rota é utilizada para o calculo da NPS utilizando os parametros

+ survey_id[PARAMS] (string) - ID da pesquisa/enquete
+ nota[QUERY] (array[string]) - Nota do usuário



## NPS [/nps/{survey_id}]

+ Response 201 (application/json)

  + Body


```json

{
  "detractor": 0,
  "promoters": 1,
  "passive": 0,
  "totalAnswers": 1,
  "nps": "100.00"
}

```



## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat 👋🏻 [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

