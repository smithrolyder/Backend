const express = require("express");

const app = express();
const PORT = 3000;

let livres = [
  {id: 1, tit: "Ti prens lan", ote: "Saint-Ecupery"},
  {id: 2, tit: "Alchemist la", ote: "Paul Cohero" },
  { id: 3, tit: 'Kòd Da Vinci a', otè: 'Dan Brown' }
];

let auteurs = [
  {id: 1, name: "Saint-Ecupery"},
  {id: 2, name: "Paul Cohero"},
  {id: 3, name: "Dan Brown"}
]

app.get("/livres", (req, res)=>{
  res.send(livres);
});

app.get("/livres/:id", (req, res)=>{
  const id = req.params.id;
  
  const liv = livres.find(l => l.id === Number(id));
  
  if (!liv) {
    res.status(404).send("Nou pa jwenn li sa.");
  }
  
  res.send(liv);
});

app.get("/auteurs", (req, res)=>{
  res.send(auteurs);
});
app.get("/auteurs/:id", (req, res)=>{
  const id = req.params.id;
  
  const auteur = auteurs.find(a => a.id === Number(id));
  
  if (!auteur) {
    res.status(404).send("Dezole auteur sa pa disponib.");
  }
  
  res.send(auteur);
});

app.listen(PORT, ()=>{
  console.log(`seve ap kouri sou http://localhost:${PORT}`);
});
