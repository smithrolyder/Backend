const express = require("express");

const app = express();
const PORT = 3000;

let livres = [
  {id: 1, tit: "Ti prens lan", ote: "Saint-Ecmxupery"},
  {id: 2, tit: "Alchemist la", ote: "Paul Cohero" }
];

app.get("/livres", (req, res)=>{
  res.send(livres);
});

app.post("/livres", (req, res)=>{
  res.send("yon nouvo liv ajoute");
});

app.put("/livres", (req, res)=>{
  res.send("liv modifye");
});

app.delete("/livres", (req, res)=>{
  res.send("liv efase");
})

app.listen(PORT, ()=>{
  console.log(`seve ap kouri sou http://localhost:${PORT}`);
});
