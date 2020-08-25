const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http//localhost:8081"
};
const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        unseUnifiedTopology: true
    })
    .then(() => {
        console.log("Banco conectado");
    })
    .catch(err => {
        console.log("Erro ao conectar ao database", err);
        process.exit();

    });

app.use(cors(corsOptions));
// analisa solicitações do tipo json
app.use(bodyParser.json());
// analisa solicitações do tipo { x-www-form-urlencoded } 
app.use(bodyParser.urlencoded({ extended: true }));
// rotas 
app.get("/", (req, res) => {
    res.json({ message: "Bem vindo" })
});
// escuta a porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})