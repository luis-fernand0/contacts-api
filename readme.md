# 📇 Contacts API

API REST simples para cadastro, listagem, atualização e remoção de contatos, desenvolvida com **Node.js**, **Express** e **MySQL**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- mysql2
- dotenv

---

## 📁 Estrutura do projeto
``` bash
src/
├── app.js
├── routes/
├── controllers/
├── config/
└── utils/
```

---
## ⚙️ Configuração do ambiente

Crie um arquivo **.env** na raiz do projeto e configure:
``` bash
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB=
```
Assim como no .env.example

---

## 🗄️ Banco de dados

Banco: **contatos_db**  
Tabela: **contatos**

Exemplo de estrutura do banco:

```sql
CREATE DATABASE contatos_db;

USE contatos_db;

CREATE TABLE contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## ▶️ Como executar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/luis-fernand0/contacts-api.git
```

2. Acesse a pasta do projeto:
```bash
cd contacts-api
```

3. Instale as dependências:
```bash
npm install
```

4. Configure o seu .env

5. Inicie a aplicação
```bash
node src/app.js
```

## 📌 Endpoints

### 📄 Listar contatos
**GET** `/contatos`

Resposta de sucesso:

```json
"contatos": [
    {
        "id": 1,
        "nome": "Lucas Santos",
        "telefone": "67999999999",
        "created_at": "2026-01-21T01:34:13.000Z"
    }
]
```

Possíveis erros:

500 → Erro no servidor

### ➕ Criar contato
**POST** `/contatos`

Body (JSON):

```json
{
  "nome": "Lucas Santos",
  "telefone": "67999999999"
}
```

Resposta de sucesso:

```json
{
  "id": 1,
  "nome": "Lucas Santos",
  "telefone": "67999999999"
}
```

Possíveis erros:

- 400 → Dados inválidos
- 500 → Erro no servidor

### ✏️ Atualizar contato
**PATCH** `/contatos/:id`

Exemplo:
```bash
http://localhost:3000/contatos/1
```

Body (JSON):

```json
{
  "nome": "Lucas Santos",
  "telefone": "67999999999"
}
```

Resposta de sucesso:

```json
{
  "id": 1,
  "nome": "Lucas Santos",
  "telefone": "67999999999"
}
```

Possíveis erros:

- 400 → Dados inválidos
- 404 → Contato não encontrado
- 500 → Erro no servidor

### 🗑️ Deletar contato
**DELETE** `/contatos/:id`

Exemplo:
```bash
http://localhost:3000/contatos/1
```

Resposta:

- 204 → No Content (sem corpo de resposta)

Possíveis erros:

- 400 → ID inválido
- 404 → Contato não encontrado
- 500 → Erro no servidor

## ✅ Regras de validação

- O nome deve conter no mínimo 2 palavras com pelo menos 3 letras cada.
- O telefone deve ser válido conforme regra da aplicação.
- O ID deve ser numérico.