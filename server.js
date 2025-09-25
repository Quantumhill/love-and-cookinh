const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static("public")); // 👉 Express buscará index.html aquí

http.listen(3000, () => {
  console.log("Servidor corriendo en con http://localhost:3000");
});
