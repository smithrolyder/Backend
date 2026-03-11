
const express = require("express");

const app = express();
const PORT = 3000;



app.listen(PORT, ()=>{
  console.log(`seve ap kouri sou http://localhost:${PORT}`);
});
