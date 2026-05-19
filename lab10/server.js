var http = require('http');
var mongodb = require("mongodb");
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const uri = `mongodb+srv://feispkpinheiro_db_user:wXDuuKVZyEq38w38@cluster0.51tcfen.mongodb.net/?appName=Cluster0`;
const cliente = new MongoClient(uri, { useNewUrlParser: true });

let db;
async function conectar() {
  await cliente.connect();
  db = cliente.db("lab10");
  console.log("MongoDB conectado.");
}
conectar();

// HOME
app.get('/', (req, res) => res.sendFile(__dirname + '/public/projects.html'));

// CADASTRO USUARIO
app.post('/cadastro', async (req, res) => {
  await db.collection('usuarios').insertOne({
    nome: req.body.nome,
    login: req.body.login,
    senha: req.body.senha
  });
  res.redirect('/login.html');
});

// LOGIN
app.post('/login', async (req, res) => {
  const u = await db.collection('usuarios').findOne({
    login: req.body.login,
    senha: req.body.senha
  });
  if (u) res.redirect('/listagem');
  else res.send('<h2>Credenciais inválidas</h2><a href="/login.html">Voltar</a>');
});

// LISTAGEM (READ)
app.get('/listagem', async (req, res) => {
  const carros = await db.collection('carros').find().toArray();
  res.render('listagem', { carros });
});

// GERENCIA (READ)
app.get('/gerencia', async (req, res) => {
  const carros = await db.collection('carros').find().toArray();
  res.render('gerencia', { carros });
});

// CREATE
app.post('/carro/novo', async (req, res) => {
  await db.collection('carros').insertOne({
    marca: req.body.marca,
    modelo: req.body.modelo,
    ano: parseInt(req.body.ano),
    qtde_disponivel: parseInt(req.body.qtde_disponivel)
  });
  res.redirect('/gerencia');
});

// UPDATE
app.post('/carro/atualizar/:id', async (req, res) => {
  await db.collection('carros').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: parseInt(req.body.ano),
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    }}
  );
  res.redirect('/gerencia');
});

// DELETE
app.post('/carro/remover/:id', async (req, res) => {
  await db.collection('carros').deleteOne({ _id: new ObjectId(req.params.id) });
  res.redirect('/gerencia');
});

// VENDER (decrementa)
app.post('/carro/vender/:id', async (req, res) => {
  const carro = await db.collection('carros').findOne({ _id: new ObjectId(req.params.id) });
  if (carro && carro.qtde_disponivel > 0) {
    await db.collection('carros').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $inc: { qtde_disponivel: -1 } }
    );
  }
  res.redirect('/gerencia');
});

var server = http.createServer(app);
server.listen(80);
console.log("Servidor rodando na porta 80...");