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
  console.log(`ID yo mande ${id}`);
  
  res.send(`Ou mande liv nimewo ${id}`);
});

app.listen(PORT, ()=>{
  console.log(`seve ap kouri sou http://localhost:${PORT}`);
});
