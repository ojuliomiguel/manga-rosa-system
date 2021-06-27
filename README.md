# Manga Rosa System API

## Setup da aplicação

### Instalação

> É importante ter a priori o banco de dados mysql instalado na máquina

#### Configurações do banco estão no arquivo ormconfig.json

```json
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "mangadb",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
}
```

```bash
$ npm install
```

### Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Endpoints

Endpoint base `http://localhost:7000`

###### `POST` -> `http://localhost:7000/conhecimentos/registrar`
Corpo da requisição deve seguir o formato abaixo:

```json
{
	"nome": "Ruby"
}
```
###### `GET` -> `http://localhost:7000/conhecimentos/registros`
Lista todos registros de conhecimentos

```json
[
  {
    "id": 10,
    "nome": "Banco de Dados"
  },
  {
    "id": 9,
    "nome": "DevOps"
  },
  {
    "id": 5,
    "nome": "Git"
  },
  {
    "id": 8,
    "nome": "NodeJS"
  },
  {
    "id": 7,
    "nome": "PHP"
  },
  {
    "id": 6,
    "nome": "React"
  },
  {
    "id": 11,
    "nome": "TypeScript"
  }
]
```

###### `POST` -> `http://localhost:7000/colaboradores/registrar`
Corpo da requisição deve seguir o formato abaixo:

```json
{
	"nome": "Antonio José Trindade",
	"email": "antoniojose@gmail.com",
	"cpf": "111.111.111-00",
	"celular": "(82) 99999-9999",
	"validado": true,
	"idsConhecimentos": [8,9,11]
}
```

###### `GET` -> `http://localhost:7000/colaboradores/registros`
Lista todos registros de colaboradores

```json
[
  {
    "id": 26,
    "nome": "Antonio Jose",
    "email": "antonio@gmail.com",
    "cpf": "111.111.000-01",
    "celular": "(82) 99934-6313",
    "validado": false,
    "conhecimentos": [
      {
        "id": 5,
        "nome": "Git"
      },
      {
        "id": 6,
        "nome": "React"
      },
      {
        "id": 9,
        "nome": "DevOps"
      }
    ]
  },
  {
    "id": 28,
    "nome": "Arlindo Melo",
    "email": "lindo@gmail.com",
    "cpf": "111.111.000-03",
    "celular": "(82) 98834-2901",
    "validado": false,
    "conhecimentos": [
      {
        "id": 5,
        "nome": "Git"
      },
      {
        "id": 8,
        "nome": "NodeJS"
      },
      {
        "id": 11,
        "nome": "TypeScript"
      }
    ]
  },
  {
    "id": 27,
    "nome": "Joseilton Santos",
    "email": "josa@gmail.com",
    "cpf": "111.111.000-02",
    "celular": "(82) 98834-9901",
    "validado": false,
    "conhecimentos": [
      {
        "id": 5,
        "nome": "Git"
      },
      {
        "id": 8,
        "nome": "NodeJS"
      },
      {
        "id": 11,
        "nome": "TypeScript"
      }
    ]
  },
  {
    "id": 30,
    "nome": "Pedro Jose",
    "email": "pedro@gmail.com",
    "cpf": "111.111.000-04",
    "celular": "(82) 98834-0128",
    "validado": false,
    "conhecimentos": [
      {
        "id": 5,
        "nome": "Git"
      },
      {
        "id": 8,
        "nome": "NodeJS"
      }
    ]
  }
]
````