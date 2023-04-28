##package.json vc pode alteraros dados com informações pessoais como autor, descrição e outros.

## adicionando o express
Nessa aula aprenderemos como instalar o Express em nosso projeto, o Express é um framework utilizado para lidar com requisições HTTP.
use no terminal: npm install express
 
## node_modules:
Nessa aula entenderemos para que serve a pasta node_modules o que tem dentro dela e como evitar para que ela seja enviada para um repositório na nuvem.
use no terminal: - npm install ela serve para restaurar a pasta node_modules caso seja deletado

## utilizando o express
fazer as configurações iniciais do Express em nosso projeto.

## Executando a aplicação
executaremos o Express em nosso projeto e como automatizar a execução do Express.
no package.json vc vai em scipt e apaga o test e cria um novo script "start": "node ./src/serve.js". Agora temos um script personalizado de inicialização executando no teminal - npm start 



## metodo Get
metodo get: metodo para fazer leitura usamos app.get('/',() =>) usando o arrown function 

request: a requisição que foi feita 

responde: usada para fazer a resposta (devolve a msg para quem solicitou)


## Route Params
* é uma estrategia que conseguimos passar um determinado valor como paramentro ("/message/:id/:user") 
* quando o usamos o : antes  ele identifica como parametro
* os params são utilizados para dados simples
* temos que usar com todos os paramentros

## Query Params
* apartir da ? é query params
* caso queira passar outro query params vc usa &
*podemos usar parametro por parametro

## Nodemon
*npm install nodemon --save-dev
*uma dependência de desenvolvimento chamada Nodemon. Dessa forma, não precisaremos ficar reiniciando o nosso servidor manualmente sempre que houver uma alteração.
*Acrescenta um novo script "dev": "nodemon ./src/serve" no package.json
*pra rodar a aplicação node run dev

## npm install express-async-errors --save

## Conectando com o bando de dados SQL 
*configuração inicial para que nosso projeto consiga se comunicar com o banco de dados SQLite.
*npm install sqlite3 sqlite --save

## SGBD
*Instalaremos a ferramenta Beekeper Studio para que consigamos visualizar e executar funções em nosso banco da dados.
*Importante: recentemente o Beekeeper Studio deixou sua versão gratuita disponível apenas no GitHub do projeto. 


## Alter - beekeeper
Alterar nome da tabela:
ALTER TABLE users 
RENAME TO clients

Adicionando coluna status:
ALTER TABLE users 
ADD status VARCHAR

Renomeando coluna status :
ALTER TABLE users 
RENAME COLUMN status to active

Deletando coluna status:
ALTER TABLE users 
DROP COLUMN status

## Manipulando dados:
Inserindo dados na tabela users
INSERT INTO users
(name, email, password)
VALUES
('birobirobiro', 'birobirobiro@email.com', '123');

Buscando registros na tabela users:
SELECT * FROM users;

Atualizando registros:
UPDATE users SET
avatar = 'birobirobiro.png'
WHERE id = 1

Deletando registros:
DELETE FROM users 
WHERE id = 3

## Criptografando Senha do usuario 
instale > npm install bcryptjs --save


## Query Builder
instalação do knex - npm install knex --save
cria o arquivo knexfile.js - npx knex init 
para criar o migrations de notas da pasta knex - npx knex migrate:make createNotes
para rodar o knex migrate no terminal beekeeper - npx knex migrate:latest
para rodar com migrate no package.json - npm run migrate

## npm X npx
Nessa aula entenderemos a diferença entre usar o NPM e o NPX. Basicamente o NPM é utilizado para instalar pacotes, enquanto o NPX é utilizado para executar pacotes.

## MIGRATIONS pata link e tag
criar migrations - npx knex migrate:make createNotes
                   npx knex migrate:make createTags
                   npx knex migrate:make createLinks
para atualizar - npm run migrate








const { response, request } = require('express');

const express = require('express');                             //importa o express. Pegando a funcionalidade da pasta express e colocando dentro do const express

const app = express();                                         // aqui eu inicializo o express para poder usar o express 

app.get("/message/:id/:user", (request, response) => { //metodo get
    const{ id, user } = request.params

    response.send(`
MensagemID: ${id}.
Para o usuário: ${user}.
`);

});

app.get('/users', (request, response)=> {
    const {page, limit} = request.query;

    response.send(`Pagina: ${page}. Mostrar: ${limit}`);
});

const PORT = 3333;                                                    // escolhemos o numero da porta para que a API vai ficar vendo a resposta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

