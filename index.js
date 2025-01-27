//rest api primeiro sem express ( conexão com internet, depois com)

const app = require("./src/app/app")

app.get("/",(req,res)=>{
    res.send("Hello Node.Js!")
})
app.listen(3000,()=>console.log("Está rodando na porta fixa 3000"))