const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Caminho do banco na pasta /data
const dbPath = path.join(__dirname, "../data/banco_call_center.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err.message);
  } else {
    console.log("Banco conectado em", dbPath);
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT senha FROM cadastros_sistema WHERE email = ?",
    [username],
    (err, user) => {
      if (err) return res.status(500).json({ error: "Erro no servidor" });
      if (!user)
        return res.status(401).json({ error: "Usuário não encontrado" });

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid)
        return res.status(401).json({ error: "Senha incorreta" });

      return res.json({ message: "Login bem-sucedido!" });
    }
  );
});
