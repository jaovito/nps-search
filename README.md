# NPS Search

Essa é uma api onde é realizado o envio de pesquisa sobre a satisfação do usuário com a aplicação, também conhecida como NPS.

## Tecnologias utilizadas
+ NodeJs
+ TypeScript
+ Express
+ Jest
+ Yup
+ Typeorm
+ Handlebars
+ Nodemailer + Ethereal

## Instalação e start do servidor
Primeiro você precisa clonar o repositório em uma pasta de sua preferência, já dentro da pasta execute o comando:
```sh
$ git clone https://github.com/jaovito/nps.git
```

Após clonar o repósitório você precisa acessar na pasta clonada e rodar o comando:
```sh
$ npm install # ou yarn install
```

Assim que todas as bibliotecas forem instaladas é só buscar pelo arquivo .env.example e substituir seu nome por ".env" apenas, além disso deve alterar o conteúdo de URL_EMAIL_API para sua URL local, como no exemplo abaixo:

                API_EMAIL_URL=http://localhost:3333/answers
Lembrando que o endpoint da url deve ser "answers"

Com todas as dependências instaladas e as variáveis ambiente configuradas, basta rodar o seguinte comando para iniciar o servidor em desenvolvimento:
```sh
$ npm run dev # ou yarn dev
```

## Rotas de usuários

## Coleção de Usuários [/users]

### Criar um usuário para pesquisa [POST]

Você pode cadastrar um usuário para realizar a pesquisa com ele.

+ name (string) - Nome do usuário
+ email (string type email) - E-mail do usuário


+ Request (application/json)

            {
                "name": "John Doe",
                "email": "johndoe@example.com"
            }
            
            
+ Response 201 (application/json)

    + Body

                {
                    "id": "bf175178-659c-4d36-b307-59f502da47ea",
                    "name": "John Doe",
                    "email": "johndoe@example.com",
                }
                
                
## Coleção de enquetes [/surveys]

### Listar todas enquetes [GET]

+ Response 200 (application/json)

        [
          {
            "id": "e3c1e0fd-4a2e-4606-b33d-81b24f17f62c",
            "title": "Example title",
            "description": "Description example for NPS, are you liked that?",
            "created_at": "2021-02-28T00:21:23.788Z"
          }
          ...
        ]

### Criar uma nova enquete [POST]

Você pode criar uma nova enquete, colocando um título e descrição para enviar esta enquete para os usuários futuramente.

+ title (string) - Título da enquete
+ description (string) - Uma breve descrição sobre a enquete

+ Request (application/json)

            {
                "title": "Are you satisfied?",
                "description": "Are you satisfied with our application?"
            }
           
 
