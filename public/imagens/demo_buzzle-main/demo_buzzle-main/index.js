const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Configura o body-parser para ler JSON e formulários
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criação das tabelas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Turma(
            tu_id INTEGER PRIMARY KEY AUTOINCREMENT,
            tu_nome VARCHAR(40) NOT NULL,
            tu_desc VARCHAR(120)
        );

        CREATE TABLE IF NOT EXISTS Prof(
            pr_id INTEGER PRIMARY KEY AUTOINCREMENT,
  	        pr_email TEXT UNIQUE NOT NULL,
  	        pr_senha TEXT NOT NULL,
        );
    `);

    console.log('Tabelas criadas com sucesso.');
});

////////////ROTAS TURMA////////////

// Cadastrar turma
app.post('/turma', (req, res) => {
    const { nome, desc } = req.body;

    if (!nome) {
        return res.status(400).send('Nome é um campo obrigatório.');
    }

    const query = `INSERT INTO Turma (tu_nome, tu_desc) VALUES (?, ?)`;
    db.run(query, [nome, desc], function (err) {
        if (err) {
            return res.status(500).send('Erro ao cadastrar turma.');
        }
        res.status(201).send({ id: this.lastID, message: 'Turma cadastrada com sucesso.' });
    });
});

// Teste para verificar se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor está rodando e tabelas criadas!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

////////////ROTAS PROF////////////

// Cadastrar prof
app.post('/prof', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).send('email e senha são campos obrigatórios.');
    }

    const query = `INSERT INTO Prof (pr_email, pr_senha) VALUES (?, ?)`;
    db.run(query, [email, senha], function (err) {
        if (err) {
            return res.status(500).send('Erro ao cadastrar conta.');
        }
        res.status(201).send({ id: this.lastID, message: 'Conta cadastrada com sucesso.' });
    });
});

// Teste para verificar se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor está rodando e tabelas criadas!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});