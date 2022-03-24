require("dotenv").config();
const express = require("express");
const path = require("path");
const mongobongo = require('./db.js');

const app = express();
app.use(express.json());

let PORT = process.env.PORT || 3000;

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/glossary', (req, res) => {
  mongobongo.save(req.body)
    .then(() => res.status(201).send())
    .catch(err => console.log(err))
})

app.get('/glossary', (req, res) => {
  mongobongo.getAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.get('/glossary/search', (req, res) => {
  mongobongo.search(req.query.query)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.patch('/glossary', (req, res) => {
  mongobongo.update(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.delete('/glossary', (req, res) => {
  mongobongo.delete(req.body.query)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);