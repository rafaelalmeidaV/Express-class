const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/:nome/:dev", (req, res) =>{

    var nome = req.params.nome
    var dev = req.params.dev
    var exibirMsg = true
    
    var produtos = 
    [
        {nome: "Mouse", preco: 150},
        {nome: "Teclado", preco: 300},
        {nome: "Monitor", preco: 1900},
    ]

    res.render("../pages/index",{
        nome:nome,
        dev:dev,
        company: "UNIFAE",
        salary: 10000,
        msg: exibirMsg,
        produtos: produtos
    })
})

app.listen("8000", ()=>{
    console.log("Iniciou")
})
