const express = require("express");

const app = express();
const PORT = 3000;

let livres = [
  {id: 1, tit: "Ti prens lan", ote: "Saint-Ecmxupery"},
  {id: 2, tit: "Alchemist la", ote: "Paul Cohero" },
  { id: 3, tit: 'Kòd Da Vinci a', otè: 'Dan Brown' }
];

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

app.listen(PORT, ()=>{
  console.log(`seve ap kouri sou http://localhost:${PORT}`);
});
